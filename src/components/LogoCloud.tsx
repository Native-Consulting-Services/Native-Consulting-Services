export default function LogoCloud() {
  return (
    <div className="py-24 sm:py-32" id="Partners">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 sm:text-4xl">
          Our Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <a
            href="https://www.choctaw.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="col-span-2 max-h-64 w-full object-contain hover:scale-105 lg:col-span-1"
              src="/MBCI.webp"
              alt="Mississippi Band of Choctaw Indians"
              width={800}
              height={800}
            />
          </a>
          <a
            href="https://www.choctawindianfair.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="col-span-2 max-h-64 w-full object-contain hover:scale-105 lg:col-span-1"
              src="/CIF.webp"
              alt="Choctaw Indian Fair"
              width={1915}
              height={2073}
            />
          </a>
          <a
            href="https://www.1fsic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="col-span-2 max-h-64 w-full object-contain hover:scale-105 lg:col-span-1"
              src="/1FSIC.webp"
              alt="1 Family Services In Indian Country"
              width={901}
              height={863}
            />
          </a>
          <a
            href="https://www.choctawhealthcenter.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="col-span-2 max-h-64 w-full object-contain hover:scale-105 lg:col-span-1"
              src="/CHC.webp"
              alt="Choctaw Health Center"
              width={190}
              height={190}
            />
          </a>
          <a
            href="https://www.superiorcatfish.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="col-span-2 max-h-64 w-full object-contain hover:scale-105 lg:col-span-1"
              src="/Superior.webp"
              alt="Superior Catfish"
              width={800}
              height={190}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
