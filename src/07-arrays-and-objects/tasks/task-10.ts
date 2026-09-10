/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

let scoreStudent = submissions.map(submission =>{
let correctScore = submission.answers.filter(answer =>{
let question = questions.find(q=> q.id === answer.questionId);
    return answer.answer === question?.correctAnswer;
}).length;
let processStudentscore = correctScore * 25;
    return{
        student: submission.student,
        score: processStudentscore
    };
})
console.log(scoreStudent);

let studentAnswer = submissions.map(submission =>{
let correctAnswer = submission.answers.filter(answer =>{
    let question = questions?.find(q=> q.id === answer.questionId);
    return answer.answer === question?.correctAnswer;
}).length;
let wrong = submission.answers.length - correctAnswer;
    return{
        student: submission.student,
        correct: correctAnswer,
        wrong: wrong
    }
});
console.log(studentAnswer);

let categories = [ ...new Set(questions.map(q=> q.category))];
let categoryScore = categories.map(category=>{
let questionId =questions
    .filter(q=>q.category === category)
    .map(q=>q.id)
let allAnswer = submissions.flatMap(s=> s.answers);
let relevant = allAnswer.filter(answer=> questionId.includes(answer.questionId));
let correctCount = relevant.filter(answer=> {
    let question = questions.find(q=> q.id === answer.questionId);
    return answer.answer === question?.correctAnswer;
}).length
let averageScore = (correctCount / relevant.length) * 100;
    return{
        category: category,
        averageScore: averageScore
    };
})
console.log(categoryScore);
let totalStudents = scoreStudent.length;
let totalScore = scoreStudent.reduce((sum,s)=> sum + s.score,0);
/**pembulatan desimal */
let averageScore = Number((totalScore / scoreStudent.length).toFixed(2));
let highestScore = Math.max( ...scoreStudent.map(s=> s.score));
let lowestScore = Math.min( ...scoreStudent.map(s=> s.score));
let passedStudents = scoreStudent.filter(s=> s.score >=70).length;
let failedStudents = scoreStudent.filter(s=> s.score < 70).length;
let passRate = Number(((passedStudents / totalStudents) * 100).toFixed(2));
let exam = {
    totalStudents: totalStudents,
    averageScore: averageScore,
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: passRate
};
console.log(exam);