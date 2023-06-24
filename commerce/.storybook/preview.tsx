import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/themes'
import '@app/globals.css';
import * as NextImage from 'next/image'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'defualt', {
  configurable: true,
  value: (props) => typeof props.src === "string" ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  )
})

export default preview;
