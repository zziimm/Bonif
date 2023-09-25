const inputId = document.querySelector('.loginId input')
const inputPass = document.querySelector('.loginPass input')

inputId.addEventListener('focus', function () {
  inputId.setAttribute('placeholder', '');
})
inputPass.addEventListener('focus', function () {
  inputPass.setAttribute('placeholder', '');
})
inputId.addEventListener('blur', function () {
  inputId.setAttribute('placeholder', '아이디를 입력해주세요.');
})
inputPass.addEventListener('blur', function () {
  inputPass.setAttribute('placeholder', '비밀번호를 입력해주세요.');
})
