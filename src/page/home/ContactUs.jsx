import { MapPin, Phone, Twitch } from "lucide-react";
import { FaTwitter } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className=" text-green-700 py-16 px-6 md:py-24 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">
          Have questions, feedback, or inquiries? Reach out to us, and we’ll get
          back to you as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center max-w-6xl mx-auto px-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
            <form className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 ">
                Send Us a Message
              </h3>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-y transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 bg-white mt-8 lg:mt-12 rounded-md h-[500px] flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold  mb-6">
              Our Contact Information
            </h3>

            <div className="mb-6   gap-6 sm:gap-12">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <Phone size={24} className="text-green-700 flex-shrink-0" />
                  <p className="ml-2 ">+250 123 456 789</p>
                </div>
                <div className="flex items-center">
                  <MapPin size={24} className="text-green-700 flex-shrink-0" />
                  <p className="ml-2 ">Kigali, Rwanda</p>
                </div>
              </div>

              {/* Social Info */}
              <div className="flex flex-col sm:flex-row mt-4 gap-6">
                <div className="flex items-center">
                  <Phone size={24} className="text-green-700 flex-shrink-0" />
                  <p className="ml-2">+250 123 456 789</p>
                </div>
                <div className="flex items-center">
                  <FaTwitter
                    size={24}
                    className="text-green-700 flex-shrink-0"
                  />
                  <p className="ml-2">Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
