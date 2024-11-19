import { Fighter } from './Fighter.js';

export class Juli extends Fighter {
    constructor(x, y, velocity) {
        const frames = [
            './juli & juni/Juni&Juli_0-0.png',
            './juli & juni/Juni&Juli_20-0.png',
            './juli & juni/Juni&Juli_20-1.png',
            './juli & juni/Juni&Juli_20-2.png',
            './juli & juni/Juni&Juli_20-3.png',
            './juli & juni/Juni&Juli_20-4.png',
            './juli & juni/Juni&Juli_20-5.png',
            './juli & juni/Juni&Juli_20-6.png',
            './juli & juni/Juni&Juli_20-7.png',
            './juli & juni/Juni&Juli_20-8.png',
            './juli & juni/Juni&Juli_20-9.png',
            './juli & juni/Juni&Juli_20-10.png',
            './juli & juni/Juni&Juli_20-11.png',
        ];
        super('Juli', x, y, velocity, frames);
    }
}
