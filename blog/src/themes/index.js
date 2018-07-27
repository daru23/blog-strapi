import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#424242',
            main: '#212121',
            dark: '#0d0d0d',
            contrastText: '#595959',
        },
        secondary: {
            light: '#0277BD',
            main: '#01579B',
            dark: '#013a65',
            contrastText: '#fff',
        },
    },
});

export default theme;