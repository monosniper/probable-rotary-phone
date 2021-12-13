import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './scss/App.scss';
import Header from "./components/layout/Header";
import {Container} from "reactstrap";
import Footer from "./components/layout/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    intent: "capture",
};

function App() {
  return (
      <PayPalScriptProvider options={initialOptions}>
          <BrowserRouter>
              <Container>
                  <Header/>
                  <AppRouter/>
              </Container>
              <Footer />
          </BrowserRouter>
      </PayPalScriptProvider>
  );
}

export default App;
