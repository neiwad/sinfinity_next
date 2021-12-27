type HistoryLine = {
  confirmed: Boolean;
  date: String;
  type: String;
  label: String;
  address: String;
  amount: number;
  id: String;
};

type Infinitynode = {
  address: String;
  rewards: number;
  history: Array<HistoryLine>;
  burned: number;
  roi: number;
};

export { HistoryLine, Infinitynode };