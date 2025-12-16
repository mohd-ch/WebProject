export default function Features() {
  return (
    <section className="px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        What We Offer
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="p-6 text-gray-900 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Modern Tech Stack</h3>
          <p className="mt-2 text-gray-600 text-sm">
            We use the latest technologies to build scalable and secure products.
          </p>
        </div>

        <div className="p-6 text-gray-900 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Fast Delivery</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Optimized workflows help ship features quickly and reliably.
          </p>
        </div>

        <div className="p-6 text-gray-900 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Global Collaboration</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Experience working with global teams, including the USA.
          </p>
        </div>
      </div>
    </section>
  );
}
