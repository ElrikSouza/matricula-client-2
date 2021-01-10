<template>
  <main>
    <div>
      <h2>Cursos Disponiveis</h2>
      <ul class="course-list">
        <li v-for="course in sortedCourses.available" :key="course.code">
          {{ course.name }}
          <input
            type="checkbox"
            v-model="selectedCourses"
            :value="course.code"
          />
        </li>
      </ul>
    </div>
    <div>
      <h2>Cursos Com Prerequisitos Faltando</h2>
      <ul>
        <li
          v-for="course in sortedCourses.missingPrerequisites"
          :key="course.code"
        >
          {{ course.name }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Matriculas Ja Requisitadas</h2>
      <ul>
        <li v-for="course in sortedCourses.alreadyRequested" :key="course.code">
          {{ course.name }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Cursos Ja feitos</h2>
      <ul>
        <li v-for="course in sortedCourses.completedCourses" :key="course.code">
          {{ course.name }}
        </li>
      </ul>
    </div>
    <app-button @click="submitRequests">Confirmar Requisicoes</app-button>
  </main>
</template>

<script lang="ts">
import appButton from "@/components/app-button.vue";
import Vue from "vue";
import * as EnrollmentService from "./enrollment-data";

export default Vue.extend({
  components: { appButton },
  data() {
    return {
      sortedCourses: {},
      selectedCourses: [] as string[],
    };
  },
  async mounted() {
    this.sortedCourses = await EnrollmentService.getSortedCourses();
  },
  methods: {
    async submitRequests() {
      await EnrollmentService.submitRequests(this.selectedCourses);
      this.sortedCourses = await EnrollmentService.getSortedCourses();
    },
  },
});
</script>

<style scoped></style>
