import Button from 'react-bootstrap/Button';
import { attributes, react as SettingsContent } from '../content/settings.md';


let { text, img, link } = attributes;


const SponsoredButton = props => (
    <div className="d-flex flex-column align-items-center">
        <Button href={ link }>{text}</Button>
        <span className="small">with <img src={img} width='75em' height='auto'></img></span>
  </div>
);

export default SponsoredButton;