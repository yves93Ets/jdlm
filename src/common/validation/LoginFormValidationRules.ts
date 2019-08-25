export function validate(values) {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Email address is required";
  }
  return errors;
}
