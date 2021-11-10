import { useContext } from "react";
import { Box } from "@mui/material";

import { USD_FORMAT } from "../../store/constants";
import { ContractContext } from "../../context/contracts";
import { toUsd } from "../../store";
import { Burrow } from "../../index";
import { IBurrow } from "../../interfaces/burrow";

import { InfoWrapper } from "../../components/InfoBox/style";
import { InfoBox, PageTitle } from "../../components";
import Table2 from "../../components/Table2";
import { columns as defaultColumns, amountBorrowedColumn } from "./tabledata";

const Borrow = () => {
	const { walletConnection } = useContext<IBurrow>(Burrow);
	const { assets, metadata, portfolio } = useContext(ContractContext);

	const yourBorrowBalance = portfolio?.borrowed
		.map(
			(borrowed) =>
				Number(borrowed.balance) *
				(assets.find((a) => a.token_id === borrowed.token_id)?.price?.usd || 0),
		)
		.reduce((sum, a) => sum + a, 0)
		.toLocaleString(undefined, USD_FORMAT);

	const totalBorrow = assets
		.map((asset) => {
			return toUsd(asset.borrowed.balance, {
				...asset,
				...metadata.find((m) => m.token_id === asset.token_id)!,
			});
		})
		.reduce((sum, a) => sum + a, 0)
		.toLocaleString(undefined, USD_FORMAT);

	const columns = walletConnection?.isSignedIn()
		? [...defaultColumns, amountBorrowedColumn(portfolio)]
		: defaultColumns;

	const rows = assets
		.filter((asset) => asset.config.can_borrow)
		.map((asset) => ({
			...asset,
			...metadata.find((m) => m.token_id === asset.token_id),
		}));

	return (
		<Box sx={{ paddingBottom: 10 }}>
			<InfoWrapper sx={{ gridTemplateColumns: "auto auto auto" }}>
				{walletConnection?.isSignedIn() && (
					<InfoBox title="Your Borrow Balance" value={yourBorrowBalance} subtitle="Portfolio" />
				)}
				<InfoBox title="Borrow Limit" value="0%" />
				<InfoBox title="Risk Factor" value="0" />
			</InfoWrapper>
			<PageTitle first="Borrow" second="Assets" />
			<Table2 rows={rows} columns={columns} />
			<InfoWrapper>
				<InfoBox title="Total Borrow" value={totalBorrow} />
			</InfoWrapper>
		</Box>
	);
};

export default Borrow;
