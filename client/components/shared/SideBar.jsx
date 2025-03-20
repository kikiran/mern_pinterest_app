"use client";
import React from "react";
import Image from "next/image";
import { FaHome, FaRegBell } from "react-icons/fa";
import { MdExplore, MdOutlineAddBox } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";

const SideBar = () => {
	const iconClass = "w-8 h-8 cursor-pointer"; // Reusable class for icon size and cursor

	return (
		<div className="flex flex-col h-screen w-24 items-center py-6 fixed">
			<div className="flex flex-col gap-16 justify-center items-center">
				<Image
					src="/assets/logo.png"
					alt="logo"
					width={30}
					height={30}
					className="cursor-pointer"
				/>
				<FaHome className={iconClass} />
				<MdExplore className={iconClass} />
				<MdOutlineAddBox className={iconClass} />
				<FaRegBell className={iconClass} />
				<AiOutlineMessage className={iconClass} />
			</div>
			<div className="mt-48">
				<TbSettings2 className={iconClass} />
			</div>
		</div>
	);
};

export default SideBar;
