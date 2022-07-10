import { Redirect } from "react-router";
import { Route } from "react-router";
import FooterComponent from "../components/footer/footerComponent";
import BottomHeader from "../components/nav/bottomHeader";
import TopHeader from "../components/nav/topHeader";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        // return localStorage.getItem("Logindata") ? (
          <div>
            <TopHeader/>
            <BottomHeader />
            <Component {...routeProps}></Component>
            <FooterComponent />
          </div>
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/login",
        //     }}
        //   ></Redirect>
        // );
      }}
    ></Route>
  );
};
export default ProtectedRoute;
