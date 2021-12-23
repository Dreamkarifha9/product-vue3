<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Content -->
      <h1>CreateProduct</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-2">
          <label for="name">ชื่อสินค้า</label>
          <input
            type="text"
            class="form-control mt-1"
            v-model="stateProduct_.name"
            required
          />
        </div>

        <div class="form-group mt-2">
          <label for="price">ราคา</label>
          <input
            type="text"
            class="form-control mt-1"
            v-model="stateProduct_.price"
            required
          />
        </div>
        <div class="form-group mt-2">
          <label for="categoryId">ประเภทสินค้า</label>

          <select v-model="stateProduct_.categoryId" class="form-select mt-2">
            <option disabled>เลือกรายการ</option>
            <option
              v-for="(category, i) in categorylist_"
              :value="category['id']"
              :key="i"
            >
              {{ category["name"] }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block mt-2">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "CreateProduct",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    // state
    const stateProduct_ = reactive({
      name: "",
      price: 0,
      categoryId: 0,
    });

    // getter
    const categorylist_ = computed(() => store.getters[`category/categorylist`]);

    onMounted(async () => {
      await store.dispatch("category/loadcategory");
    });

    // submit form
    const onSubmit = async function () {
      const ObjProduct = {
        text_name: stateProduct_.name,
        text_price: parseInt(stateProduct_.price),
        text_categoryId: parseInt(stateProduct_.categoryId),
      };
      await store.dispatch("product/createproduct", ObjProduct);
      router.push({ name: "viewproduct" });
    };
    return { stateProduct_, onSubmit, categorylist_ };
  },
};
</script>

<style></style>
