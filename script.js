const newYear = '1 Jan 2022';
const totalMonths = [
    'January','February','March','April ','May ','June ',
    'July','August','September','October','November','December'];

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    console.log();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const months = Math.floor(totalSeconds / 3600 / 24 / 31);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds) % 60 ;

    function formateTime(time){
        return time < 10 ? (`0${time}`) : time;
    }

    document.querySelector('#months').innerHTML = formateTime(months);
    document.querySelector('#days').innerHTML = formateTime(days);
    document.querySelector('#hours').innerHTML = formateTime(hours);
    document.querySelector('#minutes').innerHTML = formateTime(minutes);
    document.querySelector('#seconds').innerHTML = formateTime(seconds);

    const month = Math.floor(totalSeconds / 3600 / 24 / 31);
    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor(totalSeconds / 60);
    const second = Math.floor(totalSeconds);

    document.querySelector('#month').innerHTML = formateTime(month);
    document.querySelector('#day').innerHTML = formateTime(day);
    document.querySelector('#hour').innerHTML = formateTime(hour);
    document.querySelector('#minute').innerHTML = formateTime(minute);
    document.querySelector('#second').innerHTML = formateTime(second);
}

// initial call
countdown();

setInterval(countdown, 1000);







