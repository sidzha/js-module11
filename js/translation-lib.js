import { API_KEY, BASE_URL, resultInputElem } from "./constants.js";

import getUrl from "./get-url.js";

export default function translateInput(evt) {
  evt.preventDefault();
  fetch(getUrl("translate", BASE_URL, API_KEY))
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (!checkForResponse(response)) {
        resultInputElem.value = response.text;
      } else {
        resultInputElem.value = response.message;
        return;
      }
    });
}

function checkForResponse(response) {
  if (response.code !== 200) {
    return response.message;
  }
}
