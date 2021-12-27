import { HistoryLine, Infinitynode } from "../../types/index";
import additionner from "@/helpers/additionner";

const processInfinitynodes = (history: Array<HistoryLine>) => {
  const infinitynodes: Array<Infinitynode> = [];
  const infinitynodeAddresses = [
    ...new Set(history.filter((h) => h.type === "Mined").map((h) => h.address)),
  ];

  infinitynodeAddresses.forEach((_address, index) => {
    const masternodeHistory = history.filter(
      (_transaction) => _transaction.address === _address
    );

    const rewards = masternodeHistory.map((h) => h.amount).reduce(additionner);

    const infinitynode: Infinitynode = {
      address: _address,
      nicename: `Node ${index}`,
      rewards: rewards,
      history: masternodeHistory,
      burned: 100000,
      roi: ((rewards - 100000) / 100000) * 100,
      isActive: true,
    };
    infinitynodes.push(infinitynode);
  });
  return infinitynodes;
};

export { processInfinitynodes };
