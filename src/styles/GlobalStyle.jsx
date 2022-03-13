import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
    
    :root {
        --purple-primary: #564edf;
        --accent-pink: #f44e77;
        --neutral-light: #f0f4ff;
        --dark-primary: #161950;
        --lavender-secondary: #6b6d9e;
        --border-color: #cab6f1;
        --font-color: #fff;       
    }        
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        list-style:none;
    }
    body {
        font-family: 'Nunito', sans-serif;
        background-color: var(--neutral-light);        
        color: var(--font-color);
        font-size: 1.2rem;
    }
    a {
        text-decoration:none;
        color:inherit;
    }
    button {
        font-family:inherit;
        font-size:inherit;
        color:inherit;
        cursor: pointer;
        text-transform: uppercase;
    }
`;

export default GlobalStyle;