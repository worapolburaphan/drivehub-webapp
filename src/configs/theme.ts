import { extendTheme } from '@mui/joy/styles'

const palette = {
  primary: {
    50: '#e4f2ff',
    100: '#bdddff',
    200: '#93c8ff',
    300: '#68b2ff',
    400: '#4ba1ff',
    500: '#3991ff',
    600: '#3B82F6',
    700: '#3a70e2',
    800: '#395ecf',
    900: '#353eaf',
    solidBg: '#3B82F6',
    mainChannel: '#3B82F6',
  },
  warning: {
    50: '#fffee9',
    100: '#fefac8',
    200: '#fdf6a4',
    300: '#fbf180',
    400: '#f9ed64',
    500: '#f6e84b',
    600: '#fcdd4c',
    700: '#f9c544',
    800: '#f6ae3b',
    900: '#f0882c',
    solidBg: '#f6ae3b',
    mainChannel: '#f6ae3b',
  },
  text: {
    primary: '#111827',
  },
}

export const theme = extendTheme({
  colorSchemes: {
    dark: { palette },
    light: { palette },
  },
  components: {
    JoyDrawer: {
      styleOverrides: {
        backdrop: {
          backdropFilter: 'blur(2px)',
        },
      },
    },
  },
})
