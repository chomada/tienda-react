import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const greetings='Tienda React'
function App() {
  return (
    <>
     <NavBar/>
      <ItemListContainer  greetings={greetings}/>
    </>
     
  );
}

export default App;
