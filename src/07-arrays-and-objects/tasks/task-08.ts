/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

let averageScore = employees.map( employee =>{
let total = employee.projects.reduce((sum,s)=>sum+s.score,0);
let avg = total / employee.projects.length;
return{
    name: employee.name,
    averageScore: avg
};
});
console.log(averageScore);

let above85 = averageScore.filter(s=> s.averageScore > 85);
console.log(above85);

let project = employees.filter(employee => employee.projects.some(p => p.score <80));
console.log(project);

