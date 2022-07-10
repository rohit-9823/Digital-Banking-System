import { Formik } from 'formik';
import { React, useEffect, useState } from 'react';
import { Form, Field } from 'formik';
import LeftArrow from '../../assets/img/icons/left-arrow.svg';
import { AccountServices } from '../../services/accountService';
import {Button} from "../Button-loader/Button-load"
import Mobilebankingsub from '../../schema/verification/Mobilebankingsub';
import ReCAPTCHA from 'react-google-recaptcha';
import axiosInstance from '../../api/api';

function CustomerVerify(props) {
const [apiData, setapiData] = useState()
  const[title,setTitle] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const backClicked = () => {
    props.history.goBack();
  };

  useEffect(() =>{
    let type = props.location.state.type;
    if(type == "rpin")
    {
      setTitle("Reset Pin Verification")
    }
    else if(type == "registration")
    {
      setTitle("New Mobile Banking Registration")
    }
    else if(type == "umobile")
    {
      setTitle("Unblock Mobile Banking")
    }
    else if(type == "bmobile")
    {
      setTitle("Block Mobile Banking")
    }
    else if(type == "newCardRequest")
    {
      setTitle("New Card Request")
    }
    else if(type == "cardReplacementRequest")
    {
      setTitle("Card Replacement Request")
    }
    else if(type == "cardUnblockRequest")
    {
      setTitle("Card Unblock Request")
    }
    else if(type == "cardBlockRequest"){
      setTitle("Card Block Request")
    }
console.log(apiData);
  },[])
  const apivalue = async () => {
    
    const alldata = await axiosInstance
      .POST('account-verification')
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
    setapiData(alldata.data.data);
  }
  return (

    <div>
    <section class="body_content">
      <div class="container form-layout">
        <div class="back-bottom">
          <button type="submit" class="btn btn-danger" onClick={backClicked}>
            <img
              class="mr-1"
              src={LeftArrow}
              width="20px"
              height="20px"
              alt="back-arrow"
              
            />
            Back
          </button>
        </div>
        <h2 class="form-title">{title}</h2>

        <Formik
          initialValues={{
            accountNo: '',
            accountName: '',
            mobileno: '',
            
          }}
          
          validationSchema={Mobilebankingsub}
          onSubmit={async (values) => {

            let accountDetails = {
              accountName: values.accountName,
              accountNumber: values.accountNo,
              mobilenumber: values.mobileno,
            }
            let result = await AccountServices.verifyAccount(accountDetails,'POST','/verify-account');
           if(result.data.status){
            localStorage.setItem('accountData', JSON.stringify(values));
              props.history.push('/cheque-deposit-request');
           }
          }}>

          {({ errors, touched }) => (
            <Form autocomplete="off" novalidate>
              {/* <!-- Main Row Started--> */}
              <div class="row">
                <div class="col-lg-12">
                  {/* <!-- First Row Started--> */}
                  <div class="row" style={{ marginBottom: '30px' }}>
                  <div class="col-lg-6">
                  <div class="form-group">
                    <label class="label-margin" for="accountNumber">
                      Account Number
                      <span class="required-star">*</span>
                    </label>

                    <Field
                      name="accountNo"
                      placeholder="Enter your Account Number"
                      className={`form-control shadow-none ${errors.accountNo && touched.accountNo && 'is-invalid'}`}
                    />
                    {errors.accountNo && touched.accountNo ? (
                      <div className="error-message">{errors.accountNo}</div>
                    ) : null}
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="label-margin" for="accountHoldersName">
                      Account Holder's Name
                      <span class="required-star">*</span>
                    </label>

                    <Field
                      className={`form-control shadow-none ${errors.accountName && touched.accountName && 'is-invalid'}`}
                      placeholder="Enter Account Holder's Name"
                      name="accountName"
                      onkeypress='!/^[0-9\b]+$/'
                    />
                    {errors.accountName && touched.accountName ? (
                      <div className="error-message">
                        {errors.accountName}
                      </div>
                    ) : null}
                  </div>
                </div>
                  </div>
                </div>
              </div>
              {/* <!-- First Row Ended--> */}

              {/* <!-- Second Row Started--> */}
              <div class="row" style={{ marginBottom: '30px' }}>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="label-margin" for="mobilenumber">
                      Mobile Number
                      <span class="required-star">*</span>
                    </label>

                    <Field
                      name="mobileno"
                      placeholder="Enter your Mobile Number"
                      className={`form-control shadow-none ${errors.mobileno && touched.mobileno && 'is-invalid'}`}
                    />
                    {errors.mobileno && touched.mobileno ? (
                      <div className="error-message">{errors.mobileno}</div>
                    ) : null}
                  </div>
                </div>

                <div class="col-lg-6 mt-1">
                    <div class="form-group">
                      <ReCAPTCHA sitekey="6LecUaQbAAAAAMyMMfNhGR9HpiuimXIUz0yDlnBn" />
                    </div>
                  </div>
                </div>
                
                {/* <!-- First Row Ended--> */}
                {/* // <!-- Button Started--> */}
                
                <div
                  className="w-100 text-right"
                  style={{ margin: '10px 10px 10px 0px' }}>
                  <Button disabled = { Object.values(errors).length > 0 ? true : false}
                     onClick={() => {
                       setIsButtonLoading(true);
                       setTimeout(() => {
                         setIsButtonLoading(false);
                       }, 1000);
                     }}
                     
                     isLoading={isButtonLoading}
                    type="submit"
                    className="btn btn-danger"
                    style={{ float: 'right' }}>
                    <span
                      style={{
                        margin: 'auto',
                        display: 'table',
                        border: '0px solid red',
                      }}>
                    </span>{' '}
                    Verify
                  </Button>
                </div>
             
            </Form>
          )}
        </Formik>
      </div>
    </section>
  </div>
);
}




                 

export default CustomerVerify;
