import updateContacts from "./updateContacts.js";
import createFakeContact from "../utils/createFakeContact.js";
import getAllContacts from "./getAllContacts.js";

const addOneContact = async () => {
    const contactList = await getAllContacts();
    const oneContact = createFakeContact();
    contactList.push(oneContact);
    await updateContacts(contactList);

};

addOneContact();
