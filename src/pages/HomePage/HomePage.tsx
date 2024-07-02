// import { Container } from "@/components";
import { Banner } from "./components";
// import { AboutMe, BreakLine, Banner } from "./components";
// import Image from "@/components/Image";
// import clsx from "clsx";

const HomePage = () => {
	return (
		<div>
			<section className="h-screen" id="banner">
				<Banner />
			</section>
			{/* <BreakLine /> */}
			{/* <section className="h-[calc(100vh-160px)]">
				<AboutMe />
			</section>
			<BreakLine /> */}
			{/* <section id="footer">
				<div className="h-[200px] w-full bg-black">
					<Container className="text-white">
						<div>helloo</div>
					</Container>
				</div>
			</section> */}

			{/* <section className="h-[calc(100vh-160px)]">
				<Container className="h-full lg:mt-20 mt-10 px-5">
					<div className="flex h-full justify-center">
						<div className="w-[min(100%,300px)] max-h-[350px] border px-2 py-2 rounded-lg">
							<Image
								className={clsx(
									"max-h-[220px] w-full h-full rounded-lg border",
									"bg-cover bg-center"
								)}
							/>
						</div>
					</div>
				</Container>
			</section> */}
			{/* <BreakLine /> */}
		</div>
	);
};

export default HomePage;
