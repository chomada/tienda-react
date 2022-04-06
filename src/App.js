import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const greetings = 'Tienda React'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer greetings={greetings} />}/>
      <Route path = '/species/:id' element = {<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer greetings={greetings}/>}/>
      
      
      </Routes>
      </BrowserRouter>  
    </>

  );
}

export default App;
