import LoginForm from '@/components/auth/LoginForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Divider from '@/components/common/Divider';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import AnimatedHeading from '@/components/common/AnimatedHeading';

export const SignInPage = () => {
  return (
    <motion.div
      className="h-full flex flex-col items-center gap-5 justify-center px-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <AnimatedHeading />
      <div className="w-full max-w-sm flex flex-col gap-3">
        <LoginForm />
        <Divider label="or" />
        <OAuthButtons />
        <RegisterPrompt />
      </div>
    </motion.div>
  );
};

const RegisterPrompt: React.FC = () => {
  return (
    <div className="p-6 text-center text-base">
      아직 회원이 아니신가요?
      <Link href="/register" className="font-bold text-green-500">
        회원가입
      </Link>
    </div>
  );
};

export default SignInPage;
