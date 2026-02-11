/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
   let monthsNumber = {
    'Winter' : [12, 1, 2],
    'Spring' : [3, 4, 5],
    'Summer' : [6,7,8],
    'Autumn' : [9,10,11]
  }
  let activities = {
    Winter:['skiing','ice skating'],
    Spring:['hiking','museum visit'],
    Summer:['swimming','cycling'],
    Autumn:['nature walk','reading at a cafe'],
  }
  let  activity;
  if(typeof month !== 'number' || !(month >=1 && month <=12) || typeof temperature !== 'number' ){
    return null
  }
  const getMonth = (month) => {
  let result
   for (let season in monthsNumber) {
   if (monthsNumber[season].includes(month)) {
    result =  season;
     break } 
}
    return result
  }
 let givenMonth = getMonth(month)
  console.log(-5 < 0)
  if(givenMonth === 'Winter' && temperature < 0){
    activity = activities['Winter'][0]
  } else if(givenMonth === 'Winter' && temperature >= 0){
    activity = activities['Winter'][1]
  }
  else if(givenMonth === 'Spring' && temperature > 20){
    activity = activities['Spring'][0]
  }
  else if(givenMonth === 'Spring' && temperature <= 20){
    activity = activities['Spring'][1]
  }
  else if(givenMonth === 'Summer' && temperature > 35){
    activity = activities['Summer'][0]
  }
  else if(givenMonth === 'Summer' && temperature <= 35){
    activity = activities['Summer'][1]
  }
  else if(givenMonth === 'Autumn' && temperature > 15){
    activity = activities['Autumn'][0]
  }
   else if(givenMonth === 'Autumn' && temperature <= 15){
    activity = activities['Autumn'][1]
  }
  return {
    season:givenMonth,
    activity
  } 
  }
  
