import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html{
		font-size:62.5%;		
	}
	body{
		box-sizing:border-box;
	}
	*,
	*:before,
	*:after{
		margin:0;
		padding:0;
		list-style:none;
		box-sizing:inherit;
	}
`;

export default GlobalStyle;
