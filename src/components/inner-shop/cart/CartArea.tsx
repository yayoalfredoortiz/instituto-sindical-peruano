"use client"
import UseCartInfo from "@/hooks/UseCartInfo";
import { addToCart, clear_cart, decrease_quantity, remove_cart_product } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartArea = () => {

   const productItem = useSelector((state: any) => state.cart.cart);
   const dispatch = useDispatch();
   const { total } = UseCartInfo();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   };

   return (
      <div className="cart__area section-py-120">
         <div className="container">
            {productItem.length === 0 ? (
               <div className="mb-30">
                  <div className="empty_bag text-center">
                     <p className="py-3">Tu carrito está vacío</p>
                     <Link href={"/shop"}>
                        <button className="btn">Ir a la tienda</button>
                     </Link>
                  </div>
               </div>
            ) : (
               <div className="row">
                  <div className="col-lg-8">
                     <table className="table cart__table">
                        <thead>
                           <tr>
                              <th className="product__thumb">&nbsp;</th>
                              <th className="product__name">Producto</th>
                              <th className="product__price">Precio</th>
                              <th className="product__quantity">Cantidad</th>
                              <th className="product__subtotal">Subtotal</th>
                              <th className="product__remove">&nbsp;</th>
                           </tr>
                        </thead>
                        <tbody>
                           {productItem.map((item: any, i: any) => (
                              <tr key={i}>
                                 <td className="product__thumb">
                                    <Link href={`/shop-details/${item.id}`}>
                                       <Image src={item.thumb} alt="producto" />
                                    </Link>
                                 </td>
                                 <td className="product__name">
                                    <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                                 </td>
                                 <td className="product__price">${item.price}.00</td>
                                 <td className="product__quantity">
                                    <div className="cart-plus-minus">
                                       <input type="text" onChange={handleSubmit} value={item.quantity} readOnly />
                                       <div onClick={() => dispatch(decrease_quantity(item))} className="dec qtybutton">-</div>
                                       <div onClick={() => dispatch(addToCart(item))} className="inc qtybutton">+</div>
                                    </div>
                                 </td>
                                 <td className="product__subtotal">${item.price * item.quantity}.00</td>
                                 <td className="product__remove">
                                    <a style={{ cursor: "pointer" }} onClick={() => dispatch(remove_cart_product(item))}>×</a>
                                 </td>
                              </tr>
                           ))}
                           <tr>
                              <td colSpan={6} className="cart__actions">
                                 {/* <form onSubmit={(e) => e.preventDefault()} className="cart__actions-form">
                                    <input type="text" placeholder="Código de cupón" />
                                    <button type="submit" className="btn">Aplicar cupón</button>
                                 </form> */}
                                 <div className="update__cart-btn text-end f-right">
                                    <button onClick={() => dispatch(clear_cart())} type="submit" className="btn btn-three">Vaciar carrito</button>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>

                  <div className="col-lg-4">
                     <div className="cart__collaterals-wrap">
                        <h2 className="title">Resumen del carrito</h2>
                        <ul className="list-wrap">
                           <li>Subtotal <span>${total.toFixed(2)}</span></li>
                           <li>Total <span className="amount">${total.toFixed(2)}</span></li>
                        </ul>
                        <Link href="/check-out" className="btn">Realizar pago</Link>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default CartArea
