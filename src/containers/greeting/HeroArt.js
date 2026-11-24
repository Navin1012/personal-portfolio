import React, {useRef} from "react";
import artwork from "../../assets/images/manOnTable.svg";

const bayer = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
];
const darkInk = [18, 22, 70];
const lightInk = [228, 236, 255];

export default function HeroArt() {
  const art = useRef(null);
  const veil = useRef(null);

  function paintVeil(event) {
    const image = event.currentTarget;
    const canvas = veil.current;
    const context = canvas.getContext("2d");
    if (!context || !image.naturalWidth) return;

    const width = 176;
    const height = Math.round(
      (width * image.naturalHeight) / image.naturalWidth
    );
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0, width, height);
    const pixels = context.getImageData(0, 0, width, height);

    for (let row = 0; row < height; row += 1) {
      for (let column = 0; column < width; column += 1) {
        const offset = (row * width + column) * 4;
        const luma =
          (pixels.data[offset] * 0.2126 +
            pixels.data[offset + 1] * 0.7152 +
            pixels.data[offset + 2] * 0.0722) /
          255;
        const threshold = (bayer[row % 4][column % 4] + 0.5) / 16;
        const ink = luma > threshold ? lightInk : darkInk;
        pixels.data.set(ink, offset);
      }
    }

    context.putImageData(pixels, 0, 0);
    art.current.dataset.ditherReady = "";
  }

  return (
    <div ref={art} className="hero-art hero-dither" aria-hidden="true">
      <div className="hero-dither__visual">
        <img
          src={artwork}
          alt=""
          width="996"
          height="828"
          draggable="false"
          onLoad={paintVeil}
        />
        <canvas ref={veil} className="hero-dither__veil" />
        <img
          className="hero-dither__color"
          src={artwork}
          alt=""
          width="996"
          height="828"
          draggable="false"
        />
      </div>
    </div>
  );
}
