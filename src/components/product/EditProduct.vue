<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Content -->
      <h1>EditProduct</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-2">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control mt-1"
            v-model="stateProduct_.name"
            required
          />
        </div>
        <div class="form-group mt-2">
          <label for="price">Price</label>
          <input
            type="text"
            class="form-control mt-1"
            v-model="stateProduct_.price"
            required
          />
        </div>
        <div class="form-group mt-2">
          <label for="categoryId">categoryId</label>
          <input
            type="text"
            class="form-control mt-1"
            v-model="stateProduct_.categoryId"
            required
          />
        </div>
        <div class="form-group mt-2">
          <button class="btn btn-primary btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onUpdated, reactive, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    // state
    const stateProduct_ = reactive({
      id: null,
      name: "",
      price: 0,
      categoryId: 0,
    });

    onMounted(async () => {
      const FindProductObj = {
        text_productId: parseInt(route.params.id),
      };
      // Search And Edit
      await store.dispatch("product/loadproductbyid", FindProductObj);
    });

    // getter
    const productbyid_ = computed(() => store.getters[`product/productbyid`]);


    //watch edit data and pass value to Object
    watch(
      () => productbyid_,
      (current) => {
        stateProduct_.id = current.value.id;
        stateProduct_.name = current.value.name;
        stateProduct_.price = current.value.price;
        stateProduct_.categoryId = current.value.categoryId;
      },
      { deep: true }
    );

    // submit form
    const onSubmit = async function () {
      const ObjProduct = {
        text_productId: parseInt(stateProduct_.id),
        text_name: stateProduct_.name,
        text_price: parseInt(stateProduct_.price),
        text_categoryId: parseInt(stateProduct_.categoryId),
      };
      await store.dispatch("product/updateproduct", ObjProduct);
      router.push({ name: "viewproduct" });
    };
    return { stateProduct_, onSubmit, productbyid_ };
  },
};
</script>

<style></style>
