
interface LoginErrors {
  email: string;
  password: string;
}

interface RegisterErrors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useFormValidation = () => {
  const validateLoginForm = (email: string, password: string) => {
    const errors: LoginErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    return { isValid, errors };
  };

  const validateRegisterForm = (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const errors: RegisterErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let isValid = true;

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    return { isValid, errors };
  };

  return {
    validateLoginForm,
    validateRegisterForm,
  };
};
