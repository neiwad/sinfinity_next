import { defineStore } from "pinia";
import { Infinitynode, MonthlyRewards } from "../../types/index";
import additionner from "@/helpers/additionner";

export const useInfinitinodes = defineStore("infinitynodes", {
  state: () => {
    return {
      nodes: [] as Array<Infinitynode>,
    };
  },
  actions: {
    setInfinitynodes(nodes: Array<Infinitynode>) {
      this.nodes = nodes;
    },
  },
  getters: {
    infinitynodes: (state) => state.nodes,
    globalRoi: (state) => {
      return (
        state.nodes.map((_n) => _n.roi).reduce(additionner) / state.nodes.length
      );
    },
    monthlyRewards: (state) => {
      let rewardsPerMonth = [] as Array<MonthlyRewards>;
      const history = state.nodes
        .map((_n) => _n.history.filter((_h) => _h.type === "Mined"))
        .flat(1);

      history.forEach((_h) => {
        const date = new Date(_h.date);
        const niceMonth = date.toLocaleDateString("fr-CA", {
          // you can use undefined as first argument
          year: "numeric",
          month: "2-digit",
        });

        const index = rewardsPerMonth.findIndex(
          (_r) => _r.niceMonth === niceMonth
        );

        if (index !== -1) {
          rewardsPerMonth[index].rewards.push(_h.amount);
          rewardsPerMonth[index].totalRewards =
            rewardsPerMonth[index].rewards.reduce(additionner);
        } else {
          rewardsPerMonth.push({
            niceMonth: niceMonth,
            rewards: [_h.amount],
            totalRewards: _h.amount,
          });
        }
      });

      return rewardsPerMonth.sort((a, b) =>
        a.niceMonth > b.niceMonth ? 1 : b.niceMonth > a.niceMonth ? -1 : 0
      );
    },
  },
});
