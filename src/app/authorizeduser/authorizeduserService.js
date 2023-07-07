var authorizedUserModel = require("./model/authorizeduser.model");
var key = "123456789trytryrtyr";
var encryptor = require("simple-encryptor")(key);

module.exports.createStudentDBService = (authorizedUserDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var authorizedUserModelData = new authorizedUserModel();
    authorizedUserModelData.username = authorizedUserDetails.username;
    authorizedUserModelData.password = authorizedUserDetails.password;
    var encrypted = encryptor.encrypt(authorizedUserDetails.password);
    authorizedUserModelData.password = encrypted;
    authorizedUserModelData.save().then(function resultHandle(result, error) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.loginuserDBService = (authorizedUserDetails) => {
  return new Promise(function myFn(resolve, reject) {
    authorizedUserModel
      .findOne({ username: authorizedUserDetails.username })
      .then((data) => {
        if (!data) {
          reject({ status: false, msg: "Invaild Data" });
        } else {
          if (data != undefined && data != null) {
            var decrypted = encryptor.decrypt(data.password);
            if (decrypted == authorizedUserDetails.password) {
              resolve({ status: true, msg: "User Validated Successfully" });
            } else {
              reject({ status: false, msg: "User Validated failed" });
            }
          } else {
            reject({ status: false, msg: "User Error Detailssss" });
          }
        }
      });
  });
};
