import { createStore } from 'vuex'
import product from "./product/index"
import category from "./category/index"


export default new createStore({
  modules: {
   product,
   category
  }
})

