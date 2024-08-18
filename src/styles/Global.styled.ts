import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
	color: ${theme.colors.font};
  margin: 0;
  font-family:  'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
	a {
		text-decoration: none;
	}
	
	button {
			background-color: unset;
			border: none;
	}

	section {
		background-color: ${theme.colors.primaryBg};
	}
	
	header {
		background-color: ${theme.colors.primaryBg};
	}
`
