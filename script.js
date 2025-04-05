document.querySelectorAll('input[name="price-group"]').forEach((elem) => {
  elem.addEventListener("change", function (event) {
    console.log(event.target.value, event.target.checked);
    let item = event.target.value;
    let checked = event.target.checked;
    changeColorAndDropdown(item, checked);
  });
});

for (let card of document.getElementsByClassName("price-card")) {
  card.addEventListener("click", (event) =>
    document.querySelector(`input[value="${card.id}"]`).click()
  );
}

function changeColorAndDropdown(item, checked) {
  let card;
  let dropdown;
  if (item == "card-1") {
    card = document.getElementById("card-1");
    dropdown = document.getElementById("dropdown-1");
  } else if (item == "card-2") {
    card = document.getElementById("card-2");
    dropdown = document.getElementById("dropdown-2");
  } else {
    card = document.getElementById("card-3");
    dropdown = document.getElementById("dropdown-3");
  }

  for (let elemId of ["dropdown-1", "dropdown-2", "dropdown-3"]) {
    document.getElementById(elemId).classList.remove("buy-options-show");
    document.getElementById(elemId).classList.add("buy-options-hide");
  }

  for (let elemId of ["card-1", "card-2", "card-3"]) {
    document.getElementById(elemId).classList.remove("price-card-active");
    document.getElementById(elemId).classList.add("price-card-unactive");
  }

  card.classList.remove("price-card-unactive");
  card.classList.add("price-card-active");

  dropdown.classList.add("buy-options-show");
  dropdown.classList.remove("buy-options-hide");
}
