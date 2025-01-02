import BN from "bn.js";
import { Contract } from "near-api-js";
import { getBurrow } from "../../utils";
import { ChangeMethodsLogic, ChangeMethodsOracle } from "../../interfaces";
import { Transaction, isRegistered } from "../wallet";
import { prepareAndExecuteTransactions, getTokenContract } from "../tokens";
import getConfig from "../../api/get-config";
import getMemeConfig from "../../api/get-config-meme";
import { store } from "../../redux/store";
import { registerAccountOnToken } from "../helper";

export async function closePosition({
  pos_id,
  token_p_id,
  token_p_amount,
  token_d_id,
  min_token_d_amount,
  swap_indication,
  isLong,
  isMeme,
}: {
  pos_id: string;
  token_p_id: string;
  token_p_amount: string;
  token_d_id: string;
  min_token_d_amount: string;
  swap_indication: any;
  isLong?: boolean;
  isMeme?: boolean;
}) {
  const { logicContract, oracleContract, memeOracleContract, logicMEMEContract } =
    await getBurrow();
  let enable_pyth_oracle;
  let priceOracleContract;
  if (isMeme) {
    enable_pyth_oracle = (await getMemeConfig()).enable_pyth_oracle;
    priceOracleContract = memeOracleContract.contractId;
  } else {
    enable_pyth_oracle = (await getConfig()).enable_pyth_oracle;
    priceOracleContract = oracleContract.contractId;
  }
  const transactions: Transaction[] = [];
  const closeActionsTemplate = {
    actions: [
      {
        CloseMTPosition: {
          pos_id,
          token_p_amount,
          min_token_d_amount,
          swap_indication,
        },
      },
    ],
  };
  const logicContractId = isMeme ? logicMEMEContract.contractId : logicContract.contractId;
  transactions.push({
    receiverId: enable_pyth_oracle ? logicContractId : priceOracleContract,
    functionCalls: [
      {
        methodName: enable_pyth_oracle
          ? ChangeMethodsLogic[ChangeMethodsLogic.margin_execute_with_pyth]
          : ChangeMethodsOracle[ChangeMethodsOracle.oracle_call],
        args: {
          ...(enable_pyth_oracle
            ? closeActionsTemplate
            : {
                receiver_id: logicContractId,
                msg: JSON.stringify({
                  MarginExecute: closeActionsTemplate,
                }),
              }),
        },
        gas: new BN("300000000000000"),
      },
    ],
  });
  const cWithDrawActionsTemplate = {
    actions: [
      {
        Withdraw: {
          token_id: token_p_id,
        },
      },
    ],
  };
  const dWithDrawActionsTemplate = {
    actions: [
      {
        Withdraw: {
          token_id: token_d_id,
        },
      },
    ],
  };
  const accountId = store.getState().account.accountId;
  if (!isLong) {
    const registered_p = await isRegistered(accountId, token_p_id);
    if (registered_p == null) {
      const storageDeposit = await registerAccountOnToken(accountId, token_p_id);
      transactions.unshift(storageDeposit);
    }
    transactions.push({
      receiverId: enable_pyth_oracle ? logicContractId : priceOracleContract,
      functionCalls: [
        {
          methodName: enable_pyth_oracle
            ? ChangeMethodsLogic[ChangeMethodsLogic.margin_execute_with_pyth]
            : ChangeMethodsOracle[ChangeMethodsOracle.oracle_call],
          args: {
            ...(enable_pyth_oracle
              ? cWithDrawActionsTemplate
              : {
                  receiver_id: logicContractId,
                  msg: JSON.stringify({
                    MarginExecute: cWithDrawActionsTemplate,
                  }),
                }),
          },
          gas: new BN("300000000000000"),
        },
      ],
    });
  }
  const registered_d = await isRegistered(accountId, token_d_id);
  if (registered_d == null) {
    const storageDeposit = await registerAccountOnToken(accountId, token_d_id);
    transactions.push(storageDeposit);
  }

  transactions.push({
    receiverId: enable_pyth_oracle ? logicContractId : priceOracleContract,
    functionCalls: [
      {
        methodName: enable_pyth_oracle
          ? ChangeMethodsLogic[ChangeMethodsLogic.margin_execute_with_pyth]
          : ChangeMethodsOracle[ChangeMethodsOracle.oracle_call],
        args: {
          ...(enable_pyth_oracle
            ? dWithDrawActionsTemplate
            : {
                receiver_id: logicContractId,
                msg: JSON.stringify({
                  MarginExecute: dWithDrawActionsTemplate,
                }),
              }),
        },
        gas: new BN("300000000000000"),
      },
    ],
  });
  const result = await prepareAndExecuteTransactions(transactions);
  // await prepareAndExecuteTransactions(transactions);
  return result;
}
