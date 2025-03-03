import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      semi: ['error', 'always'], // 세미콜론 필수
      quotes: ['error', 'double'], // 더블 쿼트 사용 강제
      indent: ['error', 2], // 들여쓰기 2칸
      'no-console': 'warn', // console.log 사용 시 경고
      'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
      'react/jsx-key': 'error', // JSX에서 key 필수
      'react-hooks/exhaustive-deps': 'warn', // React Hook 의존성 체크 경고
    },
  },
];

export default eslintConfig;
