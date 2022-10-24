const temperateField=document.querySelector(".weather1");
// temperateField.innerText=22;
const cityField=document.querySelector(".weather2 p")
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 p img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector("#inputText")
const form=document.querySelector("form")

var target="Delhi";
let fetchData=async(target)=>{

    try{
        const url=`https://api.weatherapi.com/v1/current.json?key=f3a168ad98fc4e29bb855917222010&q=${target}`


        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
    
    
        updateDom(data.current.temp_c,data.location.name,data.current.condition.icon,data.current.condition.text,data.location.localtime);
    }
    catch{
 alert("Location not found")
    }
}


//this function dominate the Dom
function updateDom(temperature,city,emoji,text,time){
    temperateField.innerText=temperature+"°";
    cityField.innerText=city;
    emojiField.src=emoji;
    weatherField.innerText=text;
    const exactDate=time.split(" ")[0];
     dateField.innerText=exactDate;


}

fetchData(target);
 

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  target=searchField.value;
  fetchData(target);
})