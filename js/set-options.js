export default function setOptions(response, sourceLangElem, targetLangElem) {
  let fragment = document.createDocumentFragment();
  for (let lang in response.langs) {
    let sourceOpt = createOptionElement(lang, response);
    fragment.appendChild(sourceOpt);
  }
  let dupFragment = fragment.cloneNode(true);
  sourceLangElem.appendChild(fragment);
  targetLangElem.appendChild(dupFragment);
}

function createOptionElement(lang, response) {
  let sourceOpt = document.createElement("option");
  sourceOpt.value = lang;
  sourceOpt.textContent = response.langs[lang];
  return sourceOpt;
}
