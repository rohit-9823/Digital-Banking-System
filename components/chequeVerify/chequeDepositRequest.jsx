import React, { useState, useEffect } from "react";
import { Button } from "../Button-loader/Button-load";
import LeftArrow from "../../assets/images/icons/left-arrow.svg";
import RightArrow from "../../assets/images/icons/right-arrow.svg";
import Edit from "../../assets/images/icons/edit.svg";
import Swal from "sweetalert2";
import inWords from "../../utils/numberToWord";
import { AccountServices } from "../../services/accountService";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import ChequeRequestSchema from "../../schema/verification/chequeRequest.schema";
import deleteblack from "../../assets/images/delete-black.png";
import adds from "../../assets/images/add.png";
import { useHistory } from "react-router-dom";
import Checkbox from "antd/lib/checkbox/Checkbox";
function ChequeRequest(props) {
  const [totalAmount, setTotalAmount] = useState(" ");
  const [bankDetails, setBankDetails] = useState("");
  const [Banklist, setBanklist] = useState([]);
  const [getbankbranch, setgetbankbranch] = useState([]);
  const [getbankbranch2, setgetbankbranch2] = useState([]);
  const [getbankbranch3, setgetbankbranch3] = useState([]);
  const [getbankbranch4, setgetbankbranch4] = useState([]);
  const [testState, settestState] = useState("");
  const [disablebtn, setdisablebtn] = useState(false);
  const [showerrmsg, setshowerrmsg] = useState("");
  const [handleclick, sethandleclick] = useState("");
  const [banknamemenu, setbanknamemenu] = useState([]);
  const [amountvalue, setamountvalue] = useState(0);
  const [showerror, setshowerror] = useState(true);
  const [disable, setdisable] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [chequedata,setchequedata]=useState([{
    bankname:" ",
    branch:" ",
  }])

  const history = useHistory();

  const handleBankBranch = async (e,index) => {
    e.persist()
    console.log(index)
    setbanknamemenu(...banknamemenu, e.target.value);
    let id = e.target.value;
    let allData = await AccountServices.verifyAccount(
      null,
      "GET",
      `get-bank-branch/${id}`
    )
      .then((res) => {
      if(index==0){
        if (res.data.data != 0) {
          setgetbankbranch(res.data.data);
          console.table(getbankbranch)
          settestState("false");
        } else {
          settestState("true");
        }
      }

     else if(index==1){
        if (res.data.data != 0) {
          setgetbankbranch2(res.data.data);
          console.table(getbankbranch)
          settestState("false");
        } else {
          settestState("true");
        }
      }
      else if(index==2){
          if (res.data.data != 0) {
            setgetbankbranch3(res.data.data);
            console.table(getbankbranch)
            settestState("false");
          } else {
            settestState("true");
          }
      }
      else if (index==3){
          if (res.data.data != 0) {
            setgetbankbranch4(res.data.data);
            console.table(getbankbranch)
            settestState("false");
          } else {
            settestState("true");
          }
      
      }


      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Bankname = async () => {
    let alldata = await AccountServices.verifyAccount(null, "GET", "get-bank")
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
    setBanklist(alldata.data.data);
  };
  const backClicked = () => {
    history.push("/cheque-service");
    localStorage.clear();
  };
  const getAcountData = () => {
    let data = localStorage.getItem("accountData");
    console.log(data);
    let details = JSON.parse(data);
    console.log(details);
    if (details) {
      setBankDetails(details);
    }
  };

  const handleSave = (values) => {
    var test = null;
    console.log(values);
    {
      values.map((datas) => {
        if (
          isNaN(parseFloat(datas.chequeNumber)) ||
          isNaN(parseFloat(datas.bankName)) ||
          isNaN(parseFloat(datas.amount)) ||
          isNaN(parseFloat(datas.branch))
        ) {
          setshowerrmsg(" *All required field must be filled out");
          test = "false";
        } else {
          test = "true";
        }
      });
    }
    return test;
  };
  const removeDataValue = (values) => {
    let datas = amountvalue - values;
    console.log("Datas Value :: " + datas);
    // setremoveValue(datas)
    setamountvalue(datas);
    console.log("amountValue :: " + amountvalue);
  };

  let oldValueRef = React.useRef(0);

  const handler = (e) => {
    const re = /[0-9:]+/g;
    if (!re.test(e.key)) {
       e.preventDefault();
    }
    // return (e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122);
  };
  let handleAmount = (e) => {
    
    //let oldValue = oldValueRef.current;
    let newValue = e.target.value;
    if (newValue == ~~NaN) {
      newValue = 0;
    }
    let finalData = parseInt(amountvalue, 10) + parseInt(newValue, 10);
    setamountvalue(finalData);
    console.log("amount value :: " + amountvalue);
    oldValueRef.current = finalData;
    
  };

  useEffect(() => {
    Bankname();
    if (!localStorage.getItem("accountData")) {
      history.push("/");
    }

    const { match } = props;
    if (match.url === "/cheque-deposit-request") {
      window.history.pushState(null, document.title, window.location.href);

      window.addEventListener("popstate", function (event) {
        //  window.history.pushState(null, document.title,  window.location.href);
        history.push("/");
        localStorage.clear();
      });
    }

    getAcountData();
  }, []);


  return (
    <div>
      <section class="body_content">
        <div class="container form-layout w-1000 chequeform">
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

          {/* <!--Account Name and Account Number Card Started--> */}
          <div class="card card-body py-3 display-card">
            <div class="row">
              <div class="col-lg-8">
                {/* <!--Account Name Section Started--> */}
                <div class="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <h3 className="card-text font-weight-bold">Account Name</h3>
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
                    <h3 class="card-text font-weight-bold">
                      {bankDetails.accountName}
                    </h3>
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
                    <h3 class="card-text font-weight-bold">
                      {bankDetails.accountNo}
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!--Account Number Section Ended--> */}

              <div
                class="col-lg-4"
                style={{ textAlign: "right", marginTop: "10px" }}
              >
                {/* <!--Change Account Name or Account Number Button--> */}
                <button
                  class="btn-1 btn-round btn-outline-secondary px-2 py-2 rounded shadow-lg"
                  type="button"
                  onClick={backClicked}
                >
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

          <Formik
          
            initialValues={{
              bankData: [
                { bankName: "", branch: "", chequeNumber: "", amount: "" },
              ],

              depositorName: "",
              depositorEmail: "",
              depositorMobileNo: "",
              chequeDate: "",
            }}
            validationSchema={ChequeRequestSchema}
            onSubmit={async (values) => {
              let ChequeaccountDetails = {
                branchId: bankDetails.branch,
                accountName: bankDetails.accountName,
                accountNumber: bankDetails.accountNo,
                currency: bankDetails.currency,

                email: values.depositorEmail,
                chequeDate: values.chequeDate,
                depositorMobileNo: values.depositorMobileNo,
                depositorName: values.depositorName,

                details: values.bankData,
              };

              let result = await AccountServices.verifyAccount(
                ChequeaccountDetails,
                "POST",
                "/save-cheque-deposit"
              );
              console.log(result);
              if (result.data.status) {
                localStorage.setItem(
                  "chequedata",
                  JSON.stringify(ChequeaccountDetails)
                );
                Swal.fire({
                  title: "Please visit your prefered branch with code: ",
                  text: result.data.data.token,
                  icon: "success",
                  allowOutsideClick: false,
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "OK",
                  class: "cashpopup",
                }).then((result) => {
                  if (result.isConfirmed) {
                    history.push("/");
                    localStorage.clear();
                  }
                });
              }
            }}
            render={({ values, errors, touched, onBlur, onChange }) => (
              <Form autocomplete="off">
                <FieldArray
                  name="bankData"
                  render={({ push, remove }) => (
                    <div>
                      {values.bankData.length > 0 &&
                        values.bankData.map((_, index) => (
                          <div key={index}>
                            <div className="row ">
                              <div class="col ">
                                <div class="form-group">
                                  <div formArrayName="cheque">
                                    <div class="row mt-5">
                                      <div class="col-lg-3">
                                        <div class="form-group">
                                          <h4>
                                            On Whom Drawn (Bank){" "}
                                            <span class="required-star">*</span>
                                          </h4>
                                          <Field
                                            style={{ cursor: "pointer" }}
                                            as="select"
                                            // values={chequedata.bankname}
                                            // value={banknamemenu}
                                            onClick={(e) =>
                                              handleBankBranch(e,index)
                                            }
                                            name={`bankData[${index}].bankName`}
                                            autocomplete="off"
                                            formControlName="bankName"
                                            className={`form-control shadow-none`}
                                          >
                                            <option
                                              value=""
                                              style={{ display: "none" }}
                                            ></option>
                                            {Banklist.map((values) => (
                                              <option
                                                value={values.id}
                                                key={values.id}
                                              >
                                                {values.name}
                                              </option>
                                            ))}
                                          </Field>

                                          <div className="error-message">
                                            <ErrorMessage
                                              name={`bankData[${index}].bankName`}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-lg-3">
                                        <div class="form-group">
                                          <h4>
                                            Branch
                                            <span class="required-star">*</span>
                                          </h4>
                                          <Field
                                            style={{ cursor: "pointer" }}
                                            as="select"
                                            autocomplete="off"
                                            formControlName="branch"
                                            name={`bankData[${index}].branch`}
                                            className={`form-control shadow-none ${
                                              errors.branch &&
                                              touched.branch &&
                                              "is-invalid"
                                            }`}
                                          >
                                            <option
                                              value=""
                                              style={{ display: "none" }}
                                            ></option>
                                            {testState == "true" ? (
                                              <option
                                                disabled
                                                style={{
                                                  color: "gray",
                                                  border: "1px solid gray",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                No items Found
                                              </option>
                                            ) : (
                                              <>
                                              {index==0?(
                                                getbankbranch.map((values) => (
                                                  <option
                                                    value={values.id}
                                                    key={values.id}
                                                  >
                                                    {values.name}
                                                  </option>
                                                ))
                                            ):null}
                                            {index==1?(
                                                getbankbranch2.map((values) => (
                                                  <option
                                                    value={values.id}
                                                    key={values.id}
                                                  >
                                                    {values.name}
                                                  </option>
                                                ))
                                            ):null}
                                            {index==2?(
                                                getbankbranch3.map((values) => (
                                                  <option
                                                    value={values.id}
                                                    key={values.id}
                                                  >
                                                    {values.name}
                                                  </option>
                                                ))
                                            ):null}
                                            {index==3?(
                                                getbankbranch4.map((values) => (
                                                  <option
                                                    value={values.id}
                                                    key={values.id}
                                                  >
                                                    {values.name}
                                                  </option>
                                                ))
                                            ):null}

                                              </>
                                            )}
                                          </Field>
                                          <div className="error-message">
                                            <ErrorMessage
                                              name={`bankData[${index}].branch`}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-lg-3">
                                        <div class="form-group">
                                          <h4>
                                            Cheque Number{" "}
                                            <span class="required-star">*</span>
                                          </h4>
                                          <div class="input-group input-group-alternative">
                                            <Field
                                              autocomplete="off"
                                              formControlName="chequeNumber"
                                              name={`bankData[${index}].chequeNumber`}
                                              placeholder="Enter your cheque Number"
                                              className={`form-control shadow-none `}
                                            />
                                          </div>
                                          <div className="error-message">
                                            <ErrorMessage
                                              name={`bankData[${index}].chequeNumber`}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="col-lg-3">
                                        <div class="form-group">
                                          <h4>
                                            Amount{" "}
                                            <span class="required-star">*</span>
                                          </h4>
                                          <div class="input-group input-group-alternative">
                                            <Field
                                              autocomplete="off"
                                              formControlName="amount"
                                              // value={amountvalue[index]}
                                              // onChange= {handleAmount}
// onChange={e=>setamountvalue(...e.target.value)}
                                              onKeyPress={(e) => handler(e)}
                                             onBlur={handleAmount}
                                              name={`bankData[${index}].amount`}
                                              placeholder="Enter Amount"
                                              className={`form-control shadow-none ${
                                                errors.amount &&
                                                touched.amount &&
                                                "is-invalid"
                                              }`}
                                            />
                                          </div>

                                          <div className="error-message">
                                            <ErrorMessage
                                              name={`bankData[${index}].amount`}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <br />

                                      <div class="col-lg-12">
                                        {index == 0 ? null : (
                                          <button
                                            onClick={() => {
                                              let removedata =
                                                values.bankData[index].amount;
                                              console.log(removedata);
                                              if (
                                                isNaN(parseFloat(removedata))
                                              ) {
                                                removedata = 0;
                                              }
                                              removeDataValue(
                                                parseInt(removedata, 10)
                                              );
                                              {
                                                {
                                                  setshowerrmsg(" ");
                                                }
                                              }
                                              remove(index);
                                            }}
                                            type="button"
                                            class="btn btn-danger float-right p-5"
                                          >
                                            <span>
                                              <img
                                                src={deleteblack}
                                                width="20px"
                                                height="20px"
                                                alt="delete"
                                              />
                                            </span>
                                            Remove
                                          </button>
                                        )}

                                        <button
                                          class="btn btn-danger float-right p-5"
                                          type="button"
                                          // disabled = { index == 3 ? true : false}
                                          disabled={disablebtn}
                                          onClick={(e) => {
                                            if(index==3){
                                            setdisablebtn(true)
                                            }
                                            let check = handleSave(
                                              values.bankData
                                            );
                                            console.log("check :: " + check);
                                            if (check == "true" && index<3) {
                                              push({
                                                bankName: "",
                                                branch: "",
                                                chequeNumber: "",
                                                amount: "",
                                              });
                                              {
                                                setshowerrmsg(" ");
                                              }
                                            }
                                          }}
                                        >
                                          <span>
                                            <img
                                              src={adds}
                                              alt="add"
                                              width="20px"
                                              height="20px"
                                              style={{ marginRight: "5px" }}
                                            />
                                          </span>
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <br></br>
                      <div
                        className=" errmessagewarning"
                        style={{
                          marginLeft: "4px",
                          position: "relative",
                          top: "-50px",
                          width: "50%",
                        }}
                      >
                        <span>{showerrmsg}</span>
                      </div>

                      {/* <!--Total Amount display card started--> */}
                      <div class="card card-body card-margin-bottom py-3 shadow-lg bg-light">
                        <div class="row">
                          <div class="col-lg-8">
                            {/* <!--Account Name Section Started--> */}
                            <div class="row">
                              <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                                <h3 class="card-text font-weight-bold">
                                  Total Amount
                                </h3>
                              </div>
                              <div class="col-lg-7 col-md-7 col-sm-7 col-7 ">
                                <h3 class="card-text font-weight-bold">
                                  {amountvalue}
                                </h3>
                              </div>
                            </div>
                            {/* <!--Account Name Section Ended--> */}

                            {/* <!--Account Number Section Started--> */}
                            <div class="row my-2">
                              <div class="col-lg-5 col-md-5 col-sm-5 col-5">
                                <h3 class="card-text font-weight-bold">
                                  Total Amounts(In words)
                                </h3>
                              </div>
                              <div class="col-lg-7 col-md-7 col-sm-7 col-7 justify-content-right">
                                <h3 class="card-text font-weight-bold">
                                  {inWords(amountvalue)}
                                </h3>
                              </div>
                            </div>
                          </div>
                          {/* <!--Account Number Section Ended--> */}
                        </div>
                      </div>
                      {/* <!--Total Amount display card ended--> */}

                      <div class="mt-4">
                        {amountvalue>=1000000?
                        <div className="source">
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
                        <strong>
                          I/We hearby declare that the Cheques deposited is/are
                          not from any illegal activity/source
                        </strong>
                      </div>

                      <div class="row mt-5">
                        <div class="col-lg-4 ">
                          <div class="form-group">
                            <h4>
                              Depositor's Name{" "}
                              <span class="required-star">*</span>
                            </h4>
                            <div>
                              <Field
                                class="form-control"
                                name="depositorName"
                                autocomplete="off"
                                type="text"
                                formControlName="depositorName"
                              />
                              {errors.depositorName && touched.depositorName ? (
                                <div className="error-message">
                                  {errors.depositorName}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-4 ">
                          <div class="form-group">
                            <h4>
                              Cheque Date <span class="required-star">*</span>
                            </h4>
                            <div>
                              <Field
                                class="form-control"
                                name="chequeDate"
                                autocomplete="off"
                                type="date"
                                formControlName="chequeDate"
                              />
                              {errors.chequeDate && touched.chequeDate ? (
                                <div className="error-message">
                                  {errors.chequeDate}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-4">
                          <div class="form-group">
                            <h4>
                              Depositor’s Mobile Number{" "}
                              <span class="required-star">*</span>
                            </h4>
                            <div>
                              <Field
                                class="form-control"
                                name="depositorMobileNo"
                                autocomplete="off"
                                type="text"
                                formControlName="depositorMobileNo"
                              />
                              {errors.depositorMobileNo &&
                              touched.depositorMobileNo ? (
                                <div className="error-message">
                                  {errors.depositorMobileNo}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-4">
                          <div class="form-group">
                            <h4>
                              Depositor’s Email{" "}
                              <span class="required-star">*</span>
                            </h4>
                            <div>
                              <Field
                                class="form-control"
                                name="depositorEmail"
                                autocomplete="off"
                                type="text"
                                formControlName="email"
                              />
                              {errors.depositorEmail &&
                              touched.depositorEmail ? (
                                <div className="error-message">
                                  {errors.depositorEmail}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Button Started--> */}
                      <div
                        className="w-100 text-right"
                        style={{ margin: "10px 10px 10px 0px" }}
                      >
                        <Button
                          // disabled = { Object.values(errors).length > 0 ? true : false}
                          type="submit"
                          onClick={(e) => {
                            setIsButtonLoading(true);
                            setTimeout(() => {
                              setIsButtonLoading(false);
                            }, 1000);

                            // {handleSubmit()}
                          }}
                          isLoading={isButtonLoading}
                          className="btn btn-danger"
                          style={{ float: "right" }}
                        >
                          <span
                            style={{
                              margin: "auto",
                              display: "table",
                              border: "0px solid red",
                            }}
                          ></span>
                          Submit
                        </Button>
                      </div>

                      {/* <!-- Button Ended--> */}
                    </div>
                  )}
                ></FieldArray>
              </Form>
            )}
          ></Formik>
        </div>
      </section>
    </div>
  );
}

export default ChequeRequest;
