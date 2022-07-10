import { Formik } from 'formik';
import { React, useEffect, useState } from 'react';
import { Form, Field } from 'formik';
import LeftArrow from '../../assets/img/icons/left-arrow.svg';
import { AccountServices } from '../../services/accountService';
import {Button} from "../Button-loader/Button-load"
import Mobilebankingsub from '../../schema/verification/Mobilebankingsub';
import ReCAPTCHA from 'react-google-recaptcha';
import DollarCardschema from '../../schema/verification/Dollarcard.schema';

function DollarCard(props) {

  const[title,setTitle] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const backClicked = () => {
    props.history.goBack();
  };



  return (

    <div style={{marginTop:'-55px'}}>
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
        <h2 class="form-title">Dollar Card Request</h2>
        <Formik
          initialValues={{
            accountNo: '',
            panNo: '',
            mobileno: '',
            email:'',
            
          }}
          validationSchema={DollarCardschema}
          onSubmit={async (values) => {

            let accountDetails = {
              panNo: values.panNo,
              accountNumber: values.accountNo,
              mobilenumber: values.mobileno,
              email: values.email,
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
                    <label class="label-margin" for="panno">
                      PAN Number
                      <span class="required-star">*</span>
                    </label>

                    <Field
                      name="panNo"
                      placeholder="Enter your Pan Number"
                      className={`form-control shadow-none ${errors.panNo && touched.panNo && 'is-invalid'}`}
                    />
                    {errors.panNo && touched.panNo ? (
                      <div className="error-message">{errors.panNo}</div>
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
                    <label class="label-margin" for="email">
                      Email
                      <span class="required-star">*</span>
                    </label>

                    <Field
                      name="email"
                      placeholder="Enter your Email Address"
                      className={`form-control shadow-none ${errors.email && touched.email && 'is-invalid'}`}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
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
                </div>
                <div class="row" style={{ marginBottom: '30px' }}>
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




                 

export default DollarCard;
