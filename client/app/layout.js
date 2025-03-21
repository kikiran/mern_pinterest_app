import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";
import SearchBar from "@/components/shared/SearchBar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Pinterest",
	description: "Pinterest next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="h-full shadow-2xl w-24">
					<SideBar />
				</div>
				<div className="pl-24 pt-4 w-full">
					<SearchBar />
					{children}
				</div>
			</body>
		</html>
	);
}
