import React from "react";

function ContactUs() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? We'd love to hear from you. Fill out
            the form and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Side */}
          <div className="bg-blue-600 text-white p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base leading-7 text-blue-100 mb-6">
              We are here to assist you with your queries, feedback, or support
              requests. Reach out through the details below or send us a
              message directly.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  123 Main Street,Telangana, India
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  support@example.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Working Hours</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-6 sm:p-8 lg:p-10">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;