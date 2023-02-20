# unocss-preset-px-to-vw
A preset like postcss-px-to-viewport / 像postcss-px-to-viewport一样将px转成vw

## Installation

```bash
npm i -D unocss-preset-px-to-vw
```

## PxToVwOptions
```ts
export interface PxToVwOptions {
    /**
     * screen width / 设计稿宽度
     * @default 750
     */
    viewportWidth?: number;
}
```

## Config

```ts
import presetUno from '@unocss/preset-uno'
import presetPxToVw from 'unocss-preset-px-to-vw'

Unocss({
  presets: [
    presetUno(),
    presetPxToVw(/* PxToVwOptions */ )
  ],
})
```

## Usage

```html
<div class="m-750px"></div>
```

<table><tr><td width="500px" valign="top">

### without

```css
.m-750px {
  margin: 750px;
}
```

</td><td width="500px" valign="top">

### with

```css
.m-750px {
  margin: 100vw;
}
```

</td></tr></table>

## TODO
Improve the configurable properties，such as `propList` `viewportUnit` etc.

## License

MIT License &copy; 2022-PRESENT [Wyatex](https://github.com/wyatex)
