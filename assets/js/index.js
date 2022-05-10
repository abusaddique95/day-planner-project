// array
const workingHours = [
  {
    label: "9AM",
    key: 9,
  },
  {
    label: "10AM",
    key: 10,
  },
  {
    label: "11AM",
    key: 11,
  },
  {
    label: "12AM",
    key: 12,
  },
  {
    label: "1PM",
    key: 13,
  },
  {
    label: "2PM",
    key: 14,
  },
  {
    label: "3PM",
    key: 15,
  },
  {
    label: "4PM",
    key: 16,
  },
  {
    label: "5PM",
    key: 17,
  },
];

// current date
const renderDateSection = () => {
  return moment().format("ddd Do MMM YYYY");
  $("#currentDay").append(currentDate);
};

$("#currentDay").text(renderDateSection);

// local storage
const readFromLocalStorage = (key, defaultValue) => {
    // get from LS using key name
    const dataFromLS = localStorage.getItem(key);
    // parse data from LS
    const parsedData = JSON.parse(dataFromLS);
    if (parsedData) {
      return parsedData;
    } else {
      return defaultValue;
    }
  };
  const writeToLocalStorage = (key, value) => {
    // convert value to string
    const stringifiedValue = JSON.stringify(value);
    // set stringified value to LS for key name
    localStorage.setItem(key, stringifiedValue);

// first function
const onLoad = () => {};



const renderTimeblocks = () => {};

// create and append timeblocks
const timeBlock = $("#time-blocks");

const renderTimeblock = () => {
  console.log(workingHours);
};
workingHours.forEach(renderTimeblock);

const timeblock = `<div class="d-flex flow-row">
<div class="col text-center">
    9am
</div>
<div class="col-7 table-bordered border-primary">
    finish js homework
</div>
<div class="col text-center my-1">
    <button>
        Save
    </button>13
</div>
</div>`;
workingHours.forEach(renderTimeblock);

const saveButton = (event) => {
    const button = $(event.target);
    

}

const getName = (workingHours) => {
    const currentHourBlock = moment().hour();
    // if statement for past, present, future.

    if (workingHours === currentHourBlock) {
        return "present";
    }

        if (workingHours > currentHourBlock) {
return "future"
    }
    else return "past"
}

const onReady = () => {
  console.log(onReady);
  renderTimeblocks();
};

$(document).ready(onReady);
