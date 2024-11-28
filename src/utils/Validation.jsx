export const Validation = (email, password) => {
  const IsEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email);
  const IsPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password);

      if(!IsEmail) return "Email Id is not valid."
      if(!IsPassword) return "Password is not valid."

      return null;
};
