let span = document.querySelector(".up")

window.onscroll = function () {
    // if (this.scrollY >= 800) {
    //     console.log (this.scrollY)
    //     span.classList.add("show")
    // }else {
    //     span.classList.remove("show")
    // }
    this.scrollY >= 700 ? span.classList.add("show") : span.classList.remove("show");

}

span.addEventListener ("click", () => {
    window,scrollTo({
        top:0,
        behavior:"smooth"
    })
})