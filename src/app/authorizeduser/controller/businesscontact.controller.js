const BusinessContact = require("../model/businesscontact.model");

exports.findAllBusinessContacts = (req, res) => {
  //fetch everything we have in db
  BusinessContact.find()
    .then((businessContacts) => {
      res.send(businessContacts);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};

exports.updateBusinessContactById = (req, res) => {
  const id = req.params.id;

  if (!req.body.name) {
    return res.status(400).send({
      message: "name cannot be empty!",
    });
  }

  if (!req.body.contactnumber) {
    return res.status(400).send({
      message: "contact number cannot be empty!",
    });
  }

  if (!req.body.email) {
    return res.status(400).send({
      message: "email cannot be empty!",
    });
  }

  BusinessContact.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      contactnumber: req.body.contactnumber,
      email: req.body.email,
    },
    {
      new: true,
    }
  )
    .then((businessContact) => {
      res.send(businessContact);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};

exports.deleteBusinessContactById = (req, res) => {
  const id = req.params.id;

  BusinessContact.findByIdAndRemove(id)
    .then((businessContact) => {
      res.send({
        message: "Business Contact removed!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};
