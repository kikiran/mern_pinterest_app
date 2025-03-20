import Gallery from "@/components/Gallery/Gallery";
import SearchBar from "@/components/shared/SearchBar";
import SideBar from "@/components/shared/SideBar";

export default function Home() {
	return (
		<div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-row  w-full h-full gap-8">
				<div className="h-full shadow-2xl w-12">
					<SideBar />
				</div>
				<div className="p-6 w-full">
					<SearchBar />
					<Gallery />
				</div>
			</main>
		</div>
	);
}
