import React from "react";

function TopHeader() {
    return <>

        <section class="top_header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 ">
                        <div class="top_address">
                            <i class="fa fa-phone"></i> &nbsp; 977-1-4444444/62/63,4444444,  &nbsp; &nbsp;
                            <i class="fa fa-envelope"></i> &nbsp; <a href="mailto:info@shangrila.com.np">info@shangrila.com.np</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="social_link">
                            <ul>
                                <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-phone-square"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-skype"></i></a></li>

                            </ul>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default TopHeader;