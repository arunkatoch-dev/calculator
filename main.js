let numBtns = document.querySelectorAll(".numbers");
let inputOperators = document.querySelectorAll(".operators");
let inputVal = document.querySelector("#inputVal");
let calculateBtn = document.querySelector(".calculateBtn");
let userInput = "";

window.addEventListener("load", (e) => {
  e.preventDefault();
  userInput = localStorage.getItem("result");
  inputVal.value = localStorage.getItem("result");
});

document.addEventListener("keydown", (e) => {
  localStorage.setItem("result", userInput);
  switch (e.key) {
    case "Enter":
      if (userInput) {
        userInput = String(eval(userInput));
        localStorage.setItem("result", userInput);
        inputVal.value = localStorage.getItem("result");
      } else {
        window.alert(`Plz enter valid input to calculate.`);
      }
      break;
    case "Backspace":
      userInput = userInput.substring(0, userInput.length - 1);
      localStorage.setItem("result", userInput);
      inputVal.value = localStorage.getItem("result");
      break;
    case "0":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "1":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "2":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "3":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "4":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "5":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "6":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "7":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "8":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "9":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "+":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "-":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "*":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "/":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case "%":
      userInput += e.key;
      inputVal.value = userInput;
      break;
    case ".":
      userInput += e.key;
      inputVal.value = userInput;
      break;

    default:
      inputVal.value = userInput;
      break;
  }
});

Array.from(numBtns).forEach((num) => {
  num.addEventListener("click", (e) => {
    userInput += e.target.value;
    inputVal.value = userInput;
  });
});

Array.from(inputOperators).forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (e.target.value === "AC") {
      userInput = "";
      localStorage.setItem("result", userInput);
      inputVal.value = localStorage.getItem("result");
    } else if (e.target.value === "C") {
      userInput = userInput.substring(0, userInput.length - 1);
      localStorage.setItem("result", userInput);
      inputVal.value = localStorage.getItem("result");
    } else {
      userInput += e.target.value;
      localStorage.setItem("result", userInput);
      inputVal.value = localStorage.getItem("result");
    }
  });
});

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userInput) {
    userInput = String(eval(userInput));
    localStorage.setItem("result", userInput);
    inputVal.value = localStorage.getItem("result");
  } else {
    window.alert(`Plz enter valid input to calculate.`);
  }
});
