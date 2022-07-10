import * as Yup from 'yup';

const CashChequeSchema = Yup.object().shape({
  depositorMobileNo: Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits")
.min(10, 'Mobile number must be exactly 10 digits')
.max(10, 'Mobile number must be exactly 10 digits')
.required('Depositor Phone Number is required.'),
depositorEmail: Yup.string()
.email('Must be a valid email')
.required('Depositor Email is required.'),

  accountHolderSelfPresent: Yup.string().required("A radio option is required"),
  
  depositAccountBank: Yup.string().required("A radio option is required"),

    
  accountNo: Yup.string().when(["accountHolderSelfPresent","depositAccountBank"],{
    is:(accountHolderSelfPresent,depositAccountBank) => accountHolderSelfPresent == "false" && depositAccountBank == "true",
    then: Yup.string()
    .required('Account number is required')
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(6, 'Account number must be exactly 6 digits')
  .max(6, 'Account number must be exactly 6 digits')
  }),
  
   accountName: Yup.string().when(["accountHolderSelfPresent","depositAccountBank"],{

    is:(accountHolderSelfPresent,depositAccountBank) => accountHolderSelfPresent == "false" && depositAccountBank =="true",
       then: Yup.string()
       .min(5, 'Too Short!')
       .max(20, 'Too Long!')
       .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
       .required("Account Holder's Name is required.")
      

  }),

  depositorName: Yup.string().when(["accountHolderSelfPresent","depositAccountBank"],{
      is:(accountHolderSelfPresent,depositAccountBank) => accountHolderSelfPresent == "false" && depositAccountBank == "false",
      
      then: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .required("Depositor's Name is required.")
    }),

});

export default CashChequeSchema;
