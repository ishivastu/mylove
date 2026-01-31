import axios from "axios";

const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
  try {
    const response = await axios.get("https://shivastuhero.onrender.com");

    output.textContent = JSON.stringify(response.data, null, 2);
  } catch (error) {
    console.log("error", error);
  }
});
