// Replace the URL with the URL of the JavaScript file on GitHub
const url = "https://raw.githubusercontent.com/G-bl7/Js-FrameWork/main/BaseAPI-sb.js";

// Fetch the contents of the file
fetch(url)
  .then(response => response.text())
  .then(data => {
    // Evaluate the contents of the file
    eval(data);
  })
  .catch(error => console.error(error));
