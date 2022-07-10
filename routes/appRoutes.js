import MeroShareCRN from '../components/meroShare-CRN/merShare-CRN';
import Cashdepositreq from '../components/cash-deposit-request/cashdepositreq';
import ChequeDepositRequest from '../components/chequeVerify/chequeDepositRequest';
import CustomerVerify from '../components/customer-verification/customerverify';
import Home from '../components/Home/Home';
import Subservices from '../subservice/Subservices';
import CashDeposit from '../components/cash-cheque-deposit/CashDeposit';
import ChequeDeposit from '../components/cash-cheque-deposit/chequeDeposit';
import DollarCard from '../components/card-services/dollarCard';
import DashboardNav from '../components/Dashboard/Navbar&Sidebar/DashboardNav';
export const ROUTES = [
  {
    name: 'Home',
    component: Home,
    route: '/',
  },
  {
    name: 'Dashboard',
    component: DashboardNav,
    route: '/Dashboard',
  },

  {
    name: 'Mero Share CRN',
    route: '/meroshare-crn',
    component: MeroShareCRN,
  },

  {
    name: 'cash-deposit-request',
    route: '/cash-deposit-request',
    component: Cashdepositreq,
  },
  {
    name: 'Cash-deposit',
    route: '/cash-service',
    component: CashDeposit,
  },
  {
    name: 'cheque-deposit',
    route: '/cheque-service',
    component: ChequeDeposit,
  },
  {
    name: 'customer-verification',
    route: '/customer-verification',
    component: CustomerVerify,
  },
  {
    name: 'subservice',
    route: '/sub-service',
    component: Subservices,
  },

  {
    name: 'Cheque Deposit Request',
    component: ChequeDepositRequest,
    route: '/cheque-deposit-request',
  },
  {
    name : "dollarcard",
    component : DollarCard,
    route : "/dollar-card"
  },

];
