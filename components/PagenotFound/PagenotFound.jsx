import React from 'react';
import notfound from "../../assets/images/pagenotfound.png"
function PagenotFound() {
  return <div>
      <img src={notfound} alt="404 not found" style={{overflowX:'block',height:'600px',width:'100%'}} />
  </div>;
}

export default PagenotFound;
