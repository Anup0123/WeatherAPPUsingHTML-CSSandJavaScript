const API_KEY = `b87ddfcb90d0e5ea9132e4ab54a65ffb`;
function getWeather(){
    fetch(url=`https://api.openweathermap.org/data/2.5/weather?q=Lisburn&appid=${API_KEY}&units=metric`)
    .then(response=> response.json())
    .then(data => displayTemperature(data))
    .catch((error) => console.error(error));
}
getWeather()

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response=> response.json())
    .then(data => displayTemperature(data))
    .catch((error) => console.error(error));
}
const displayTemperature= (temperature) =>{
    console.log(temperature)
    city.innerHTML=temperature.name;
    country.innerHTML=temperature.sys.country;
    weathercondition.innerHTML=temperature.weather[0].main;
    temp.innerHTML=temperature.main.temp;
    humid.innerHTML=temperature.main.humidity;
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon=document.getElementById("image-icon")
    imgIcon.setAttribute('src',url)
    wind.innerHTML=temperature.wind.speed;
    pressure.innerHTML=temperature.main.pressure;
}
function digitaltime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let AMPM=' '
    if(hours>12){
      AMPM='PM';
    }
    else{
      AMPM='AM';
    }
    if (minutes<10){
        minutes="0"+minutes;
    }
    hours=hours %12 || 12;
    const time=`${hours}:${minutes}:${AMPM}`;
    currentTime.innerHTML = time
  }
  setInterval(digitaltime,1000);

function dayDate(){
  const today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const currentDay = days[today.getDay()];
  const currentMonth = months[today.getMonth()];
  const currentDate = today.getDate();
  const currentYear = today.getFullYear();
  daydate.innerHTML=currentMonth + " " + currentDate + ", " + currentYear + " " + currentDay;
  
}
dayDate()
