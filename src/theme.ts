import { ChakraProvider, extendTheme, ThemeConfig, ThemeComponents, defineStyleConfig, chakra } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
const { Input: InputBase } = chakraTheme.components
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const components: ThemeComponents = {
  InputGroup: {
    baseStyle: {
      '.chakra-input': {
        bg: '#fff',
        color: '#000',
      },
    },
    defaultProps: {},
  },
  Input: {
    defaultProps: {
      variant: 'white',
    },
    variants: {
      white: {
        bg: '#ffffff',
        color: '#000',
        _placeholder: {
          color: 'gray.300',
          background: 'white',
        },
      },
    },
  },
  Textarea: {
    defaultProps: {
      variant: 'white',
    },
    variants: {
      white: {
        bg: '#fff',
        color: '#000',
        _placeholder: {
          color: 'gray.300',
          background: 'white',
        },
      },
    },
  },
  FormControl: {
    baseStyle: {
      color: 'black',
    },
  },
  FormLabel: {
    baseStyle: {
      color: 'black',
    },
  },
}

export const colors = {
  green: {
    400: '#3e7a3f',
    500: '#2C5F2D',
    600: '#214c22',
  },
  yellow: {
    500: '#f2dd52',
    600: '#f4d03f',
  },
  brand: {
    500: '#2f2e3c',
  },
}

export const theme = extendTheme({
  config,
  components,
  colors,
})
