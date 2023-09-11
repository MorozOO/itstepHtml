function burgerMenu() {
  const menu = document.querySelector(".header__nav")
  const buttonBurger = document.querySelector(".header__burger")

  buttonBurger.addEventListener("click", () => {
    if (buttonBurger.classList.contains("active")) {
      buttonBurger.classList.remove("active")
      menu?.classList.remove("active")
    } else {
      buttonBurger.classList.add("active")
      menu?.classList.add("active")
    }
  })
}

function spollers() {
  const spollers = document.querySelector("[data-spollers]")
  if (spollers) {
    const spollersArray = spollers.querySelectorAll("[data-spoller]")
    spollersArray.forEach((spoller) => {
      spoller.dataset.spoller = "off"
      spoller.addEventListener("click", () => {
        if (spoller.dataset.spoller === "off") {
          spoller.dataset.spoller = "on"
        } else {
          spoller.dataset.spoller = "off"
        }
      })
    })
  }
}

function animationScroll() {
  function offset(el) {
    const rect = el.getBoundingClientRect()
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  function animOnScroll() {
    const animItems = document.querySelectorAll("._anim-items")
    const animStart = 3

    animItems.forEach((animItem) => {
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if (window.pageYOffset > animItemOffset - animItemPoint && window.pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add("_anim-active")
      }
      // else {
      //   if (!animItem.classList.contains("_anim-no-hide")) {
      //     animItem.classList.remove("_anim-active")
      //   }
      // }
    })
  }

  setTimeout(() => {
    animOnScroll()
  }, 300)

  window.addEventListener("scroll", animOnScroll)
}

animationScroll()
burgerMenu()
spollers()
