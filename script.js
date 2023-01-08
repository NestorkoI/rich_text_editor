const btnBoldAction = document.getElementById("font-weight-bold");
const btnItalAction = document.getElementById("font-style-italick");
const btnTextDecor = document.getElementById("text-decor-underline");
const btnTextDecorStrike = document.getElementById("text-decor-strike");
const textAlLeftAction = document.getElementById("text-align-left");
const textAlCenterAction = document.getElementById("text-align-center");
const textAlRightAction = document.getElementById("text-align-right");
const fontFamilyArray = document.querySelectorAll(".font");
const fontsArray = document.querySelectorAll(".dropdown-item");
const display = document.querySelector(".screen-container");
const colorOptions = document.querySelectorAll(".color-square");
const backgroundOptions = document.querySelectorAll(".background-square");
const imgOptions = document.querySelectorAll(".imgStyle");
const imgInput = document.getElementById("formFileSm");
const signinAction = document.getElementById("signinAction");
const signinForm = document.getElementById("signinForm");
const errorEmptyInput = document.querySelector(".error-emptyInputs");
const errorIncorrectInput = document.querySelector(".error-messageInputs");
const errorInvalidTable = document.querySelector(".error-invalidTable");
const editTextareaAction = document.getElementById("editTextareaAction");
const secondContainer = document.getElementById("second-container");
const firstContainer = document.getElementById("first-container");
const copyTextArea = document.getElementById("copy-text");
const saveAction = document.getElementById("saveBtn");
const createTableAction = document.getElementById("createTableBtn");
const createListAction = document.querySelector(".list-create-btn");
const createOlListAction = document.querySelector(".ol-create-btn");
const resetTableAction = document.getElementById("resetTableBtn");
const resetTablOlAction = document.querySelector(".ol-reset-btn");
const resetTableListAction = document.querySelector(".list-reset-btn");
const signoutAction = document.getElementById("signoutAction");

signoutAction.addEventListener("click", () => {
  // toggle LOCK icon button
  const signInBtn = document.querySelector(
    'div[data-bs-target="#examplesModal"]'
  );
  signInBtn.style.display = "inline-block";

  const signOutBtn = document.querySelector(
    'div[data-bs-target="#signoutModal"]'
  );
  signOutBtn.style.display = "none";

  editTextareaAction.disabled = true;
});

signinAction.addEventListener("click", (event) => {
  event.preventDefault();
  let login = signinForm[0].value;
  let pass = signinForm[1].value;

  if (login == "" && pass == "") {
    signinForm.classList.add("invalid");
    errorEmptyInput.style.display = "unset";
  } else if (login !== "admin" && pass !== "admin") {
    signinForm.classList.add("invalid");
    errorEmptyInput.style.display = "none";
    errorIncorrectInput.style.display = "unset";
  } else {
    editTextareaAction.disabled = false;
    const signInBtn = document.querySelector(
      'div[data-bs-target="#examplesModal"]'
    );
    signInBtn.style.display = "none";
    signinForm.reset();
    const signOutBtn = document.querySelector(
      'div[data-bs-target="#signoutModal"]'
    );
    signOutBtn.style.display = "inline-block";
  }
});

// RESET BUTTONS

resetTableListAction.addEventListener("click", (event) => {
  const form = document.querySelector('form[name="list_settings"]');
  form.reset();
});

resetTablOlAction.addEventListener("click", (event) => {
  const form = document.querySelector('form[name="list_settings_ol"]');
  form.reset();
});

resetTableAction.addEventListener("click", (event) => {
  const form = document.querySelector('form[name="table_settings"]');
  form.reset();
});

function createListOlElement() {
  const listOlForm = document.querySelector('form[name="list_settings_ol"]');
  const olElement = document.createElement("ol");

  for (let i = 0; i < listOlForm["li"].value; i++) {
    const lisOlElement = document.createElement("li");
    lisOlElement.textContent = "item " + i;
    olElement.appendChild(lisOlElement);
  }

  olElement.type = listOlForm["type"].selectedOptions[0].value;

  copyTextArea.value = copyTextArea.value + olElement.outerHTML;
}

