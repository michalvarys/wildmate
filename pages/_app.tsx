import { ChakraProvider, extendTheme, ThemeConfig, ThemeComponents } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components: ThemeComponents = {
  Input: {
    baseStyle: {
      background: "white",
      color: "black",
      _placeholder: {
        color: "black",
        background: "white",
      },
    },
  },
  FormControl: {
    baseStyle: {
      color: 'black'
    }
  },
  FormLabel: {
    baseStyle: {
      color: 'black'
    }
  }
};

const theme = extendTheme({
  config,
  components,
  colors: {
    green: {
      400: "#3e7a3f",
      500: "#2C5F2D",
      600: "#214c22"
    },
    yellow: {
      500: "#f2dd52",
      600: "#f4d03f"
    },
    brand: {
      500: '#2f2e3c'
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
