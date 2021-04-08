const hourHand = document.querySelector("#hours");
    const minHand = document.querySelector("#minutes");
    const secondHand = document.querySelector("#seconds");
    const line = document.querySelectorAll(".line");
    const number = document.querySelectorAll(".number");
    const markingLine = document.querySelectorAll(".markingLine");
    const markingNumber = document.querySelectorAll(".markingNumber");
    window.onload = function () {
        rotateMarkings();
        rotateHands();
    }
    function rotateMarkings() {
        for (let i = 0; i < 12; i++) {
            number[i].innerHTML = i;
            markingLine[i].style.transform = "rotate("+30*i+"deg)";
            markingNumber[i].style.transform = "rotate("+30*i+"deg)";
            number[i].style.transform = "rotate("+-30*i+"deg)";
        }
    }
    function rotateHands() {
        let obj = new Date();
        let hoursNumber = obj.getHours()/12;
        let secondsNumber = obj.getSeconds()/60;
        let minutesNumber = obj.getMinutes()/60;
        minHand.style.transform = "rotate("+minutesNumber*360+"deg)";
        secondHand.style.transform = "rotate("+secondsNumber*360+"deg)";
        hourHand.style.transform = "rotate("+hoursNumber*360+"deg)";
    }
    // hourHand.style.transition="transform 0.5s linear";
    // minHand.style.transition="transform 0.5s linear";
    setInterval(rotateHands, 1000);