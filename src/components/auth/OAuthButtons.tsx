import Button from '@/components/common/Button';
import GoogleIcon from '../../../public/googleLogo.svg';
import AppleIcon from '../../../public/appleLogo.svg';

export const OAuthButtons: React.FC = () => {
  return (
    <>
      <Button
        style="custom"
        size="md"
        width="full"
        className="bg-stone-950 text-stone-50 text-base font-semibold "
      >
        <AppleIcon className="size-5 " />
        Apple로 시작하기
      </Button>
      <Button
        style="custom"
        size="md"
        width="full"
        className="bg-white text-stone-950 text-base border border-stone-950 font-semibold"
      >
        <GoogleIcon className="size-5" />
        Google로 시작하기
      </Button>
    </>
  );
};

export default OAuthButtons;
