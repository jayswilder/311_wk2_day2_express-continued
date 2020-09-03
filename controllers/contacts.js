const contacts = require("../data/contacts");

let contactCounter = contacts.length;

const list = (req, res) => {
    res.json(contacts);
};

const show = (req, res) => {
    const id = req.params.id;
    const contact = contacts.find((contact) => contact._id === Number(id));
    res.json(contact);
};

const create = (req, res) => {
    let newContact = {
        _id: contactCounter + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar,
    };
    contacts.push(newContact);
    res.json(contacts);
};

module.exports = { list, show, create };