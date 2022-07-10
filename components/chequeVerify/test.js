import React from 'react';

function test() {
  return (
    <div>
      <div class="col-lg-4 ">
        <div class="form-group">
          <h4>
            Depositor's Name <span class="required-star">*</span>
          </h4>
          <div>
            <Field
              class="form-control"
              name="depositorName"
              autocomplete="off"
              type="text"
              formControlName="depositorName"

              //   (focus)="focus=true" (blur)="focus=false"
            />
            {errors.depositorName && touched.depositorName ? (
              <div className="error-message">{errors.depositorName}</div>
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
              //   (focus)="focus=true" (blur)="focus=false"
            />
            {errors.chequeDate && touched.chequeDate ? (
              <div className="error-message">{errors.chequeDate}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="form-group">
          <h4>
            Depositor’s Mobile Number <span class="required-star">*</span>
          </h4>
          <div>
            <Field
              class="form-control"
              name="depositorMobileNo"
              autocomplete="off"
              type="text"
              formControlName="depositorMobileNo"
            />
            {errors.depositorMobileNo && touched.depositorMobileNo ? (
              <div className="error-message">{errors.depositorMobileNo}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="form-group">
          <h4>
            Depositor’s Email <span class="required-star">*</span>
          </h4>
          <div>
            <Field
              class="form-control"
              name="depositorEmail"
              autocomplete="off"
              type="text"
              formControlName="email"
            />
            {errors.depositorEmail && touched.depositorEmail ? (
              <div className="error-message">{errors.depositorEmail}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default test;
