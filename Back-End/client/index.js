
// const axios = require("axios");
// const payload = { username: "admin", password: "admin" };

// axios
//   .post("http://localhost:3308/admin", payload)
//   .then(function (response) {
//     console.log(response.data);
//     const token = response.data.token;
//     axios
//       .get("http://localhost:3308/admin/1", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         const user = response.data;
//         console.log("User found!!");
//         console.log(
//           `username: ${user.username}`
//         );
//       });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  