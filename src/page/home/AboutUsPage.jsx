import SupportPage from "../profile/Suport";
import ContactUs from "./ContactUs";
import Services from "./Service";

const AboutPage = () => {
  return (
    <section className="bg-green-50 text-green-700 py-16 px-6 md:py-24 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">About AGRILINK Rwanda</h2>
        <p className="mt-4 text-lg">
          We are dedicated to transforming the agricultural sector in Rwanda through a digital platform that connects farmers, cooperatives, suppliers, and buyers, promoting efficiency, transparency, and sustainability.
        </p>

        {/* Mission and Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-green-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-sm">
              To create a seamless digital marketplace that empowers farmers, supports cooperatives, and facilitates transparent transactions between suppliers and buyers across Rwanda.
            </p>
          </div>

          <div className="bg-white text-green-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-sm">
              To be the leading digital platform in Rwanda that drives agricultural growth, fosters sustainable development, and supports rural communities by connecting them to the wider market.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold">Our Core Values</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white text-green-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Transparency</h4>
              <p className="mt-2 text-sm">
                We value openness and honesty in all our transactions, ensuring fair pricing and accountability at every step.
              </p>
            </div>

            <div className="bg-white text-green-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Innovation</h4>
              <p className="mt-2 text-sm">
                We embrace innovative solutions to create a modern, efficient, and scalable marketplace for agricultural products.
              </p>
            </div>

            <div className="bg-white text-green-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Sustainability</h4>
              <p className="mt-2 text-sm">
                We are committed to promoting environmentally sustainable practices in the agricultural sector.
              </p>
            </div>

            <div className="bg-white text-green-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Community</h4>
              <p className="mt-2 text-sm">
                We believe in strengthening local communities by empowering farmers and supporting the growth of rural economies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services/>

       <SupportPage/>
    </section>
  );
};

export default AboutPage;
