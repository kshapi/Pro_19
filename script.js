const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const digital = document.querySelector('.digital');


const clock = ()=> {
  //New Date Object
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let secends = date.getSeconds();
  
  
  //Set Rotaion for hr min And secends
  hr.style.transform = `rotate(${hour * 30 + minutes/12}deg)`;
  min.style.transform = `rotate(${minutes * 6}deg)`;
  sec.style.transform = `rotate(${secends * 6}deg)`;
  
  
  //Updating Time...
  hour = hour > 12 ? hour -= 12 : hour;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  secends = secends < 10 ? '0' + secends : secends;
  
  //set Date...
  digital.innerText = `${hour}:${minutes}:${secends}`;
};
clock();
setInterval( clock, 1000);

//kshapi