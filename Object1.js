const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

//Read and print name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

//Add new property lastLogin
user.lastLogin = "2026-01-01";

//Update role to "admin"
user.role = "admin";

//Delete isActive property
delete user.isActive;

//List all remaining fields
const keys = Object.keys(user);
console.log("Remaining fields:", keys);

//Final user object (for clarity)
console.log("Updated user:", user);
