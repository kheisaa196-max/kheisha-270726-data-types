/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type Enrollment = { student: string, course: string, completed: boolean, score: number, duration: number };

function countCompleted(enrollments: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < enrollments.length; i++) {
    const item = enrollments[i];
    if (item.completed === true) {
      count = count + 1;
    }
  }
  return count;
}

function countIncomplete(enrollments: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < enrollments.length; i++) {
    const item = enrollments[i];
    if (item.completed === false) {
      count = count + 1;
    }
  }
  return count;
}

function calculateCompletionPercentage(enrollments: Enrollment[]): number {
  const completed = countCompleted(enrollments);
  const total = enrollments.length;
  return (completed / total) * 100;
}

function findHighestScore(enrollments: Enrollment[]): number {
  let highest = enrollments[0].score;
  for (let i = 0; i < enrollments.length; i++) {
    const item = enrollments[i];
    if (item.score > highest) {
      highest = item.score;
    }
  }
  return highest;
}

function findLowestScore(enrollments: Enrollment[]): number {
  let lowest = enrollments[0].score;
  for (let i = 0; i < enrollments.length; i++) {
    const item = enrollments[i];
    if (item.score < lowest) {
      lowest = item.score;
    }
  }
  return lowest;
}

function calculateAverageScore(enrollments: Enrollment[]): number {
  let total = 0;
  for (let i = 0; i < enrollments.length; i++) {
    total = total + enrollments[i].score;
  }
  return total / enrollments.length;
}

function countPassingStudents(enrollments: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].score >= 75) {
      count = count + 1;
    }
  }
  return count;
}

function countStudentsByCourse(enrollments: Enrollment[], course: string): number {
  let count = 0;
  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].course === course) {
      count = count + 1;
    }
  }
  return count;
}

function filterByCourse(enrollments: Enrollment[], course: string): Enrollment[] {
  let result: Enrollment[] = [];
  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].course === course) {
      result.push(enrollments[i]);
    }
  }
  return result;
}

function calculateAverageScoreByCourse(enrollments: Enrollment[], course: string): number {
  const filtered = filterByCourse(enrollments, course);
  return calculateAverageScore(filtered);
}

function calculateTotalDuration(enrollments: Enrollment[]): number {
  let total = 0;
  for (let i = 0; i < enrollments.length; i++) {
    total = total + enrollments[i].duration;
  }
  return total;
}

function calculateAverageDuration(enrollments: Enrollment[]): number {
  const total = calculateTotalDuration(enrollments);
  return total / enrollments.length;
}

function printOverallDashboard(enrollments: Enrollment[]): void {
  const total = enrollments.length;
  const completed = countCompleted(enrollments);
  const incomplete = countIncomplete(enrollments);
  const percentage = calculateCompletionPercentage(enrollments);
  const highest = findHighestScore(enrollments);
  const lowest = findLowestScore(enrollments);
  const average = calculateAverageScore(enrollments);
  const passing = countPassingStudents(enrollments);
  const totalHours = calculateTotalDuration(enrollments);
  const avgDuration = calculateAverageDuration(enrollments);

  console.log(`Total Enrollments: ${total}`);
  console.log(`Completed: ${completed}`);
  console.log(`Incomplete: ${incomplete}`);
  console.log(`Completion Percentage: ${percentage}%`);
  console.log(`Highest Score: ${highest}`);
  console.log(`Lowest Score: ${lowest}`);
  console.log(`Average Score: ${average}`);
  console.log(`Passing Students: ${passing}`);
  console.log(`Total Learning Hours: ${totalHours}`);
  console.log(`Average Duration: ${avgDuration}`);
}

function printCourseDashboard(enrollments: Enrollment[]): void {
  const courses = ["TypeScript", "Database", "Backend"];

  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    const count = countStudentsByCourse(enrollments, course);
    const avgScore = calculateAverageScoreByCourse(enrollments, course);
    console.log(`${course}: ${count} students, average score ${avgScore}`);
  }
}

printOverallDashboard(enrollments);
printCourseDashboard(enrollments);