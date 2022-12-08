import type { Preset } from '@unocss/core';

const pxRE = /^-?[\.\d]+px$/;

export interface PxToVwOptions {
    /**
     * screen width / 设计稿宽度
     * @default 750
     */
    viewportWidth?: number;
}

export default function PxToVwPreset(options: PxToVwOptions = {}): Preset {
    const { viewportWidth  = 750 } = options;

    return {
        name: '@unocss/preset-px-to-vw',
        postprocess: (util) => {
            util.entries.forEach((i) => {
                const value = i[1];
                if (value && typeof value === 'string' && pxRE.test(value)) i[1] = `${+value.slice(0, -2) / viewportWidth * 100}vw`;
            });
        },
    };
}