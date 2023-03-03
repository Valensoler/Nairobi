import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting={"Bienvenidos a Nairobi Clothes"}></ItemListContainer>
    </div>
  );
}

export default App;
