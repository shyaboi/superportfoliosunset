import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import github from "../../imgs/github.png";
import linkedIn from "../../imgs/linked.png";
import youTube from "../../imgs/youtube.png";
import adobe from "../../imgs/adobe.png";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <div class="footer">
    
    <a href="https://github.com/shyaboi"><img src={github} id='gitHub'/></a>
    <a href="https://www.linkedin.com/in/ian-sears-5931734a" ><img src={linkedIn} id='linkedIn'/></a>
    <a href="https://github.com/shyaboi" ><img src={youTube} id='youTube'/></a>
    <a href="https://stock.adobe.com/contributor/209064146/Ian" ><img src={adobe} id='adobe'/></a>

</div>
  );
}

export default Footer;
