import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { RiShare2Fill } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";

const GalleryItem = ({ item }) => {
	return (
		<div
			key={item.id}
			className="flex relative overflow-hidden group"
			style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
		>
			<Link href="#" className="flex">
				<img
					src={item.src}
					alt={`pinned-${item.id}`}
					className="w-full object-cover rounded-lg shadow-lg cursor-pointer"
				/>
			</Link>
			<div className="absolute inset-0 flex justify-between items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg cursor-pointer">
				<div className="absolute top-2 right-2">
					<Button className="bg-red-500 text-white border-0 rounded-2xl cursor-pointer">
						Save
					</Button>
				</div>

				<div className="flex absolute gap-2 items-center bottom-2 right-2">
					<RiShare2Fill className="w-8 h-8 rounded-full bg-white text-black border-2 border-transparent hover:bg-gray-200 transition-all cursor-pointer" />
					<IoIosMore className="text-3xl rounded-full bg-white text-black border-2 border-transparent hover:bg-gray-200 transition-all cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default GalleryItem;
