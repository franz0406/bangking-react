import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`    
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

    /* font style */
    .secondary_heading {
        font-size: 3rem;
        color:var(--purple-primary);
    }
    .white {
        color:var(--font-color);
    }
    p {
        color:var(--lavender-secondary);
        line-height:1.8rem;
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