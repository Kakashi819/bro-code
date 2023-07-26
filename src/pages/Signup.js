import React from "react";
import data from "../Data/data.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import imgsrc from "../images/banner.png";
import "./Signup.css";

const Signup = () => {
	// error validation
	const SignupSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
		confirm_password: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
	});

	return (
		<div className="main-form-container">
			<div className="form-container">
				<div className="signup-image">
					<img src={imgsrc} alt="banner image" className="singup-image-main" />
				</div>
				<div className="main-form">
					<h2>Welcome to Codeforces</h2>
					<p>this is an exciting place for all the competitive programmers.</p>
					<Formik
						initialValues={{
							name: "",
							email: "",
							password: "",
							confirm_password: "",
						}}
						onSubmit={(values) => {
							console.log("handle submitted");
							console.log(values, "form data");
							alert("form is validated");
						}}
						validationSchema={SignupSchema}
					>
						{(errors, touched) => (
							<Form>
								{data.map((input, index) => (
									<div key={index}>
										<label>{input.name}</label>
										<Field {...input} />
										{errors.name && touched.name ? (
											<div>{errors.name}</div>
										) : null}
										<ErrorMessage {...input} />
									</div>
								))}
								<button type="submit">Submit</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Signup;
