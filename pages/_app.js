import '../styles/global.css'
import { attributes, react as Global } from '../content/settings.md';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  let { 
    titleFonts
   } = attributes;

    return (
    <>
    <Component {...pageProps} /> 
      
      <style type="text/css"> {
        ` 
        h1, h2, h3, h4, h5, h6 {
          font-family: ${ titleFonts };
      }
        
        `
      }

      </style>
      </>
      )
  }