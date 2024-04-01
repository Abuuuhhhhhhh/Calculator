      function backspace() {
     var result = document.getElementById('display').value;
     document.getElementById('display').value = result.slice(0, -1);
   }
   function toggleSign() {
    var result = document.getElementById('display');
    if (result.value !== '' && result.value !== 'Error') {
      result.value = -parseFloat(result.value);
    }
  }
   function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
   function calculateRoot() {
    var number = parseFloat(document.getElementById("display").value);
    var root = prompt("Enter the root you want to calculate (2, 3, 4, ...):");
    if (!isNaN(number) && root !== null && root !== "" && root >= 2) {
        var result = Math.pow(number, 1/root);
        document.getElementById("display").value = result.toFixed(2);
    } else {
        alert("Please enter a valid number and root greater than or equal to 2.");
    }
  }
  
  function calculatePower() {
    var number = parseFloat(document.getElementById("display").value);
    var power = prompt("Enter the power you want to raise the number to (2, 3, 4, ...):");
    if (!isNaN(number) && power !== null && power !== "" && power >= 2) {
        var result = Math.pow(number, power);
        document.getElementById("display").value = result.toFixed(2);
    } else {
        alert("Please enter a valid number and power greater than or equal to 2.");
    }
  }
  var dynamicText = document.getElementById('dynamicText');
  var sentences = ["perform arithmetic operations","calculate roots","raise numbers to powers","solve mathematics problems"];
  var sentenceIndex = 0; // Index to track the current sentence
  var letterIndex = 0; // Index to track the current letter

  // Function to change the text dynamically
  function changeText() {
    var currentSentence = sentences[sentenceIndex];
    var newText = ''; // Initialize the new text
    for (var i = 0; i <= letterIndex; i++) {
      newText += currentSentence[i]; // Add each letter up to the current index
    }
    dynamicText.textContent = newText; 
    letterIndex++; 
    if (letterIndex >= currentSentence.length) {
      letterIndex = 0;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(changeText, 2000); 
    } else {
      setTimeout(changeText, 200); 
    }
  }
  changeText();


    var sentence = "Welcome to Abraham's basic Calculator";
    var index = 0;

    function displayNextLetter() {
        if (index < sentence.length) {
            document.getElementById("welcome-text").textContent += sentence[index];
            index++;
            setTimeout(displayNextLetter, 500); 
        }
    }

    displayNextLetter(); // Start displaying letters
