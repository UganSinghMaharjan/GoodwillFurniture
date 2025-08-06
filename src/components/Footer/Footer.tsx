import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 bg-[#5c4430] py-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="mb-3 text-xl font-semibold">YourBrand</h2>
          <p className="text-sm">
            Where ideas find a home and dreams take flight.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">Kathmandu, Nepal</p>
          <p className="text-sm">Phone: +977-9876543210</p>
          <p className="text-sm">Email: hello@yourbrand.com</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white pt-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
