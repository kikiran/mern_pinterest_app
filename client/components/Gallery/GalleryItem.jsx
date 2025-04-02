"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { RiShare2Fill } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";

const GalleryItem = ({ item }) => {
	const router = useRouter();

	const handleButtonClick = (e) => {
		alert("Button clicked!");
		e.stopPropagation(); // Prevent the image click from triggering the redirect
	};

	const handleImageClick = () => {
		router.push("/pin-creation-tool"); // Redirect to another page
	};

	return (
		<div
			key={item.id}
			className="flex relative group "
			style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
			onClick={handleImageClick}
		>
			<img
				src={item.src}
				alt={`pinned-${item.id}`}
				className="w-full object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 group-hover:opacity-50"
			/>

			{/* Overlay with buttons */}
			<div className="absolute inset-0 flex justify-between items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg cursor-pointer">
				{/* Save Button */}
				<div className="absolute top-2 right-2">
					<Button
						className="bg-red-500 text-white border-0 rounded-2xl cursor-pointer"
						onClick={handleButtonClick}
					>
						Save
					</Button>
				</div>

				{/* Share and More buttons */}
				<div className="flex absolute gap-2 items-center bottom-2 right-2">
					<RiShare2Fill
						className="w-8 h-8 rounded-full bg-white text-black border-2 border-transparent hover:bg-gray-200 transition-all cursor-pointer"
						onClick={handleButtonClick}
					/>
					<IoIosMore
						className="text-3xl rounded-full bg-white text-black border-2 border-transparent hover:bg-gray-200 transition-all cursor-pointer"
						onClick={handleButtonClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default GalleryItem;
