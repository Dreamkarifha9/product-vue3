export default {

  SET_PRODUCT(state, data) {
    state.productlist = data;
  },
  SET_PRODUCTBYID(state, data) {
    state.productbyid = {...data};
  },
  SET_CLEAR_PRODUCT (state) {
    state.productlist = []
    state.productbyid = {}
  }
};
