import React from "react";

function Skills() {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="skills-title text-[4rem] leading-[4rem] font-bold mb-16">
        SKILLS
      </h1>
      <div className="flex flex-col flex-wrap justify-center items-center gap-16">
        <div className="skills-card flex flex-wrap flex-row justify-center items-center gap-16 border-2 border-white rounded-lg p-10">
          <h2 className="text-2xl font-bold">WEB DEVELOPMENT</h2>
          <div className="flex flex-col justify-center items-center">
            <svg
              fill="none"
              height="75"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53199999999998"
              className="mb-4"
            >
              <path
                d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                fill="#e34f26"
              />
              <path
                d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                fill="#ef652a"
              />
              <path
                d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                fill="#fff"
              />
            </svg>
            <h2 className="text-2xl font-bold">HTML</h2>
            <p className="text-lg">Proficient</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              fill="none"
              height="75"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53"
              className="mb-4"
            >
              <path
                d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                fill="#1b73ba"
              />
              <path
                d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                fill="#1c88c7"
              />
              <path
                d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                fill="#fff"
              />
            </svg>
            <h2 className="text-2xl font-bold">CSS</h2>
            <p className="text-lg">Proficient</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 1052 1052"
              className="mb-4"
            >
              <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
              <path
                d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                fill="#323330"
              />
            </svg>
            <h2 className="text-2xl font-bold">JavaScript</h2>
            <p className="text-lg">Proficient</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              height="75"
              viewBox="0 0 640 640"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <path d="m0 0h640v640h-640z" fill="#017acb" />
              <path
                d="m307.3 237h30.7v53h-83v235.8l-2.2.6c-3 .8-42.5.8-51-.1l-6.8-.6v-235.7h-83v-53l26.3-.3c14.4-.2 51.4-.2 82.2 0s69.8.3 86.8.3zm234.3 263.8c-12.2 12.9-25.3 20.1-47.1 26-9.5 2.6-11.1 2.7-32.5 2.6s-23.1-.1-33.5-2.8c-26.9-6.9-48.6-20.4-63.4-39.5-4.2-5.4-11.1-16.6-11.1-18 0-.4 1-1.3 2.3-1.9s4-2.3 6.2-3.6 6.2-3.7 8.9-5.1 10.5-6 17.3-10.1 13-7.4 13.7-7.4 2 1.4 3 3.1c6 10.1 20 23 29.9 27.4 6.1 2.6 19.6 5.5 26.1 5.5 6 0 17-2.6 22.9-5.3 6.3-2.9 9.5-5.8 13.3-11.6 2.6-4.1 2.9-5.2 2.8-13 0-7.2-.4-9.2-2.4-12.5-5.6-9.2-13.2-14-44-27.6-31.8-14.1-46.1-22.5-57.7-33.8-8.6-8.4-10.3-10.7-15.7-21.2-7-13.5-7.9-17.9-8-38-.1-14.1.2-18.7 1.7-23.5 2.1-7.2 8.9-21.1 12-24.6 6.4-7.5 8.7-9.8 13.2-13.5 13.6-11.2 34.8-18.6 55.1-19.3 2.3 0 9.9.4 17 .9 20.4 1.7 34.3 6.7 47.7 17.4 10.1 8 25.4 26.8 23.9 29.3-1 1.5-40.9 28.1-43.5 28.9-1.6.5-2.7-.1-4.9-2.7-13.6-16.3-19.1-19.8-32.3-20.6-9.4-.6-14.4.5-20.7 4.7-6.6 4.4-9.8 11.1-9.8 20.4.1 13.6 5.3 20 24.5 29.5 12.4 6.1 23 11.1 23.8 11.1 1.2 0 26.9 12.8 33.6 16.8 31.2 18.3 43.9 37.1 47.2 69.5 2.4 24.4-4.5 46.7-19.5 62.5z"
                fill="#fff"
              />
            </svg>
            <h2 className="text-2xl font-bold">TypeScript</h2>
            <p className="text-lg">Expert</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              height="75"
              viewBox="175.7 78 490.6 436.9"
              width="75"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <g fill="#61dafb">
                <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                <circle cx="420.9" cy="296.5" r="45.7" />
              </g>
            </svg>
            <h2 className="text-2xl font-bold">React</h2>
            <p className="text-lg">Expert</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              height="74"
              viewBox=".5 -.2 1023 1024.1"
              width="74"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 stroke-white stroke-[5]"
            >
              <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
              <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
            </svg>
            <h2 className="text-2xl font-bold">NextJS</h2>
            <p className="text-lg">Learning</p>
          </div>
        </div>
        {/* <div className="flex flex-row justify-center items-center gap-16 border-white rounded-lg p-4">
          <h2 className="text-2xl font-bold">MUSIC PRODUCTION</h2>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
