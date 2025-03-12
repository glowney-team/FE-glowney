import RegisterForm from '@/components/auth/register/RegisterForm';
import * as motion from 'motion/react-client';

export const RegisterPage = () => {
  return (
    <motion.div
      className="h-full flex flex-col items-center gap-5 justify-center px-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="h-full @lg:max-h-[550px] w-full max-w-sm flex flex-col gap-3 relative">
        <RegisterForm />
      </div>
    </motion.div>
  );
};

export default RegisterPage;
