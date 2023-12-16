

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addProduct, addToCart } from './redux/products/actionTypes'
import Cart from './components/cart'

function App() {

  const products =useSelector(state=>state.products)
  const dispatch =useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const catagory=e.target.catagory.value
    const imageLink=e.target.imageLink.value
    const price=e.target.price.value
    const qty=e.target.qty.value
    const product={
      name,
      catagory,
      imageLink,
      price,
      qty
    }
    
    dispatch(addProduct(product))
    e.target.reset()
  }

  const handleCart=(product)=>{
    console.log(product)
    dispatch(addToCart(product))
  }
  return (
    <div className='w-full mt-0'>
      {/* <!-- Navbar --> */}
  <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
      <a href="index.html">
        <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
      </a>

      <div className="flex gap-4">
        <a href="#home" className="navHome " id="lws-home"> Home </a>
        <a href="cart.html" className="navCart" id="lws-cart">
          <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">0</span>
        </a>
      </div>
    </div>
  </nav>
  {/* <!-- Navbar ends --> */}
  <main className="py-16">
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
       {
      products.map((product,index)=>(
        <div key={index} className="lws-productCard">
        <img className="lws-productImage" src={product?.imageLink} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product?.name}</h4>
          <p className="lws-productCategory">{product?.catagory}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">BDT <span className="lws-price">{product?.price}</span></p>
            <p className="productQuantity">QTY <span className="lws-quantity">{product?.qty}</span></p>
          </div>
          <button onClick={()=>handleCart(product)} className="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>
      ))

       }
        {/* <!-- product item ends --> */}

 
       
        {/* <!-- product item ends --> */}
      </div>
      {/* <!-- products container ends --> */}
      <div>
        {/* <!-- Product Input Form --> */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input name='name' className="addProductInput" id="lws-inputName" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input name='catagory' className="addProductInput" id="lws-inputCategory" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input name='imageLink' className="addProductInput" id="lws-inputImage" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input name='price' className="addProductInput" type="number" id="lws-inputPrice" required />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input name='qty' className="addProductInput" type="number" id="lws-inputQuantity" required />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" classNameName="submit">Add Product</button>
          </form>
        </div>
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
    <Cart/>


  </main>
    </div>
  )
}

export default App
