let list = document.querySelector("#list");
let radios = document.querySelectorAll('input[name="city"]');
let value = "Baku";

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    if (event.target.checked) {
      value = event.target.value;
      getFilteredList();
    }
  });
});

const getFilteredList = async () => {
  console.log(value);

  let response = await fetch(`http://localhost:5000/apartments?city=${value}`);
  let data = await response.json();
  list.innerHTML = "";
  data.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `<h1>${element.name}</h1><p>$ ${element.price}</p><p>rooms: ${element.rooms}</p><p>City: ${element.city}</p><p>Address: ${element.address}</p>`;
    list.appendChild(li);
  });
};
