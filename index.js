/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


const freelancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

const averageRate = getAverageRate(freelancers);

function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  const rate = PRICE_RANGE.min + Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return {
    name: name,
    occupation: occupation,
    rate: rate
  };
}

function getAverageRate(freelancers) {
  let total = 0;

  for (const freelancer of freelancers) {
    total += freelancer.rate;
  }

  let average = total / freelancers.length;

  return average;
}

function Freelancer(freelancer) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span>${freelancer.name}</span>
    <span>${freelancer.occupation}</span>
    <span>$${freelancer.rate}</span>
  `;

  return li;
}

function Freelancers(freelancers) {
  const ul = document.createElement("ul");
  ul.classList.add("freelancers");

  for (const freelancer of freelancers) {
    const li = Freelancer(freelancer);
    ul.appendChild(li);
  }

  return ul;
}

function AverageRate(averageRate) {
  const p = document.createElement("p");

  p.textContent = `The average rate is $${averageRate.toFixed(2)}.`;

  return p;
}

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <Freelancers></Freelancers>
  `;

  const averageSection = app.querySelector("AverageRate");
  const freelancerSection = app.querySelector("Freelancers");

  averageSection.replaceWith(AverageRate(averageRate));
  freelancerSection.replaceWith(Freelancers(freelancers));
}

render();
