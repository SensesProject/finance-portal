import Vue from "vue";
import Vuex from "vuex";
import modulesJson from "../assets/modules.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollY: 0,
    screenHeight: window.innerHeight,
    isMobile: window.innerWidth < 700,
    activePortalPath: "intro",
    navigationOpen: false,
    reflowTime: null
  },
  getters: {
    modulesData: (state) => {
      const additionalItems = [
        { path: "intro", mainTopic: "Intro", portalNum: -1, simple: true },
        { path: "earth", mainTopic: "Extreme Events", portalNum: 7, simple: state.isMobile },
        { path: "end", mainTopic: "Continue", portalNum: 100 }
      ];

      return modulesJson.modules
        .filter(m => m.portal === "Policy" && Number.isInteger(m.portalNum))
        .concat(...additionalItems)
        .sort((a, b) => a.portalNum - b.portalNum);
    },
    activePortal: (state, getters) => {
      return getters.modulesData.find(d => d.path === state.activePortalPath);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
