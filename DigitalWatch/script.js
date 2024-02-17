const hourEl =document.getElementById("hour")
const minEl =document.getElementById("minutes")
const SecEl =document.getElementById("seconds")
const ampmEl =document.getElementById("ampm")


function updateClock(){
    let hr = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm ="AM"

    if(hr > 12){
        hr = hr - 12
        ampm ="PM"
    }

    hr= hr < 10 ? "0" + hr : hr;
    min= min < 10 ? "0" + min : min;
    sec= sec < 10 ? "0" + sec : sec;

    hourEl.innerHTML =hr;
    minEl.innerHTML =min;
    SecEl.innerHTML=sec;
    ampmEl,(innerText = ampm);
    setTimeout(()  => {
        updateClock()
    },1000)
}
updateClock()