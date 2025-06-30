import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Terms & Conditions - TimelyElegance.vercel.app</title>
        <meta name="description" content="Terms and conditions for using TimelyElegance.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Limitation and Release of Liability</h2>
            <p className="mb-2">
              While every effort is made to ensure the information provided on this website is accurate, it may change
              over time. TimelyElegance.vercel.app reserves the full right to update or modify any content without prior
              notice or alert.
            </p>
            <p>
              If any errors occur in product details, photos, specifications, prices, or packaging content due to
              supplier or site admin mistakes, TimelyElegance.vercel.app has full authority to correct them without any
              prior notification.
            </p>
            <p>
              TimelyElegance.vercel.app is not liable for any damage, loss, or theft caused by reliance on incorrect
              information published on the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <p className="mb-2">
              All orders placed on this website are subject to acceptance and confirmation by TimelyElegance.vercel.app.
            </p>
            <p>
              Within 24 working hours, our representative will contact you via phone to confirm the order details,
              delivery address, and your availability. Your order is considered placed only after this confirmation call.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Delivery</h2>
            <p className="mb-2">
              Currenwatches.com.pk will deliver your ordered product(s) to the provided address, depending on product
              availability.
            </p>
            <p>
              <strong>Color Difference:</strong> Actual product colors may slightly differ from what appears on your screen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
