export class Fighter {
    constructor(name, x, y, velocity) {
        this.name = name;
        this.frames = frames.map(src => {
            const img = new Image();
            img.src = src;
            return img;
        });
        this.position = { x, y };
        this.velocity = velocity;
        this.animationFrame = 1;
    }

    update(secondsPassed, context) {
        this.animationFrame++;
        if (this.animationFrame >= this.frames.length) this.animationFrame = 0;

        this.position.x += this.velocity * secondsPassed;

        const currentFrame = this.frames[this.animationFrame];
        if (
            this.position.x > context.canvas.width - currentFrame.width ||
            this.position.x < 0
        ) {
            this.velocity = -this.velocity;
        }
    }

    draw(context) {
        const currentFrame = this.frames[this.animationFrame];
        context.drawImage(currentFrame, this.position.x, this.position.y);
    }
}