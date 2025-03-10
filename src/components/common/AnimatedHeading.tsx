import * as motion from 'motion/react-client';

const AnimatedHeading: React.FC = () => {
  return (
    <motion.div
      className="text-center font-semibold text-3xl @lg:text-3xl py-4"
      initial="hidden"
      animate="visible"
    >
      {/* ✅ '예뻐지는 여정' 한 글자씩 부드럽게 등장 */}
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08, // 더 빠르게 등장
            },
          },
        }}
      >
        {['예', '뻐', '지', '는', ' ', '여', '정'].map((char, index) => (
          <motion.span
            key={index}
            className="inline-block" // ✅ 해결: inline-block 적용
            variants={{
              hidden: { opacity: 0, x: 5, scale: 0.5 }, // ✅ 시작 위치 조정
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </motion.div>

      {/* ✅ 'Glowney 와 함께하세요.' 한 글자씩 부드럽게 등장 */}
      <motion.div
        className="mt-2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.5, // '예뻐지는 여정'이 끝난 후 시작
            },
          },
        }}
      >
        {['G', 'l', 'o', 'w', 'n', 'e', 'y', ' ', '와', ' ', '함', '께', '하', '세', '요', '.'].map(
          (char, index) => (
            <motion.span
              key={index}
              className="inline-block font-bold text-primary" // ✅ 해결: inline-block 적용
              variants={{
                hidden: { opacity: 0, x: 5, scale: 0.5 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            >
              {char === ' ' ? <span>&nbsp;</span> : char}
            </motion.span>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeading;
