import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Destination() {
  return (
    <div id="destination" className="lg:px-[100px] md:py-8 p-5 md:px-10">
      <div className="w-full flex justify-center border-b border-borderGrayscale">
        <h2 className="font-semibold text-3xl lg:text-5xl text-[#DA7297] py-4 md:py-8">
          Are you ready to travel?
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        <div className="p-4 cursor-pointer hover:shadow-lg  transition-all duration-300">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src="/image/air_mata_mudal4.jpg"
              alt="Air Mata Mudal"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="p-4 cursor-pointer hover:shadow-lg  transition-all duration-300">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src="/image/Bismo.jpg"
              alt="Basecamp Bismo"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="p-4 cursor-pointer hover:shadow-lg  transition-all duration-300">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src="/image/jembatan-2.jpg"
              alt="Jembatan warna"
              layout="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg mb-8 border-[#DA7297]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            <div className="flex flex-col items-start lg:w-full">
              <h3 className="text-xl font-semibold text-[#DA7297]">
                Pendakian Gunung Bismo
              </h3>
              <p className="mt-2 text-gray-600">Tiket: Rp35.000</p>
              <p className="mt-2 text-gray-600">Ojeg: Rp20.000</p>
              <p className="mt-2 text-gray-600">Pukul Buka: 24 jam</p>
              <div className="flex overflow-x-auto mt-4 space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/bismo2.webp"
                    alt="Bismo view 1"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/Bismo.jpg"
                    alt="Bismo view 2"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/bismo2.webp"
                    alt="Bismo view 3"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-64">
              <Image
                src="/image/Bismo.jpg"
                alt="Pendakian Gunung Bismo"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg mb-8 border-[#DA7297]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            <div className="flex flex-col items-start lg:w-full">
              <h3 className="text-xl font-semibold text-[#DA7297]">
                Air Mata Muudal
              </h3>
              <p className="mt-2 text-gray-600">Tiket: Bayar Parkir</p>
              <p className="mt-2 text-gray-600">Pukul Buka: 07:00 - 17:00</p>
              <div className="flex overflow-x-auto mt-4 space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/air_mata_mudal3.jpg"
                    alt="Air Mata Muudal view 1"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/air_mata_mudal2.jpg"
                    alt="Air Mata Muudal view 2"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/air_mata_mudal5.jpg"
                    alt="Air Mata Muudal view 3"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-64">
              <Image
                src="/image/air_mata_mudal4.jpg"
                alt="Air Mata Muudal"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg border-[#DA7297]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            <div className="flex flex-col items-start lg:w-full">
              <h3 className="text-xl font-semibold text-[#DA7297]">
                Jembatan Warna
              </h3>
              <p className="mt-2 text-gray-600">Tiket: Free</p>
              <p className="mt-2 text-gray-600">Pukul Buka: 06:00 - 17:00</p>
              <div className="flex overflow-x-auto mt-4 space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/jembatan-3.jpg"
                    alt="Jembatan Warna view 1"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/jembatan-5.jpg"
                    alt="Jembatan Warna view 2"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/image/jembatan-7.jpg"
                    alt="Jembatan Warna view 3"
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-64">
              <Image
                src="/image/jembatan-2.jpg"
                alt="Jembatan Warna"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
