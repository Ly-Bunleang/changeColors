const btn = document.querySelector(".btn");
const colors = ["red", "blue", "purple", "green", "yellow"];
const randomNumber =()=>{
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function(){
    const useRandom = randomNumber();
    document.body.style.background = colors[useRandom];
});
