import { useRouter } from "next/router";
import Decimal from "decimal.js";
import { LayoutBox } from "../../components/LayoutContainer/LayoutContainer";
import { ArrowLeft } from "./svg";
import { useAccountId, useAvailableAssets, usePortfolioAssets } from "../../hooks/hooks";
import {
  toInternationalCurrencySystem_number,
  toInternationalCurrencySystem_usd,
  format_apy,
  formatWithCommas_number,
  formatWithCommas_usd,
} from "../../utils/uiNumber";
import { UIAsset } from "../../interfaces";
import { YellowSolidButton, RedSolidButton, YellowLineButton, RedLineButton } from "./button";
import { useDepositAPY, useUserDepositAPY } from "../../hooks/useDepositAPY";
import { getAssetDataByTokenId } from "../../redux/appSelectors";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useUserBalance } from "../../hooks/useUserBalance";
import { NEAR_STORAGE_DEPOSIT } from "../../store";
import { showModal } from "../../redux/appSlice";
import { shrinkToken } from "../../store/helper";

const TokenDetail = () => {
  const router = useRouter();
  const rows = useAvailableAssets();
  const { id } = router.query;
  const tokenRow = rows.find((row: UIAsset) => {
    return row.tokenId === id;
  });
  if (!tokenRow) return null;
  return <TokenDetailView tokenRow={tokenRow} />;
};
function TokenDetailView({ tokenRow }: { tokenRow: UIAsset }) {
  const router = useRouter();
  const depositAPY = useDepositAPY({
    baseAPY: tokenRow.supplyApy,
    rewardList: tokenRow.depositRewards,
    tokenId: tokenRow.tokenId,
  });
  const [suppliedRows, borrowedRows] = usePortfolioAssets() as [any[], any[]];
  const supplied = suppliedRows?.find((row) => {
    return row.tokenId === tokenRow.tokenId;
  });
  const borrowed = borrowedRows?.find((row) => {
    return row.tokenId === tokenRow.tokenId;
  });
  return (
    <LayoutBox>
      <div
        className="inline-flex items-center cursor-pointer mb-8"
        onClick={() => {
          router.push("/markets");
        }}
      >
        <ArrowLeft />
        <span className="text-sm text-gray-300 ml-3">Burrow Markets</span>
      </div>
      <div className="grid grid-cols-3/5 gap-x-6">
        <div>
          <TokenOverview tokenRow={tokenRow} depositAPY={depositAPY} />
          <TokenSupplyChart tokenRow={tokenRow} depositAPY={depositAPY} />
          {tokenRow.can_borrow && (
            <>
              <TokenBorrowChart tokenRow={tokenRow} />
              <TokenRateModeChart tokenRow={tokenRow} />
            </>
          )}
        </div>
        <div>
          <TokenUserInfo tokenRow={tokenRow} />
          <YouSupplied tokenRow={tokenRow} supplied={supplied} />
          <UserBox>hello</UserBox>
        </div>
      </div>
    </LayoutBox>
  );
}
function TokenOverview({ tokenRow, depositAPY }: { tokenRow: UIAsset; depositAPY: any }) {
  return (
    <Box className="mb-7 pr-20">
      <div className="flex items-center">
        <img src={tokenRow?.icon} className="w-9 h-9 rounded-full" alt="" />
        <span className="ml-3 text-[26px] text-white font-bold">{tokenRow?.symbol}</span>
      </div>
      <div className="flex items-stretch justify-between mt-6">
        <div className="flex flex-col w-1/3">
          <span className="text-sm text-gray-300">Supply Cap/APY</span>
          <div className="flex items-center">
            <span className="text-[26px] text-white font-bold">
              {toInternationalCurrencySystem_number(tokenRow?.totalSupply)}
            </span>
            <span className="text-sm text-white ml-1 relative top-0.5">
              /{format_apy(depositAPY)}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <span className="text-sm text-gray-300">Borrow Cap/APY</span>
          <div className="flex items-center">
            <span className="text-[26px] text-white font-bold">
              {toInternationalCurrencySystem_number(
                !tokenRow?.can_borrow ? "" : tokenRow?.totalBorrowed,
              )}
            </span>
            <span className="text-sm text-white ml-1 relative top-0.5">
              /{format_apy(!tokenRow?.can_borrow ? "" : tokenRow?.borrowApy)}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <span className="text-sm text-gray-300">Available Liquidity</span>
          <div className="flex items-center">
            <span className="text-[26px] text-white font-bold">
              {toInternationalCurrencySystem_number(tokenRow?.availableLiquidity)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-stretch justify-between mt-7">
        <div className="flex flex-col w-1/3">
          <span className="text-sm text-gray-300">Price</span>
          <div className="flex items-center">
            <span className="text-lg text-white font-bold">${tokenRow?.price}</span>
          </div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <span className="text-sm text-gray-300"># of suppliers</span>
          <div className="flex items-center">
            <span className="text-lg text-white font-bold">-</span>
          </div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <span className="text-sm text-gray-300"># of borrowers</span>
          <div className="flex items-center">
            <span className="text-lg text-white font-bold">
              {!tokenRow?.can_borrow ? "-" : "-"}
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
}
function TokenSupplyChart({ tokenRow, depositAPY }: { tokenRow: UIAsset; depositAPY: any }) {
  return (
    <Box className="mb-1.5">
      <div className="font-bold text-lg text-white mb-5">Supply Info</div>
      <div className="flex items-stretch">
        <div className="flex flex-col">
          <span className="text-sm text-gray-300">Total Supply</span>
          <div className="flex items-center">
            <span className="font-bold text-lg text-white">
              {toInternationalCurrencySystem_number(tokenRow?.totalSupply)}
            </span>
            <span className="text-xs text-gray-300 relative top-0.5 ml-1.5">
              {toInternationalCurrencySystem_usd(tokenRow?.totalSupplyMoney)}
            </span>
          </div>
        </div>
        <div className="flex flex-col ml-10">
          <span className="text-sm text-gray-300">APY</span>
          <span className="font-bold text-lg text-white">{format_apy(depositAPY)}</span>
        </div>
      </div>
      <div className="flex items-center justify-center h-[300px]">
        <span className="text-sm text-gray-300">Suppling chart is coming soon</span>
      </div>
    </Box>
  );
}
function TokenBorrowChart({ tokenRow }: { tokenRow: UIAsset }) {
  return (
    <Box className="mb-1.5">
      <div className="font-bold text-lg text-white mb-5">Borrow Info</div>
      <div className="flex items-stretch">
        <div className="flex flex-col">
          <span className="text-sm text-gray-300">Total Borrow</span>
          <div className="flex items-center">
            <span className="font-bold text-lg text-white">
              {toInternationalCurrencySystem_number(tokenRow?.totalBorrowed)}
            </span>
            <span className="text-xs text-gray-300 relative top-0.5 ml-1.5">
              {toInternationalCurrencySystem_usd(tokenRow?.totalBorrowedMoney)}
            </span>
          </div>
        </div>
        <div className="flex flex-col ml-10">
          <span className="text-sm text-gray-300">APY</span>
          <span className="font-bold text-lg text-white">{format_apy(tokenRow?.borrowApy)}</span>
        </div>
      </div>
      <div className="flex items-center justify-center h-[300px]">
        <span className="text-sm text-gray-300">Borrowing chart is coming soon</span>
      </div>
    </Box>
  );
}
function TokenRateModeChart({ tokenRow }: { tokenRow: UIAsset }) {
  return (
    <Box className="mb-1.5">
      <div className="font-bold text-lg text-white mb-5">Interest Rate Mode</div>
      <div className="flex items-center justify-center h-[300px]">
        <span className="text-sm text-gray-300">Interest Rate Mode chart is coming soon</span>
      </div>
    </Box>
  );
}
function TokenUserInfo({ tokenRow }: { tokenRow: UIAsset }) {
  const dispatch = useAppDispatch();
  const { tokenId } = tokenRow;
  const accountId = useAccountId();
  const isWrappedNear = tokenRow.symbol === "NEAR";
  const { supplyBalance, borrowBalance } = useUserBalance(tokenId, isWrappedNear);
  function handleSupplyClick() {
    dispatch(showModal({ action: "Supply", tokenId, amount: 0 }));
  }
  function handleBorrowClick() {
    dispatch(showModal({ action: "Borrow", tokenId, amount: 0 }));
  }
  return (
    <UserBox className="mb-7">
      <span className="text-lg text-white font-bold">Your Info</span>
      <div className="flex items-center justify-between my-[25px]">
        <span className="text-sm text-gray-300">Available to Supply</span>
        <div className="flex items-center]">
          <span className="text-sm text-white mr-2.5">
            {formatWithCommas_number(supplyBalance)}
          </span>
          <img src={tokenRow?.icon} className="w-5 h-5 rounded-full" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">Available to Borrow</span>
        <div className="flex items-center]">
          <span className="text-sm text-white mr-2.5">
            {formatWithCommas_number(borrowBalance)}
          </span>
          <img src={tokenRow?.icon} className="w-5 h-5 rounded-full" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-[35px]">
        {accountId ? (
          <>
            <YellowSolidButton
              disabled={!+supplyBalance}
              className="w-1 flex-grow"
              onClick={handleSupplyClick}
            >
              Supply
            </YellowSolidButton>
            <RedSolidButton
              disabled={!+borrowBalance}
              className="w-1 flex-grow"
              onClick={handleBorrowClick}
            >
              Borrow
            </RedSolidButton>
          </>
        ) : (
          <YellowSolidButton
            className="w-full"
            onClick={() => {
              window.modal.show();
            }}
          >
            Connect Wallet
          </YellowSolidButton>
        )}
      </div>
    </UserBox>
  );
}
function YouSupplied({ tokenRow, supplied }: { tokenRow: UIAsset; supplied: any }) {
  const userDepositAPY = useUserDepositAPY({
    baseAPY: tokenRow.supplyApy,
    rewardList: tokenRow.depositRewards,
    tokenId: tokenRow.tokenId,
  });
  const [icons, totalDailyRewardsMoney] = supplied?.rewards?.reduce(
    (acc, cur) => {
      const { rewards, metadata, config } = cur;
      const { icon, decimals } = metadata;
      const dailyRewards = Number(
        shrinkToken(rewards.reward_per_day || 0, decimals + config.extra_decimals),
      );
      const price = supplied.price || 0;
      acc[1] = new Decimal(acc[1]).plus(dailyRewards * price).toNumber();
      acc[0].push(icon);
      return acc;
    },
    [[], 0],
  ) || [[], 0];
  const RewardsReactNode = supplied?.rewards?.length ? (
    <div className="flex items-center">
      {icons.map((icon, index) => {
        return <img key={index} src={icon} className="w-4 h-4 rounded-full -ml-0.5" alt="" />;
      })}
      <span className="ml-2">{formatWithCommas_usd(totalDailyRewardsMoney)}</span>
    </div>
  ) : (
    "-"
  );
  // console.log('999999999-supplied', supplied);
  return (
    <UserBox className="mb-2.5">
      <div className="flex items-start justify-between border-b border-dark-50 pb-2.5 -mx-5 px-5">
        <span className="text-lg text-white font-bold">You Supplied</span>
        <div className="flex flex-col items-end">
          <span className="text-lg text-white font-bold">
            {formatWithCommas_number(supplied?.supplied)}
          </span>
          <span className="text-xs text-gray-300">
            {supplied
              ? formatWithCommas_usd(
                  new Decimal(supplied?.supplied || 0).mul(supplied?.price || 0).toFixed(),
                )
              : "-"}
          </span>
        </div>
      </div>
      <Label title="APY" content={format_apy(userDepositAPY)} />
      <Label title="Rewards" content={RewardsReactNode} />
      <Label title="Collateral" content={formatWithCommas_number(supplied?.collateral)} />
      <div className="flex items-center justify-between gap-2 mt-[35px]">
        <YellowLineButton
          // disabled={!+supplyBalance}
          className="w-1 flex-grow"
          // onClick={handleSupplyClick}
        >
          Withdraw
        </YellowLineButton>
        <YellowSolidButton
          // disabled={!+borrowBalance}
          className="w-1 flex-grow"
          // onClick={handleBorrowClick}
        >
          Adjust
        </YellowSolidButton>
      </div>
    </UserBox>
  );
}
function Box({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-7 py-5 border border-dark-50 rounded-md bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}
function UserBox({
  children,
  className = "",
}: {
  children: string | React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-5 border border-dark-50 rounded-md bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}
function Label({ title, content }: { title: string; content: string | React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-gray-300">{title}</span>
      <div className="flex items-center text-sm text-white">{content}</div>
    </div>
  );
}
export default TokenDetail;