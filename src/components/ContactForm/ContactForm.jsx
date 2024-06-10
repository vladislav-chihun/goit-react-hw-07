import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
    nameField: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    numberField: Yup.number().required("Required")
});

export default function ContactForm() {
    const dispatch = useDispatch();


    const handleSubmit = (values, { resetForm }) => {
        const id = nanoid();
        const newContact = {
            id,
            name: values.nameField,
            number: values.numberField,
        };
        dispatch(addContact(newContact));
        resetForm();
    };

    return (
        <Formik initialValues={{ nameField: "", numberField: "" }} validationSchema={contactSchema} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.nameContainer}>
                    <label htmlFor="nameField">Name</label>
                    <Field type="text" name="nameField" id="nameField" />
                    <ErrorMessage name="nameField" component="div" className={css.errorMessage} />
                </div>
                <div className={css.numberContainer}>
                    <label htmlFor="numberField">Number</label>
                    <Field type="text" name="numberField" id="numberField" />
                    <ErrorMessage name="numberField" component="div" className={css.errorMessage} />
                </div>
                <button name="AddContactField" type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    );
}
