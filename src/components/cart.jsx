import { useDispatch, useSelector } from "react-redux"
import { quantityAdd, quantityRemove, removeFromCart } from "../redux/products/actionTypes"


const Cart = () => {
    const cart =(useSelector(state=>state.cart))
    const dispatch=useDispatch()
  return (
    <div>
         {/* <!-- Navbar --> */}
  <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
      <a href="index.html">
        <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
      </a>

      <div className="flex gap-4">
        <a href="#home" className="navHome" id="lws-home"> Home </a>
        <a href="cart.html" className="navCart" id="lws-cart">
          <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">0</span>
        </a>
      </div>
    </div>
  </nav>
  {/* <!-- Navbar ends --> */}
  <main className="py-16">
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {
            cart.map((product,index)=>(
                <div key={index} className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              {/* <!-- cart image --> */}
              <img className="lws-cartImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
              {/* <!-- cart item info --> */}
              <div className="space-y-2">
                <h4 className="lws-cartName">{product?.name}</h4>
                <p className="lws-cartCategory">{product?.catagory}</p>
                <p>BDT <span className="lws-cartPrice">{product?.price}</span></p>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              {/* <!-- amount buttons --> */}
              <div className="flex items-center space-x-4">
                <button onClick={()=>dispatch(quantityAdd(product))} className="lws-incrementQuantity">
                  <i className="text-lg fa-solid fa-plus text-white"></i>
                </button>
                <span className="lws-cartQuantity">{product.quantity}</span>
                <button onClick={()=>dispatch(quantityRemove(product))}  className="lws-decrementQuantity">
                  <i className="text-lg fa-solid fa-minus text-white"></i>
                </button>
              </div>
              {/* <!-- price --> */}
              <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{product.quantity* Number(product?.price)}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button onClick={()=>dispatch(removeFromCart(product))} className="lws-removeFromCart">
                <i className="text-lg text-red-400 fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
            ))
          }
          {/* <!-- Cart Items Ends --> */}

        </div>

        {/* <!-- Bill Details --> */}
        <div>
          <div className="billDetailsCard">
            <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
            <div className="space-y-4">
              {/* <!-- sub total --> */}
              <div className="flex items-center justify-between">
                <p>Sub Total</p>
                <p>BDT <span className="lws-subtotal">{}</span></p>
              </div>
              {/* <!-- Discount --> */}
              <div className="flex items-center justify-between">
                <p>Discount</p>
                <p>BDT <span className="lws-discount">0</span></p>
              </div>
              {/* <!-- VAT --> */}
              <div className="flex items-center justify-between">
                <p>VAT</p>
                <p>BDT <span className="vat">0</span></p>
              </div>
              {/* <!-- Total --> */}
              <div className="flex items-center justify-between pb-4">
                <p className="font-bold">TOTAL</p>
                <p className="font-bold">BDT <span className="lws-total">8800</span></p>
              </div>
              <button className="placeOrderbtn">place order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Cart