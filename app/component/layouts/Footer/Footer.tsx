import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#F2F4F8] p-5 rounded-t-3xl"
      aria-labelledby="footer-heading"
    >
      <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between lg:px-[100px]">
        <div className="flex items-center mb-4 lg:mb-0">
          <Image
            alt="PDDikti Logo"
            src="/image/logoo.png"
            width={70}
            height={70}
          />
          <div className="ml-3">
            <h3 className="text-baseBlack font-semibold text-xl">
              Pariwisata Desa Slukatan
            </h3>
            <p className="text-baseBlack font-medium text-base lg:text-lg">
              Kecamatan Mojotengah Kabupaten Wonosobo
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-[100px] p-5">
        <div aria-labelledby="contact-heading">
          <h3
            id="contact-heading"
            className="text-baseBlack font-semibold text-xl"
          >
            Lokasi dan Kontak
          </h3>
          <p className="text-baseBlack font-medium text-base lg:text-lg mt-3">
            Desa Slukatan Kecamatan Mojotengah Kabupaten Wonosobo
          </p>
          <p className="text-blue-600 font-medium text-base lg:text-lg mt-3">
            <Link
              href="https://slukatan-mojotengah.wonosobokab.go.id/"
              className="underline underline-offset-1 hover:text-blue-800"
            >
              Website Desa Slukatan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
