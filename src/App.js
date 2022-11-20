import './App.css';
import Menu from './components/navigation';
import MyCarousel from './components/carousel';
import  Main from './components/Main';
//npm install react-material-ui-carousel
function App () {
  return (
    <div className="App">
      <Menu />
      <MyCarousel />
      <Main />
    </div>
  );
}

export default App;
