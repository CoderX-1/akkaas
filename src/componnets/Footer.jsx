import React from "react";
import { Link } from 'react-dom'

const Footer = () => {
  return (
    <footer>
<div className="bg-white py-10 px-6">
    <div className="container mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-blue-600">
          DON'T BE SHY <br /> TO SAY HI
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-semibold uppercase">Offices</h3>
          <div className="mt-4">
            <h4 className="font-medium">Dubai</h4>
            <p>
              Second Floor, Building 04
              <br />
              Business Bay.
              <br />
              +971 55 169 3129
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">Canada</h4>
            <p>
              Suit # 2505, 50 Ordnance Street,
              <br />
              Toronto, ON M6K1A2
              <br />
              +1 (437) 500-6267
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold uppercase">Business</h3>
          <div className="mt-4">
            <h4 className="font-medium">Dubai</h4>
            <Link to="mailto:mohammad.zia@theakkaas.com" class="text-blue-600">
              mohammad.zia@theakkaas.com
            </Link>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">Canada</h4>
            <Link to="mailto:ali.zaidi@theakkaas.com" class="text-blue-600">
              ali.zaidi@theakkaas.com
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold uppercase">Say Hi</h3>
          <div className="mt-4">
            <h4 className="font-medium">Contact</h4>
            <Link to="mailto:info@theakkaas.com" className="text-blue-600">
              info@theakkaas.com
            </Link>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">Jobs</h4>
            <Link to="mailto:jobs@theakkaas.com" className="text-blue-600">
              jobs@theakkaas.com
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold uppercase">Contact</h3>
          <div className="mt-4">
            <p>
              Reach out using our cool{" "}
              <Link to="#" className="text-blue-600 font-bold">
                contact form
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-between flex-col md:flex-row">
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <div>
            <Link to="#" className="text-blue-600">
              <img
                className="w-full max-w-[180px]"
                src="https://theakkaas.com/wp-content/uploads/2023/01/theakkaas-logo-black.svg"
                alt="Akkaas Logo"
              />
            </Link>
          </div>
          <div className="flex space-x-2">
            <Link to="#" class="text-blue-600">
              WHO WE ARE
            </Link>
            <Link to="#" class="text-blue-600">
              SERVICES
            </Link>
            <Link to="#" class="text-blue-600">
              PORTFOLIO
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          <Link to="#" className="text-blue-600">
            Twitter
          </Link>
          <Link to="#" className="text-blue-600">
            Instagram
          </Link>
          <Link to="#" className="text-blue-600">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
    </div>
    </footer>
    
  );
};
export default Footer;
