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
  let currentDate = `<p id="currentDay" class="lead"></p>`;
  $("jumbotron").append(currentDate);

  //return moment().format("ddd Do MMM YYYY");
};

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

const calenderQuery = (workingHours) => {};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);
  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

const renderTimeblocks = () => {
  // create and append timeblocks
  const timeBlock = $("#time-blocks");

  const getName = (workingHours) => {
    const currentHourBlock = moment().hour();
    // if statement for past, present, future.

    if (workingHours === currentHourBlock) {
      return "present";
    }

    if (workingHours > currentHourBlock) {
      return "future";
    }
    return "past";
  };

  const renderTimeblock = (workingHours) => {
    console.log("working hours " + JSON.stringify(workingHours));

    const timeBlock = `<div class="d-flex flow-row ${getName(workingHours)}>
            <div class="col text-center">${workingHours.label}</div>
            <textarea data-info=${workingHours.key}
            class="col-7 table-bordered border-primary">${calenderQuery(
              workingHours.key
            )}
                </textarea>
            <div class="col text-center my-1">
                <button>
                    Save
                </button>
            </div>
            </div>`;

    timeBlock.addEventListener("click", saveButton);
  };

  const saveButton = (event) => {
    const button = $(event.target);
  };

  workingHours.forEach(renderTimeblock);
};

const onReady = () => {
  console.log("onReady");
  renderTimeblocks();
};

$("#currentDay").text(renderDateSection);
$(document).ready(onReady);
