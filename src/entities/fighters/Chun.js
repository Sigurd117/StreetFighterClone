import { Fighter } from './Fighter.js';

export class Chun extends Fighter {
    constructor(x, y, velocity) {
        const frames = [
            './AlphaChun/alphachunLi_0-4.png',
            './AlphaChun/alphachunLi_20-0.png',
            './AlphaChun/alphachunLi_20-1.png',
            './AlphaChun/alphachunLi_20-2.png',
            './AlphaChun/alphachunLi_20-3.png',
            './AlphaChun/alphachunLi_20-4.png',
            './AlphaChun/alphachunLi_20-5.png',
            './AlphaChun/alphachunLi_20-6.png',
            './AlphaChun/alphachunLi_20-7.png',
            './AlphaChun/alphachunLi_20-8.png',
            './AlphaChun/alphachunLi_20-9.png',
            './AlphaChun/alphachunLi_20-10.png',
            './AlphaChun/alphachunLi_20-11.png',
        ];
        super('Chun', x, y, velocity, frames);
    }
}
