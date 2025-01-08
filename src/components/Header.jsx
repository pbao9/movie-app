import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[40px] uppercase font-bold text-red-700">Movie</h1>

        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="p-2 text-black rounded"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="p-2 text-white bg-red-700 rounded"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
