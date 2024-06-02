import React from "react";

const Footer = () => {
  return (
    <div class="bg-white py-10 px-6">
      <div class="mb-10">
        <h2 class="text-3xl font-bold text-blue-600">
          DON'T BE SHY <br /> TO SAY HI
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 class="font-semibold uppercase">Offices</h3>
          <div class="mt-4">
            <h4 class="font-medium">Dubai</h4>
            <p>
              Second Floor, Building 04
              <br />
              Business Bay.
              <br />
              +971 55 169 3129
            </p>
          </div>
          <div class="mt-4">
            <h4 class="font-medium">Canada</h4>
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
          <h3 class="font-semibold uppercase">Business</h3>
          <div class="mt-4">
            <h4 class="font-medium">Dubai</h4>
            <a href="mailto:mohammad.zia@theakkaas.com" class="text-blue-600">
              mohammad.zia@theakkaas.com
            </a>
          </div>
          <div class="mt-4">
            <h4 class="font-medium">Canada</h4>
            <a href="mailto:ali.zaidi@theakkaas.com" class="text-blue-600">
              ali.zaidi@theakkaas.com
            </a>
          </div>
        </div>
        <div>
          <h3 class="font-semibold uppercase">Say Hi</h3>
          <div class="mt-4">
            <h4 class="font-medium">Contact</h4>
            <a href="mailto:info@theakkaas.com" class="text-blue-600">
              info@theakkaas.com
            </a>
          </div>
          <div class="mt-4">
            <h4 class="font-medium">Jobs</h4>
            <a href="mailto:jobs@theakkaas.com" class="text-blue-600">
              jobs@theakkaas.com
            </a>
          </div>
        </div>
        <div>
          <h3 class="font-semibold uppercase">Contact</h3>
          <div class="mt-4">
            <p>
              Reach out using our cool{" "}
              <a href="#" class="text-blue-600 font-bold">
                contact form
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-between">
        <div class="flex gap-3 items-center">
          <div>
            <a href="#" class="text-blue-600">
              <img
                className="w-full max-w-[180px]"
                src="https://theakkaas.com/wp-content/uploads/2023/01/theakkaas-logo-black.svg"
                alt="Akkaas Logo"
              />
            </a>
          </div>
          <div>
            <a href="#" class="text-blue-600">
              WHO WE ARE
            </a>
            <a href="#" class="text-blue-600">
              SERVICES
            </a>
            <a href="#" class="text-blue-600">
              PORTFOLIO
            </a>
          </div>
        </div>

        <div class="flex justify-center space-x-6">
          <a href="#" class="text-blue-600">
            Twitter
          </a>
          <a href="#" class="text-blue-600">
            Instagram
          </a>
          <a href="#" class="text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;