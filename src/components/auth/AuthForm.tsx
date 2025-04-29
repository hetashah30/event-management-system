
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { TabLayout } from './TabLayout';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleRegistrationSuccess = (email: string) => {
    document.getElementById('login-tab')?.click();
  };

  return (
    <TabLayout 
      loginContent={
        <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
      }
      registerContent={
        <RegisterForm 
          isLoading={isLoading} 
          setIsLoading={setIsLoading} 
          onSuccess={handleRegistrationSuccess}
        />
      }
    />
  );
}
