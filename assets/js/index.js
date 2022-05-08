// const currentDay = document.getElementById("currentDay");
// const mainSection = document.getElementById("main");

// current date
const renderDateSection = () => {
  renderDate = moment().format("dd Do MMM yyyy");
};

// first function
const onLoad = () => {};

const workingHours = (workingHours = [
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
]);

const renderTimeblocks = () => {};
// create and append timeblocks
const timeBlock = $("#time-blocks");
const renderTimeblock = () => {
  console.log(workingHours);
};

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

const onReady = () => {
  console.log(onReady);
  renderTimeblocks();
};

$(document).ready(onReady);
