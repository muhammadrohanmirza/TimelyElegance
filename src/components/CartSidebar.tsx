'use client';
import Link from 'next/link';
import { useCart } from '../app/context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function CartSidebar() {
  const { cartItems, removeFromCart, clearCart, isCartOpen, toggleCart } = useCart();
  const router = useRouter();
  
  const handleCheckout = () => {
  if (cartItems.length > 0) {
    // Save cart items temporarily for the checkout page
    sessionStorage.setItem('checkoutItems', JSON.stringify(cartItems));

    // Clear the cart immediately
    clearCart();

    // Close the cart sidebar
    toggleCart();

    // Redirect to checkout page
    router.push('/checkout');
  }
};

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-4 bg-black text-white border-b flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="TimelyElegance"
            className="rounded-full"
          />
        </Link>
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-white text-xl font-bold">✖</button>
      </div>

      {/* Scrollable Cart Items */}
      <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-3 mb-4 border-b pb-3">
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  width={60}
                  height={60}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.productName}</p>
                  <p className="text-sm text-gray-600">
                    Qty: {item.quantity} — Rs. {item.price * item.quantity}
                  </p>
                  <button
                    className="text-red-600 text-xs mt-1 hover:underline"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className=" text-center text-lg font-semibold pt-2">
              Total: Rs.{' '}
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">
              Prices include all applicable taxes
            </div>
            <div className="text-center text-xs text-gray-500 mt-1">
              <Link href="/termsandconditions" className="text-blue-600 hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Action Buttons */}
      {cartItems.length > 0 && (
        <div className="mt-2 px-4 pb-4">
          <div className="flex justify-between items-center gap-4 bg-white border border-gray-200 rounded-xl shadow-sm p-3">
            <button
              onClick={clearCart}
              className="w-full text-sm sm:w-1/2 bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition duration-200 hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600"
            >
              Clear Cart
            </button>
            <button
             onClick={handleCheckout}
              className="w-full text-sm sm:w-1/2 bg-black text-white px-4 py-2 rounded-md font-semibold transition duration-200 hover:bg-white hover:text-black hover:border-2 hover:border-black"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
