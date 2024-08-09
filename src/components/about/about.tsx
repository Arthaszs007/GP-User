import React from "react";
import AboutIcon from "./aboutIcon";

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-12">
      <p className="font-bold text-4xl">
        This is a Next.js project, a game rating collection website.
      </p>
      <div className="flex flex-row items-center  gap-3">
        <p className="text-xl">
          <span className="text-2xl font-bold">Front-end:</span>
          &nbsp; &nbsp; &nbsp;React.js
        </p>
        <AboutIcon src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" />
      </div>

      <div className="flex flex-row items-center  gap-3">
        <p className="text-xl">
          <span className="text-2xl font-bold">Back-end:</span> &nbsp; &nbsp;
          &nbsp;Node.js
        </p>
        <AboutIcon src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" />
      </div>

      <div className="flex flex-row items-center  gap-3">
        <p className="text-xl">
          <span className="text-2xl font-bold">Database:</span> &nbsp; &nbsp;
          &nbsp; MongoDB
        </p>
        <AboutIcon src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png" />
      </div>

      <div className="flex flex-col  gap-3">
        <p className="text-xl">
          <span className="text-2xl font-bold">Support:</span> &nbsp; &nbsp;
          &nbsp;Typescript, Tailwind, Nextauth.js, Mongoose, Redux, react email,
          Resend, DaisyUI, Next.js
        </p>
        <div className="flex flex-row gap-8">
          <AboutIcon src="https://e7.pngegg.com/pngimages/616/528/png-clipart-angularjs-typescript-javascript-vue-js-others-blue-angle.png" />
          <AboutIcon src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" />
          <AboutIcon src="https://next-auth.js.org/img/logo/logo-sm.png" />
          <AboutIcon src="https://www.pngfind.com/pngs/m/430-4309574_mongoose-js-logo-hd-png-download.png" />
          <AboutIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-mvgn-N1vKzB8gOEbIRSZP0Ae0xjM03RfA&s" />
          <AboutIcon src="https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" />
          <AboutIcon src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
