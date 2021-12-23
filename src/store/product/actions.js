import productquery from "../../graphql/product/product.query.gql";
import productcreate from "../../graphql/product/product.create.mutation.gql";
import updateproduct from "../../graphql/product/product.update.mutation.gql";
import productbyid from "../../graphql/product/productbyid.query.gql";
import productdelete from "../../graphql/product/product.delete.mutation.gql";




import defaultClient from '../../services/service'
export default {
    async loadproduct({ commit }) {
   
        try {
            const _result = await defaultClient.query({
                query: productquery,
                fetchPolicy: 'no-cache',
            })

            const _product = _result.data.product.map((item) => {
            const { __typename, ...items } = item;
            return items;
           });

            commit('SET_PRODUCT', _product)
        } catch (error) {
            console.log(error)
        }
    },
    async loadproductbyid({ commit }, data) {
        try {

            const _result = await defaultClient.query({
                query: productbyid,
                fetchPolicy: 'no-cache',
                variables: {...data}
            })

             const { __typename, ...products } = _result.data.products; 

            commit('SET_PRODUCTBYID', products)
        } catch (error) {
            console.log(error)
        }
    },
    async createproduct({ commit }, data) {
          try {
            await defaultClient.mutate({
                mutation: productcreate,
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
    async updateproduct({ commit }, data) {

          try {
            await defaultClient.mutate({
                mutation: updateproduct,
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
     async deleteproduct({ commit,dispatch }, data) {
          try {
            await defaultClient.mutate({
                mutation: productdelete,
                variables: { ...data },
            }).then(({ data }) => {
                if (data) {
                    console.log(`ลบสำเร็จ`);
                    // reload product
                    dispatch("loadproduct")
                }
            }).catch((err) => {
                console.log(`ลบสำเร็จไม่สำเร็จ${err}`)
            })
        } catch (error) {
            console.log(error)
        }
    },
    async clearproduct({ commit }) {
        commit('SET_CLEAR_PRODUCT')
    },
}
