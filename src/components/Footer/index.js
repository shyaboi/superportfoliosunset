import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <div class="footer">
    <a href="http://ianss.dev" style={{ textDecoration: 'none' }}>Portfolio</a>
</div>
  );
}

export default Footer;
