import { Container } from "@/components";
// import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useToggle } from "@/utils/useToggle";
import { clsx } from "clsx";
import logo from "@/assets/logo.png";
import styles from "./style.module.css";

const Navbar = () => {
	const { scrollYProgress } = useScroll();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [__, _, setValueScroll, setValueTop] = useToggle({
		valueToggle: ["scroll", "top"],
		defaultValue: "top",
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest * 100 > 4) {
			setValueScroll();
		} else {
			setValueTop();
		}
	});

	return (
		<div>
			<div className="relative z-50">
				<div
					className={clsx(
						"flex fixed w-full box-border transition-[0.1s]"
						// value === "scroll" && styles.glassmorphism
					)}
				>
					<Container className="flex justify-between p-6 w-full">
						{/* <div onClick={toggle}>logo</div> */}
						<img
							className="cursor-pointer"
							src={logo}
							width={30}
							height={20}
						/>
						<div className="flex justify-between gap-10 font-[500] text-lg">
							<Link to={"/notfound"}><div className={clsx(styles.navbarBtn)}>Home</div></Link>
							{/* <div className={clsx(styles.navbarBtn)}>Doc</div> */}
							{/* <div className={clsx(styles.navbarBtn)}>About</div>
							<div className={clsx(styles.navbarBtn)}>Home</div> */}
						</div>
					</Container>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Navbar;
