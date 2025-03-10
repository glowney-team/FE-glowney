import { useRef } from 'react';

const StepThree: React.FC = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) {
      e.target.value = '';
      return;
    }
    if (e.target.value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (inputRefs.current[index]?.value) {
        inputRefs.current[index]!.value = '';
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    if (e.key === 'ArrowLeft' && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === 'ArrowRight' && index < 5) inputRefs.current[index + 1]?.focus();
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold">이메일로 전송된 인증번호를 입력해주세요.</p>
      <div className="flex items-center justify-between">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="authInput w-12 text-center text-base font-semibold focus:scale-105 caret-transparent"
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default StepThree;
