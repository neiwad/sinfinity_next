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
  nicename: String;
  rewards: number;
  history: Array<HistoryLine>;
  burned: number;
  roi: number;
  isActive: Boolean;
};

type MonthlyRewards = {
  niceMonth: String;
  rewards: Array<number>;
  totalRewards: number;
};

type NodesPerMonth = {
  niceMonth: String;
  nodes: Array<String>;
};

export { HistoryLine, Infinitynode, MonthlyRewards, NodesPerMonth };
