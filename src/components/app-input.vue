<template>
  <div class="the-input__wrapper">
    <input
      :value="$attrs.value"
      :type="type"
      :placeholder="placeholder"
      class="the-input"
      @input="onUpdateHandler($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onUpdateHandler(value: any) {
      this.value = value;
      this.$emit("input", this.value);
    },
  },
});
</script>

<style scoped>
.the-input__wrapper {
  width: 100%;
}

.the-input {
  display: inline-block;
  width: inherit;
  padding: 1rem;
  font-size: 1rem;
  border: 3px solid;
  border-color: #000;
  border-radius: 4px;
  transition: border-color 300ms;
}

.the-input:hover,
.the-input:active {
  border-color: var(--primary-color);
}
</style>
