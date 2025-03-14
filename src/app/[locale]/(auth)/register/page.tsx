import RegisterForm from '@/components/auth/register/RegisterForm';
import AuthFormContainer from '@/components/common/AuthFormContainer';
import * as motion from 'motion/react-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Glowney',
  description: '성형 플랫폼 로그인 페이지',
};

export const RegisterPage = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center gap-5 px-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <AuthFormContainer>
        <RegisterForm />
      </AuthFormContainer>
    </motion.div>
  );
};

export default RegisterPage;
