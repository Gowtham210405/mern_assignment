import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Support</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>Email: support@example.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Telangana, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;