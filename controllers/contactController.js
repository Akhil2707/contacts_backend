//@desc get all contacts
//@route GET /api/contacts
//@access  public
const getContact = (req, res) => {
    res.status(200).json({
        message: "fetched all the contacts from the database",
    });
};

//@desc create a contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        return res.status(400).json({
            message: "all fields are mandatory"
        })
    }
        res.status(201).json({
            mewssage: "contact created",
        });
    };

    //@desc update a contact
    //@route PUT /api/contacts/:id
    //@access public
    const putContact = (req, res) => {
        res.status(201).json({
            message: `contact with id ${req.params.id} updated`,
        });
    };

    //@desc delete a contact 
    //@route DELETE /api/contacts/:id
    //@access public
    const deleteContact = (req, res) => {
        res.status(200).json({
            message: `contact with id ${req.params.id} deleted`,
        });
    };

    //@desc get a contact by id
    //@route GET /api/contacts/:id
    //@access public
    const getContactId = (req, res) => {
        res.status(200).json({
            message: `contact with id ${req.params.id} fetched`
        })
    }

    module.exports = { getContact, createContact, putContact, deleteContact, getContactId };
