class Fruit {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.fruit_size = 20;
  }

  update = () => {
    this.x = noise(this.x + 0.01) * width;
    this.y = noise(this.y + 0.01) * height;

    this.x += constrain(this.x, 0, width - this.fruit_size);
    this.y += constrain(this.y, 0, height - this.fruit_size);

    console.log(this.x);
    console.log(this.y);
  };

  show = () => {
    fill(255, 0, 0);
    rect(this.x, this.y, this.fruit_size, this.fruit_size);
  };
}
