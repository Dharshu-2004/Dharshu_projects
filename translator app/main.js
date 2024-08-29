let LangOption = document.querySelectorAll("select");
let fromText = document.querySelector(".fromText");
let transText = document.querySelector(".toTranslate");
let fromVoice = document.querySelector(".from");
let toVoice = document.querySelector(".to");
let cpyBtn = document.querySelector(".bx-copy");
let countValue = document.querySelector(".code_length");
let exchangeLang = document.querySelector(".bx-transfer");

// Populate select options
LangOption.forEach((selectElement, index) => {
  for (let countryCode in language) {
    let selected = "";
    if (index == 0 && countryCode == "en-GB") {
      selected = "selected";
    } else if (index == 1 && countryCode == "ta-LK") {
      selected = "selected";
    }
    let option = `<option value="${countryCode}" ${selected}>${language[countryCode]}</option>`;
    selectElement.insertAdjacentHTML("beforeend", option);
  }
});

// Translation function
fromText.addEventListener("input", function () {
  let content = fromText.value;
  let fromContent = LangOption[0].value;
  let transContent = LangOption[1].value;

  console.log("Input content:", content);
  console.log("From language:", fromContent);
  console.log("To language:", transContent);

  let transLINK = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    content
  )}&langpair=${fromContent}|${transContent}`;
  console.log("API URL:", transLINK);

  fetch(transLINK)
    .then((response) => response.json())
    .then((data) => {
      // console.log("API Response:", data);
      transText.value = data.responseData.translatedText;
    })
    .catch((error) => console.error("Error:", error));
});

fromVoice.addEventListener("click", function () {
  let fromTalk;
  fromTalk = new SpeechSynthesisUtterance(fromText.value);
  fromTalk.lang = LangOption[0].value;
  speechSynthesis.speak(fromTalk);
});
toVoice.addEventListener("click", function () {
  let fromTalk;
  fromTalk = new SpeechSynthesisUtterance(transText.value);
  fromTalk.lang = LangOption[1].value;
  speechSynthesis.speak(fromTalk);
});
cpyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(transText.value);
});
fromText.addEventListener("keyup", function () {
  countValue.innerHTML = `${fromText.value.length}/5,000`;
});
