import { Truck, Box, Users, Handshake } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white text-green-700 py-16 px-6 md:py-24 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4 text-lg">
          AGRILINK Rwanda provides a range of services to transform agricultural commerce. We connect farmers, cooperatives, and suppliers to various buyers for a transparent and efficient marketplace.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Service 1 - Delivery */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <Truck size={36} className="text-green-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Fast Delivery</h3>
            <p className="mt-2 text-sm">
              We offer fast and reliable delivery services to ensure your products reach the right buyers quickly and efficiently.
            </p>
          </div>

          {/* Service 2 - Product Listings */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <Box size={36} className="text-green-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Product Listings</h3>
            <p className="mt-2 text-sm">
              List your agricultural products easily and attract buyers with transparent pricing and quality verification.
            </p>
          </div>

          {/* Service 3 - Market Access */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <Users size={36} className="text-green-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Market Access</h3>
            <p className="mt-2 text-sm">
              Gain access to a wide range of buyers including food processors, retailers, exporters, and consumers.
            </p>
          </div>

          {/* Service 4 - Secure Transactions */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <Handshake size={36} className="text-green-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Secure Transactions</h3>
            <p className="mt-2 text-sm">
              We ensure secure transactions, protecting both buyers and sellers with our payment and order management systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
