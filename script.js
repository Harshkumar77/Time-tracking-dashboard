var jsonOutput = fetch("data.json").then((res) => res.json());
// jsonOutput.then((data) => console.log(data));

const listElement = document.querySelector(".list");

jsonOutput.then((data) => {
  for (t in data) {
    console.log(data[t]);
    addHTML(
      data[t].title,
      data[t].timeframes.weekly.current,
      data[t].timeframes.weekly.previous,
      "Week"
    );
  }
});

function addHTML(title, cur, prev, time) {
  var ht =
    ' <div class="big-card ' +
    title +
    '"> <div class="icon rad"> <img src="images/' +
    title +
    '.svg" alt="" /> </div> <div class="rad card"> <h5>' +
    title +
    "</h4> <div>···</div> <h2>" +
    cur +
    "hrs</h2> <h5>Last " +
    time +
    " - " +
    prev +
    "hrs</h5> </div> </div> ";
  listElement.innerHTML = listElement.innerHTML + ht;
}