function createListElement() {
  const listForm = document.querySelector('form[name="list_settings"]');
  const ulElement = document.createElement("ul");

  for (let i = 0; i < listForm["li"].value; i++) {
    const listElement = document.createElement("li");
    listElement.textContent = "item " + i;
    listElement.style.listStyleType = listForm["type"].selectedOptions[0].value;
    ulElement.appendChild(listElement);
  }
  copyTextArea.value = copyTextArea.value + ulElement.outerHTML;
}

function createTableElement() {
  const form = document.querySelector('form[name="table_settings"]');
  const tableElement = document.createElement("table");

  for (let i = 0; i < form["tr_count"].value; i++) {
    const tableRow = document.createElement("tr");

    for (let j = 0; j < form["td_count"].value; j++) {
      const tableData = document.createElement("td");
      tableData.textContent = "td";
      tableData.style.width = form["td_width"].value + "px";
      tableData.style.height = form["td_height"].value + "px";
      tableData.style.borderWidth = form["table_border_width"].value + "px";
      tableData.style.borderStyle =
        form["border_type"].selectedOptions[0].value;
      tableData.style.borderColor =
        form["border_color"].selectedOptions[0].value;
      tableRow.appendChild(tableData);
    }

    tableElement.appendChild(tableRow);
  }

  copyTextArea.value = copyTextArea.value + tableElement.outerHTML;
}

function isTableInputsValid() {
  const form = document.querySelector('form[name="table_settings"]');
  return (
    form["tr_count"].value !== "" &&
    form["td_count"].value !== "" &&
    form["td_width"].value !== "" &&
    form["td_height"].value !== "" &&
    form["table_border_width"].value !== "" &&
    form["border_type"].selectedOptions[0].value !== "" &&
    form["border_color"].selectedOptions[0].value !== ""
  );
}

createListAction.addEventListener("click", () => {
  const form = document.querySelector('form[name="list_settings"]');
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (
      element.value == "" ||
      (element.selectedOptions && element.selectedOptions[0].value == "")
    ) {
      element.style.borderColor = "red";
    } else {
      element.style.borderColor = "gray";
    }
  }

  if (isTableInputsValid()) {
    errorInvalidTable.style.display = "none";
    createTableElement();
  } else {
    errorInvalidTable.style.display = "inline-block";
  }
});

createOlListAction.addEventListener("click", () => {
  const form = document.querySelector('form[name="list_settings_ol"]');
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (
      element.value == "" ||
      (element.selectedOptions && element.selectedOptions[0].value == "")
    ) {
      element.style.borderColor = "red";
    } else {
      element.style.borderColor = "gray";
    }
  }

  if (isTableInputsValid()) {
    errorInvalidTable.style.display = "none";
    createTableElement();
  } else {
    errorInvalidTable.style.display = "inline-block";
  }
});

createTableAction.addEventListener("click", () => {
  const form = document.querySelector('form[name="table_settings"]');
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (
      element.value == "" ||
      (element.selectedOptions && element.selectedOptions[0].value == "")
    ) {
      element.style.borderColor = "red";
    } else {
      element.style.borderColor = "gray";
    }
  }

  if (isTableInputsValid()) {
    errorInvalidTable.style.display = "none";
    createTableElement();
  } else {
    errorInvalidTable.style.display = "inline-block";
  }
});

saveAction.addEventListener("click", (event) => {
  secondContainer.style.display = "none";
  firstContainer.style.display = "block";

  display.innerHTML = copyTextArea.value;
});

editTextareaAction.addEventListener("click", (event) => {
  firstContainer.style.display = "none";

  secondContainer.style.display = "block";
  copyTextArea.textContent = display.innerHTML;
});

imgInput.addEventListener("change", (event) => {
  let file = event.target.files[0];
  let url = URL.createObjectURL(file);
  display.style.backgroundImage = "url('" + url + "')";
});

//   Change text BOLD
function changeTextToBold(event) {
  let changeBold = document.querySelector(".screen-container");

  if (
    changeBold.style.fontWeight == "" ||
    changeBold.style.fontWeight == "normal"
  ) {
    changeBold.style.fontWeight = "bold";
  } else {
    changeBold.style.fontWeight = "normal";
  }
}

// Change text ITALICK
function changeTextItalick(event) {
  let changeItalics = document.querySelector(".screen-container");

  if (
    changeItalics.style.fontStyle == "" ||
    changeItalics.style.fontStyle == "normal"
  ) {
    changeItalics.style.fontStyle = "italic";
  } else {
    changeItalics.style.fontStyle = "";
  }
}

