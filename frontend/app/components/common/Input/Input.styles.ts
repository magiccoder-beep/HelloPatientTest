export const getInputStyles = (error?: boolean, className: string = '') => 
  `flex-1 p-2 border rounded transition-colors
   ${error ? 'border-red-500' : 'border-gray-300'} 
   ${error ? 'focus:border-red-500' : 'focus:border-blue-500'} 
   ${error ? 'hover:border-red-400' : 'hover:border-gray-400'}
   outline-none ${className}`; 