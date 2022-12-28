let docTitle = document.title;
window.addEventListener("blur", () => {
document.title = "Ne hagyj itt! Félek egyedül! ";
})

window.addEventListener("focus", ()=> {
document.title = docTitle;
})