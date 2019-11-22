import {
  sourceInputElem,
  sourceLangElem,
  targetLangElem
} from "./constants.js";

export default function getUrl(type, BASE_URL, API_KEY) {
  let url = BASE_URL + type;
  url += "?key=" + API_KEY; // добавляем к запросу ключ API
  if (type == "translate") {
    url += "&text=" + sourceInputElem.value; // текст для перевода
    url += "&lang=" + sourceLangElem.value + "-" + targetLangElem.value; // направление перевода: с русского на английский
  }
  if (type == "getLangs") {
    url += "&ui=ru";
  }
  return url;
}
