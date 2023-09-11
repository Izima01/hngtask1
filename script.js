const now = new Date();

const dayParagraph = document.querySelector("[data-testid='currentDayOfTheWeek']");
const millisecondP = document.querySelector("[data-testid='currentUTCTime']");

function dayOfTheWeek(num) {
    switch (num) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return 'No Day'
    }   
}

dayParagraph.innerHTML = dayOfTheWeek(now.getDay());

millisecondP.innerHTML = now.getUTCMilliseconds();