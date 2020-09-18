$(document).ready(async () => {
  const $firstTable = $("#first-table");
  const $secondTable = $("#second-table");
  let data = await $.getJSON("/data.json")
    .done((response) => response)
    .fail((error) => console.log(error));
  for (let i = 0; i < 25; i++) {
    let millions = (data[i].population / 1000000).toFixed(1);
    $firstTable.append(
      `<tr>
        <td>${data[i].name}</td>
        <td>${millions}M</td>
      </tr>`
    );
  }
  for (let i = 25; i < 50; i++) {
    let millions = (data[i].population / 1000000).toFixed(1);
    $secondTable.append(
      `<tr>
        <td>${data[i].name}</td>
        <td>${millions}M</td>
      </tr>`
    );
  }
  let $exitButton = $("#exit-button");
  let $viewMapButton = $("#see-map-button");
  let $overlay = $("#overlay");
  $exitButton.on("click", () => {
    $overlay.addClass("hide");
  });
  $viewMapButton.on("click", () => {
    $overlay.addClass("hide");
  });
});
