import React from "react";
import Logo from "../../../../public/image/logoo.png";
import Image from "next/image";
import Icon from "@/app/component/atoms/Icon";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Pengembangan Diri",
  },
  {
    id: 2,
    title: "Pembuatan CV",
  },
  {
    id: 3,
    title: "Pencarian Pekerjaan",
  },
  {
    id: 4,
    title: "Konseling Karir",
  },
];

const help = [
  {
    id: 1,
    title: "FAQ",
    link: "/",
  },
  {
    id: 2,
    title: "Kontak Kami",
    link: "/",
  },
  {
    id: 3,
    title: "Kebijakan Privasi",
    link: "/",
  },
  {
    id: 4,
    title: "Syarat dan Ketentuan",
    link: "/",
  },
];

const social = [
  {
    id: 1,
    title: "Tiktok",
    icon: <Icon name="tiktok" aria-label="Tiktok" />,
    url: "https://www.tiktok.com/@cu.career?_t=8mX8ypppXow&_r=1",
  },
  {
    id: 2,
    title: "Instagram",
    icon: (
      <Icon name="instagram" width={24} height={24} aria-label="Instagram" />
    ),
    url: "https://www.instagram.com/cu.career?igsh=M2lxb3l1ZGcwOGFj",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <Icon name="linkedin" aria-label="LinkedIn" />,
    url: "https://www.linkedin.com/company/topcareerupgrade/",
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#F2F4F8] md:mx-5 mx-2 rounded-t-3xl"
      aria-labelledby="footer-heading"
    >
      <div className="lg:px-[100px] p-5 md:p-10 lg:py-[72px] md:flex md:justify-between">
        <div className="max-w-md">
          <Image
            alt="Career Upgrade Logo"
            src={Logo}
            width={100}
            height={100}
          />
          <p className="text-baseBlack font-medium text-base lg:text-lg text-justify mt-4">
            Career Upgrade adalah platform pengembangan skill persiapan karir
            untuk calon profesional. Kami percaya setiap individu memiliki
            potensi besar untuk sukses dan berkomitmen membantu mereka mengasah
            keterampilan dan memasuki dunia profesional.
          </p>
        </div>
        <div className="mt-5 md:mt-0" aria-labelledby="services-heading">
          <h3
            id="services-heading"
            className="text-baseBlack font-semibold text-xl"
          >
            Layanan Kami
          </h3>
          {data.map((item) => (
            <div key={item.id}>
              <p className="text-baseBlack font-medium text-base lg:text-lg mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 md:mt-0" aria-labelledby="help-heading">
          <h3
            id="help-heading"
            className="text-baseBlack font-semibold text-xl"
          >
            Bantuan dan Dukungan
          </h3>
          {help.map((item) => (
            <div key={item.id}>
              <Link href={item.link} legacyBehavior>
                <p className="text-blue-600 font-medium text-base lg:text-lg mt-3 underline underline-offset-1 hover:text-blue-800">
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-5 md:mt-0" aria-labelledby="follow-heading">
          <h3
            id="follow-heading"
            className="text-baseBlack font-semibold text-xl"
          >
            Ikuti Kami
          </h3>
          <div className="flex gap-2 mt-4 items-center">
            {social.map((item) => (
              <div key={item.id} className="hover:bg-white p-2 rounded-full">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
