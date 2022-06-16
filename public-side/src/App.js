
import './App.css';
import HeaderTop from './components/header/header_top/headertop.component';
import Home from './components/home/home.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
