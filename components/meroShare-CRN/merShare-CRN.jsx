import React from "react";
import "font-awesome/css/font-awesome.min.css";
import LeftArrow from "../../assets/images/icons/left-arrow.svg";
import { Formik, Form, Field } from "formik";
import MeroShareSchema from "../../schema/meroShare/meroShareCRN.schema";
import {Button} from "../Button-loader/Button-load"
import { useState } from "react";
function MeroShareCRN(props) {
  const backClicked = () => {
    props.history.goBack();
  };
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  return (
    <>
      {/* <!--Account Verify Form--> */}
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
          <h2 class="form-title">MeroShare & CRN Request</h2>

          <Formik
            initialValues={{
              request: "",
              accountName: "",
              accountNum: "",
              dpId: "",
              clientId: "",
              address: "",
              email: "",
              mobileNum: "",
            }}
            validationSchema={MeroShareSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  {/* <!-- Main Row Started--> */}
                  <div class="row">
                    <div class="col-lg-12">
                      {/* <!-- First Row Started--> */}
                      <div class="row" style={{ marginBottom: "30px" }}>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="label-margin" for="request">
                              Request For<span class="required-star">*</span>
                            </label>
                            <Field
                              as="select"
                              class="form-control"
                              name="request"
                              aria-describedby="request"
                            >
                              <option value="both">Both</option>
                              <option value="meroshare">Meroshare</option>
                              <option value="crn">CRN</option>
                            </Field>
                            {errors.request && touched.request ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.request}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="label-margin" for="accountName">
                              Account Holder Name
                              <span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="accountName"
                              placeholder="Enter your applicant name"
                            />
                            {errors.accountName && touched.accountName ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.accountName}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {/* // <!-- First Row Ended--> */}
                      <div class="row" style={{ marginBottom: "30px" }}>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label
                              class="label-margin"
                              for="accountHoldersName"
                            >
                              DPID<span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="dpId"
                              aria-describedby="dpid"
                              placeholder="Enter your DPID"
                            />
                            {errors.dpId && touched.dpId ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.dpId}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="label-margin" for="clintid">
                              Client Id<span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="clientId"
                              aria-describedby="clientid"
                              placeholder="Enter your Client Id"
                            />
                            {errors.clientId && touched.clientId ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.clientId}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {/* <!-- Second Row Started--> */}
                      <div class="row" style={{ marginBottom: "30px" }}>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="label-margin" for="clintid">
                              Account Number<span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="accountNum"
                              aria-describedby="accountNumber"
                              placeholder="Enter your Account Number"
                            />
                            {errors.accountNum && touched.accountNum ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.accountNum}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="form-group">
                            <label
                              class="label-margin"
                              for="accountHoldersName"
                            >
                              {" "}
                              Address<span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="address"
                              aria-describedby="address"
                              placeholder="Enter your Address"
                            />
                            {errors.address && touched.address ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.address}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Second Row Ended--> */}

                      <div class="row" style={{ marginBottom: "30px" }}>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="label-margin" for="mobileNumber">
                              Mobile Number<span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="mobileNum"
                              aria-describedby="mobileNumber"
                              placeholder="Enter your Mobile Number"
                            />
                            {errors.mobileNum && touched.mobileNum ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.mobileNum}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="form-group">
                            <label
                              class="label-margin"
                              for="accountHoldersName"
                            >
                              Email Address<span class="required-star">*</span>
                            </label>
                            <Field
                              class="form-control"
                              name="email"
                              aria-describedby="emailAddress"
                              placeholder="Enter your Email Address"
                            />
                            {errors.email && touched.email ? (
                              <div className="error-message alert-secondary form-control mb-2">
                                {errors.email}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Button Started--> */}
                    <div
                      class="w-100 text-right"
                      style={{ margin: "10px 10px 10px 0px" }}
                    >
                      <Button
                        disabled={
                          Object.values(errors).length > 0 ? true : false
                        }
                        class="btn btn-danger form-control"
                        onClick={() => {
                          setIsButtonLoading(true);
                          setTimeout(() => {
                            setIsButtonLoading(false);
                          }, 1000);
                        }}
                        isLoading={isButtonLoading}
                        type="submit"
                        value="Verify"
                      >
                        <span
                          style={{
                            margin: "auto",
                            display: "table",
                            border: "0px solid red",
                          }}
                        >
                          <mat-progress-spinner
                            diameter="30"
                            mode="indeterminate"
                            value="100"
                            color="blue"
                          ></mat-progress-spinner>
                        </span>
                        Submit
                      </Button>
                    </div>
                    {/* <!-- Button Ended--> */}
                  </div>
                  {/* <!-- Main Row Ended--> */}
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
      </div>
    </>
  );
}

export default MeroShareCRN;
