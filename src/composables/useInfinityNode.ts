import { HistoryLine, Infinitynode } from "../../types/index";

const additionner = (previousValue: number, currentValue: number): number => {
  return previousValue + currentValue;
};

const processInfinitynodes = (history: Array<HistoryLine>) => {
  const infinitynodes: Array<Infinitynode> = [];
  const infinitynodeAddresses = [
    ...new Set(history.filter((h) => h.type === "Mined").map((h) => h.address)),
  ];

  infinitynodeAddresses.forEach((_address) => {
    const masternodeHistory = history.filter(
      (_transaction) => _transaction.address === _address
    );

    const rewards = masternodeHistory
      .map((h) => {
        return h.amount;
      })
      .reduce(additionner);

    const infinitynode: Infinitynode = {
      address: _address,
      rewards: rewards,
      history: masternodeHistory,
      burned: 100000,
      roi: ((rewards - 100000) / 100000) * 100,
    };
    infinitynodes.push(infinitynode);
  });
  return infinitynodes;
};

export { processInfinitynodes };
