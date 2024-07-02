import banner from "@/assets/banner.jpg";
import banner2 from "@/assets/rdj.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const matches = useMediaQuery("(min-width: 1024px)");
	const navigate = useNavigate();
	// const matchesXL = useMediaQuery("(min-width: 1280px)");
	const { scrollYProgress } = useScroll();

	const positionlg = useTransform(scrollYProgress, [1, 0], [50, 50]);
	// const positionlg = useTransform(scrollYProgress, [1, 0], [-300, 50]);

	return (
		<motion.div
			className={clsx(
				"h-full w-full grid grid-cols-12 grid-rows-10 bg-contain lg:bg-[50%_50px] lg:bg-cover bg-bottom bg-no-repeat lg:bg-fixed"
			)}
			style={{
				backgroundImage: `url(${matches ? banner : banner2})`,
				backgroundPositionY: matches ? positionlg : "bottom",
			}}
		>
			<div className="row-start-3 lg:row-start-4 !col-start-2 col-span-10 lg:col-span-7 row-span-2 flex items-end justify-center lg:justify-start">
				<div className="font-[500] text-[25px] lg:text-[50px]">
					Wellcome To My Portfolio
					<div className="flex justify-center lg:justify-start">
						Fullstack Developer
					</div>
				</div>
			</div>
			<div className="row-start-5 lg:row-start-6 lg:pt-0 pt-6 !col-start-2 col-span-10 lg:col-span-5 text-[18px] text-slate-500 flex flex-col items-center lg:items-start lg:gap-4 gap-6">
				<div className="lg:indent-4 flex text-center lg:text-start">
					Create Application by React ,React Native, Next, html and
					typescript include backend by go and node.
				</div>
				<div className="font-[500] text-[14px] flex gap-2">
					<button
						className={styles.getStartBtn}
						onClick={() => navigate("/document")}
					>
						Explore Now
						<div className={styles.hoverEffect}>
							<div></div>
						</div>
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default Banner;
