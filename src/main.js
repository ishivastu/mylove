import axios from "axios";

const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/health");

    output.textContent = JSON.stringify(response.data, null, 2);
  } catch (error) {
    console.log("error", error);
  }
});
