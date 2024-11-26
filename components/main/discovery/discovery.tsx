"use client";

import React from "react";

export function DiscoverSection() {
  return (
    <section className="text-gray-900 body-font bg-light">
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-4 lg:px-0 pt-16 sm:pt-24 md:pt-28 lg:pt-32 items-center">
        <div className="text-dark font-extrabold text-center leading-none text-3xl sm:text-4xl md:text-5xl lg:text-title">
          Discover how we work
        </div>
        <div className="text-dark font-extrabold mt-2 text-center leading-none text-3xl sm:text-4xl md:text-5xl lg:text-title">
          to deliver outstanding results
        </div>
      </div>
      <div className="max-w-screen-xl py-24 mx-auto overflow-x-hidden px-4 flex justify-center sm:px-8 md:px-5 lg:px-4">
        <div className="flex text-left sm:text-center flex-col lg:flex-row justify-center items-start relative">
          <div className="lg:flex hidden absolute w-3/4 top-16 border-dotted border-t-4 border-gray-300"></div>
          <div className="lg:p-4 w-full lg:w-1/4 flex flex-row lg:flex-col lg:justify-center lg:items-center">
            <div className="p-5 bg-white rounded-full mb-5 z-10 image-hover-effect">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 5.25012C23.5875 5.25316 21.2746 6.2221 19.5687 7.94443C17.8627 9.66676 16.903 12.0019 16.9 14.4376C16.9 14.7857 17.037 15.1195 17.2808 15.3657C17.5246 15.6118 17.8552 15.7501 18.2 15.7501C18.5448 15.7501 18.8754 15.6118 19.1192 15.3657C19.363 15.1195 19.5 14.7857 19.5 14.4376C19.5019 12.6977 20.1874 11.0297 21.4059 9.79938C22.6245 8.5691 24.2767 7.87707 26 7.87512C26.3448 7.87512 26.6754 7.73684 26.9192 7.4907C27.163 7.24456 27.3 6.91072 27.3 6.56262C27.3 6.21453 27.163 5.88069 26.9192 5.63455C26.6754 5.38841 26.3448 5.25012 26 5.25012ZM26 0.000138581C17.6361 0.000138581 11.6902 6.85383 11.7 14.4565C11.6997 17.9453 12.9579 21.3148 15.2392 23.9352C17.3241 26.3321 19.3245 30.2442 19.5 31.5001L19.5049 37.668C19.5051 37.9259 19.5812 38.178 19.7234 38.3923L21.7141 41.4143C21.8326 41.5943 21.9934 41.7419 22.182 41.8441C22.3707 41.9463 22.5814 41.9999 22.7955 42H29.2021C29.4166 42.0003 29.6278 41.9469 29.8169 41.8447C30.006 41.7425 30.1672 41.5947 30.2859 41.4143L32.2766 38.3907C32.4176 38.1758 32.4935 37.9241 32.4951 37.6663L32.5 31.5001C32.6828 30.2105 34.6937 26.3165 36.7607 23.9352C38.5703 21.8487 39.7461 19.28 40.1472 16.5365C40.5483 13.7929 40.1578 10.9908 39.0225 8.46552C37.8872 5.94021 36.0551 3.79873 33.7455 2.2974C31.436 0.796063 28.7469 -0.00151233 26 0.000138581ZM29.8951 37.2677L28.5057 39.375H23.491L22.1049 37.2677V36.75H29.8976L29.8951 37.2677ZM29.9 34.125H22.1L22.0951 31.5001H29.9V34.125ZM34.8083 22.2051C33.6708 23.5135 31.8573 26.15 30.6995 28.8734H21.3054C20.1451 26.1492 18.3316 23.5135 17.1941 22.2051C15.329 20.0559 14.302 17.295 14.3049 14.4376C14.2902 8.12121 19.2107 2.62513 26 2.62513C32.4521 2.62513 37.7 7.92352 37.7 14.4376C37.6998 17.2954 36.6713 20.0558 34.8059 22.2051H34.8083ZM7.8 14.4376C7.8 14.0895 7.66304 13.7557 7.41924 13.5095C7.17544 13.2634 6.84478 13.1251 6.5 13.1251H1.3C0.955218 13.1251 0.624558 13.2634 0.380761 13.5095C0.136964 13.7557 0 14.0895 0 14.4376C0 14.7857 0.136964 15.1195 0.380761 15.3657C0.624558 15.6118 0.955218 15.7501 1.3 15.7501H6.5C6.84478 15.7501 7.17544 15.6118 7.41924 15.3657C7.66304 15.1195 7.8 14.7857 7.8 14.4376ZM42.9 5.25012C43.1019 5.24966 43.301 5.20222 43.4817 5.11149L48.6817 2.4865C48.9901 2.33073 49.2246 2.05766 49.3335 1.72737C49.4424 1.39708 49.417 1.03662 49.2627 0.725293C49.1863 0.571139 49.0806 0.433686 48.9516 0.320783C48.8225 0.20788 48.6728 0.121738 48.5108 0.0672742C48.1836 -0.04272 47.8266 -0.0170018 47.5182 0.138771L42.3182 2.76376C42.0563 2.89602 41.8463 3.1137 41.7222 3.38152C41.5981 3.64934 41.5673 3.95162 41.6346 4.23937C41.7019 4.52712 41.8635 4.78349 42.0932 4.96694C42.3228 5.1504 42.6071 5.25018 42.9 5.25012ZM50.7 13.1251H45.5C45.1552 13.1251 44.8246 13.2634 44.5808 13.5095C44.337 13.7557 44.2 14.0895 44.2 14.4376C44.2 14.7857 44.337 15.1195 44.5808 15.3657C44.8246 15.6118 45.1552 15.7501 45.5 15.7501H50.7C51.0448 15.7501 51.3754 15.6118 51.6192 15.3657C51.863 15.1195 52 14.7857 52 14.4376C52 14.0895 51.863 13.7557 51.6192 13.5095C51.3754 13.2634 51.0448 13.1251 50.7 13.1251ZM9.68175 2.76376L4.48175 0.138771C4.32906 0.0616402 4.16283 0.0156274 3.99253 0.00335998C3.82223 -0.00890746 3.6512 0.0128106 3.48922 0.0672742C3.16207 0.177268 2.8916 0.413965 2.73731 0.725293C2.58302 1.03662 2.55755 1.39708 2.6665 1.72737C2.77544 2.05766 3.00989 2.33073 3.31825 2.4865L8.51825 5.11149C8.69904 5.20222 8.89811 5.24966 9.1 5.25012C9.39286 5.25018 9.67715 5.1504 9.90683 4.96694C10.1365 4.78349 10.2981 4.52712 10.3654 4.23937C10.4327 3.95162 10.4019 3.64934 10.2778 3.38152C10.1537 3.1137 9.94367 2.89602 9.68175 2.76376ZM48.6817 26.3887L43.4817 23.7637C43.1733 23.6079 42.8162 23.5823 42.4889 23.6923C42.1617 23.8024 41.8912 24.0392 41.7369 24.3506C41.5826 24.6621 41.5572 25.0226 41.6662 25.353C41.7752 25.6834 42.0098 25.9565 42.3182 26.1123L47.5182 28.7373C47.8267 28.893 48.1838 28.9187 48.5111 28.8086C48.8383 28.6986 49.1088 28.4618 49.2631 28.1503C49.4174 27.8389 49.4428 27.4783 49.3338 27.148C49.2248 26.8176 48.9902 26.5445 48.6817 26.3887ZM9.1 23.6251C8.89811 23.6255 8.69904 23.673 8.51825 23.7637L3.31825 26.3887C3.00978 26.5445 2.77523 26.8176 2.66621 27.148C2.61223 27.3115 2.59069 27.4842 2.60282 27.6562C2.61495 27.8282 2.66051 27.9961 2.73691 28.1503C2.8133 28.3045 2.91904 28.442 3.04807 28.555C3.1771 28.6679 3.3269 28.7541 3.48893 28.8086C3.81615 28.9187 4.17328 28.893 4.48175 28.7373L9.68175 26.1123C9.94412 25.9802 10.1546 25.7626 10.279 25.4946C10.4034 25.2266 10.4344 24.924 10.3671 24.6359C10.2997 24.3479 10.1379 24.0913 9.90785 23.9078C9.67784 23.7243 9.39315 23.6247 9.1 23.6251Z"
                  fill="#0F53FA"
                ></path>
              </svg>
            </div>
            <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
              <div className=" text-light font-extrabold text-left text-xl sm:text-2xl">
                Ideate
              </div>
              <div className="mt-2 text-gray-500 font-medium text-base sm:text-lg w-full lg:w-4/5">
                Turn your idea from concept to MVP
              </div>
            </div>
          </div>
          <div className="lg:p-4 w-full lg:w-1/4 flex flex-row lg:flex-col lg:justify-center lg:items-center">
            <div className="p-6 bg-white rounded-full mb-5 z-10 image-hover-effect">
              <svg
                width="42"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M41.239 30.1996L31.1629 20.1235L35.2153 16.0711L40.8469 10.4387C42.3858 8.89977 42.385 6.40516 40.8469 4.86622L37.1349 1.15423C36.3654 0.384765 35.3564 3.05176e-05 34.3482 3.05176e-05C33.34 3.05176e-05 32.331 0.384765 31.5616 1.15423L25.93 6.78497L21.8776 10.8374L11.8023 0.762116C11.2945 0.254332 10.6284 3.05176e-05 9.96232 3.05176e-05C9.29621 3.05176e-05 8.63093 0.254332 8.12232 0.762116L0.763979 8.12128C-0.251588 9.13767 -0.252408 10.7849 0.763979 11.8013L10.8376 21.8749L1.56708 31.1446L0.0281441 39.9591C-0.194985 41.2412 0.948553 42.1657 2.04533 41.9738L10.8589 40.4283L20.1237 31.1618L30.1998 41.2379C30.4411 41.4798 30.7278 41.6717 31.0434 41.8025C31.359 41.9332 31.6974 42.0004 32.039 42C32.7051 42 33.3712 41.7457 33.879 41.2379L41.239 33.8796C42.2554 32.8632 42.2554 31.216 41.239 30.1996ZM33.4171 3.01064C33.7527 2.67512 34.943 2.67512 35.2785 3.01064L38.9905 6.7218C39.5032 7.23451 39.5032 8.06878 38.9905 8.58149L35.2145 12.3575L29.6412 6.78415L33.4171 3.01064ZM2.61956 9.97769L9.96232 2.63411L14.5521 7.21892L11.3503 10.4207C11.0944 10.6766 11.0944 11.0925 11.3503 11.3485L12.2781 12.2762C12.534 12.5322 12.95 12.5322 13.2059 12.2762L16.4085 9.07368L20.0261 12.6872L12.6842 20.0284L2.61956 9.97769ZM9.58907 37.9862L2.83039 39.1715L4.0092 32.4145L27.7848 8.64137L33.3581 14.2147L9.58907 37.9862ZM32.0562 39.3824L21.9777 29.3087L29.3171 21.9684L32.9364 25.5836L29.7248 28.796C29.4689 29.052 29.4689 29.4679 29.7248 29.7238L30.6526 30.6516C30.9086 30.9075 31.3245 30.9075 31.5804 30.6516L34.7937 27.4384L39.3826 32.0224L32.0562 39.3824Z"
                  fill="#0F53FA"
                ></path>
              </svg>
            </div>
            <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
              <div className=" text-light font-extrabold text-left text-xl sm:text-2xl">
                Design
              </div>
              <div className="mt-2 text-gray-500 font-medium text-base sm:text-lg w-full lg:w-4/5">
                Sketch out the product to align the user needs
              </div>
            </div>
          </div>
          <div className="lg:p-4 w-full lg:w-1/4 flex flex-row lg:flex-col lg:justify-center lg:items-center">
            <div className="p-6 bg-white rounded-full mb-5 z-10 image-hover-effect">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.875 10.5C6.42305 10.5 5.25 9.32698 5.25 7.87503C5.25 6.42308 6.42305 5.25003 7.875 5.25003C9.32695 5.25003 10.5 6.42308 10.5 7.87503C10.5 9.32698 9.32695 10.5 7.875 10.5ZM18.375 7.87503C18.375 6.42308 17.202 5.25003 15.75 5.25003C14.298 5.25003 13.125 6.42308 13.125 7.87503C13.125 9.32698 14.298 10.5 15.75 10.5C17.202 10.5 18.375 9.32698 18.375 7.87503ZM26.25 7.87503C26.25 6.42308 25.077 5.25003 23.625 5.25003C22.173 5.25003 21 6.42308 21 7.87503C21 9.32698 22.173 10.5 23.625 10.5C25.077 10.5 26.25 9.32698 26.25 7.87503ZM42 3.93753V32.8125C42 34.9864 40.2363 36.75 38.0625 36.75H3.9375C1.76367 36.75 0 34.9864 0 32.8125V3.93753C0 1.7637 1.76367 3.05176e-05 3.9375 3.05176e-05H38.0625C40.2363 3.05176e-05 42 1.7637 42 3.93753ZM39.375 15.75H2.625V32.8125C2.625 33.5344 3.21563 34.125 3.9375 34.125H38.0625C38.7844 34.125 39.375 33.5344 39.375 32.8125V15.75ZM39.375 13.125V3.93753C39.375 3.21566 38.7844 2.62503 38.0625 2.62503H3.9375C3.21563 2.62503 2.625 3.21566 2.625 3.93753V13.125H39.375Z"
                  fill="#0F53FA"
                ></path>
              </svg>
            </div>
            <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
              <div className=" text-light font-extrabold text-left text-xl sm:text-2xl">
                Develop
              </div>
              <div className="mt-2 text-gray-500 font-medium text-base sm:text-lg w-full lg:w-4/5">
                Convert the designs into a live application
              </div>
            </div>
          </div>
          <div className="lg:p-4 w-full lg:w-1/4 flex flex-row lg:flex-col lg:justify-center lg:items-center">
            <div className="p-6 bg-white rounded-full mb-5 z-10 image-hover-effect">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8438 19.1471C30.8438 18.0531 31.7252 17.1664 32.8125 17.1664C33.8998 17.1664 34.7812 18.0531 34.7812 19.1471C34.7812 20.241 33.8998 21.1278 32.8125 21.1278C31.7252 21.1278 30.8438 20.241 30.8438 19.1471ZM27.5625 21.1278C28.6498 21.1278 29.5312 20.241 29.5312 19.1471C29.5312 18.0531 28.6498 17.1664 27.5625 17.1664C26.4752 17.1664 25.5938 18.0531 25.5938 19.1471C25.5938 20.241 26.4752 21.1278 27.5625 21.1278ZM42 10.5639C42 11.5787 41.6203 12.504 40.9966 13.2049C41.6203 13.9058 42 14.8311 42 15.8459V22.4483C42 23.4631 41.6203 24.3883 40.9966 25.0893C41.6203 25.7902 42 26.7155 42 27.7303V34.3327C42 36.5206 40.2371 38.2941 38.0625 38.2941H3.9375C1.76285 38.2941 0 36.5206 0 34.3327V27.7303C0 26.7155 0.379723 25.7902 1.00341 25.0893C0.379723 24.3883 0 23.4631 0 22.4483V15.8459C0 14.8311 0.379723 13.9058 1.00341 13.2049C0.379723 12.504 0 11.5787 0 10.5639V3.96149C0 1.77361 1.76285 3.05176e-05 3.9375 3.05176e-05H38.0625C40.2371 3.05176e-05 42 1.77361 42 3.96149V10.5639ZM2.625 10.5639C2.625 11.292 3.21382 11.8844 3.9375 11.8844H38.0625C38.7862 11.8844 39.375 11.292 39.375 10.5639V3.96149C39.375 3.23341 38.7862 2.641 38.0625 2.641H3.9375C3.21382 2.641 2.625 3.23341 2.625 3.96149V10.5639ZM38.0625 14.5254H3.9375C3.21382 14.5254 2.625 15.1178 2.625 15.8459V22.4483C2.625 23.1764 3.21382 23.7688 3.9375 23.7688H38.0625C38.7862 23.7688 39.375 23.1764 39.375 22.4483V15.8459C39.375 15.1178 38.7862 14.5254 38.0625 14.5254ZM39.375 27.7303C39.375 27.0022 38.7862 26.4098 38.0625 26.4098H3.9375C3.21382 26.4098 2.625 27.0022 2.625 27.7303V34.3327C2.625 35.0608 3.21382 35.6532 3.9375 35.6532H38.0625C38.7862 35.6532 39.375 35.0608 39.375 34.3327V27.7303ZM32.8125 9.24344C33.8998 9.24344 34.7812 8.35665 34.7812 7.26271C34.7812 6.16877 33.8998 5.28198 32.8125 5.28198C31.7252 5.28198 30.8438 6.16877 30.8438 7.26271C30.8438 8.35665 31.7252 9.24344 32.8125 9.24344ZM27.5625 9.24344C28.6498 9.24344 29.5312 8.35665 29.5312 7.26271C29.5312 6.16877 28.6498 5.28198 27.5625 5.28198C26.4752 5.28198 25.5938 6.16877 25.5938 7.26271C25.5938 8.35665 26.4752 9.24344 27.5625 9.24344ZM32.8125 29.0507C31.7252 29.0507 30.8438 29.9375 30.8438 31.0315C30.8438 32.1254 31.7252 33.0122 32.8125 33.0122C33.8998 33.0122 34.7812 32.1254 34.7812 31.0315C34.7812 29.9375 33.8998 29.0507 32.8125 29.0507ZM27.5625 29.0507C26.4752 29.0507 25.5938 29.9375 25.5938 31.0315C25.5938 32.1254 26.4752 33.0122 27.5625 33.0122C28.6498 33.0122 29.5312 32.1254 29.5312 31.0315C29.5312 29.9375 28.6498 29.0507 27.5625 29.0507Z"
                  fill="#0F53FA"
                ></path>
              </svg>
            </div>
            <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
              <div className=" text-light font-extrabold text-left text-xl sm:text-2xl">
                Deploy
              </div>
              <div className="mt-2 text-gray-500 font-medium text-base sm:text-lg w-full lg:w-4/5">
                Launching the application to the market
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
