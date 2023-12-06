const getSleepHours = day =>  {

//With switch
switch(day) {

case 'monday':
    return 8
    break;
case 'tuesday':
    return 7
    break;
case 'wednesday':
    return 8
    break;
case 'thursday':
    return 7
    break;
case 'friday':
    return 8
    break;
case 'saturday':
    return 7
    break;
case 'sunday':
    return 7
    break;
default:
    return "Error"

}


/* to log sleep hours
console.log(getSleepHours('wednesday')); */


/* With if/else
if(day === 'Monday') {
    return 8;
}
else if (day === 'Tuesday') {
    return 7;
}
else if (day === 'Monday') {
    return 6;
}
else if (day === 'Wednesday') {
    return 7;
}
else if (day === 'Thursday') {
    return 8;
}
else if (day === 'Friday') {
    return 7;
}
else if (day === 'Saturday') {
    return 8;
}
else if (day === 'Sunday') {
    return 7
}

else {
    return "Error";
}
*/

}; 

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
};

const getIdealSleepHours = () => {
let idealHours = 8;
return idealHours * 7;
};

/* to print the 2 new function 
console.log(getIdealSleepHours()); */

const calculateSleepDebt = () => {

    const actualSleepHours = (getActualSleepHours());
    const IdealSleepHours = (getIdealSleepHours());

    if(actualSleepHours === idealHours) {
        console.log("You've got the perfect amount of sleep!");
    }

    else if (actualSleepHours < idealHours) {
        console.log("You should get an extra " + (IdealSleepHours - actualSleepHours) + " hours of sleep this week.");
    }
    else if (actualSleepHours > idealHours) {
        console.log("You've got an extra " + (IdealSleepHours - actualSleepHours) + " hours of sleep this week.");
    }
    else ("Error! Check your code");
};

calculateSleepDebt();
