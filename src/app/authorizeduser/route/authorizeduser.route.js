var express = require("express");
const authorizedUsers = require("../controller/authorizeduser.controller");
const businessContacts = require("../controller/businesscontact.controller");
const router = express.Router();
router.route("/authorizedusers").post(authorizedUsers.loginUserControllerFn);
router
  .route("/authorizedusers/create")
  .post(authorizedUsers.createStudentControllerFn);
router.route("/businesscontacts").get(businessContacts.findAllBusinessContacts);
router
  .route("/businesscontacts/:id")
  .put(businessContacts.updateBusinessContactById);
router
  .route("/businesscontacts/:id")
  .delete(businessContacts.deleteBusinessContactById);
module.exports = router;
