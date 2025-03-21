import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
	return (
		<div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-row  w-full h-full gap-8">
				<div className="py-4">
					<Gallery />
				</div>
			</main>
		</div>
	);
}
