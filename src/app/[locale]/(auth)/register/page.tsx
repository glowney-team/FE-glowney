import RegisterForm from '@/components/auth/register/RegisterForm';
import * as motion from 'motion/react-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Glowney',
  description: '성형 플랫폼 로그인 페이지',
};

export const RegisterPage = () => {
  return (
    <motion.div
      className="flex h-full flex-col items-center justify-center gap-5 px-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative flex h-full w-full max-w-sm flex-col gap-3 @lg:max-h-[550px]">
        <RegisterForm />
      </div>
    </motion.div>
  );
};

export default RegisterPage;
