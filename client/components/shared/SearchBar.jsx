import React from "react";
import { Input } from "../ui/input";
import { FaSearch, FaRegUserCircle, FaCaretDown } from "react-icons/fa";

const SearchBar = () => {
	const iconClass = "text-3xl text-gray-600  cursor-pointer";
	return (
		<div className="flex items-center w-full  ">
			{/* Search Icon and Input */}
			<div className="relative w-full h-16 bg-gray-100 rounded-lg">
				<FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />{" "}
				{/* Search Icon */}
				<Input
					className="w-full h-full pl-12 bg-gray-200 border border-blue-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 rounded-lg"
					placeholder="Search..."
				/>
			</div>

			{/* User Circle and Down Arrow outside the Input */}
			<div className="flex items-center ml-4 pr-4 space-x-2">
				<FaRegUserCircle className={iconClass} />
				<FaCaretDown className={iconClass} />
			</div>
		</div>
	);
};

export default SearchBar;
