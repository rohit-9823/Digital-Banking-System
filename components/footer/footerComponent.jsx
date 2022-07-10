import React from "react";
import { Container } from "react-bootstrap";

function FooterComponent() {
    return <>
        
        <section class="footer">
        <Container>
            <div class="card-footer text-center text-white" >
                {/* <!-- Copyright --> */}
                <div class="text-center text-white" style={{float: "left", textAlign: "center", justify: "center"}}>
                    © 2021 Copyright: 
                    <a class="text-white" href="#"> Shangrila Bank</a>
                </div>
                <div class="clearfix" style={{float:" right", justifyContent: "center"}} >
                    Powered by Grow Tech
                </div>
                {/* <!-- Copyright --> */}
            </div>
            </Container>
        </section>
        
    </>
}

export default FooterComponent;