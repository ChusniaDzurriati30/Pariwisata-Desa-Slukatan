import Image from "next/image";
import React from "react";
import AboutImage from "../../../../public/image/about.svg"; // Ganti dengan gambar desa jika tersedia

export default function About() {
  return (
    <div id="About" className="lg:px-[100px] md:py-8 p-5 md:px-10">
      <div className="w-full flex justify-center border-b border-borderGrayscale">
        <h2 className="font-semibold text-3xl lg:text-5xl text-baseBlack py-4 md:py-8">
          About Desa Slukatan
        </h2>
      </div>
      <div className="lg:flex lg:justify-between items-center mt-6">
        {" "}
        <div className="max-w-md">
          <Image src={AboutImage} alt="Desa Slukatan" />{" "}
        </div>
        <div className="max-w-2xl">
          <div className="bg-basePrimary rounded-xl ">
            <p className="text-baseBlack md:text-[22px] mt-4 text-justify">
              Desa Slukatan, terletak di Kecamatan Mojotengah, Kabupaten
              Wonosobo, adalah tempat yang mempesona dengan panorama alam yang
              memukau dan kehangatan masyarakat lokal. Desa ini menawarkan
              keindahan alami dan kekayaan budaya yang kental.
            </p>
          </div>
          <p className="text-baseBlack md:text-[22px] mt-4 text-justify">
            {" "}
            Desa Slukatan adalah contoh indah dari kehidupan desa yang harmonis
            dengan alam. Dikenal dengan pemandangan pegunungan yang menakjubkan,
            udara yang segar, serta kebudayaan lokal yang kaya, desa ini
            merupakan tempat yang ideal untuk merasakan kedamaian dan keaslian
            kehidupan pedesaan.
            <br />
            <br />
            Masyarakat Desa Slukatan menyambut para pengunjung dengan tangan
            terbuka, menawarkan pengalaman yang otentik dan hangat. Dari tradisi
            lokal hingga kegiatan sehari-hari, Desa Slukatan adalah tempat di
            mana setiap individu dapat merasakan keindahan yang hakiki dan
            menjalin hubungan yang berarti dengan komunitas lokal.
          </p>
        </div>
      </div>
    </div>
  );
}
