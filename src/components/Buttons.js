'use client';

export default function Button({
  type = 'button',
  onClick,
  children,
  className = '',
}) {
  const baseClasses =
    'px-6 py-2 rounded-md transition-colors focus:outline-none';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
