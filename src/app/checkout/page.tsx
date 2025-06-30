'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBox } from 'react-icons/fa';

type CartItem = {
  _id: string;
  productName: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem('checkoutItems');
    if (stored) {
      const parsed = JSON.parse(stored);
      setCartItems(parsed);
      const total = parsed.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    }
  }, []);

  const clearInputs = () => {
    const ids = [
      'firstName',
      'lastName',
      'address',
      'city',
      'zipcode',
      'phone',
      'email'
    ];
    ids.forEach((id) => {
      const input = document.getElementById(id) as HTMLInputElement;
      if (input) input.value = '';
    });

    const checkboxes = document.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement)?.value;
    const address = (document.getElementById('address') as HTMLInputElement)?.value;
    const city = (document.getElementById('city') as HTMLInputElement)?.value;
    const zipcode = (document.getElementById('zipcode') as HTMLInputElement)?.value;
    const phoneRaw = (document.getElementById('phone') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;

    if (!firstName || !lastName || !address || !city || !zipcode || !phoneRaw || !email) {
      alert('⚠️ Please fill all fields correctly.');
      return;
    }

    const fullName = `${firstName} ${lastName}`;
    const fullAddress = `${address}, ${city}, ${zipcode}`;

    const productDetails = cartItems
      .map(
        (item) =>
          `🛍 ${item.productName} x${item.quantity} = Rs.${
            item.price * item.quantity
          }`
      )
      .join('%0A');

    const message = `🧾 *New Order Request*%0A%0A👤 Name: ${fullName}%0A📞 Phone: ${phoneRaw}%0A🏠 Address: ${fullAddress}%0A📧 Email: ${email}%0A%0A📦 Order Details:%0A${productDetails}%0A💰 Total: Rs.${totalPrice}%0A%0A💳 Payment: Cash on Delivery (COD)%0A🏷 Billing: Same as shipping address%0A%0A➡️ Note:- "Please send this message and pick up conformation call in 24 hours".`;

    const whatsappLink = `https://wa.me/923221469115?text=${message}`;

    sessionStorage.removeItem('checkoutItems');
    setCartItems([]);
    clearInputs();

    alert('✅ Your order is being sent to WhatsApp. Please confirm to proceed.');
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="p-4 bg-slate-50 min-h-screen py-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 mx-auto max-w-7xl">
        <div className="lg:w-2/3 xl:w-3/5 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">How would you like to get your order?</h2>
          <span>
            📝 Important Instructions for New Users<br />
            <b>1)</b> ✅ Login Required: You must be logged in to place an order.<br />
            <b>2)</b>🧾 Provide Accurate Information.<br />
            <b>3)</b>📞 Verification Call within 24 hours.<br />
            <b>4)</b>⏳ Order Processing will begin after verification.
          </span>

          <div className="flex mt-5 items-center gap-4 border-2 border-black rounded-xl p-4 w-full sm:w-[440px] mb-6">
            <FaBox />
            <span className="font-medium">Deliver It</span>
          </div>

          <h3 className="text-[16px] font-medium mb-4">Enter your information:</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input id="firstName" placeholder="First Name" required className="h-12 px-4 border rounded-md" />
            <input id="lastName" placeholder="Last Name" required className="h-12 px-4 border rounded-md" />
            <input id="address" placeholder="Address" required className="h-12 px-4 border rounded-md md:col-span-2" />
            <input id="city" placeholder="City" required className="h-12 px-4 border rounded-md" />
            <input id="zipcode" placeholder="Zip Code" required className="h-12 px-4 border rounded-md" />
            <input id="phone" placeholder="03XX-XXXXXXX" required className="h-12 px-4 border rounded-md" />
            <input id="email" placeholder="Email" required className="h-12 px-4 border rounded-md" />

            <div>
              <h2 className="font-semibold text-lg mb-2">Payment</h2>
              <label className="flex items-center border rounded-md p-3 space-x-3 cursor-pointer hover:border-black">
                <input type="checkbox" name="payment" value="cod" className="form-radio" required />
                <span>Cash on Delivery (COD)</span>
              </label>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Billing address</h2>
              <label className="flex items-center border rounded-md p-3 space-x-3 cursor-pointer hover:border-black">
                <input type="checkbox" name="billing" value="same" className="form-radio" required />
                <span>Same as shipping address</span>
              </label>
            </div>
          </form>
        </div>

        <div className="lg:w-1/3 xl:w-2/5 border-t lg:border-t-0 lg:border-l pl-0 lg:pl-4 bg-white p-6 rounded-lg shadow-md mt-10 lg:mt-0">
          <h1 className="text-[18px] font-medium text-center mb-4">Order Summary</h1>

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div key={item._id} className="flex gap-4 mt-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.productName}
                    width={70}
                    height={70}
                    className="w-[70px] h-[70px] object-contain"
                  />
                  <div>
                    <p className="text-[12px] font-medium">{item.productName}</p>
                    <p className="text-[12px] mt-1">Qty {item.quantity}</p>
                    <p className="text-[12px] font-bold mt-1">Rs. {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center border-t border-b border-gray-400 mt-4 py-2">
                <p className="text-black font-medium text-[14px]">Total</p>
                <p className="text-black font-medium text-[14px]">Rs. {totalPrice}</p>
              </div>
              <h1 className="text-[14px] font-bold text-center">Arrives in 5-7 business days</h1>
              <p className="text-[10px] text-gray-500 mt-2 text-center">
                (The total reflects the price of your order, including all duties and taxes)
              </p>
            </>
          ) : (
            <p className="text-center text-sm text-gray-500">No items</p>
          )}

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="bg-black sm:w-96 text-white px-10 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
