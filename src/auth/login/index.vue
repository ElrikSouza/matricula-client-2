<template>
  <form-page-grid title="Login" :onCancel="cancel" :onSubmit="logIn">
    <app-input v-model="email" type="email" placeholder="Email" />
    <app-input v-model="password" type="password" placeholder="Senha" />
    <error-dialog
      :isVisible="isErrorDialogVisible"
      :message="errorMessage"
      :onClose="closeErrorDialog"
    />
  </form-page-grid>
</template>

<script lang="ts">
import AppInput from "@/components/app-input.vue";
import FormPageGrid from "@/components/form-page-grid.vue";
import * as LogInApi from "../login/login-api";
import Vue from "vue";
import ErrorDialog from "@/components/error-dialog.vue";
import { ApiError } from "@/api/api-error";

export default Vue.extend({
  components: {
    FormPageGrid,
    AppInput,
    ErrorDialog,
  },
  data() {
    return {
      email: "",
      password: "",
      isErrorDialogVisible: false,
      errorMessage: "",
    };
  },
  methods: {
    async logIn() {
      try {
        await LogInApi.logIn({ email: this.email, password: this.password });
      } catch (error) {
        if (error instanceof ApiError) {
          this.errorMessage = error.toFormattedErrorMessage();
        } else {
          this.errorMessage = "Um erro desconhecido ocorreu";
        }

        this.isErrorDialogVisible = true;
      }
    },
    cancel() {
      this.$router.push("/");
    },
    closeErrorDialog() {
      this.errorMessage = "";
      this.isErrorDialogVisible = false;
    },
  },
});
</script>
