import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{user}, dispatch] = useStateValue();

  //piece of code which runs based on given condition
  useEffect(() => {
    // default login logic
    const unsubscribe  = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    // return is for cleanup operations
    return () => {unsubscribe ();};

  }, []);

  console.log(user)

  return (
    // router so that we can route to any link when needed
    <Router>
      <div className="app">
        {/* Switch for switching to different routes */}
        <Routes>
          <Route path="/checkout" element={
              <>
                <Header/>
                <Checkout />
              </>}/>

          <Route path="/login" element={<Login />}/>

          {/* this is default home page */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>}/>
        </Routes>

        {/* React Router  to route to different pages*/}
      </div>
    </Router>
  );
}

export default App;
