// Q1
const cat = {};
cat.complain = () => console.log("Meow!");
cat.complain();

// Q2
const heading = document.querySelector("h3");

// Q3
heading.style.fontSize = "2em";

// Q4
heading.className = "subheading";

// Q5
const paragraphs = document.querySelectorAll("p");

// Q6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

const cats = [
  { name: "Blob", age: 10 },
  { name: "Harold" },
  { name: "Blurt", age: 21 }
];

// Q7
(catArray => {
  for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
})(cats);

// Q8
// Solution 1
(catArray => catArray.map(cat => `<h5>${cat.name}</h5>`))(cats);
// Solution 2
const catLoop = (catArray = []) => {
  let returnStr = "";
  for (var i = 0; i < catArray.length; i++) {
    returnStr += `<h5>${catArray[i].name}</h5>`;
  }
  return returnStr;
};
console.log(catLoop(cats));

// Q9
resultsContainer.innerHTML = catLoop(cats);

// Q10
const q10Element = document.querySelector("#q10");
const catLoop2 = (catArray = []) => {
  let returnStr = "";
  for (var i = 0; i < catArray.length; i++) {
    returnStr += `<div>
    <h5>${catArray[i].name}</h5>
    <p>${catArray[i].age || "Age unknown"}</p>
    </div>`;
  }
  return returnStr;
};
q10Element.innerHTML = catLoop2(cats);
