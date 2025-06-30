
import Head from 'next/head';

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Return & Exchange Policy - TimelyElegance.vercel.app</title>
        <meta name="description" content="Return and exchange policy for TimelyElegance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Return & Exchange Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <section>
            <p>If you are not 100% satisfied with your purchase, please contact us:</p>
            <ul className="list-disc list-inside mt-2">
              <li>WhatsApp: <a href="https://wa.me/923221469115" target='_blank' className="text-blue-500">03221469115</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Return & Exchange Eligibility</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You can return the watch within 5 days of delivery for a full refund (minus shipping and handling).</li>
              <li>Watches with scratches, damage, or signs of use will not be eligible for a refund.</li>
              <li>Return the product unused in its original condition, including all packaging, manuals, and accessories.</li>
              <li>Return shipping is the customer’s responsibility.</li>
              <li>We are not responsible for lost or damaged return shipments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">What We Need to Process a Return/Exchange</h2>
            <p>
              Proof of purchase is required (sales receipt or packing slip). Refunds will be made using the original
              payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Smartwatches Return Policy</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>No return/exchange on change of mind. Only faulty or damaged smartwatches are eligible under warranty.</li>
              <li>Bluetooth range should not exceed 10 meters.</li>
              <li>Do not use fast chargers or overcharge the watch.</li>
              <li>The smartwatch app must run in the background for proper connectivity.</li>
              <li>Follow water-resistance precautions to avoid damage.</li>
              <li>Battery performance varies with usage and device connectivity.</li>
              <li>This is not a replacement for professional medical or fitness devices.</li>
              <li>Actual product appearance may slightly differ due to display/screen effects.</li>
              <li>Handle with care. Physical damage due to drops or misuse is not covered.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Returns Validity</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Warranty does not cover dust, dirt, or external environmental damage.</li>
              <li>Warranty is void if there is customer misuse, unauthorized repairs, or natural calamities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Right to Refuse Returns</h2>
            <p>
              We reserve the right to refuse returns/exchanges if the watch shows signs of wear, damage, or is missing
              packaging, tags, or manuals.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
