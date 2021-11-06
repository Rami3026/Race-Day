let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;
if(registeredEarly === false){
  raceNumber += 1000;
}
if (registeredEarly === true && runnersAge <= 18) {
  console.log('Your race number is '+ raceNumber + ' and your race is at 9:30am')
} else if (registeredEarly === false && runnersAge <= 18) {
  console.log('Your race number is '+ raceNumber + ' and your race is at 11:00am')
} else if (runnersAge > 18) {
  console.log('Your race number is '+ raceNumber + ' and your race is at 12:30pm')
} else {
  console.log('If you are unsure of your registration status, please see the registration desk')
}
