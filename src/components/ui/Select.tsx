'use client';

import { useState } from 'react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'motion/react';

interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative w-full max-w-[105px] ${className}`}>
      {/* ✅ 선택 박스 */}
      <button
        type="button"
        className="focus:ring-primary flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-2 py-1 text-sm shadow-xs hover:bg-neutral-50 focus:ring-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((option) => option.value === value)?.label || 'Select'}
        <ChevronDownIcon
          className={`h-4 w-4 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* ✅ 드롭다운 리스트 */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-neutral-200 bg-white shadow-lg"
          >
            {/* ✅ Label을 첫 번째 항목으로 추가 (선택 불가) */}
            {label && (
              <li
                className="pointer-events-none m-1 px-2 py-1 text-xs font-bold text-neutral-500 uppercase"
                aria-hidden="true"
              >
                {label}
              </li>
            )}

            {/* ✅ 드롭다운 항목 */}
            {options.map((option) => (
              <li
                key={option.value}
                className={`m-1 flex cursor-pointer items-center justify-between rounded-lg px-2 py-1 text-sm select-none ${
                  value === option.value
                    ? 'bg-primary-100 font-semibold text-primary-600'
                    : 'hover:bg-neutral-100'
                }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
                {value === option.value && <CheckIcon className="h-3 w-5 text-primary-600" />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
