
import categoryquery from "../../graphql/category/category.query.gql";
import categorycreatemutation from "../../graphql/category/category.create.mutation.gql";

import defaultClient from "../../services/service";

export default {
  async loadcategory({ commit }) {
        try {
            const _result = await defaultClient.query({
                query: categoryquery,
                fetchPolicy: 'no-cache',
            })
            const _category = _result.data.category.map((item) => {
            const { __typename, ...items } = item;
            return items;
           });
            commit('SET_CATEGORY', _category)
        } catch (error) {
            console.log(error)
        }
  },
  async createcategory({ commit }, data) {
          try {
            await defaultClient.mutate({
                mutation: categorycreatemutation,
                variables: { ...data },
            }).then(({ data }) => {
                if (data) {
                    console.log(`บันทึกสำเร็จ`);
                }
            }).catch((err) => {
                console.log(`บันทึกไม่สำเร็จ${err}`)
            })
        } catch (error) {
            console.log(error)
        }
    },
  async clearcategory ({commit}) {
    commit("SET_CLEARCATEGORY");
  }
};


