import React, { useState } from "react";

export default function Calculator() {
  const [val, setVal] = useState("");

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  return (
    <>
      <div class="mx-auto overflow-hidden mt-10  mb-2 bg-[#735d78] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div class="">
          <div class="p-5 text-white text-center text-3xl bg-[#735d78]">
            <span class="font-bold text-[#515151]">Calcu</span>lator
          </div>

          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            class=" w-full p-7 text-white text-right text-3xl bg-[#b392ac]"
          />

          <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button
              value="C"
              onClick={() => backspace()}
              class="h-20 w-full rounded-lg flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              clear
            </button>
          </div>

          <div class="flex items-stretch bg-[#735d78] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="7"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                7
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="8"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                8
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="9"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                9
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="*"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                ×
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#735d78] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="4"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                4
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="5"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                5
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="6"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                6
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="-"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                -
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#735d78] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="1"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                1
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="2"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                2
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="3"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                3
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="+"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#735d78] h-24 mb-4">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="."
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                .
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="0"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                0
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="/"
                onClick={(e) => setVal(val + e.target.value)}
                class="rounded-full h-20 w-20 flex items-center bg-[#b392ac] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                /
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                value="="
                onClick={() => calculate()}
                class="rounded-full h-20 w-20 flex items-center bg-[#6d6875] justify-center shadow-lg border-2 border-gray-50 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
