'use client';

const HeaderSlider = () => {
  return (
    <div className=" sticky z-50 w-full overflow-hidden bg-white text-red-600 border border-red-300 border-solid py-2">
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animationDuration: '40s' }} // Adjust speed here
      >
        <span className="mx-4">
        🕒 Just In: Premium Watches and luxury Watches! &nbsp; | &nbsp;  

        ⌚ New Launch: Smartwatch X Series Now Available! &nbsp; | &nbsp; 

        💎 Luxury Redefined: Timeless Classics for Every Wrist &nbsp; | &nbsp;  

        🚚 Free Express Shipping on Every order! &nbsp; | &nbsp;  

        🔄 Easy Returns: Under 4-Days Return Policy &nbsp; | &nbsp;

        🎁 Gift Ready: Elegant Packaging on All Orders &nbsp; | &nbsp;

        🧭 Explore Now: Dive Into Our Adventure Watch Collection &nbsp; | &nbsp;

        🛒 Limited Stock: Grab Your Favorite Watch Before It&apos;s Gone! &nbsp; | &nbsp;

        🥇 Trusted by 10,000+ Customers Worldwide — Join the Family! &nbsp; | &nbsp;
    
        🛒 Shop Now & Enjoy Exclusive Watches!
        </span>
        <span className="mx-10">
          🕒 Just In: Premium Watches and luxury Watches! &nbsp; | &nbsp;  

        ⌚ New Launch: Smartwatch X Series Now Available! &nbsp; | &nbsp; 

        💎 Luxury Redefined: Timeless Classics for Every Wrist &nbsp; | &nbsp;  

        🚚 Free Express Shipping on Every order! &nbsp; | &nbsp;  

        🔄 Easy Returns: Under 4-Days Return Policy &nbsp; | &nbsp;

        🎁 Gift Ready: Elegant Packaging on All Orders &nbsp; | &nbsp;

        🧭 Explore Now: Dive Into Our Adventure Watch Collection &nbsp; | &nbsp;

        🛒 Limited Stock: Grab Your Favorite Watch Before It&apos;s Gone! &nbsp; | &nbsp;

        🥇 Trusted by 10,000+ Customers Worldwide — Join the Family! &nbsp; | &nbsp;
    
        🛒 Shop Now & Enjoy Exclusive Watches!
        </span>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeaderSlider;
