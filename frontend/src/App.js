import './App.css'
import { Navbar, MainContent, Footer } from './components/AdminComponents'
import AddProduct from './pages/AdminPages/Products/AddProduct'
import ListProduct from './pages/AdminPages/Products/ListProduct'
import EditProduct from './pages/AdminPages/Products/EditProduct'
import DeleteProduct from './pages/AdminPages/Products/DeleteProduct'
import ListOrder from './pages/AdminPages/Orders/ListOrder'

import Utama from './pages/Utama.js'
import Profile from './pages/UserPages/Profile.js'
import Katalog from './pages/UserPages/Katalog.js'
import ListCheckout from './pages/UserPages/ListCheckout.js'
import ListKeranjang from './pages/UserPages/ListKeranjang.js'

import Login from './pages/Login'
function App() {
  return (
    <div className="App">
        <Navbar />
        <MainContent>
          <AddProduct>
            <ListProduct />
            <EditProduct />
            <DeleteProduct />
          </AddProduct>
          <ListOrder />
          <Utama />
          <Profile />
          <Katalog />
          <ListCheckout />
          <ListKeranjang />
          <Login />
        </MainContent>
        <Footer />
    </div>
  );
}

export default App
