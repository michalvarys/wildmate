import { ChakraProvider, extendTheme, ThemeConfig, ThemeComponents } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'

chakraTheme.components.FormLabel
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components: ThemeComponents = {
  Input: {
    baseStyle: {
      bg: "gray.100",
      color: "green.500",
      _placeholder: {
        color: "green.500",
      },
    }
  },
  FormControl: {
    baseStyle: {
      color: 'green.500'
    }
  },
  FormLabel: {
    baseStyle: {
      color: 'green.500'
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
