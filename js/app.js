"use strict"
import API_KEY from "./config";


const apiKey = API_KEY;
const inputBtn = document.querySelector("#input-btn");
const zipcode = document.querySelector("#zipcode");
const locationName = document.querySelector("#location-name");
const state = document.querySelector("#state");
const footer = document.querySelector("#footer");
const footerSave = document.querySelector("#footer-save");
const footerClose = document.querySelector("#footer-close");
const weatherContainer = document.querySelector("#weather-container");
const loader = document.querySelector("#loader");
const description = document.querySelector("#description");
const low = document.querySelector("#low-temp");
const high = document.querySelector("#high-temp");
const weatherIcon = document.querySelector("#weather-icon");
let key = '';


window.onload = async () =>{
   const savedZip = localStorage.getItem("zip_code");
   console.log(savedZip)
   if(savedZip !== null){

    zipcode.value = savedZip
   await fetchWeather(true)
   }
   return
};
const toggleFooter = (open, zipcode = '') =>{
        if(open){
        document.querySelector("#footerZip").textContent = zipcode
        gsap.to(footer, { css:{bottom: '0'}, ease:"power3.inOut", duration: 1})
        } else if(!open){
            gsap.to(footer, { css:{bottom: '-100%'}, ease:"power3.inOut", duration: 1, delay: .5})
            document.querySelector("#footerZip").textContent = ""
        }
        return;
}

const fetchWeather = async (initial) =>{
    loader.style.display = "flex"

    console.log(zipcode.value);
    try{
        const locationresponse =  await fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zipcode.value}`,
            {
                method: "GET"
            }
            );
        const data = await locationresponse.json();

        key = data[0].Key;
        locationName.textContent = data[0].LocalizedName + ", ";
        state.textContent = data[0].AdministrativeArea.EnglishName;
        const forecastResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${apiKey}`,
            {
                method: "GET"
            }
        );
        const forecastData = await forecastResponse.json();

        console.log(forecastData.DailyForecasts[0])

        loader.style.display = "none";
        low.textContent = forecastData.DailyForecasts[0].Temperature.Minimum.Value;
        high.textContent = forecastData.DailyForecasts[0].Temperature.Maximum.Value;
        description.textContent = forecastData.DailyForecasts[0].Day.IconPhrase;
        const iconNum = forecastData.DailyForecasts[0].Day.Icon < 10 ?  "0" + forecastData.DailyForecasts[0].Day.Icon : forecastData.DailyForecasts[0].Day.Icon;
         weatherIcon.src = `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`
        if(!initial){
            toggleFooter(true, zipcode.value);
        }
        weatherAnimation();
    } catch (e){
        throw new Error(e.message);
    }
}
const saveZip = () =>{
    localStorage.setItem('zip_code', key);
    toggleFooter(false);
}

const weatherAnimation = () =>{
    weatherContainer.style.display = "block"
    gsap.fromTo(weatherContainer, {y: -25, opacity: 0}, { y: 0, opacity: 1, ease: "power3.inOut", duration: 1})
}

inputBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetchWeather(false);
});
footerSave.addEventListener("click", saveZip);
footerClose.addEventListener('click',() => toggleFooter(false));