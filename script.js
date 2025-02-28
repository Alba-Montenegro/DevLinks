function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  //html.classList.add("light")
  //}

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "foto de Alba Montenegro sorrindo usando óculos e camisa preta, fundo acom algumas casas e céu azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.setAttribute(
      "alt",
      "foto de Alba Montenegro sorrindo usando casaco preto e um fundo verde"
    )
  }
}
