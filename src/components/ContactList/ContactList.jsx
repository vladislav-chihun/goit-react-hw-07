import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDelete = (id) => {
        dispatch(deleteContact({ id }));
    };

    return (
        <div className={css.contactsList}>
            {filteredContacts.map((contact) => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default ContactList;
