'use client';

import { forwardRef } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', id, checked, onChange, ...props }, ref) => {
    const checkboxId = id || props.name;

    return (
      <label
        htmlFor={checkboxId}
        className={`flex items-start gap-3 cursor-pointer group ${className}`}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
            {...props}
          />
          <div className={`
            w-6 h-6 rounded border-2
            transition-all duration-200
            flex items-center justify-center
            ${checked
              ? 'bg-accent-500 border-accent-500'
              : 'bg-neutral-900 border-neutral-600 group-hover:border-neutral-500'
            }
          `}>
            {checked && (
              <Check className="w-4 h-4 text-black" strokeWidth={3} />
            )}
          </div>
        </div>
        {label && (
          <span className="text-neutral-300 text-sm leading-relaxed">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
