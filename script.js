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
    img.setAttribute("src", "./assets/avatar-light.png")
    //img.setAttribute(
      //"alt",
     // "foto de Mayk Brito sorrindo com um óculos de sol, comisa preta e fundo azul "
    //)
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    //img.setAttribute(
      //"alt",
      //"foto de Mayk Brito sorrindo usando óculos e camisa preta, barba e fundo amarelo"
    //)
  }
}
