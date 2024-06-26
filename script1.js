import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyACsupPzb4SFfD1HoGXxqVFwEXQua2_Rww";
// Reminder: This should only be for local testing

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

let search = document.getElementById('search-input');
let button = document.getElementById('button');
let data = '';
document.addEventListener('keydown', (event) => {
  //console.log(event.keyCode);
  if (event.keyCode == 13) {
    data = search.value;
    // console.log(data);
    operation();
    search.value = '';
  }
});
button.addEventListener('click', () => {
  data = search.value;
  // console.log(data);
  operation();
  search.value = '';
});


// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function operation() {
  let prompt = data;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const res = response.text();
  let area = document.getElementById('information');
  area.value = prompt;
  let area1 = document.getElementById('information1');
  area1.value = res;
  //console.log(res);
}







