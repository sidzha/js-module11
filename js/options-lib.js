import {
  API_KEY,
  BASE_URL,
  sourceLangElem,
  targetLangElem
} from "./constants.js";

import getUrl from "./get-url.js";
import setOptions from "./set-options.js";

export default function getLangOptions() {
  fetch(getUrl("getLangs", BASE_URL, API_KEY))
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (!checkForResponse(response)) {
        setOptions(response, sourceLangElem, targetLangElem);
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
