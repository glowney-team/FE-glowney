'use client';

import { useTranslations } from 'next-intl';
import * as motion from 'motion/react-client';

const AnimatedHeading: React.FC = () => {
  const t = useTranslations('SignInPage');

  // ✅ 문자열을 글자 단위로 나누는 함수
  const splitText = (text: string) => text.split('');

  return (
    <motion.div
      className="py-4 text-center text-xl font-semibold @lg:text-2xl"
      initial="hidden"
      animate="visible"
    >
      {/* ✅ 첫 번째 문장 애니메이션 */}
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08, // ✅ 한 글자씩 등장
            },
          },
        }}
      >
        {splitText(t('animatedHeadingFirstLine')).map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, x: 5, scale: 0.5 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </motion.div>

      {/* ✅ 두 번째 문장: 첫 번째 문장이 끝난 후 시작 */}
      <motion.div
        className="mt-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: splitText(t('animatedHeadingFirstLine')).length * 0.08 + 0.5, // ✅ 첫 번째 문장이 끝난 후 실행
            },
          },
        }}
      >
        {splitText(t('animatedHeadingSecondLine')).map((char, index) => (
          <motion.span
            key={index}
            className="text-primary inline-block font-bold"
            variants={{
              hidden: { opacity: 0, x: 5, scale: 0.5 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeading;
