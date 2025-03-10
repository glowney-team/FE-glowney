'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';
import * as motion from 'motion/react-client';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { AnimatePresence } from 'motion/react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import SignInPrompt from './SignInPrompt';

const RegisterForm: React.FC = () => {
  const [step, setStep] = useState(1); // ✅ 현재 단계 (1~3)

  // ✅ 다음 단계로 이동
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // ✅ 이전 단계로 이동
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <RegisterStep step={step} total={3} />
      <div className="flex flex-col gap-3 h-full">
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </div>
      {step === 1 && <SignInPrompt />}
      <div className="flex  justify-between gap-2 mb-6 mt-auto relative">
        <AnimatePresence>
          {step > 1 && (
            <motion.div
              key="prevButton"
              initial={{ width: 0, opacity: 0 }} // 처음에는 width: 0 + 투명
              animate={{ width: 'auto', opacity: 1 }} // 자연스럽게 width가 커지면서 나타남
              exit={{ width: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }} // 사라질 때 다시 width: 0으로 줄어듦
              transition={{ type: 'spring', stiffness: 120, damping: 10 }} // 부드러운 효과 추가
              className="overflow-hidden"
            >
              <Button
                type="button"
                style="bezeled"
                color="neutral"
                size="md"
                width="full"
                onClick={prevStep}
                className="font-semibold"
              >
                <ChevronLeftIcon className="size-5" />
              </Button>
            </motion.div>
          )}

          <motion.div key="nextButtonWrapper" className="flex-1">
            <Button
              type="button"
              color="primary"
              style="bezeled"
              size="md"
              width="full"
              onClick={nextStep}
            >
              {step === 3 ? '회원가입 완료' : '다음'}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

// ✅ 현재 단계 표시
const RegisterStep: React.FC<{ step: number; total: number }> = ({ step, total }) => {
  return (
    <h2 className="font-semibold text-3xl @lg:text-3xl py-5 flex items-center">
      회원가입 {step}/{total}
    </h2>
  );
};

export default RegisterForm;
