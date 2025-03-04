import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-console': 'warn', // console.log 사용 시 경고
      'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
      'react/jsx-key': 'error', // JSX에서 key 필수
      'react-hooks/exhaustive-deps': 'warn', // React Hook 의존성 체크 경고
    },
  },
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
