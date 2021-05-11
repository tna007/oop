class Background {
  constructor(el) {
    this.el = el;
  }

  init = function () {
    this.el.style.backgroundImage = "url(img/bg.png)";
  };
}

const bg = new Background(document.body);
bg.init();

class Bird {
  /**
   *
   * @param {number} width decides the size of the bird
   * @param {DOMNode} el the place to show the bird
   */
  constructor(width, el) {
    this.width = width;
    this.el = el; //element where the bird will be shown
  }

  fly = function name(params) {};

  show = function () {
    const newBird = document.createElement("img");
    newBird.id = "bird" + Math.floor(Math.random() * 5);
    newBird.src = "img/bird.png";
    newBird.width = this.width;
    this.el.appendChild(newBird);
  };
}

const bird1 = new Bird(Math.random() * 200, document.body);

bird1.show();
