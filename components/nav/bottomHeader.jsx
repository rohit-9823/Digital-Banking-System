import React from "react";
import { Link } from "react-router-dom";

import Logos from "../../assets/images/shang.jpg"
import Logo from "../../assets/images/BankLogo.png";

const clear=()=>{
  localStorage.removeItem('accountData');
}
function BottomHeader(){
  return <div>
  <section class="header">
    <div class="container">
      <div class="row">
        <div class="header_content">
          <div class="col-md-12 col-sm-12  logo">
           <Link to="/" onClick={clear}>
                <img src={Logos} style={{height:"70px", width:"80px"}} />
                </Link>
            <table class="seal_logo" style={{float:"right", border:"0px"}} width="135"  cellpadding="2" cellspacing="0">
              <tr>
                <td style={{align : "center"}} width = "135" valign = "top" >
                </td>
              </tr>
            </table>
            <br/>
          </div>
        </div>       
      </div>
    </div>
  </section>
    </div>
}

export default BottomHeader;