const form = document.getElementById("fizzBuzz");
const input = document.getElementById("fizzBuzzValue")
const smbtn = document.getElementById("submitButton")
const submitHandler = function(event) {
  //prevents form from reloading
  event.preventDefault ()
  //cleans up results
  results.innerHTML = ''
  fizzorbuzz.innerHTML = ''
  //populates results again
  for(let i = 1; i <= input.value; i++){
 
    const newLi = document.createElement("li")
    newLi.innerText = i;
    results.append(newLi)



    
     if (i % 3 === 0) {
      newLi.innerText = i + " Fizz"
     }
     if (i % 5 === 0) {
      newLi.innerText = i + " Buzz"
     }
     if (i % 15 === 0) {
      newLi.innerText = i + " FizzBuzz"
     } 
      
  } 

};



smbtn.onclick = submitHandler;