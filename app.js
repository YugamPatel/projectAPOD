let url = "https://api.nasa.gov/planetary/apod/" ;
let key = "R51tX8upMgj2i0JRueN2v0SWt65HaWWISvdXwDGn" ;
let img =  document.createElement("img") ;
let imgBody = document.querySelector("#imagePannel") ;
let date = document.querySelector(".date") ;
let description = document.querySelector(".description") ;
let title = document.querySelector(".loadingT") ;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

let fet = fetch("https://api.nasa.gov/planetary/apod?api_key=R51tX8upMgj2i0JRueN2v0SWt65HaWWISvdXwDGn").then((res) =>{
    return res.json() ;
}).then( value => {
    console.dir(value) ;
})


let makeFetch = async () => {
    let value = await fetch("https://api.nasa.gov/planetary/apod?api_key=R51tX8upMgj2i0JRueN2v0SWt65HaWWISvdXwDGn") ;
    let object = await value.json() ;
    console.dir(object) ;
    img.src = object.hdurl ;
    img.classList.add("imageProp") ;
    imgBody.appendChild(img) ;
    date.innerHTML = object.date ;
    description.innerHTML = object.explanation ;
    title.innerText = object.title ;
}

document.querySelector(".type").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          console.log(
            `Index : ${index} Iteration : ${iteration}  ${event.target.dataset.value[index]}`
          );
          return event.target.dataset.value[index];
        }
        console.log(
          `Index : ${index} Iteration : ${iteration}  ${
            letters[Math.floor(Math.random() * 26)]
          }`
        );
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 4;
  }, 50);
};

makeFetch() ;