let docTitle = document.title;
window.addEventListener("blur", () => {
document.title = "Gyere vissza :( ";
})

window.addEventListener("focus", ()=> {
document.title = docTitle;
})