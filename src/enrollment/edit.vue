<template>
  <main>
    <h1>Modificar Requisicoes de Matricula</h1>
    <div>
      <h2>Requisicoes de Matricula</h2>
      <ul>
        <li v-for="course in requestedCourses" :key="course.code">
          {{ course.name }}
          <app-button
            color="danger"
            size="sm"
            @click="removeEnrollmentRequest(course.code)"
          >
            Cancelar
          </app-button>
        </li>
      </ul>
    </div>
    <div>
      <h2>Requisicoes a serem Canceladas</h2>
      <ul>
        <li v-for="course in requestsToBeCancelled" :key="course.code">
          {{ course.name }}
          <app-button size="sm" @click="undoRemoval(course.code)">
            Desfazer
          </app-button>
        </li>
      </ul>
    </div>
    <app-button @click="submitChanges">Confirmar</app-button>
  </main>
</template>

<script lang="ts">
import appButton from "@/components/app-button.vue";
import Vue from "vue";
import { Course } from "./course";
import * as EnrollmentData from "./enrollment-data";

export default Vue.extend({
  components: { appButton },
  data() {
    return {
      requestedCourses: [] as Course[],
      requestsToBeCancelled: [] as Course[],
    };
  },

  async mounted() {
    this.requestedCourses = await EnrollmentData.getRequestedCourses();
  },

  methods: {
    removeEnrollmentRequest(courseCode: string) {
      const courseToBeRemoved = this.requestedCourses.find(
        course => course.code === courseCode
      );

      if (courseToBeRemoved) {
        this.requestedCourses = this.requestedCourses.filter(
          course => course.code !== courseCode
        );

        this.requestsToBeCancelled = [
          ...this.requestsToBeCancelled,
          courseToBeRemoved,
        ];
      }
    },
    undoRemoval(courseCode: string) {
      const courseToBeRestored = this.requestsToBeCancelled.find(
        course => course.code === courseCode
      );

      if (courseToBeRestored) {
        this.requestsToBeCancelled = this.requestsToBeCancelled.filter(
          course => course.code !== courseCode
        );

        this.requestedCourses = [...this.requestedCourses, courseToBeRestored];
      }
    },
    async submitChanges() {
      const courseCodes = this.requestsToBeCancelled.map(course => course.code);

      await EnrollmentData.deleteEnrollmentRequests(courseCodes);

      this.$router.push("/enrollment");
    },
  },
});
</script>

<style scoped></style>
