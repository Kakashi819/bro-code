import { useState } from "react";
import React from "react";
import data from "../Data/data.js";
import InputForm from "../components/InputForm";
import { Formik } from "formik";
import * as Yup from "yup";

const Signup = () => {
	const [fields, setFields] = useState({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("handle submitted");
		console.log(fields, "initalValue");
	};

	const SignupSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, "Too Short!")
			.max(70, "Too Long!")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
		password: Yup.string()
			.min(2, "Too Short!")
			.max(8, "Too Long!")
			.required("Required"),

		confirm_password: Yup.string()
			.min(2, "Too Short!")
			.max(8, "Too Long!")
			.required("Required"),
	});
	return (
		<div className="main-form-container">
			<div className="signup-image">
				<img src="banner.png" alt="banner image" />
			</div>
			<div className="main-form">
				<h2>Welcome to Codeforces</h2>
				<p>this is exiciting place for all the competitive programmers.</p>
				<Formik
					initialValues={fields}
					onSubmit={handleSubmit}
					validationSchema={SignupSchema}
				>
					{(props) => (
						<form onSubmit={handleSubmit}>
							{data.map((input, index) => (
								<React.Fragment key={index}>
									<InputForm
										key={input.key}
										fields={fields}
										setFields={setFields}
										{...input}
									/>
									{props.errors[input.name] && props.touched[input.name] && (
										<div className="error">{props.errors[input.name]}</div>
									)}
								</React.Fragment>
							))}
							<button type="submit">Submit</button>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Signup;
