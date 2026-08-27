/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldmedal= 0;
let silvermedal= 0;
let bronzemedal= 0;
let nomedal= 0;
let totalscore= 0;

for (let i = 0; i < scores.length; i++) {
    const score= scores[i];
    totalscore+=score;

    if(score >=95){
        goldmedal++;
    }else if(score >= 85){
        silvermedal++;
    }else if(score >= 75){
        bronzemedal++;
    }else{
        nomedal++;
    }
}
const Average= totalscore/scores.length;    

console.log(`Gold Medal :${goldmedal}`);
console.log(`Silver Medal :${silvermedal}`);
console.log(`Bronze Medal :${bronzemedal}`);
console.log(`noMedal :${nomedal}`);
console.log(`Average :${Average.toFixed(2)}`);

