<template>
  <div class="form-page-grid">
    <h1 class="form-page-grid__title">{{ title }}</h1>
    <form action="" class="form-page-grid__form"><slot /></form>
    <div class="form-page-grid__btns">
      <app-button @click="onSubmit">{{ onSubmitBtnLabel }}</app-button>
      <app-button color="secondary" @click="onCancel">{{
        onCancelBtnLabel
      }}</app-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import appButton from "./app-button.vue";

export default Vue.extend({
  components: { appButton },
  props: {
    title: {
      type: String,
      default: "",
    },
    onSubmitBtnLabel: {
      type: String,
      required: false,
      default: "Submeter",
    },
    onCancelBtnLabel: {
      type: String,
      required: false,
      default: "Cancelar",
    },
    onSubmit: {
      type: Function,
    },
    onCancel: {
      type: Function,
    },
  },
});
</script>

<style scoped>
.form-page-grid {
  --title-height: 3rem;
  --action-row-height: 3rem;

  display: grid;
  width: 100%;
  height: 100%;
  align-self: center;
  text-align: center;
}

.form-page-grid__title {
  align-self: center;
  text-transform: uppercase;
}

.form-page-grid__form {
  align-self: center;
  max-width: 600px;
  display: grid;
  margin: 0 auto;
  width: 80%;
  gap: 1rem;
}

.form-page-grid__btn_row {
  align-self: center;
}
</style>
