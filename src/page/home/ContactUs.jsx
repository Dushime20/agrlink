import { MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white text-green-700 py-16 px-6 md:py-24 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">
          Have questions, feedback, or inquiries? Reach out to us, and we’ll get back to you as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center max-w-6xl mx-auto px-4">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
        <form className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
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
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
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
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
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
      <div className="w-full lg:w-1/2 mt-8 lg:mt-2">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Contact Information</h3>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-start sm:justify-center gap-6 sm:gap-12">
          <div className="flex items-center">
            <Phone size={24} className="text-green-700 flex-shrink-0" />
            <p className="ml-2 text-gray-700">+250 123 456 789</p>
          </div>
          <div className="flex items-center">
            <MapPin size={24} className="text-green-700 flex-shrink-0" />
            <p className="ml-2 text-gray-700">Kigali, Rwanda</p>
          </div>
        </div>
        
        {/* Map container with responsive height */}
        <div className="w-full h-64 md:h-72 lg:h-64 xl:h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.181848447784!2d30.058761301989356!3d-1.9773224604001685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d88c6ef98c38e5%3A0x800f7ac27662b7ae!2sKigali%20City!5e0!3m2!1sen!2srw!4v1670488271985!5m2!1sen!2srw"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AGRILINK Rwanda Location"
          ></iframe>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>Visit our office to learn more about how AGRILINK is transforming agriculture in Rwanda.</p>
        </div>
      </div>
    </div>

    
      </div>
    </section>
  );
}
