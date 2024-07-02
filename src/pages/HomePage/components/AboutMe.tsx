import { Container } from "@/components";
import bio from "@/assets/man.png";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutMe = () => {
	const { scrollYProgress } = useScroll();
	const matchesLg = useMediaQuery("(min-width: 1024px)");
	const position_img = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[matchesLg ? 200 : 100, 0, -100]
	);

	return (
		<Container className="h-full lg:mt-20">
			<div
				className={clsx(
					"grid grid-cols-1 grid-rows-2 gap-4 h-full grid-flow-col",
					"lg:grid-cols-2 lg:grid-rows-1"
				)}
			>
				<div className="overflow-hidden h-full ">
					<motion.img
						src={bio}
						className="lg:min-w-[660px] lg:min-h-[450px] grayscale-[40%]"
						style={{
							translateY: position_img,
							// width: position_img,
						}}
					/>
				</div>
				<div
					className={clsx(
						"h-full grid grid-cols-1 grid-rows-10 px-6 pt-4",
						"lg:p-0"
					)}
				>
					<div className="lg:row-start-2 lg:text-4xl font-bold flex items-end lg:pb-5 pb-2">
						About Me
					</div>
					<div className="lg:row-start-3 lg:row-span-5 lg:text-lg indent-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Possimus neque molestias culpa non minima id tempore
						fugiat natus voluptates, eius exercitationem commodi at.
						Esse ullam dolorum accusantium sint soluta. Architecto?
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutMe;
