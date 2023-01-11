let docTitle = document.title;
window.addEventListener("blur", () => {
document.title = "Ne hagyj itt!";
})

window.addEventListener("focus", ()=> {
document.title = docTitle;
})