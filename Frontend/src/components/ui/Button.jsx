
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-main text-white hover:bg-primary-dark focus-visible:ring-primary-main shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-white text-primary-main border-2 border-primary-main hover:bg-bg-alternate focus-visible:ring-primary-main shadow-sm hover:shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-primary-main text-primary-main hover:bg-primary-main hover:text-white focus-visible:ring-primary-main hover:-translate-y-0.5',
    ghost: 'text-text-body hover:bg-bg-alternate hover:text-primary-main focus-visible:ring-primary-main',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const stateStyles = (disabled || loading) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer active:scale-[0.98]';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${stateStyles} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
