import { React, useState,useEffect } from 'react';
import RightArrow from '../../assets/images/icons/right-arrow.svg';
import LeftArrow from '../../assets/images/icons/left-arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import './cashdepositreq.css';
import inWords from '../../utils/numberToWord';
import { useHistory } from 'react-router';
import { Formik, Form, Field, FieldArray } from 'formik';
import CashChequeSchema from '../../schema/verification/cashRequest.schema';
import { AccountServices } from '../../services/accountService';
import {Button} from "../Button-loader/Button-load"
import Swal from 'sweetalert2';

function Cashdepositreq(props) {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [BankDetails, setBankDetails] = useState('')
  const [cashdata, setcashdata] = useState([])
  const [isShowingY, setisShowingY] = useState(true);
  const [isHolder, setisHolder] = useState(true);
  const [thousand, setthousand] = useState('');
  const [fiveHundred, setfiveHundred] = useState('');
  const [hundred, sethundred] = useState('');
  const [fifty, setfifty] = useState('');
  const [twenty, settwenty] = useState('');
  const [ten, setten] = useState('');
  const [five, setfive] = useState('');
  const [two, settwo] = useState('');
  const [one, setone] = useState('');
  const [coin, setcoin] = useState('');
  const [returnAmt, setreturnAmt] = useState('');
  const [showerrmsg, setshowerrmsg] = useState('');
  const [errvalues, seterrvalues] = useState('');
  const [errmsgdisplay, seterrmsgdisplay] = useState(false);


  const megaAccountN = () => {
    setisShowingY(false);
    

  };
  const megaAccountY = () => {
    setisShowingY(true);
    
    
  };
  const depositerAcHolderY = () => {
    setisHolder(true);
  };
  const depositerAcHolderN = () => {
    setisHolder(false);
  };
  const callthousand = (e) => {
    setthousand(e.target.value);
    
  };

  const backClicked = () => {
    history.push('/cash-service')
    localStorage.removeItem('accountData');
  };
  const history=useHistory()
  
  const getAcountData = () => {
    let data = localStorage.getItem('accountData');
    let details = JSON.parse(data);
    if (details) {
      setBankDetails(details);
    }
  };

const checkcash=(e)=>{
    if(thousand=='' && fiveHundred=='' &&hundred=='' &&fifty=='' &&twenty=='' &&ten=='' &&five=='' &&two=='' &&one=='' &&coin==''){
      setshowerrmsg(' *Atleast one field from above table should contain value')
      seterrmsgdisplay(true);
      e.preventDefault();
      
    }
    else{
      seterrmsgdisplay(false)
      seterrvalues(2);
    }

    // if(mathi ko no xa ra tala ko yes xa ra duita field khali xa vane e.prevent default
    // or
    // if mathi ko no xa tala ko ni no xa ra yauta field khali xa vane e.prevent default)
    if(!isShowingY ){
      console.log('khali xa');
    }
    else{
      console.log('bhareko xa');
    }
  }
  const changeClicked = () => {
    history.push('/cash-service')
    localStorage.clear();
  };
  useEffect(() => {

    
    if( !localStorage.getItem('accountData')){
      history.push('/');
    }
    const { match } = props;
    if(match.url === "/cash-deposit-request"){
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
        //  window.history.pushState(null, document.title,  window.location.href);
        history.push('/');
        localStorage.removeItem('accountData');
      });
    }      
    getAcountData();
  }, []);
  let Thousand = thousand * 1000;
  let FiveHundred = fiveHundred * 500;
  let Hundred = hundred * 100;
  let Fifty = fifty * 50;
  let Twenty = twenty * 20;
  let Ten = ten * 10;
  let Five = five * 5;
  let Two = two * 2;
  let One = one * 1;
  let Coin = coin * 1;
  let returnamount = returnAmt;
  let finalAmount =
    Thousand +
    FiveHundred +
    Hundred +
    Fifty +
    Twenty +
    Ten +
    Five +
    Two +
    One +
    Coin -
    returnamount;


  return (
    <>
      <section class="body_content">
        <div class="container cashform form-layout w-1000">
          {/* <!--Back Button Started--> */}
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
          {/* <!--Back Button Ended--> */}

          {/* <!--Account Name and Account Number Card Started--> */}
          <div class="card card-body py-3 display-card">
            <div class="row">
              <div class="col-lg-8">
                {/* <!--Account Name Section Started--> */}
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-4 ">
                    <h3 class="font-weight-bold">Account Name</h3>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                    <img
                      class="font-weight-bold"
                      src={RightArrow}
                      width="50px"
                      height="30px"
                      alt="right-arrow"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6 shadow-lg rounded">
                    <h3 class="card-text font-weight-bold">{BankDetails.accountName}</h3>
                  </div>
                </div>
                {/* <!--Account Name Section Ended--> */}

                {/* <!--Account Number Section Started--> */}
                <div class="row my-2">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                    <h3 class="card-text font-weight-bold">Account Number</h3>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                    <img
                      class="font-weight-bold"
                      src={RightArrow}
                      width="50px"
                      height="30px"
                      alt="right-arrow"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6 shadow-lg rounded">
                    <h3 class="font-weight-bold">{BankDetails.accountNo}</h3>
                  </div>
                </div>
              </div>
              {/* <!--Account Number Section Ended--> */}

              <div
                class="col-lg-4"
                style={{ textAlign: 'right', marginTop: '10px' }}>
                {/* <!--Change Account Name or Account Number Button--> */}
                <button
                  class="btn-1 btn-round btn-outline-secondary py-2 rounded shadow-lg"
                  type="button"
                  onClick={changeClicked}>
                  <img
                    class="mr-1"
                    src={Edit}
                    width="30px"
                    height="30px"
                    alt="edit"
                  />
                  Change
                </button>
              </div>
            </div>
          </div>
          {/* <!--Account Name and Account Number Card Ended--> */}

          {/* <!--  New Form Started  --> */}
          <Formik

          
            initialValues={{
              accountName:'',
              accountNo:'',
               branchName: '',
              depositorName: '',
              depositorEmail: '',
              amount:{finalAmount},
              depositorMobileNo: '',
              accountHolderSelfPresent:'true',
              depositAccountBank:'true',
              cashdenomination:'',
              errmsg:'',
            }}
            
            validationSchema={CashChequeSchema}
            onSubmit={async (values) => {
              let CashaccountDetails = {
                branchId: BankDetails.branch,
                accountName: BankDetails.accountName,
                accountNumber: BankDetails.accountNo,
                depositorName: values.depositorName,
                email: values.depositorEmail,
                depositorMobileNo: values.depositorMobileNo,
                amount:finalAmount,
                thousand:thousand,
                fivehundred:fiveHundred,
                hundred:hundred,
                fifty:fifty,
                twenty:twenty,
                ten:ten,
                five:five,
                two:two,
                one:one,
                coin:coin,
                returns:returnAmt,
                accountHolderSelfPresent:isShowingY,
                accountHolderOfBank:isHolder,
                accountNumberOfDepositor:'',
                
              }
              
              
              let result = await AccountServices.verifyAccount(CashaccountDetails,'POST','/save-cash-deposit')
              console.log(result);
             if(result.data.status){
              localStorage.setItem('accountDatas', JSON.stringify(CashaccountDetails));              
              Swal.fire({
                title: 'Please visit your prefered branch with code: ',
                text: result.data.data.token,
                icon: 'success',
                allowOutsideClick:false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                class:"cashpopup",
              }).then((result) => {
                if (result.isConfirmed) {
                  history.push('/');
                  localStorage.clear();
                }
              })




                // props.history.push('/cheque-deposit-request');
            }
            }}>

            {({ values, errors, touched }) => (
              <Form autocomplete="off">
                    <FieldArray name="friends">
                    
                      <div>
            
            <div class="form-group" formGroupName="myDenominationGroup">

              <div class="row">
                <div class="col-lg-6">
                  {/* <!-- Home Block Started--> */}
                  <div class="home_block">
                    {/* <!-- Table Started--> */}
                    <table class="table border rounded">
                      <thead class="text-white bg-dark">
                        <tr>
                          <td>Denomination</td>
                          <td>Quantity</td>
                          <td>thousand</td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1000</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              formControlName="cashdenomination"
                              type="text"
                              value={thousand}
                              onChange={callthousand}
                            />
                             
                          </td>
                          <td>{Thousand}</td>
                        </tr>

                        <tr>
                          <td>500</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              type="text"
                              formControlName="cashdenomination"
                              value={fiveHundred}
                              onChange={(e) => setfiveHundred(e.target.value)}
                            />
                            
                          </td>
                          <td>{FiveHundred}</td>
                        </tr>

                        <tr>
                          <td>100</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={hundred}
                              onChange={(e) => sethundred(e.target.value)}





                              


                            />

                          </td>
                          <td>{Hundred}</td>
                        </tr>

                        <tr>
                          <td>50</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={fifty}
                              onChange={(e) => setfifty(e.target.value)}
                            />
                          </td>
                          <td>{Fifty}</td>
                        </tr>

                        <tr>
                          <td>20</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={twenty}
                              onChange={(e) => settwenty(e.target.value)}
                            />
                          </td>
                          <td>{Twenty}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <!-- Table Ended--> */}
                  </div>
                  {/* <!--Home Block Ended--> */}
                </div>

                <div class="col-lg-6">
                  {/* <!-- Home Block Started--> */}
                  <div class="home_block">
                    {/* <!-- Table Started--> */}
                    <table class="table border rounded">
                      <thead class="text-white bg-dark">
                        <tr>
                          <td>Denomination</td>
                          <td>Quantity</td>
                          <td>Amount</td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>10</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={ten}
                              onChange={(e) => setten(e.target.value)}
                            />
                          </td>

                          <td>{Ten}</td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={five}
                              onChange={(e) => setfive(e.target.value)}
                            />
                          </td>
                          <td>{Five}</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={two}
                              onChange={(e) => settwo(e.target.value)}
                            />

                          </td>
                          <td>{Two}</td>
                        </tr>

                        <tr>
                          <td>1</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={one}
                              onChange={(e) => setone(e.target.value)}
                            />
                          </td>
                          <td>{One}</td>
                        </tr>

                        <tr>
                          <td>Coins</td>
                          <td>
                            <Field
                            name="cashdenomination"
                            className={`form-control denomination-input`}
                              
                              type="text"
                              formControlName="cashdenomination"
                              value={coin}
                              onChange={(e) => setcoin(e.target.value)}
                            />
                          </td>
                          <td>{Coin}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <!-- Table Ended--> */}
                  </div>

                  {/* <!--home block end--> */}
                </div>
              </div>
            </div>
            {/* <!-- New Denomination Slip Ended --> */}
            {/* <Field
                      className={`form-control shadow-none `}
                      // className="errmessage"
                      autocomplete="off"
                      formControlName="errmsg"
                      // value={errvalues}
                      name="errmsg"
                      // type="text"
                      // disabled
                    /> */}
                    {/* <span>{showerrmsg}</span> */}
                    
                    {errmsgdisplay ? (
                                <div className=" errmessagewarning">
                                  {/* {errors.errmsg} */}
                                  <span>{showerrmsg}</span>
                                </div>
                              ) : null}

            {/* <!-- Return Section Started --> */}
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <h4>Return </h4>
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      autocomplete="off"
                      formControlName="returns"
                      placeholder="Return"
                      type="text"
                      value={returnAmt}
                      onChange={(e) => setreturnAmt(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Return Section Ended --> */}

            {/* <!--Total Amount display card started--> */}
            <div
              class="card card-body card-margin-bottom py-3 shadow-lg bg-light"
              style={{ marginBottom: '50px' }}>
              <div class="row">
                <div class="col-lg-8">
                  {/* <!--Account Name Section Started--> */}
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <h4 class="card-text font-weight-bold">Total Amount</h4>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7 ">
                      <h4 class="card-text font-weight-bold"> {finalAmount}</h4>
                    </div>
                  </div>
                  {/* <!--Account Name Section Ended--> */}

                  {/* <!--Account Number Section Started--> */}
                  <div class="row my-2">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                      <h4 class="card-text font-weight-bold">
                        Total Amount(In words)
                      </h4>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-7 col-7">
                      <h3 class="card-text font-weight-bold">
                        {inWords(finalAmount)}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <!--Account Number Section Ended--> */}
              </div>
            </div>
            {/* <!--Total Amount display card ended--> */}
              {/* Source of income started */}
              <div class="mt-4">
              {finalAmount>=1000000?
                        <div className="source2">
                        <strong>Source of Deposit</strong><br/><br/>
                        <input type="radio" id="checking" className="checking"  name="checking" value="saving" />Saving
                        <input type="radio" id="checking1" className="checking"  name="checking" value="business" />Business
                        <input type="radio" id="checking2" className="checking"  name="checking" value="salesofassets" />Sale of Assets
                        <input type="radio" id="checking3" className="checking"  name="checking" value="borrowing" />Borrowing
                        <input type="radio" id="checking4" className="checking"  name="checking" value="other" />Other Specify
                        <input type="text" className="inputbox_source" id="inputbox_source" /><br/>
                        </div>
                        :null}
                        <br/>
                        </div>
                  {/* Source of income ended */}
            {/* <!-- Account Holder self present Started --> */}
            <div style={{ marginBottom: '20px' }}>
              <h4 class="font-weight-bold">Account Holder Self Present?</h4>

         



              <span class="mr-5">
              
                <Field
                  type="radio"
                  name="accountHolderSelfPresent"
                  value='true'
                  defaultChecked={true}
                  onClick={megaAccountY}
                  
                />{' '}
                Yes
              </span>
              <span>
                <Field
                  type="radio"
                  name="accountHolderSelfPresent"
                  value='false'
                  onClick={megaAccountN}
                />{' '}
                No
              </span>
            </div>
            {/* <!-- Account Holder self present Ended --> */}

            {/* <!-- Depositor's Detail Section Started --> */}
           
                <div class="row">

                    <div class="col-lg-4 ">
                          <div class="form-group">
                            <h4>
                              Depositor's Number
                              <span class="required-star">*</span>
                            </h4>
                            <div >




                    <Field
                      className={`form-control shadow-none ${errors.depositorMobileNo && touched.depositorMobileNo && 'is-invalid'}`}
                      autocomplete="off"
                      placeholder="Depositor's Mobile Number"
                      formControlName="depositorMobileNo"
                      type="text"
                      name="depositorMobileNo"
                    />


                            
                              {errors.depositorMobileNo && touched.depositorMobileNo ? (
                                <div className="error-message">
                                  {errors.depositorMobileNo}
                                </div>
                              ) : null}
                            </div>
            
                        </div>
                        </div>

            
                        <div class="col-lg-4 ">
                          <div class="form-group">
                            <h4>
                              Depositor's Email
                              <span class="required-star">*</span>
                            </h4>
                            <div>
                              
                              <Field
                    className={`form-control shadow-none ${errors.depositorEmail && touched.depositorEmail && 'is-invalid'}`}
                    autocomplete="off"
                    placeholder="Depositor's Email"
                    formControlName="depositorEmail"
                    type="email"
                    
                                name="depositorEmail"

                             
                              />
                              {errors.depositorEmail && touched.depositorEmail ? (
                                <div className="error-message">
                                  {errors.depositorEmail}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                  
                </div>
            {/* <!-- Depositor's Detail Section Ended --> */}

            {
               isShowingY ? null :(// {/* <!-- Self Present Section Started --> */
                <div>
                  <div style={{ margin: '20px 0px' }}>
                    <h4 class="font-weight-bold">
                      If account holder is not present
                    </h4>
                    <h4 class="font-weight-bold">
                      Is depositor account holder of Shangrila Bank?
                    </h4>

                  
                    <span class="mr-5">
              
              <Field
                
                type="radio"
                name="depositAccountBank"
                value="true"
                defaultChecked={true}
                onClick={depositerAcHolderY}
                
              />{' '}
              Yes
            </span>
            <span>
              <Field
                type="radio"
                  name="depositAccountBank"
                  value="false"
                  onClick={depositerAcHolderN}
                />{' '}
              No
            </span>



                  </div>
                  {isHolder ? (
                    <div formGroupName="depositorAccountHolderFormGroup">
                      <p>If depositor is account holder of Shangrila Bank</p>
                      <div class="row mt-5">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <h4>
                              Account Number{' '}
                              <span class="required-star">*</span>{' '}
                            </h4>
                           
                            <div >
                    <Field
                      className={`form-control shadow-none ${errors.accountNo && touched.accountNo && 'is-invalid'}`}
                      autocomplete="off"
                      formControlName="accountNumberOfDepositor"
                      placeholder="Account Number "
               type="text"
                      name="accountNo"
                      
                    />


                            
                              {errors.accountNo && touched.accountNo ? (
                                <div className="error-message">
                                  {errors.accountNo}
                                </div>
                              ) : null}
                           
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="form-group">
                            <h4>
                              Account Holder's Name{' '}
                              <span class="required-star">*</span>{' '}
                            </h4>
                            <div >
                    <Field
                    validateOnBlur
                    className={`form-control shadow-none ${errors.accountName && touched.accountName && 'is-invalid'}`}
                      autocomplete="off"
                      formControlName="accountHoldersName"
                                placeholder="Account Holder's Name "
             type="text"
                      name="accountName"
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
                  ) : (
                    <div formGroupName="depositorNonAccountHolderFormGroup">
                      <p>If despositor is non-account holder of Shangrila Bank</p>
                      <div class="row mt-5">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <h4>
                              Depositor's Name{' '}
                              <span class="required-star">*</span>{' '}
                            </h4>
                            <div >
                            <Field
                      className={`form-control shadow-none ${errors.depositorName && touched.depositorName && 'is-invalid'}`}
                      autocomplete="off"
                      formControlName="depositorName"
                                placeholder="Depositor's Name "
             type="text"
                      name="depositorName"
                    />


                            
                              {errors.depositorName && touched.depositorName ? (
                                <div className="error-message">
                                  {errors.depositorName}
                                </div>
                              ) : null}
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  )  }
                </div>) 
            
                
                // {/* <!-- Self Present Section Ended --> */}
              }

              {/* <!-- Button Started--> */}
              <div
                      className="w-100 text-right"
                      style={{ margin: '10px 10px 10px 0px' }}>
                    <Button  disabled = { Object.values(errors).length > 0 ? true : false}
                    type="submit"
                    // disabled = { Object.values(errors).length > 0 ? true : false}
                       onClick={(e) => {
                         setIsButtonLoading(true);
                         setTimeout(() => {
                           setIsButtonLoading(false);
                          }, 1000);
                          checkcash(e);
                          // {handleSubmit()}
                       }}
                       isLoading={isButtonLoading}
                      
                      className="btn btn-danger"
                      style={{ float: 'right' }}>
                      <span
                        style={{
                          margin: 'auto',
                          display: 'table',
                          border: '0px solid red',
                        }}>
                      </span>
                      Submit
                    </Button>
                  </div> 
                      {/* <!-- Button Ended--> */}
              </div>
              
              </FieldArray>            </Form>
            )}
            </Formik>
        </div>
      </section>
    </>
  );
}

export default Cashdepositreq;
