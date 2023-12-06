let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let athleteAge = 18;

if (registeredEarly && athleteAge > 18){
  raceNumber += 1000;
}

if (registeredEarly && athleteAge > 18){
  console.log(`Race will begin at 9:30am your race number is: ${raceNumber}. `);
}else if (!registeredEarly && athleteAge > 18) {
  console.log(`Race will begin at 11:00am your race number is ${raceNumber}`);
}else if (athleteAge < 18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your racenumber is ${raceNumber}`);
}  else {
console.log(`See the registration desk.`);
}



