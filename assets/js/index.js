const currentDay = document.getElementById("currentDay");
const mainSection = document.getElementById("main");

// current date
const renderDateSection = () => {
  renderDate = moment().format("dd Do MMM yyyy");
};

console.log(renderDate);

// first function
const onLoad = () => {};

$(window).on("load", onLoad);
