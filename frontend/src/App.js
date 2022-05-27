import './App.css'
import { Navbar, MainContent, Footer } from './components/AdminComponents'
import AddProduct from './pages/AdminPages/Products/AddProduct'
//import ListProduct from './pages/AdminPages/Products/ListProduct'


function App() {
  return (
    <div className="App">
        <Navbar />
        <AddProduct>
        </AddProduct>
        <Footer />
    </div>
  );
}

export default App
