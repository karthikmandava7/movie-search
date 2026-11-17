const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const validateEmailNPassword = (email, password, forSignup, name) => {
  if (!email && !password) {
    return "Email and Password are required.";
  }
  if (!email_regex.test(email)) {
    return "Email is not valid";
  } else if (!password_regex.test(password)) {
    return "Password is not valid";
  }
  if(forSignup && !name){
    return "Name is required";
  }
  return null;
};
