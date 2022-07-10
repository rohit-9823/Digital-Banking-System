import { Formik } from 'formik';
import { React, useEffect, useState } from 'react';
import LeftArrow from '../../assets/img/icons/left-arrow.svg';
import axiosInstance from '../../api/api';
import CashChequeSchema from '../../schema/verification/cashCheque.schema';
import { AccountServices } from '../../services/accountService';
import {toast} from "react-toastify";
import { Form, Field } from 'formik';
import {Button} from "../Button-loader/Button-load"
function CashDeposit(props) {
  const [branchlist, setbranchlist] = useState([]);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const apivalue = async () => {
    let alldata = await AccountServices.verifyAccount(null,'GET','get-branch')
    
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
    setbranchlist(alldata.data.data);
  }

  const backClicked = () => {
    props.history.goBack();
  };
 
  useEffect(() => {
    apivalue();
  }, []);

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
          <h2 class="form-title">Cash Verify Form</h2>

            <Formik
              initialValues={{
                accountNo: '',
                accountName: '',
                branch: '',
                currency: 'NPR',
              }}
              validationSchema={CashChequeSchema}
              onSubmit={async (values) => {

                let accountDetails = {
                  branchId: values.branch,
                  accountName: values.accountName,
                  accountNumber: values.accountNo,
                }
                let result = await AccountServices.verifyAccount(accountDetails,'POST','/verify-account');
                if(result.data.status){
                localStorage.setItem('accountData', JSON.stringify(values));
                  props.history.push('/cash-deposit-request');
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
                        {/* <!-- Select With Search Started --> */}
                        <div class="form-group">
                          <label class="label-margin" for="preferredBranch">
                            Preferred Branch<span class="required-star">*</span>
                          </label>
                        </div>
                        <Field as="select" name="branch" class="form-control">
                        <option value="" style={{display:"none"}}></option>
                          {branchlist.map((values) => (
                            <option value={values.id}>{values.name}</option>
                          ))}
                        </Field>

                        {errors.branch && touched.branch ? (
                          <div className="error-message">{errors.branch}</div>
                        ) : null}
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="label-margin" for="currency">
                            Currency
                          </label>

                          <Field
                            class="form-control"
                            disabled
                            placeholder="NPR"
                            name="currency"
                          />
                          {errors.currency && touched.currency ? (
                            <div className="error-message">
                              {errors.currency}
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
                      <label class="label-margin" for="accountNumber">
                        Account Number
                        <span class="required-star">*</span>
                      </label>

                      <Field
                        name="accountNo"
                        placeholder="Enter your Account Number"
                        class="form-control"
                        
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
                        className="form-control"
                        placeholder="Enter Account Holder's Name"
                        name="accountName"
                      />
                      {errors.accountName && touched.accountName ? (
                        <div className="error-message">
                          {errors.accountName}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* <!-- Button Started--> */}
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
                      style={{ float: 'right' }}
                      >
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
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default CashDeposit;
