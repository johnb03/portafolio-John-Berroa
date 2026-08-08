---
title: "Un efecto de css que me encanta "
description: "Efecto espandido con hover y flex"
date: 2026-08-07
image: "/assets/img/efecto-hover-blog.jpg"
---

# Efecto hover card con flex

**Siempre quise realizar este efecto desde que lo vi la primera vez, si no me equivoco lo vi aplicado en una página que había ganado en <https://www.awwwards.com/>. Recuerdo que cuando empecé a toquetear el CSS, cuando vi ese efecto quede totalmente loco, pero para mí en ese momento era como hablar en chino.**

**Después de un tiempo largo tiempo me acordé y decidí hacerlo, pero ahora me di cuenta de que era tan fácil XD.**

<video autoplay loop muted src="../../assets/videos/card-animation.webm" width="600"></video>

**Colocas un div como contenedor con varios y luego varios divs con imágenes, esto es para cuando apliquemos el CSS pueda quedar bien el efecto.**

```html
<body>
  <div class="container">
    <div class="gallery"></div>
  </div>
</body>
```

**Agregamos los divs dinámicos en el DOM.**

```javascript
for (let i = 0; i < imageElements.length; i++) {
  const divGalleryPanel = document.createElement("div");
  const img = document.createElement("img");
}
```

**¡Luego aplicamos el CSS con las classes correspondientes, pero la que creara el efecto es él (flex), se establece en flex:1, y en el hover: flex:2 y bualaaa!!!**

```css
.gallery-panel {
  flex: 1;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: flex 0.5s ease-in-out;
}

.gallery-panel:hover {
  flex: 2.5;
}
```

**Les dejare el repositorio por si quieren el codigo completo.** <br>
<a style="color: #ffd633;" href="https://github.com/johnb03/Efecto-flex-card">Card-stunning-effect</a> 👈
