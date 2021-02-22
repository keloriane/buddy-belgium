import {html} from './html'
import {checkVAT, countries} from 'jsvat';


export const intro = {

  buttonState: () => {
    document.querySelector('.vat-number__form__submit')
      .addEventListener('click', (e) => {
        e.preventDefault();
      });
  },

  inputState: () => {
    let message = document.querySelector('.vat-number__form__message')
    let input = document.querySelector('.vat-number__form__input')

    input.addEventListener('input', (e) => {
      e.preventDefault();
      let vat_number = e.target.value;
      let check_response = checkVAT(vat_number, countries);

      let {isValid} = check_response;
      if (!isValid) {
        message.classList.add('error')
        message.innerHTML = 'wrong vat number';
        input.classList.add('error')

      } else {
        message.innerHTML = ''
        message.classList.remove('error')
        message.classList.add('success')
        input.classList.remove('error')
        input.classList.add('success')
      }
    });
  }
};


