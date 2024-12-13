import { css } from 'styled-components'

export const responsiveFontSize = (
  mobileSize: number,
  desktopSize: number,
) => css`
  font-size: ${mobileSize}px;

  @media screen and (min-width: 768px) {
    font-size: ${desktopSize}px;
  }
`
export const responsiveLineHeight = (
  mobileSize: number,
  desktopSize: number,
) => css`
  line-height: ${mobileSize};

  @media screen and (min-width: 768px) {
    line-height: ${desktopSize};
  }
`
