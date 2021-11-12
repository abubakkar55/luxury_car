import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './Pages/Home';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';
import MongoFirebaseProvider from './Context/MongoFirebaseProvider';
import RegisterLogin from './Pages/RegisterLogin';
import ExploreProducts from './Pages/ExploreProducts';
import Reviews from './components/Reviews/Reviews';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <MongoFirebaseProvider>
      <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route  path="/register">
              <RegisterLogin />
            </Route>

            <Route  path="/explore_cars">
              <ExploreProducts />
            </Route>

            <Route  path="/reviews">
              <Reviews />
            </Route>



            <Route path="*">
              <NotFound />
            </Route>


          </Switch>

          <Footer />
        </Router>



      </div>
    </MongoFirebaseProvider>

  );
}

export default App;
