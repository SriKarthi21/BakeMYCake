import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { useState, useEffect,useContext } from 'react';
import Axios from "axios";
import { useErrorBoundary } from "react-error-boundary";

import Header from './Components/Header';
import Footer from './Components/Footer';
import CakeView from './Components/CakeView';
import Search from "./Components/Search"
import Filter from "./Components/Filter";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Components/Login";
import CakeDetail from "./Components/CakeDetail"
import Order from "./Components/Order";
import AuthContext from "./Components/AuthContext";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const [initialCake, setCake] = useState([]);
  const [filterCatergory, setfilterCatergory] = useState("");
  const { showBoundary } = useErrorBoundary();
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await Axios.get(`http://localhost:3000/cakes`)

        if (isMounted) {
          setCake(response.data);
          return response.data;
        }
      }
      catch (error) {
        console.error("Error fetching DATA", error)// Handle the error here, e.g., display an error message, retry the request, etc.
        showBoundary(error);

      }
      finally {
        setIsLoading(false);
      }
    }

    fetchData()


    return () => {
      isMounted = false;
    }
  }, [filterCatergory])

  const displayData = Filter(initialCake, filterCatergory);

  function handleFilter(e) {
    { setfilterCatergory( e.target.value) }
  }
  return (
    <div className="App">
          
      <BrowserRouter>
      <Header />
            <Search onfilterItem={filterCatergory} onSearch={handleFilter}  />

        <Routes>
          <Route path="/" element={<CakeView data={displayData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cakes/:id" element={  <CakeDetail />} />
         { isLoggedIn &&(
          <Route path="/orders" element={<Order/>} />
          )}
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
