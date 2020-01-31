export default {
  state: {
    alertPopup: {
      isVisible: false,
      msg: ""
    }
  },
  mutations: {
    closeAlertPopup(state) {
      state.alertPopup.isVisible = false;
    },
    showAlertPopup(state, msg) {
      state.alertPopup.isVisible = true;
      state.alertPopup.msg = msg;
    }
  },
  getters: {
    getAlertPopup(state) {
      return state.alertPopup;
    }
  }
};
