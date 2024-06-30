fetch("http://localhost:5000/setCookie", {
  credentials: "include",
})
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
