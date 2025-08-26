import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    mode: 'dark', // enables MUI dark Theme defaults
    background: {
      default: '#0D1117', // page background
      paper: '#161B22',   // card / surface background
    },
    primary: {
      main: '#3B82F6', // buttons, links
    },
    secondary: {
      main: '#10B981', // accent (e.g. CTA button)
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#9CA3AF',
    },
    error: {
      main: '#F87171',
    },
  },
});

export default Theme;