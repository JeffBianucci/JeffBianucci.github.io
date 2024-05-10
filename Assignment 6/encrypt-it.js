/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
  
    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);

    document.getElementById("reset").addEventListener("click", handleReset);
  }

  function handleEncrypt() {
    // Get the input text from the textarea
    const inputText = document.getElementById("input-text").value.toLowerCase();
    console.log("Original Text: ", inputText);

    // Encrypt the text using a shift cipher with a shift of 1
    let encryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];

      // Shift only letters
      if (char >= 'a' && char <= 'z') {
        // Calculate the shifted character
        let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
        encryptedText += shiftedChar;
      } else {
        // If it's not a letter, keep it the same
        encryptedText += char;
      }
    }

    // Output the encrypted text to the #result paragraph
    document.getElementById("result").textContent = encryptedText;
    console.log("Encrypted Text: ", encryptedText);
  }

  function handleReset() {
    // Clear the value of the textarea with ID "input-text"
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
    console.log("Input text area cleared.");
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
