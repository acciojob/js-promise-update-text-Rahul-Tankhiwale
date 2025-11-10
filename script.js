// your JS code here. If required.

let outputDiv = document.getElementById("output");

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Call the promise and update the div when it resolves
createPromise()
  .then((result) => {
    outputDiv.textContent = result;
  })
  .catch((err) => {
    outputDiv.textContent = "Catch Error";
  });
