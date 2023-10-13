var members = [
  { id: 1, name: "Albert", year: 1879, score: 1955 },
  { id: 2, name: "Isaac", year: 1643, score: 1727 },
  { id: 3, name: "Galileo", year: 1564, score: 1642 },
  { id: 4, name: "Marie", year: 1867, score: 1934 },
  { id: 5, name: "Johannes", year: 1571, score: 163 },
  { id: 6, name: "Nicolaus", year: 1473, score: 1543 },
  { id: 7, name: "Max", year: 1858, score: 1947 },
  { id: 8, name: "Katherine", year: 1898, score: 1979 },
  { id: 9, name: "Ada", year: 1815, score: 1852 },
  { id: 10, name: "Sarah E.", year: 1855, score: 1905 },
  { id: 11, name: "Lise", year: 1878, score: 1968 },
  { id: 12, name: "Hanna", year: 1829, score: 1909 },
];

// get button
var tableElm = document.querySelector("tbody");
var buttonReset = document.querySelector("#reset");
var buttonFilter = document.querySelector("#score");
var buttonSort = document.querySelector("#sort");
var buttonTotal = document.querySelector("#total");
var resultElm = document.querySelector(".result");

// reset
var backData = members;
buttonReset.onclick = function () {
  members = backData;
  var sortId = members.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
  renderElm(sortId);
  resultElm.innerText = " : 0";
};

// reduce
buttonTotal.onclick = function () {
  var result = members.reduce((total, current) => {
    return total + current.score;
  }, 0);
  resultElm.innerText = ` : ${result}`;
};

// filter
buttonFilter.onclick = function () {
  var largeScore = members.filter((member) => member.score > 1900);
  members = largeScore;
  renderElm(members);
  var result = members.reduce((total, current) => {
    return total + current.score;
  }, 0);
  resultElm.innerText = ` : ${result}`;
};

// sort
buttonSort.onclick = function () {
  var sortYear = members.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  renderElm(sortYear);
};

// map
function renderElm(members) {
  var memberElm = [];
  members.map(function (member) {
    memberElm.push(
      `<tr>
        <td>${member.id}</td>
        <td>${member.name}</td>
        <td>${member.year}</td>
        <td>${member.score}</td>
      </tr>`
    );
  });
  tableElm.innerHTML = memberElm.join("");
}
renderElm(members);

// part 2
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// some
const isAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
console.log({ isAdult });

// every
const allAdults = people.every((person) => new Date().getFullYear() - person.year >= 19);
console.log({ allAdults });
