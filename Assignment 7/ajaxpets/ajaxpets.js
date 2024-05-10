/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function() {

  const API_URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";

  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    // Attach event listeners to radio buttons to make an API request on change
    let animalRadios = qsa('input[name="animal"]');
    animalRadios.forEach(radio => radio.addEventListener("change", makeRequest));
  }

  /**
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  async function makeRequest() {
    try {
        // Determine which radio button is selected
        let animal = qs('input[name="animal"]:checked').value;
        let url = `${API_URL}?animal=${animal}`;
  
        // Make an API request to retrieve image paths
        let response = await fetch(url);
        response = await checkStatus(response);
        let imagePaths = await response.text();
        
        // Process the returned image paths
        displayImages(imagePaths);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
  }

  function displayImages(imagePaths) {
    // Clear any existing images
    let picturesDiv = id("pictures");
    picturesDiv.innerHTML = "";

    // Split the response into individual paths and create image elements
    let paths = imagePaths.trim().split("\n");
    for (let path of paths) {
      let img = document.createElement("img");
      img.src = path;
      picturesDiv.appendChild(img);
    }
  }

  /**
   * TODO: Implement any other functions you need
   */

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
