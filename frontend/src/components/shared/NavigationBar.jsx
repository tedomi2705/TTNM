import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShoppingCart,
	AiFillCaretDown,
} from "react-icons/ai";
import { ConfigProvider, Dropdown, Space } from "antd";
import { toast } from "react-toastify";

const NavigationBar = () => {
	const [nav, setNav] = useState(true);
	const isLogin = localStorage.getItem("token");

	const handleNav = () => {
		setNav(!nav);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		toast.success("Đăng xuất thành công");
		window.location.href = "/";
	};

	const userDropdownItems = [
		{
			key: "1",
			label: (
				<a rel="noopener noreferrer" href="/login">
					Đăng nhập
				</a>
			),
		},
		{
			key: "2",
			label: (
				<a rel="noopener noreferrer" href="/signup">
					Đăng ký
				</a>
			),
		},
	];

	const userDropdownItems2 = [
		{
			key: "3",
			label: (
				<a rel="noopener noreferrer" href="/profile">
					Tài khoản
				</a>
			),
		},
		{
			key: "4",
			label: <button onClick={handleLogout}>Đăng xuất</button>,
		},
	];



	return (
		<nav className="sticky w-full top-0 z-10 flex justify-between items-center h-18 mx-auto px-4 text-black bg-[#F8C70E]">
			<h1 className="text-3xl font-mono font-bold p-4 text-[#000000]">
				<a className="hover:text-[#FFF5D6]" href="/">ADHDApp</a>
			</h1>

			<div className="hidden md:flex">
				<ul className="flex font-mono text-xl">
					<li className="p-4">
						<a className="hover:text-[#FFF5D6]" href="/">Trang chủ</a>
					</li>

					<li className="p-4">
						<a className="hover:text-[#FFF5D6]" href="/contact">Liên hệ</a>
					</li>
				</ul>
			</div>

			<div className="hidden md:flex">
				<ul className="flex text-2xl">

					<li className="p-2">
						<ConfigProvider theme={{ token: { fontFamily: "monospace", colorBgTextHover: "white" } }}>
							<Dropdown
								menu={{
									items: isLogin ? userDropdownItems2 : userDropdownItems,
								}}
								placement="bottomRight"
							>
								<a className="hover:text-[#FFF5D6]" href="/profile">
									<Space>
										<AiOutlineUser />
									</Space>
								</a>
							</Dropdown>
						</ConfigProvider>
					</li>

				</ul>
			</div>

			<div onClick={handleNav} className="block md:hidden">
				{!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div
				className={
					!nav
						? "fixed left-0 top-0 w-[50%] h-full border-r border-r-white-900 bg-[#FFF5D6] ease-in-out duration-500"
						: "fixed left-[-100%]"
				}
			>
				<h1 className="text-3xl font-mono font-bold p-4 text-[#000000]">
					Keebi3.
				</h1>
				<ul className="p-2 font-mono">
					<li className="p-4 border-b border-[#F2D15D]">Home</li>
					<li className="p-4 border-b border-[#F2D15D]">About</li>
					<li className="p-4 border-b border-[#F2D15D]">Contact</li>
					<li className="p-4 border-b border-[#F2D15D]">Account</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavigationBar;
