import { useSelector } from 'react-redux';
import css from '../ContactList/ContactList.module.css';
import Contact from './Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filterValue);

  const getfilteredItems = () => {
    const filteredItems = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
      );
    });
    return filterValue ? filteredItems : contacts;
  };

  return (
    <>
      <ul className={css.list}>
        {getfilteredItems().map(({ name, number, id }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
