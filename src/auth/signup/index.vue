<template>
  <form-page-grid title="Registro" :onCancel="cancel" :onSubmit="signUp">
    <app-input v-model="email" type="email" placeholder="Email" />
    <app-input
      v-model="studentId"
      type="number"
      placeholder="Numero de Estudante"
    />
    <app-input
      v-model="verificationCode"
      type="number"
      placeholder="Numero de Verificacao de Matricula"
    />
    <app-input v-model="password" type="password" placeholder="Senha" />
    <app-input
      v-model="confirmPassword"
      type="password"
      placeholder="Confirmar Senha"
    />
    <error-dialog
      :message="errorMessage"
      :isVisible="isErrorDialogVisible"
      :onClose="closeErrorDialog"
    />
  </form-page-grid>
</template>

<script lang="ts">
import AppInput from "@/components/app-input.vue";
import ErrorDialog from "@/components/error-dialog.vue";
import FormPageGrid from "@/components/form-page-grid.vue";
import * as SignUpApi from "./signup-api";
import Vue from "vue";
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
      studentId: 0,
      confirmPassword: "",
      isErrorDialogVisible: false,
      verificationCode: 0,
      errorMessage: "",
    };
  },
  methods: {
    async signUp() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "As senhas sao diferentes";
        this.isErrorDialogVisible = true;
      }

      try {
        await SignUpApi.signUp({
          email: this.email,
          password: this.password,
          studentId: this.studentId,
          verificationCode: this.verificationCode,
        });
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
      this.isErrorDialogVisible = false;
    },
  },
});
</script>