// Change text decoration
function changeTextDecor(event) {
  let changeDec = document.querySelector(".screen-container");
  if (changeDec.style.textDecoration == "") {
    changeDec.style.textDecoration = "underline";
  } else {
    changeDec.style.textDecoration = "";
  }
}

function changeTextStrike(event) {
  let changeDecStrike = document.querySelector(".screen-container");
  if (changeDecStrike.style.textDecoration == "") {
    changeDecStrike.style.textDecoration = "line-through";
  } else {
    changeDecStrike.style.textDecoration = "";
  }
}

// Change text Align left
function changeTextAlign(event) {
  let changeAlingLeft = document.querySelector(".screen-container");
  if (changeAlingLeft.style.textAlign == "") {
    changeAlingLeft.style.textAlign = "left";
  } else {
    changeAlingLeft.style.textAlign = "";
  }
}

// Change text Align center
function changeAlCenter(event) {
  let changeAlingCenter = document.querySelector(".screen-container");

  if (changeAlingCenter.style.textAlign !== "center") {
    changeAlingCenter.style.textAlign = "center";
  }
}

// Change text Align right
function changeAlRight(event) {
  let changeAlingRight = document.querySelector(".screen-container");

  if (changeAlingRight.style.textAlign !== "right") {
    changeAlingRight.style.textAlign = "right";
  }
}

for (let i = 0; i < fontFamilyArray.length; i++) {
  const changeF = fontFamilyArray[i];
  changeF.addEventListener("click", (event) => {
    const selectedBgColor = event.target.innerText;
    display.style.fontFamily = selectedBgColor;
  });
}

for (let i = 0; i < fontsArray.length; i++) {
  const elements = fontsArray[i];
  elements.addEventListener("click", changeFontSize);
}

function changeFontSize(event) {
  display.style.fontSize = event.target.innerText;
}

for (let i = 0; i < imgOptions.length; i++) {
  const changeImg = imgOptions[i];

  changeImg.addEventListener("click", (event) => {
    const selectedImg = event.target.classList[0];
    if (selectedImg == "img1") {
      display.style.backgroundImage = "url('./img/1.jpg')";
    }
    if (selectedImg == "img2") {
      display.style.backgroundImage = "url('./img/2.jpg')";
    }
    if (selectedImg == "img3") {
      display.style.backgroundImage = "url('./img/3.jpg')";
    }
    if (selectedImg == "img4") {
      display.style.backgroundImage = "url('./img/4.jpg')";
    }
    if (selectedImg == "img5") {
      display.style.backgroundImage = "url('./img/5.jpg')";
    }
    if (selectedImg == "img6") {
      display.style.backgroundImage = "url('./img/6.jpg')";
    }
    if (selectedImg == "img7") {
      display.style.backgroundImage = "url('./img/7.jpg')";
    }
    if (selectedImg == "img8") {
      display.style.backgroundImage = "url('./img/8.jpg')";
    }
    if (selectedImg == "img9") {
      display.style.backgroundImage = "url('./img/9.jpg')";
    }
  });
}

for (let i = 0; i < colorOptions.length; i++) {
  const element = colorOptions[i];
  element.addEventListener("click", (event) => {
    const selectedColor = event.target.classList[1];
    display.style.color = selectedColor;
  });
}

for (let i = 0; i < backgroundOptions.length; i++) {
  const chBgColor = backgroundOptions[i];
  chBgColor.addEventListener("click", (event) => {
    const selectedBg = event.target.classList[1];
    display.style.backgroundColor = selectedBg;
  });
}

createOlListAction.addEventListener("click", createListOlElement);
createListAction.addEventListener("click", createListElement);
textAlRightAction.addEventListener("click", changeAlRight);
textAlCenterAction.addEventListener("click", changeAlCenter);
textAlLeftAction.addEventListener("click", changeTextAlign);
btnTextDecor.addEventListener("click", changeTextDecor);
btnTextDecorStrike.addEventListener("click", changeTextStrike);
btnItalAction.addEventListener("click", changeTextItalick);
btnBoldAction.addEventListener("click", changeTextToBold);
