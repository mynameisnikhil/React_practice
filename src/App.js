import React from "react";
import Header from "./components/Header.js";
import { Cart } from "./components/cartPage/cartPage.js"
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";


function App() {
    return (
        <Provider store={store}>
        <div>
        <Router>
            <Header />
            <Footer />
            <Switch>
                <Route exact path="/" component={Body} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </Router>
        </div>
        </Provider>
    )
}

export default App;