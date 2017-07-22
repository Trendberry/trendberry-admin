import MuiThemeProvider, { MUI_SHEET_ORDER } from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/theme'
import createPalette from 'material-ui/styles/palette'
import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'

const createStyleManager = () => (
  MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      palette: createPalette({
        primary: blue,
        accent: pink,
        type: 'light',
      }),
    }),
  })
)

const { styleManager, theme } = createStyleManager()

styleManager.setSheetOrder(MUI_SHEET_ORDER.concat([
  'AppContent',
  'AppFrame',
  'AppDrawer',
]))

export { styleManager, theme }
