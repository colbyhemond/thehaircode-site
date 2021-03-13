
let count = 0;

function countProp (prop) {
  if (prop !== undefined) {
    if (prop.url !== ``) {
      count++;
    }
  }
  return prop;
}

const Social = props => {
  count = 0;
  let facebook = countProp(props.facebook);
  let twitter = countProp(props.twitter);
  let instagram = countProp(props.instagram);
  return (
    <>
    <div className="social">
      { (count == 1) ? <span>Follow us on:</span> : `` }
      
      { (!props.dark) ?
                ( (facebook.url !== ``) ? 
                  <a href={facebook.url} target="_blank" rel="noreferrer noopener">
                      <img src="./assets/social/Facebook.svg" alt="facebook"></img>
                  </a> 
                  : null )
                : ( (facebook.url !== ``) ? 
                  <a href={facebook.url} target="_blank" rel="noreferrer noopener">
                      <img src="./assets/social/Facebook_white.svg" alt="facebook"></img>
                  </a> 
                  : null ) }

      { (!props.dark) ?
                ( (twitter.url !== ``) ? 
                  <a href={twitter.url} target="_blank" rel="noreferrer noopener">
                      <img src="./assets/social/Twitter.svg" alt="twitter"></img>
                  </a> 
                  : null )
                : ( (twitter.url !== ``) ? 
                  <a href={twitter.url} target="_blank" rel="noreferrer noopener">
                      <img src="./assets/social/twitter_white.svg" alt="twitter"></img>
                  </a> 
                  : null ) }

      { (!props.dark) ?
                ( (instagram.url !== ``) ? 
                  <a href={instagram.url} target="_blank" rel="noreferrer noopener">
                      <img src="./assets/social/instagram.svg" alt="instagram"></img>
                  </a> 
                  : null )
                : ( (instagram.url !== ``) ? 
                  <a href={instagram.url} target="_blank" rel="noreferrer noopener">
                      <img src="./assets/social/instagram_white.svg" alt="instagram"></img>
                  </a> 
                  : null ) }

    </div>

    <style type="text/css"> {
          `
      .social {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
      }

      .social img {
        max-height: 25px;
        margin: 0 1rem;
      }

    `
    }
    </style>
    </>
    
)};

export default Social;