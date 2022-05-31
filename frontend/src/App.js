import './App.css'
import { Navbar, MainContent, Footer } from './components/AdminComponents'
import AddProduct from './pages/AdminPages/Products/AddProduct'
import ListProduct from './pages/AdminPages/Products/ListProduct'
import EditProduct from './pages/AdminPages/Products/EditProduct'
import DeleteProduct from './pages/AdminPages/Products/DeleteProduct'
import ListOrder from './pages/AdminPages/Orders/ListOrder'
// import Pages from './pages/Pages'

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainContent />
        <Footer />
        {/* <Pages /> */}
    </div>
  );
}

export default App
