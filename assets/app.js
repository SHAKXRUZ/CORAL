const bactetopEl = document.querySelector(".bactetop");

bactetopEl.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})