import React, { useState } from "react";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import { loginAPI } from "../../../services/UserServices.jsx";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
	const methods = useForm();
	const [loginField, setLoginField] = useState({
		username: "",
		password: "",
	});
	const [isLogging, setIsLogging] = useState(false);

	function cleanUp() {
		setLoginField({
			username: "",
			password: "",
		});
		methods.reset();
	}

	const onSubmit = methods.handleSubmit(async (data) => {
		setIsLogging(true);
		setLoginField(
			(loginField.username = data.username),
			(loginField.password = data.password)
		);
		let respond = await loginAPI(loginField.username, loginField.password);
		setIsLogging(false);

		if (respond) {
			if (respond.status === 200) {
				localStorage.setItem("token", respond.data.access_token);
				toast.success("Sign in successful");
				setTimeout(() => {
					window.location.href = "/";
				}, 1000);
			} else {
				toast.error("Wrong username or password");
			}
		}

		cleanUp();
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={(e) => e.preventDefault()} noValidate>
				<Input
					type="name"
					name="username"
					label="Username"
					id="username"
					placeholder="Type username"
					validation={{
						required: {
							value: true,
							message: "Must not be empty",
						},
					}}
				/>
				<Input
					type="password"
					name="password"
					label="Password"
					id="password"
					placeholder="Type password"
					validation={{
						required: {
							value: true,
							message: "Must not be empty",
						},
					}}
				/>
				{isLogging ? (
					<button
						disabled
						className="bg-[#F8C70E] hover:bg-[#000000d0] text-[#000000] hover:text-[#F8C70E] font-semibold rounded-md py-2 px-4 w-full"
					>
						Logging in ...
					</button>
				) : (
					<button
						onClick={onSubmit}
						className="bg-[#F8C70E] hover:bg-[#000000d0] text-[#000000] hover:text-[#F8C70E] font-semibold rounded-md py-2 px-4 w-full"
					>
						Login
					</button>
				)}
			</form>
		</FormProvider>
	);
}
