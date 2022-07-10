import { BrowserRouter, Switch,Redirect } from "react-router-dom";
import ProtectedRoute from "../routes/Protectedroute.component";
import PublicRoute from "../routes/Publicroute.component";
import MeroShareCRN from '../components/meroShare-CRN/merShare-CRN';
import Cashdepositreq from '../components/cash-deposit-request/cashdepositreq';
import ChequeDepositRequest from '../components/chequeVerify/chequeDepositRequest';
import CustomerVerify from '../components/customer-verification/customerverify';
import Home from '../components/Home/Home';
import Subservices from '../subservice/Subservices';
import CashDeposit from '../components/cash-cheque-deposit/CashDeposit';
import ChequeDeposit from '../components/cash-cheque-deposit/chequeDeposit';
import DollarCard from '../components/card-services/dollarCard';

import DashboardNav from "../components/Dashboard/Navbar&Sidebar/DashboardNav";
import PagenotFound from "../components/PagenotFound/PagenotFound";
 function Layout(props) {
  return (
    <BrowserRouter>
      <Switch>
        
        <PublicRoute exact path="/" component={Home}></PublicRoute>
        <PublicRoute exact path="/meroshare-crn" component={MeroShareCRN}></PublicRoute>
        <PublicRoute exact path="/cash-deposit-request" component={Cashdepositreq}></PublicRoute>
        <PublicRoute exact path="/cash-service" component={CashDeposit}></PublicRoute>
        <PublicRoute exact path="/cheque-service" component={ChequeDeposit}></PublicRoute>
        <PublicRoute exact path="/customer-verification" component={CustomerVerify}></PublicRoute>
        <PublicRoute exact path="/sub-service" component={Subservices}></PublicRoute>
        <PublicRoute exact path="/cheque-deposit-request" component={ChequeDepositRequest}></PublicRoute>
        <PublicRoute exact path="/dollar-card" component={DollarCard}></PublicRoute>
        <PublicRoute exact path="/dash" component={DashboardNav}></PublicRoute>
        <PublicRoute  component={PagenotFound}></PublicRoute>
        
      </Switch>
    </BrowserRouter>
  );
};
export default Layout