const temprature=document.querySelector('.weather1')
const localTime=document.querySelector('.weather2 span')
const emojiField=document.querySelector(".weather3 img")
const weather=document.querySelector('.weather2 p')
const field=document.querySelector('.weather3 span')
const serachField=document.querySelector('.search')
const form=document.querySelector('form')

form.addEventListener('submit',search);
let target="Delhi"
const fetchData= async(target)=>
{
    const url=`http://api.weatherapi.com/v1/current.json?key=fe5b405fab384f208aa62753222512&q=${target}`;
    const response=await fetch(url);
    const data= await response.json()
    console.log(data)
    const{
        current:{
            temp_c,
            condition:{
                text,icon
            },
        },
        location:{name,localtime},
    }=data;
    
    updateDom(temp_c,name,icon,text,localtime)
    
};
function updateDom(tempratures,city,emoji,text,time)
{
    temprature.innerText=tempratures
    emojiField.src=emoji
    weather.innerText=city
    field.innerText=text
    const exactTime=time.split(" ")[1];
    const exactDate=time.split(" ")[0];
    console.log(exactDate)
    const exactDay=getfuulday(new Date(exactDate).getDay())
    console.log(exactDay)
    localTime.innerText=`${exactTime} - ${exactDay} ${exactDate}`

            
}

fetchData(target)
function search(e)
{
    e.preventDefault()
    target=serachField.value;
    fetchData(target)
}
function getfuulday(num)
{
    switch(num){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thrusday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default :
        return "Error While Loading"
    }
}