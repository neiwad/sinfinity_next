import { defineStore } from "pinia";
import { Infinitynode } from "../../types/index";
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
  },
});
