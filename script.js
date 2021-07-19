const secondsHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);



function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = now.getHours();
    const hoursDegrees = ((hour/ 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(seconds==0){
        secondsHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
       } else {
        secondsHand.style.transitionDuration = '0.05s';
        minuteHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
    }


}




