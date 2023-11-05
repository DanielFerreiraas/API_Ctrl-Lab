class GeneratedNumerRegister {
  
    public static generateNumberRegister(): string {
      const minChars = 8;
      const randomNumber = Math.floor(
        Math.pow(10, minChars - 1) +
          Math.random() * (Math.pow(10, minChars) - Math.pow(10, minChars - 1) - 1)
      ).toString();
  
      return randomNumber;
    }
  
  }

  export default GeneratedNumerRegister; 