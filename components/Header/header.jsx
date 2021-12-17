import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
      }}
      className="px-8"
    >
      <div className="flex flex-row justify-between items-center h-[6rem]">
        <div>
          <img
            src="https://png.pngitem.com/pimgs/s/115-1154632_listen-on-apple-music-logo-png-transparent-png.png"
            alt=""
            className="object-cover w-[10rem] h-[6rem] py-1"
          />
        </div>
        <div className="text-gray-50 font-bold">
          <ul>
            <li className="inline-block mr-3">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/aboutus">
                <a>About us</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/admission">
                <a>collections</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/acedemics">
                <a>Albums</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/events">
                <a>Events</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/notices">
                <a>Notices</a>
              </Link>
            </li>
            <li className="inline-block mr-3">
              {" "}
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
