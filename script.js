function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //pegar a tag da imagem que vai mudar
  const img = document.querySelector("#profile img")

  //substituir a imagem quando mudar o seletor
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar2.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
