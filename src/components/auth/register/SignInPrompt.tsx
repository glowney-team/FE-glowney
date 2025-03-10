import Link from 'next/link';

// ✅ 로그인 유도 메시지
const SignInPrompt: React.FC = () => (
  <div className="p-6 text-center text-base ">
    이미 회원이신가요?{' '}
    <Link href="/signin" className="font-bold text-green-500 ">
      로그인
    </Link>
  </div>
);

export default SignInPrompt;
