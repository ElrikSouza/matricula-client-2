import { callApi } from "@/api";
import { Course } from "./course";

const prerequisitesAreFulfilled = (
  prerequisites: string[],
  completedCourses: Set<string>
) => {
  for (const courseCode of prerequisites) {
    if (!completedCourses.has(courseCode)) {
      return false;
    }
  }

  return true;
};

const sortCourses = async (
  courses: Course[],
  completedCourses: Set<string>,
  requestedCourses: Set<string>
) => {
  const sortedCourses = {
    available: [] as Course[],
    missingPrerequisites: [] as Course[],
    alreadyRequested: [] as Course[],
    completedCourses: [] as Course[],
  };

  for (const course of courses) {
    if (completedCourses.has(course.code)) {
      sortedCourses.completedCourses.push(course);
    } else if (requestedCourses.has(course.code)) {
      sortedCourses.alreadyRequested.push(course);
    } else if (
      !prerequisitesAreFulfilled(course.prerequisites, completedCourses)
    ) {
      sortedCourses.missingPrerequisites.push(course);
    } else {
      sortedCourses.available.push(course);
    }
  }

  return sortedCourses;
};

const getAllCourses = async (): Promise<Course[]> => {
  const { courses } = await callApi("courses");

  return courses;
};

const getCompletedCoursesSet = async (): Promise<Set<string>> => {
  const { courseCodes } = await callApi("students/completed-courses");

  return new Set(courseCodes);
};

const getRequestedCoursesSet = async (): Promise<Set<string>> => {
  const { courseCodes } = await callApi("enrollment-requests");

  return new Set(courseCodes);
};

export const getSortedCourses = async () => {
  const [courses, completedCourses, requestedCourses] = await Promise.all([
    getAllCourses(),
    getCompletedCoursesSet(),
    getRequestedCoursesSet(),
  ]);

  return sortCourses(courses, completedCourses, requestedCourses);
};