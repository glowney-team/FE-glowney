const StepTwo: React.FC = () => (
  <>
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="text-sm font-semibold">
        이메일
      </label>
      <input type="email" id="email" placeholder="이메일" className="authInput" />
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="password" className="text-sm font-semibold">
        비밀번호
      </label>
      <input type="password" id="password" placeholder="비밀번호" className="authInput" />
    </div>
    <span className="text-xs @lg:text-sm text-stone-500 ">
      숫자, 영문자, 특수문자 포함 9 - 20자로 입력해주세요.
    </span>
    <div className="flex flex-col gap-1">
      <label htmlFor="password-confirm" className="text-sm font-semibold">
        비밀번호 재입력
      </label>
      <input
        type="password"
        id="password-confirm"
        placeholder="비밀번호 재입력"
        className="authInput"
      />
    </div>
  </>
);

export default StepTwo;
