import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchContacts()) })
    
    const filteredContacts = useSelector(selectFilteredContacts)

    const handleDelete = (id) => {
        dispatch(deleteContact( id ));
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
