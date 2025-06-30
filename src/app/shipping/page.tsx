import Head from 'next/head';
import Link from 'next/link';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Shipping Policy - TimelyElegance.vercel.app</title>
        <meta name="description" content="Shipping policy of TimelyElegance.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Shipping Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">
            All the placed orders on this website are subject to acceptance and confirmation by TimelyElegance.vercel.app.
            Within 24 working hours, our sales representative will contact you either via email or phone call to confirm
            your availability, date of delivery, and address. Your order is only placed once you have received the
            confirmation phone call.
          </p>

          <p className="mb-4">
            We offer Free Delivery nationwide. Our delivery time is within 8 days.
          </p>

          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">If Product is damaged when received:</h2>
            <ul className="list-disc list-inside">
              <li>Products are only considered damaged if the physical look differs from the real look.</li>
              <li>If the parcel you receive is empty then it is considered stolen.</li>
            </ul>
          </div>

          <p className="mb-4">
            In both such cases, you may contact us via Email or Phone. After that, we will investigate this issue and
            ask for a picture of the package or any other form of evidence.
          </p>

          <div className="mb-8">
            <p>For Any further Questions or Queries regarding our Shipping policy you may contact us on:</p>
            <ul className="list-disc list-inside">
              <li >E-mail:<Link href='' className="text-blue-500"> m.rohanmirza2007@gmail.com</Link></li>
              <li>WhatsApp: <a href="https://wa.me/923221469115" target='_blank' className="text-blue-500">03221469115</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
