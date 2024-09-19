let countdownInterval

function takeInput(){
    let userInput = document.getElementById("userInput").value
    document.getElementById("userInput").value = ""
    if(countdownInterval){
        clearInterval(countdownInterval)
    }
    countdownInterval = setInterval(() => updateCountdown(userInput), 1000);
}


function updateCountdown(userInput){

    const dayptag = document.getElementById("days")
    const hourptag = document.getElementById("hours")
    const minuteptag = document.getElementById("minutes")
    const secondptag = document.getElementById("seconds")

    const currentDate = new Date();
    const yyyy = currentDate.getFullYear();
    const mm = currentDate.getMonth() + 1; // This is because months start at 0, put this here because i wont remember
    const dd = currentDate.getDate();
    console.log(currentDate);
    console.log(`The Date is: ${dd}/${mm}/${yyyy}`);

    let target_date = new Date(userInput);

    let time_difference = target_date - currentDate;

    let dayDifference = time_difference / (1000 * 60 * 60 * 24); // 1000ms in a second, 60 seconds in a min, 60 mins in an hour, 24 hours in a day
    console.log(Math.floor(dayDifference));

    // Calculations and stuff i found online to help make this
    let remainingTime = time_difference;

    const days = Math.floor(time_difference / (1000 * 60 * 60 * 24));
    time_difference -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(time_difference / (1000 * 60 * 60));
    time_difference -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(time_difference / (1000 * 60));
    time_difference -= minutes * 1000 * 60;

    const seconds = Math.floor(time_difference / 1000);

    console.log(`Days: ${days}\nSeconds: ${seconds}\nMinutes: ${minutes}\nHours: ${hours}`);

    dayptag.textContent = `Days: ${days}`
    hourptag.textContent = `Hours: ${hours}`
    minuteptag.textContent = `Minutes: ${minutes}`
    secondptag.textContent = `Seconds: ${seconds}`

}

