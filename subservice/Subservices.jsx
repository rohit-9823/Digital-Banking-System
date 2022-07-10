import { React, useState, useEffect } from 'react';
import axiosInstance from '../api/api';
import { toast } from 'react-toastify';
import { AccountServices } from '../services/accountService';
function  Subservices(props) {

  const [apiSubService, setapiSubService1] = useState([]);
  const [subServieTitle, setServiceTitle] = useState("");

  const apivalue = async (id) => {
    let alldata = await AccountServices.verifyAccount(null,'GET',`get-sub-services/${id}`)
    // let alldata = await axiosInstance.get(`get-sub-services/${id}`)
      .then(res => (res))
      .catch(err => { console.log(err) }
      )
        
    if (alldata.data.status == true) {
      setapiSubService1(alldata.data.data);
      
    } else {
      toast.error(alldata.message);
    }
  }

  useEffect(() => {
    let id = (props.location.state && props.location.state.id )?  props.location.state.id  :  1 ;
    let title = (props.location.state && props.location.state.name) ? props.location.state.name : "Teller Service" ;
    setServiceTitle(title);
    apivalue(id);
  }, []);

  const handleSubService = (e, type) => {

    if (type == "cheque") {
      props.history.push("/cheque-service")
    } else if (type == "cash") {
      props.history.push("/cash-service")
    }
    else if (type == "prepaidDollarCardRequest") {
      props.history.push("/dollar-card")
    } else if (type == "share") {
      props.history.push("/meroshare-crn")
    } else if(type == "rpin" || "registration" || "umobile" || "bmobile" 
     ||"newCardRequest" ||  "cardReplacementRequest" || "cardUnblockRequest" || "cardBlockRequest" ){
      props.history.push({
        pathname : '/customer-verification',
        state : { "type" : type}
      })
    }

  }
const handleback=()=>{
 props. history.push('/') 
}
  return (
    <div style={{marginTop:'-55px'}}>
      <section class="teller-title">
        <h2 style={{margin: '0 auto',
    width: '50%'}} >
          <span style={{marginLeft:'10%'}}>{subServieTitle}</span>
          <i class="fas fa-caret-left" style={{float:'right',border:'2px solid black',padding:'5px',cursor:'pointer'}} title="Go Back" onClick={handleback}></i>
          
        </h2>
      </section>

      <section class="body_content">
        <div class="container ">
          <div class="row justify-content-center ">
            <div class="col-md-12 ">
              <div class="home_block">
                <div class="row justify-content-center">

                  {apiSubService.map((value, index) => (
                    <div class="col-md-3 col-sm-6" key={index}>
                      <div class="icon_block" onClick={(e) => handleSubService(e, value.type)} style={{ cursor: 'pointer' }}>
                        <div class="mb-4">
                          {/* <Link to={{pathname : `${value.type}-service` , state : {"type" : value.type,"imagepath" : value.imagepath}}}> */}
                          <img
                            src={`https://dbsbank1.herokuapp.com/${value.imagepath}`}
                            width="100px"
                            height="100px"
                            alt="img not found"
                          />
                          {/* </Link> */}
                        </div>
                        <h5
                          _ngcontent-lkv-c154=""
                          class="text-primary text-uppercase">
                          {value.name}
                        </h5>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subservices;
