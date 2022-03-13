import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --purple-primary: #564edf;
        --accent-pink: #f44e77;
        --neutral-light: #f0f4ff;
        --dark-primary: #161950;
        --lavender-secondary: #6b6d9e;
        --border-color: #cab6f1;       
    }        
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    body {
        background-color: var(--neutral-light);        
    }
`;

export default GlobalStyle;