import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-200 text-gray-700 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo & Contact */}
        <div className="px-1">
          <h2 className="text-xl font-bold">LOGO</h2>
          <p className="mt-4 font-semibold">Let’s talk! 👍</p>
          <p className="mt-2 text-sm">909000909000</p>
          <p className="text-sm">@Gmail.Com</p>
          <p className="text-sm">Address</p>
        </div>

        {/* Products */}
        <div className="px-4 sm:px-8 md:px-12">
  <h3 className="font-semibold mb-3">PRODUCTS</h3>
  <ul className="space-y-2 text-sm">
    <li>Spot</li>
    <li>Inverse Perpetual</li>
    <li>USDT Perpetual</li>
    <li>Exchange</li>
    <li>Launchpad</li>
    <li>Binance Pay</li>
  </ul>
</div>


        {/* Services */}
        <div className="px-4 sm:px-8 md:px-12">
          <h3 className="font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Buy Crypto</li>
            <li>Markets</li>
            <li>Trading Fee</li>
            <li>Affiliate Program</li>
            <li>Referral Program</li>
            <li>API</li>
          </ul>
        </div>

        {/* Support */}
        <div className="px-4 sm:px-8 md:px-12">
          <h3 className="font-semibold mb-3">SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>User Feedback</li>
            <li>Submit A Request</li>
            <li>Trading Rules</li>
          </ul>
        </div>

        {/* About Us */}
        <div className="px-4 sm:px-8 md:px-12">
          <h3 className="font-semibold mb-3">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li>About Bybit</li>
            <li>Authenticity Check</li>
            <li>Careers</li>
            <li>Business Contacts</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-500">
          © 2023 Company Name. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-600">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
