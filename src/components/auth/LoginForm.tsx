import Button from '@/components/common/Button';

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <input type="email" id="email" placeholder="이메일" className="authInput" />
      </div>
      <div>
        <input type="password" id="password" placeholder="비밀번호" className="authInput" />
      </div>
      <span className="text-xs @lg:text-sm text-stone-500">
        숫자, 영문자, 특수문자 포함 9 - 20자로 입력해주세요.
      </span>
      <Button type="submit" color="primary" size="md" width="full" className="font-semibold">
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
