import LoginForm from '@/components/auth/LoginForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Divider from '@/components/common/Divider';
import Link from 'next/link';

export const SignInPage = () => {
  return (
    <div className="h-full flex flex-col items-center gap-5 justify-center">
      <PageHeading />
      <div className="w-full max-w-sm flex flex-col gap-3">
        <LoginForm />
        <Divider label="or" />
        <OAuthButtons />
        <SignUpPrompt />
      </div>
    </div>
  );
};

const PageHeading: React.FC = () => {
  return (
    <h1 className="text-center font-semibold text-2xl @lg:text-3xl py-5">
      예뻐지는 여정 <br />
      <span className="font-bold">Glowney</span>와 함께하세요.
    </h1>
  );
};

const SignUpPrompt: React.FC = () => {
  return (
    <div className="p-6 text-center text-sm">
      아직 회원이 아니신가요?{' '}
      <Link href="/register" className="font-bold text-green-500">
        회원가입
      </Link>
    </div>
  );
};

export default SignInPage;
