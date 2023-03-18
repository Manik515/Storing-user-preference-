const selectFontSize = document.querySelector("#selectFontSize");
const selectBgColor = document.querySelector("#selectBgColor");

const resetButton = document.querySelector("#resetButton");
const mainElement = document.querySelector("main");

const changeFontSize = (event) => {
    const targetFontSize = event.target.value;
    mainElement.style.fontSize = targetFontSize;
    localStorage.setItem("fontSize", targetFontSize)
}
const changeBgColor = (event) => {
    const targetBgColor = event.target.value
    mainElement.style.backgroundColor = targetBgColor;
    localStorage.setItem("bgColor", targetBgColor);
}
const clearLocalStroage = () => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    selectFontSize.value = "16px";
    selectBgColor.value = "aqua";
    mainElement.style.fontSize = "16px";;
    mainElement.style.backgroundColor = "aqua";
}

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStroage);

//store front size and background color after get from local stroage
const seletedItems = (fSize, bgC) => {
    selectFontSize.value = fSize;
    selectBgColor.value = bgC;
    mainElement.style.fontSize = fSize;
    mainElement.style.backgroundColor = bgC;
}

//load Local storage value
const initialSetip = () => {
    const fSize = localStorage.getItem("fontSize")
    const bgC = localStorage.getItem("bgColor")

    if (fSize && bgC) {
        seletedItems(fSize,bgC)
    }
    if(!fSize && !bgC){
        seletedItems("16px", "aqua")
    }
    if (fSize && !bgC) {
        seletedItems(fSize,"aqua")
    }
    if (!fSize && bgC) {
        seletedItems("16px",bgC)
    }
}
initialSetip()
