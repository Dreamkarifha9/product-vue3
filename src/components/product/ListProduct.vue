<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Content -->
      <h1>ListProduct1</h1>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>ชื่อสินค้า</th>
                <th>ราคา</th>
                <th>ประเภทสินค้า</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in productlist_" :key="product._id">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.categorys.name }}</td>
                <td>
                  <router-link
                    :to="{ name: 'editproduct', params: { id: product.id } }"
                    class="btn btn-success mx-2"
                  >
                    Edit
                  </router-link>
                  <button
                    @click.prevent="deleteProduct(product.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "ListProduct",
  setup() {
    const store = useStore();
    //clearproduct
    const clearproduct_ = async function () {
      await store.dispatch("product/clearproduct");
    };
    //loadproduct
    const loadproduct_ = async function () {
      await store.dispatch("product/loadproduct");
    };
    // getter
    const productlist_ = computed(() => store.getters[`product/productlist`]);

    // delete data
    const deleteProduct = async (value) => {

      const Objdelete = {
        text_productId: value
      }
      await store.dispatch("product/deleteproduct", Objdelete)
    };

    onMounted(async () => {
      await clearproduct_();
      await loadproduct_();
    });
    return { productlist_, deleteProduct };
  },
};
</script>

<style></style>
