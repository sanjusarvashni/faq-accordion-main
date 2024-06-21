const answer = document.querySelectorAll(".answer");
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")
const hidden = document.querySelectorAll(".hidden")

for(let p = 0; p<plus.length; p++){
    plus[p].addEventListener("click", function (){
        plus[p].classList.add("hidden");
        minus[p].classList.remove("hidden");
        answer[p].classList.remove("hidden");
      
    });
}

for(let m = 0; m<minus.length; m++){
    minus[m].addEventListener("click", function(){
        plus[m].classList.remove("hidden");
        minus[m].classList.add("hidden");
        answer[m].classList.add("hidden");
    });
}