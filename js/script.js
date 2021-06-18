class Background {
  constructor(el) {
    this.el = el;
  }

  init = function () {
    this.el.style.background = "url(img/bg.png)";
    this.el.style.backgroundRepeatY = "no-repeat";
    this.el.style.backgroundAttachment = "fixed";
    this.el.style.backgroundSize = "auto 100%"; //auto height and 100% width
    this.el.id = "bg";
  };

  scrollSideway = function (params) {
    document.getElementById("bg").style.backgroundPosition = `${params / 10}px`;
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
    this.speed = Math.random() * 100;
  }

  fly = function name(params) {};

  show = function () {
    const newBird = document.createElement("img");
    this.birdId = "bird " + Math.random() * 10;
    newBird.id = this.birdId;
    newBird.src = "img/bird.png";
    newBird.width = this.width;
    newBird.style.position = "fixed";
    newBird.style.top = Math.random() * 1000 + "px";

    this.initialLeft = Math.random() * 100;
    newBird.style.left = this.initialLeft + "px";
    // newBird.style.left = Math.random() * 100 + "px";

    this.el.appendChild(newBird);
  };

  scrollSideway = function (distance) {
    this.initialLeft = distance / this.speed;
    document.getElementById(this.birdId).style.left = `${this.initialLeft}px`;
  };
}

class Pipe {
  constructor(width, height, distance, el) {
    this.width = width;
    this.height = height;
    this.el = el;
    this.distance = distance;
  }

  appear = function (params) {
    const pipe = document.createElement("img");
    this.pipeId = "pipe " + Math.random() * 150;
    pipe.id = this.pipeId;
    pipe.src = "img/pipe.png";
    pipe.width = this.width;
    pipe.height = this.height;

    pipe.style.bottom = "0";
    pipe.style.position = "fixed";

    this.el.appendChild(pipe);
  };

  scrollSideway = function (road) {
    document.getElementById(this.pipeId).style.left = `${
      road / this.distance
    }px`;
  };
}

let birds = [];
pipes = [];

for (let i = 0; i < 10; i++) {
  birds[i] = new Bird(Math.random() * 200, document.body);
  birds[i].show();
}
for (let i = 0; i < 10; i++) {
  pipes[i] = new Pipe(
    150,
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 100),
    document.body
  );
  pipes[i].appear();
}

document.addEventListener("scroll", () => {
  bg.scrollSideway(window.pageYOffset);

  for (let i = 0; i < 10; i++) {
    birds[i].scrollSideway(window.pageYOffset);
  }
  for (let i = 0; i < 10; i++) {
    pipes[i].scrollSideway(window.pageYOffset);
  }
});
