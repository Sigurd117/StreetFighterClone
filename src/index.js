import { Chun } from './entities/fighters/Chun.js';
import { Juli } from './entities/fighters/Juli.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/Fps.Counter.js';

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.addEventListener('load', function () {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const entities = [
        new Stage(),
        new Chun(80, 110, 150),
        new Juli(80, 110, -150),
        new FpsCounter(),
    ];

    let previousTime = 0;
    let secondsPassed = 0;

    function frame(time) {
        window.requestAnimationFrame(frame);

        secondsPassed = (time - previousTime) / 1000;
        previousTime = time;

        for (const entity of entities) {
            entity.update(secondsPassed, context);
        }

        for (const entity of entities) {
            entity.draw(context);
        }
    }

    window.requestAnimationFrame(frame);
});