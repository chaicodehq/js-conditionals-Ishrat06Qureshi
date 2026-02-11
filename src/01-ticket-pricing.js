/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  let price = 0;
  if(isWeekend){
    price = price + 3;
  }
  if(typeof age != 'number' || age < 0 ){
    return -1;
  }
  else if(age>=0 && age<=12){
    price = price + 8
    return price
  }
   else if(age>=13 && age<=17){
    price = price + 12
    return price
  }
   else if(age>=18 && age<=59){
    price = price + 15
    return price
  }
   else if( age>=60){
    price = price + 10
    return price
  }
  else {
    return price
  }
  
  // Your code here
}
