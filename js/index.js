import { translateFormElem } from "./constants.js";
import getLangOptions from "./options-lib.js";
import translateInput from "./translation-lib.js";

getLangOptions();

translateFormElem.addEventListener("submit", translateInput);
