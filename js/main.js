let content = {
  1: [
    {
      title: "cabeza1",
      paragraph: "Contenido ñlksadgjla",
      img: "IMAGEN_1"
    },
    {
      title: "juan2",
      paragraph: "Contenido_2",
      img: "IMAGEN_1_2"
    },
    {
      title: "juan3",
      paragraph: "Contenido_3",
      img: "IMAGEN_1_3"
    }
  ],
  2: {
    title: "Seba",
    paragraph: "ñlksadgjla",
    img: "IMAGEN_2"
  },
  3: [
    {
      title: "Mano",
      paragraph: ``,
      img: "IMAGEN_2"
    },
    {
      title: "Mano_2",
      paragraph: `asdgasdg`,
      img: "IMAGEN_5"
    }
  ]
};

var elems = document.querySelectorAll("[data-target]");

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function() {
    let target = this.getAttribute("id");
    if (content[target].length == undefined) {
      document.getElementById("title").innerHTML = content[target].title;
      document.getElementById("paragraph").innerHTML =
        content[target].paragraph;
      document.getElementById("img").innerHTML = content[target].img;
      document.getElementById("repeat-block").innerHTML = "";
    }

    if (content[target].length >= 1) {
      let string = "";
      // Remueve el contenido previo
      document.getElementById("title").innerHTML = "";
      document.getElementById("paragraph").innerHTML = "";
      document.getElementById("img").innerHTML = "";

      for (var j = 0; j < content[target].length; j++) {
        let title = content[target][j].title;
        let paragraph = content[target][j].paragraph;
        let img = content[target][j].img;
        // String para cuando hay mas de un bloque
        string += `
            <div id="${title}" style="color: red">${title}</div>
                <div id="${paragraph}">${paragraph}</div>
            <div id="${img}">${img}</div>
        `;
      }
      document.getElementById("repeat-block").innerHTML = string;
    }
  });
}
