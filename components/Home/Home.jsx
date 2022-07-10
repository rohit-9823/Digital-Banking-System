import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AccountServices } from '../../services/accountService';
import './Home.css';

function Home(props) {
  
  const [apiData, setapiData] = useState([]);

  const apivalue = async () => {
    let alldata = await AccountServices.verifyAccount(null,'GET','get-services')
    // const alldata = await axiosInstance
    //   .get('get-services')
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
      console.log(alldata);
    setapiData(alldata.data.data);
  }

  useEffect(() => {
    apivalue();
    
  }, []);
  return (
    
      <div style={{marginTop:'-55px'}}>
      <section class="teller-title">
        <h2>
          <span>Digital Banking Services</span>
        </h2>
      </section>
      
      <section class="body_content">
        <div class="container ">
          <div class="row justify-content-center">
            <div class="col-md-12 ">
              <div class="home_block">
                <div class="row justify-content-center">

                  {apiData.map((value,id) => (
                    <div class="col-md-3 col-sm-6">
                    <div class="icon_block" key={id}>
                    
                      <Link to={{pathname:"/sub-service",state:{"id":value.id,
                      "name" : value.name, "imagepath" : value.imagepath,"type" : value.type}}}>
                        <div class="mb-4">
                          <img
                            src={
                              `https://dbsbank1.herokuapp.com/${value.imagepath}`
                            }
                            width="100px"
                            height="100px"
                          />
                        </div>
                      </Link>
                      <h5 class="text-primary text-uppercase">{value.name}</h5>
                    </div>
                    </div>
                  ))}
                </div>
                
              </div>
              {/* <!--home block end--> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
