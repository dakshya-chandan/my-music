import React from "react";

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80')",
      }}
      className="parallax1"
    >
      <div className="flex flex-row space-x-2 py-4 text-white">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div className="px-6">
            <p className="font-medium" style={{ fontSize: "3rem" }}>
              Welcome to our music world
            </p>
            <p className="text-gray-50" style={{ marginTop: "8px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis itaque quisquam nesciunt recusandae quidem eos
              voluptatem fugit pariatur quasi reprehenderit temporibus non
              exercitationem, facilis impedit voluptate expedita error mollitia
              maxime dignissimos? Natus harum quod esse!
            </p>
            <button className="bg-gradient-to-r from-purple-400 to-purple-700 text-white mt-4 px-3 py-1 rounded-md shadow-lg">
              Readmore
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="/images/hiphop.jpg" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
