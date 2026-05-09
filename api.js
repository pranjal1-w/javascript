const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

const death = document.querySelector("#btn");

const getfacts = async () => {
    let response = await fetch(url);
    let data = await response.json();

    let dates = Object.keys(data.cases);
    let firstDate = dates[0];

    console.log("First Date:", firstDate);
    console.log("Cases:", data.cases[firstDate]);

    death.innerText = firstDate;  // button text change
};

death.addEventListener("click", getfacts);

getfacts();