import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const greetings = 'Tienda React'
function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greetings={greetings} /> */}
      <ItemDetailContainer greetings={greetings}/>
    </>

  );
}

export default App;
