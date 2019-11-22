const sourceInputElem = document.querySelector(".js-source-input");
const resultInputElem = document.querySelector(".js-result-input");
const translateFormElem = document.querySelector(".js-form");
const sourceLangElem = document.querySelector(".js-source-lang");
const targetLangElem = document.querySelector(".js-target-lang");

const API_KEY =
  "trnsl.1.1.20191111T122244Z.30530b0f5974ed10.51f41f33179c9fdabb25c56b073102726d8220bb";

const BASE_URL = "https://translate.yandex.net/api/v1.5/tr.json/";

export {
  API_KEY,
  BASE_URL,
  sourceLangElem,
  targetLangElem,
  resultInputElem,
  sourceInputElem,
  translateFormElem
};
