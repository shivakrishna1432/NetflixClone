export function isValidate(email, password) {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isValidEmail) {
    if (isValidPassword) {
      return null;
    } else {
      return "Please Enter valid Password";
    }
  } else {
    return "Please Enter Valid Email";
  }
}
