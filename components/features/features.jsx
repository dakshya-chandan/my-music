import React from "react";

const Features = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589431882969-f74b941beb0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')",
      }}
      className="parallax1"
    >
      <center>
        <p className="font-medium text-white" style={{ fontSize: "3rem" }}>
          Discover Our music
        </p>
        <p className="text-gray-50 text-2xl py-2">
          Explore our music and learn what makes an ABC excellent.
        </p>
      </center>
      <div className="grid grid-cols-4 space-x-2 px-4 py-10">
        <div className="shadow-lg flex bg-gray-50 flex-col justify-center items-center px-3 rounded-md">
          <img
            className="object-cover h-[12rem] hover:scale-105 transition-all duration-500"
            src="https://media.istockphoto.com/photos/young-woman-relaxing-at-home-and-listening-music-picture-id1280339057?b=1&k=20&m=1280339057&s=170667a&w=0&h=ciC64OXgLZ3Ysrtrrh0ogrkPkOL1Hu4665amvGT15Pk="
            alt="abcd"
          />
          <p className="text-2xl py-2">international albums</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            accusantium!
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 my-3 px-3 py-1 text-white rounded-lg">
            Learn More
          </button>
        </div>
        <div className="shadow-lg bg-gray-50 flex flex-col justify-center items-center px-3 rounded-md">
          <img
            className="object-cover h-[12rem] hover:scale-105 transition-all duration-500"
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <p className="text-2xl py-2">greatest hits</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            accusantium!
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 my-3 px-3 py-1 text-white rounded-lg">
            Learn More
          </button>
        </div>
        <div className="shadow-lg bg-gray-50 flex flex-col justify-center items-center px-3 rounded-md">
          <img
            className="object-cover h-[12rem] hover:scale-105 transition-all duration-500"
            src="https://media.istockphoto.com/photos/studio-microphone-and-pop-shield-on-mic-in-the-empty-recording-studio-picture-id1279654034?b=1&k=20&m=1279654034&s=170667a&w=0&h=jebzMhp_tlJi-3fLn3Ig8cYWG_JaF-vjt4SWLAI9o9Q="
            alt="abcd"
          />
          <p className="text-2xl py-2">HipHop collections</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            accusantium!
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 my-3 px-3 py-1 text-white rounded-lg">
            Learn More
          </button>
        </div>
        <div className="shadow-lg bg-gray-50 flex flex-col justify-center items-center px-3 rounded-md">
          <img
            className="object-cover h-[12rem] hover:scale-105 transition-all duration-500"
            src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="abcd"
          />
          <p className="text-2xl py-2">Bollywood songs</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            accusantium!
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-purple-700 my-3 px-3 py-1 text-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
