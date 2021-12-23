<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Content -->
      <h1>CreateCategory</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-2">
          <label for="name">ชื่อหมวดหมู่</label>
          <input
            type="text"
            class="form-control mt-1"
            v-model="stateCategory_.name"
            required
          />
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
  name: "CreateCategory",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    // state
    const stateCategory_ = reactive({
      name: null,
    });

    // submit form
    const onSubmit = async function () {
      const ObjCategory = {
        text_name: stateCategory_.name,
      };
      await store.dispatch("category/createcategory", ObjCategory);
      router.push({ name: "createproduct" });
    };
    return { stateCategory_, onSubmit };
  },
};
</script>

<style></style>
