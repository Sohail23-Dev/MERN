// const searchWithDelay= (fn, delay)=>{
//     let timerID;
//     return function(...args){
//         clearTimeout(timerID);
//         timerID = setTimeout(()=> fn(...args),delay);
//     }
// }
// const searchWithDebounce = searchWithDelay(search, 5000);

// function search(query){
//     console.log(`Search for ${query}`)
// }

// searchWithDebounce("S");
// searchWithDebounce("So");
// searchWithDebounce("Soha");
// searchWithDebounce("Sohail");

const throtling = (fn, delay) => {
  let lastCall = 0;
  return function (...args) {
    let currentCall = Date.now();
    if (currentCall - lastCall <= delay) {
      return;
    } else {
      lastCall = currentCall;
      fn(...args);
    }
  };
};
const searchwithThrotle = throtling(search, 1000);
function search(query) {
  console.log(`Searching for ${query}`);
}

searchwithThrotle("So");
searchwithThrotle("Soh");
