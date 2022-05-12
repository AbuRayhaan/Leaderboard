const ErrorMsg = (error) => {
  document.querySelector('.error-msg').innerHTML = error;
  setTimeout(() => {
    document.querySelector('.error-msg').innerHTML = '';
  }, 2000);
};

export default ErrorMsg;