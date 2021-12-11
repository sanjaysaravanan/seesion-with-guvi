const handleSubmit = (e) => {
  e.preventDefault();
  const inputs = e.target.elements;
  // console.log(inputs);
  // let data = {};
  // for (i = 0; i < inputs.length; i++) {
  //   if (inputs[i].nodeName === "INPUT") {
  //     data[inputs[i].name] = inputs[i].value;
  //   }
  // }

  const check1 = document.getElementById("check1"),
    check2 = document.getElementById("check2"),
    check3 = document.getElementById("check3");
  const checkedArr = [check1.checked, check2.checked, check3.checked];
  console.log("Arr", checkedArr);
  if (checkedArr.filter((bool) => bool).length < 2)
    alert("Please select atleast two");
  // console.log(check1.checked);
  // console.log(data);
};

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

// const psd = document.getElementById("email");

// psd.addEventListener("", (e) => {
//   // console.log(e.target.value);

//   if (new Date() >= new Date(e.target.value)) {
//     alert("Choose a greater values");
//     psd.value = "";
//   }
// });

// click, change, submit( form ), onloaded, scroll, drag, keypress, keydown, keyup

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("change", function (e) {
  e.preventDefault();
  alert("This will clear the form");
  const inputs = document.getElementById("form").elements;
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName === "INPUT") {
      inputs[i].value = "";
    }
  }
});
