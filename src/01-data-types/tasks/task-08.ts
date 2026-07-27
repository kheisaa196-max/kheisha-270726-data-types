/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */

let temperatureData: number[] = [24.5, 25.1, 26.8, 28.4, 30.2, 31.1, 30.7, 29.3];
let timeData: string[] = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

console.log("== Temperature Data ==");
for (let i = 0; i < temperatureData.length; i++) {
    console.log(`${timeData[i]}: ${temperatureData[i]}°C`);
}
const highestTemp = Math.max(...temperatureData);
const lowestTemp = Math.min(...temperatureData);
const averageTemp = temperatureData.reduce((sum, t) => sum + t, 0) / temperatureData.length;

console.log(`Highest Temperature: ${highestTemp}°C`);
console.log(`Lowest Temperature: ${lowestTemp}°C`);
console.log(`Average Temperature: ${averageTemp.toFixed(2)}°C`);    
