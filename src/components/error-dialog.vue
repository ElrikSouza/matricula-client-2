<template>
  <transition name="fade">
    <div class="error-dialog" v-if="isVisible">
      <div class="error-dialog__content">
        <h1 class="error-dialog__title">{{ title }}</h1>
        <p class="error-dialog__message">{{ message }}</p>
        <app-button @click="onClose">Fechar</app-button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import appButton from "./app-button.vue";
export default Vue.extend({
  components: { appButton },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Um Erro Ocorreu",
    },
    onClose: {
      type: Function,
    },
  },
});
</script>

<style scoped>
.error-dialog {
  background: #00000098;
  display: block;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
}

.error-dialog__title {
  margin-bottom: 1rem;
}

.error-dialog__content {
  display: block;
  height: 33vh;
  width: 80%;
  max-width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem;
  border-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
