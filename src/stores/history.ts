import { defineStore } from "pinia";
import { HistoryLine } from "../../types/index";

export const useHistory = defineStore("history", {
  state: () => {
    return {
      fullHistory: [] as Array<HistoryLine>,
    };
  },
  actions: {
    setHistory(history: Array<HistoryLine>) {
      this.fullHistory = history;
    },
  },
  getters: {
    history: (state) => state.fullHistory,
  },
});
