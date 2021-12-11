console.log(window);
console.log(document);

// XMLHTTPRequest
var request = new XMLHttpRequest();
request.open("GET", "https://dog.ceo/api/breeds/list/all", true);

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  const divEle = document.getElementById("root-dogs");
  Object.keys(data.message).map((dogName) => {
    divEle.appendChild(DogBox(dogName));
  });
};

request.send();

// DOM Manipualtion
const fetchOneDog = (name) => {
  var oneDog = document.getElementById("one-dog");
  var x = document.createElement("img");
  x.style.cssText = "height:500px;width:500px";
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      x.src = data.message;
    });
  oneDog.innerHTML = "";
  oneDog.appendChild(x);
};

const DogBox = (name) => {
  var y = document.createElement("div");
  y.style.cssText =
    "display:flex;align-items:center;color:white;background-color:blue;height:50px;width:50px;text-align:center;margin-bottom:20px;cursor:pointer;";
  y.innerHTML = name;
  y.onclick = () => {
    fetchOneDog(name);
  };
  return y;
};
