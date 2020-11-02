import React from "react";
import "./style.css";
import github from "../../imgs/github.png";
import linkedIn from "../../imgs/linked.png";
import youTube from "../../imgs/youtube.png";
import adobe from "../../imgs/adobe.png";
import cv from "../../imgs/cv.png";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <div className="footer">
    
    <a href="https://github.com/shyaboi"><img src={github} id='gitHub' alt='github logo'/></a>
    <a href="https://www.linkedin.com/in/ian-sears-5931734a" ><img src={linkedIn} id='linkedIn' alt='linkedIn logo'/></a>
    <a href="https://www.youtube.com/channel/UCkTSBEk8wsKIpy-MzRoJroA?view_as=subscriber" ><img src={youTube} id='youTube' alt='youtube logo'/></a>
    <a href="https://stock.adobe.com/contributor/209064146/Ian" ><img src={adobe} id='adobe' alt='adobe logo'/></a>
    <a href="https://docs.google.com/document/d/1RnXMgfoLe12ix2YpVzLk9Olue4SjtuMb331qsIks14Y/edit?usp=sharing" ><img src={cv} id='cv' alt='curriculum vitae'/></a>


</div>
  );
}

export default Footer;
