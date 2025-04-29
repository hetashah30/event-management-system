
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useFormValidation } from '@/hooks/useFormValidation';

interface LoginFormProps {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export default function LoginForm({ isLoading, setIsLoading }: LoginFormProps) {
  const navigate = useNavigate();
  const { validateLoginForm } = useFormValidation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid, errors } = validateLoginForm(formData.email, formData.password);
    if (!isValid) {
      setErrors(errors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userData = {
        email: formData.email,
        lastLogin: new Date().toISOString(),
        isAuthenticated: true
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      toast.success('Login successful! Welcome back.');
      navigate('/', { replace: true });
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
      localStorage.removeItem('user');
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
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input 
              id="login-email" 
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
            <div className="flex items-center justify-between">
              <Label htmlFor="login-password">Password</Label>
              <a href="#" className="text-xs text-elevate-purple hover:underline">
                Forgot password?
              </a>
            </div>
            <Input 
              id="login-password" 
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
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-elevate-purple hover:bg-elevate-purple/90"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </motion.div>
  );
}
