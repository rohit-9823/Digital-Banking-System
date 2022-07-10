import * as Yup from 'yup';

const ChequeRequestSchema = Yup.object().shape({
  bankData: Yup.array().min(1).max(4).of(
    Yup.object().shape({
      
      bankName: Yup.string().required('Bank name is required.'),
      branch: Yup.string().required('Branch is required.'),
      chequeNumber:Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, 'Cheque number must be exactly 6 digits')
      .max(6, 'Cheque number must be exactly 6 digits')
        .required('Cheque number is required'),
        amount: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
          // .required('Amount is required'),
    })
  ).required('Must have values'),
  
  depositorName: Yup.string()
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
  .required(' Depositor Name is required.'),
  depositorEmail: Yup.string()
    .email('Must be a valid email')
    .required('Depositor Email is required.'),
    depositorMobileNo: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
  .min(10, 'Mobile number must be exactly 10 digits')
  .max(10, 'Mobile number must be exactly 10 digits')
  .required('Depositor Phone Number is required.'),
  
  chequeDate: Yup.string().required('Cheque Date is required.'),
});

export default ChequeRequestSchema;
