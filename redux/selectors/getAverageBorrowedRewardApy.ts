import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { shrinkToken } from "../../store";
import { Farm } from "../accountState";
import { filterAccountSentOutFarms } from "../../utils/index";

export const getAverageBorrowedRewardApy = () =>
  createSelector(
    (state: RootState) => state.assets,
    (state: RootState) => state.account,
    (assets, account) => {
      const { borrowed, farms } = account.portfolio;
      const borrowFarms = farms.borrowed || {};
      const [dailyTotalBorrowProfit, totalBorrow] = Object.entries(borrowFarms)
        .map(([tokenId, farm]: [string, Farm]) => {
          const asset = assets.data[tokenId];
          const assetDecimals = asset.metadata.decimals + asset.config.extra_decimals;
          const curr_farm = Object.entries(filterAccountSentOutFarms(farm));
          const profit = curr_farm
            .map(([rewardTokenId, farmData]) => {
              const rewardAsset = assets.data[rewardTokenId];
              const rewardAssetDecimals =
                rewardAsset.metadata.decimals + rewardAsset.config.extra_decimals;
              const boostedShares = Number(shrinkToken(farmData.boosted_shares, assetDecimals));
              const totalBoostedShares = Number(
                shrinkToken(farmData.asset_farm_reward.boosted_shares, assetDecimals),
              );
              const totalRewardsPerDay = Number(
                shrinkToken(farmData.asset_farm_reward.reward_per_day, rewardAssetDecimals),
              );
              const dailyAmount =
                totalBoostedShares > 0
                  ? (boostedShares / totalBoostedShares) * totalRewardsPerDay
                  : 0;
              return dailyAmount * (rewardAsset.price?.usd || 0);
            })
            .reduce((acc, value) => acc + value, 0);
          const balance =
            curr_farm.length > 0
              ? Number(shrinkToken(borrowed[tokenId]?.balance || 0, assetDecimals))
              : 0;
          return { dailyProfit: profit, principal: balance * (asset.price?.usd || 0) };
        })
        .reduce(
          (acc, data) => {
            return [acc[0] + data.dailyProfit, acc[1] + data.principal];
          },
          [0, 0],
        );
      return totalBorrow > 0 ? (dailyTotalBorrowProfit / totalBorrow) * 365 * 100 : 0;
    },
  );
