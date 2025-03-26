export const getBubbleStyles = (isBot: boolean) => `
  p-3 rounded-lg 
  ${isBot ? 'bg-gray-100' : 'bg-blue-500 text-white'}
  max-w-[80%] 
  ${isBot ? 'ml-auto' : 'mr-auto'}
`; 