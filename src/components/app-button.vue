<template>
  <button
    class="btn"
    :class="{
      'btn--primary': color == 'primary',
      'btn--secondary': color == 'secondary',
      'btn--danger': color == 'danger',
      'btn--md': size == 'md',
      'btn--sm': size == 'sm',
    }"
    type="button"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
    },
  },
});
</script>

<style scoped>
.btn {
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: background-color 300ms;
}

.btn--primary {
  background-color: var(--primary-color);
}

.btn--primary:hover,
.btn--primary:active {
  background-color: var(--primary-color-dark);
}

.btn--secondary {
  background-color: var(--secondary-color);
}

.btn--secondary:hover,
.btn--secondary:active {
  background-color: var(--secondary-color-dark);
}

.btn--danger {
  background-color: var(--danger-color);
  color: white;
}

.btn--danger:hover,
.btn--danger:active {
  background-color: var(--danger-color-dark);
}

.btn--md {
  padding: 1rem;
  min-width: 10rem;
  font-size: 1rem;
}

.btn--sm {
  padding: 0.85rem;
  font-size: 0.85rem;
}
</style>
