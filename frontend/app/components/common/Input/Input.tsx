import { InputProps } from './Input.types';
import { getInputStyles } from './Input.styles';
import { INPUT_DEFAULTS } from './Input.constants';

export const Input: React.FC<InputProps> = ({ 
  className = '',
  error,
  type = INPUT_DEFAULTS.type,
  placeholder = INPUT_DEFAULTS.placeholder,
  ...props 
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={getInputStyles(error, className)}
    {...props}
  />
); 