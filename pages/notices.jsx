import React from "react";

const Notices = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5lb24lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
      }}
    >
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-3xl text-center font-bold text-blue-500">
          Notices
        </h1>
        <div className="border-l-2 mt-10">
          {/* <!-- Card 1 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            {/*   
            <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
            {/*   
            <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          {/* <!-- Card 5 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
