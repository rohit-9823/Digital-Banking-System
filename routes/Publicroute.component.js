import FooterComponent from "../components/footer/footerComponent";
import BottomHeader from "../components/nav/bottomHeader";
import TopHeader from "../components/nav/topHeader";
import { Route } from "react-router";
function PublicRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(routeProps) => {
          return (
            <div>
              <TopHeader/>
            <BottomHeader />
            <Component {...routeProps}></Component>
            <FooterComponent />
              
            </div>
          );
        }}
      ></Route>
    );
  };
  export default PublicRoute;