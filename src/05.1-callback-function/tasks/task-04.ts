/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores<T>(scores: number[], transform: (score: number) => T): T[]{
    const hasil: T[]=[];
    for (const score of scores){
        const result = transform(score);
        hasil.push(result);
    }
        return hasil;
}
function checkPassed(score: number): boolean{
        return score >= 70;
}
function getGrade(score: number): string{
    if(score >= 90){
        return "A";
    }else if(score >= 80){
        return "B";
    }else if(score >= 70){
        return "C";
    }else{
        return "D";
    }
}
function addBonus(score: number): number{
        return score + 5;
}
function checkExcellent(score: number): string{
    if(score > 90){
        return "Excellent";
    }
        return "Reguler";
}
const hasilPassed = processScores(scores, checkPassed);
const hasilGrade = processScores(scores,getGrade);
const hasilBonus = processScores(scores,addBonus);
const hasilExcellent = processScores(scores, checkExcellent);


console.log(hasilPassed.join(", "));
console.log(hasilGrade.join(", "));
console.log(hasilBonus.join(", "));
console.log(hasilExcellent.join(", "));