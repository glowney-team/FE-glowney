// ✅ 1단계: 이메일 & 비밀번호 입력
const StepOne: React.FC = () => (
  <div className="flex flex-col gap-3">
    <p className="text-sm font-semibold">회원가입을 위해 약관에 동의해주세요.</p>
    <div className="flex items-center gap-2">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms" className="text-sm">
        이용 약관에 동의합니다.
      </label>
    </div>
  </div>
);

export default StepOne;
