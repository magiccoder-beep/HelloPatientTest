interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  loading, 
  disabled,
  className = '',
  ...props 
}) => (
  <button
    className={`px-4 py-2 rounded ${
      loading || disabled
        ? 'bg-blue-300 cursor-not-allowed'
        : 'bg-blue-500 hover:bg-blue-600'
    } text-white ${className}`}
    disabled={loading || disabled}
    {...props}
  >
    {loading ? 'Sending...' : children}
  </button>
); 