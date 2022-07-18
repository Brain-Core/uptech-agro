
import './App.css';
import HeaderTop from './components/header/header_top/headertop.component';
import Home from './components/home/home.component';
import Footer from './components/footer/footer.component';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "https://uptech-agro.herokuapp.com";
  
  return (
    <div className="App">
      <HeaderTop/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
