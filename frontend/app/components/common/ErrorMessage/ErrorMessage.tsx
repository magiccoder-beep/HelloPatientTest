import { ErrorMessageProps } from './ErrorMessage.types';
import { getErrorStyles } from './ErrorMessage.styles';
import { ERROR_VARIANTS } from './ErrorMessage.constants';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  variant = ERROR_VARIANTS.ERROR 
}) => (
  <div className={getErrorStyles(variant)}>
    {message}
  </div>
); 