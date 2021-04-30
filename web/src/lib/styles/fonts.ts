import {css} from "styled-components";

export const Fonts = {
  big: {
    size: `1.25em`,
    height: `1em`,
  },
  default: {
    size: `1em`,
    height: `1.25em`,
  },
  mini: {
    size: `.75em`,
    height: `1.25em`,
  }
};

export const FontsStyles = {
  big: css`
    font-size: ${Fonts.big.size};
    height: ${Fonts.big.height};
  `,
  default: css`
    font-size: ${Fonts.default.size};
    height: ${Fonts.default.height};
  `,
  mini: css`
    font-size: ${Fonts.mini.size};
    height: ${Fonts.mini.height};
  `
};
