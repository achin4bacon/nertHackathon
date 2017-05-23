var mildlyInsultingUsernames = [
    "dork",
    "dweeb",
    "mouth breather",
    "jerk",
    "jerkoff",
    "nerd",
    "nert",
    "geek",
    "dingus",
    "knuckledragger"
];

var moderatelyInsultingUsernames = [
    "asshole",
    "craperson",
    "crapbucket"
]

var highlyInsultingUsernames = [

]


function pickRandom(array) {
    //selects a random whole number between 0 and one less than the length of the array (for 0 indexed array)
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function pickRandomAtInterval(arrayToPickFrom, intervalAmount, intervalUnit, jQuerySelector) {
    //get the right number of ms for interval based on unit 
    var unitMultiplier = getMsMultiplierFromUnit(intervalUnit);

    setInterval(function () {
        //if a jQuery selector is provided to output to, then set the inner text to random phrase
        if (jQuerySelector) {
            jQuerySelector.text = pickRandom(arrayToPickFrom);
        } else {
            console.log(pickRandom(arrayToPickFrom));
        }
    }, intervalAmount * unitMultiplier);
}

function getMsMultiplierFromUnit(intervalUnit) {
    //Capitalization of variable names indicates they are constants and their value should not be changed
    //Variables hold the number of miliseconds
    var MILISECOND = 1;
    var SECOND = MILISECOND * 1000;
    var MINUTE = SECOND * 60;
    var HOUR = MINUTE * 60;
    var DAY = HOUR * 24;
    var WEEK = DAY * 7;
    //Month and year assumptions are off and do not account for leap year. For the purposes of this app, it should be okay though
    var MONTH = DAY * 30;
    var YEAR = DAY * 365;

    if (intervalUnit) {
        //clean up input
        intervalUnit = intervalUnit.toLowerCase();

        //see if interval matches units defined above - check for plural names too
        //TODO: update to use regex to look for plurals
        switch (intervalUnit) {
            case "milisecond":
            case "miliseconds":
                return MILISECOND;
            case "second":
            case "seconds":
                return SECOND;
            case "minute":
            case "minutes":
                return MINUTE;
            case "hour":
            case "hours":
                return HOUR;
            case "day":
            case "days":
                return DAY;
            case "week":
            case "weeks":
                return WEEK;
            case "month":
            case "months":
                return MONTH;
            case "year":
            case "years":
                return YEAR;
            default:
                return MILISECOND;
        }
    }
}



//Example usages
pickRandomAtInterval(moderatelyInsultingUsernames, 2, "second");
pickRandomAtInterval(moderatelyInsultingUsernames, 2, "second", "$(.*)");
console.log(pickRandom(mildlyInsultingUsernames));