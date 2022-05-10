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
  const currentDate = moment().format("dddd,  Do of MMMM YYYY");
  console.log(currentDate);
  $("#currentDay").append(currentDate);
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

const renderTimeblocks = () => {
  // create and append timeblocks
  const timeBlocks = $("#time-blocks");
  const renderTimeblock = (workingHours) => {
    const timeBlock = `<div class="d-flex flow-row ${getName(workingHours.key)}>
            <div class="col text-center">${workingHours.label}</div>
            <textarea data-info=${workingHours.key}
            class="col-7 table-bordered border-primary">${calenderQuery(
              workingHours.key
            )}</textarea>
            <div class="col text-center my-1">
                <button type="button" data-hour=${workingHours.key}>
                    Save
                </button>
            </div>
            </div>`;

    timeBlocks.append(timeBlock);
  };

  const saveButton = (event) => {
    const button = $(event.target);
  };

  workingHours.forEach(renderTimeblock);
};

const onReady = () => {
  console.log("onReady");
  renderDateSection();
  renderTimeblocks();
};

// $("#currentDay").text(renderDateSection);
$(document).ready(onReady);
