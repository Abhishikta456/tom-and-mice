class Pig extends BaseClass {
    constructor(x, y) {
        super(x, y, 80, 80);
        this.image = choseEnemy();
        this.Visiblity = 255;
    }

    display() {
        //console.log(this.body.speed);
        if (this.body.speed < 10) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 40, 40);
            pop();
        }
    }

    score() {
        if (this.Visiblity < 0 && this.Visiblity > -1005) {
            score++;
        }
    }

};

function choseEnemy() {
    var tom= loadImage("tom-cat-kittens-clipart-2.jpg");
    var jerry = loadImage("jerry.png");
    var mouse1= loadImage("mouse1.gif");
    var  mouse2 = loadImage("mouse2.png");
    var  mouse3 = loadImage("mouse3.jpg");
    var  mouse4 = loadImage("mouse4.jpg");
    var arrayOf = [tom,  mouse1,  mouse2,  mouse3,  mouse5, jerry];
    var index = Math.round(random(0, arrayOf.length - 1));
    return arrayOf[index];
}