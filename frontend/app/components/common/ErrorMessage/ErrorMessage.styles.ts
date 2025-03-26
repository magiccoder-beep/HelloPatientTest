export const getErrorStyles = (variant: string = 'error') => {
  const styles = {
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  };
  
  return `${styles[variant as keyof typeof styles]} px-4 py-3 rounded mb-4 border`;
}; 