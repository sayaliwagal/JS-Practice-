/* challenge: 1 
your age in Days */

function ageInDays() {
  let birthyear = prompt("WHat year where you born ... My Friend");
  let ageInDayss = (2020 - birthyear) * 365;
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('You Are ' + ageInDayss + ' days old');
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  // h1.appendChild(textAnswer);
  document.getElementById("result").appendChild(h1);
  // document.getElementById('result').appendChild(h1);
  // console.log(ageInDayss);
}
  
function reset() {
  document.getElementById("ageInDays").remove();
}