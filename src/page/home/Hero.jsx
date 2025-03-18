import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Services from "./Service";
import AboutUs from "./AboutUsPage";
import ContactUs from "./ContactUs";

export default function Hero() {
  return (
    <div>
        <section className="relative bg-green-700 text-white py-16 px-6 md:py-24 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transforming Agriculture in Rwanda
          </h1>
          <p className="mt-4 text-lg">
            Connecting farmers, cooperatives, and suppliers with buyers for a transparent and efficient marketplace.
          </p>
          <div className="mt-6 space-x-4">
            <Link to="/auth">
              <Button className="bg-white text-green-700 font-semibold hover:bg-gray-200">Shop Now</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="text-white bg-green-400 border-white hover:bg-green-600">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQx74Rias22Tn2ZTrzNHmG4sJyMtEBqsalg&s"
  alt="Farmers Market"
  className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
/>

        </div>
      </div>
    </section>
 
    </div>
  );
}
