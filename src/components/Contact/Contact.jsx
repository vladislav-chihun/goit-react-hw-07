import css from "./Contact.module.css"
import { VscAccount } from "react-icons/vsc";
import { AiFillPhone } from "react-icons/ai";
export default function Contact({id, name, number, handleDelete}) {
    return (
        <div key={id} className={css.contactBox}>
            <ul className={css.contactList}>
                <li className={css.nameText}><VscAccount className={css.icon} />{name}</li>
                <li className={css.numberText}><AiFillPhone className={css.icon} />{number}</li>
            </ul>
            <button className={css.contactBtn} onClick={() => handleDelete(id)}>Delete</button>
       </div>
   ) 
}