let result = 4 > 1;
console.log("TCL: result", result)

if (100 - 10 > 80) {
  alert("Correct");
} else {
  alert("Not correct");
}

if (result) {
  document.getElementById("result").textContent = result;
}
