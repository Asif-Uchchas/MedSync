import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="md:flex md:flex-wrap md:justify-between">
          <div className="mb-8 md:w-1/2">
            <h2 className="font-bold text-xl mb-4">Making the world a better place through constructing elegant hierarchies.</h2>
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="text-white hover:underline">Solutions</a>
              <a href="#" className="text-white hover:underline">Support</a>
              <a href="#" className="text-white hover:underline">Company</a>
              <a href="#" className="text-white hover:underline">Legal</a>
            </nav>
          </div>
          <div className="md:w-1/2 md:text-right">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <h3 className="text-lg font-bold mb-2">Products</h3>
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="text-white hover:underline">Marketing</a>
                  <a href="#" className="text-white hover:underline">Pricing</a>
                  <a href="#" className="text-white hover:underline">Analytics</a>
                  <a href="#" className="text-white hover:underline">Commerce</a>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Resources</h3>
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="text-white hover:underline">Documentation</a>
                  <a href="#" className="text-white hover:underline">Guides</a>
                  <a href="#" className="text-white hover:underline">API</a>
                  <a href="#" className="text-white hover:underline">Insights</a>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Company</h3>
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="text-white hover:underline">About</a>
                  <a href="#" className="text-white hover:underline">Blog</a>
                  <a href="#" className="text-white hover:underline">Press</a>
                  <a href="#" className="text-white hover:underline">Jobs</a>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Legal</h3>
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="text-white hover:underline">Claim</a>
                  <a href="#" className="text-white hover:underline">Privacy</a>
                  <a href="#" className="text-white hover:underline">Terms</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-4">
          <p className="text-sm text-gray-400">&copy; 2023 Your Company, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap space-x-4">
            <li><a href="#" className="text-white hover:underline">Partners</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
