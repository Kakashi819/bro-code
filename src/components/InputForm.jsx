import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";

const InputForm = ({ fields, setFields, ...input }) => {
	const { type, autoComplete, name, id, placeholder } = input;
	const [field, meta, helpers] = useField(input);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFields((prevFields) => ({
			...prevFields,
			[name]: value,
		}));
		console.log("handle");
		console.log(fields, "initialValue");
	};
	return (
		<div>
			<label>
				{name}
				<input {...fields} {...input} onChange={(e) => handleChange(e)} />
			</label>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default InputForm;
