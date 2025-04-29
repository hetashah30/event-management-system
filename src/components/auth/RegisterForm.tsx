
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useFormValidation } from '@/hooks/useFormValidation';

interface RegisterFormProps {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  onSuccess: (email: string) => void;
}

export default function RegisterForm({ isLoading, setIsLoading, onSuccess }: RegisterFormProps) {
  const { validateRegisterForm } = useFormValidation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid, errors } = validateRegisterForm(
      formData.name,
      formData.email,
      formData.password,
      formData.confirmPassword
    );
    
    if (!isValid) {
      setErrors(errors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Registration successful! Please log in.');
      onSuccess(formData.email);
    } catch (error) {
      toast.error('Registration failed. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Enter your details to register</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-name">Name</Label>
            <Input 
              id="register-name" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input 
              id="register-email" 
              name="email" 
              type="email" 
              placeholder="your@email.com" 
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input 
              id="register-password" 
              name="password" 
              type="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-xs text-destructive">{errors.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-confirm-password">Confirm Password</Label>
            <Input 
              id="register-confirm-password" 
              name="confirmPassword" 
              type="password" 
              placeholder="••••••••" 
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">{errors.confirmPassword}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-elevate-purple hover:bg-elevate-purple/90"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </CardFooter>
      </form>
    </motion.div>
  );
}
