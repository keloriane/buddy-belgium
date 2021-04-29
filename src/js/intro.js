import {html} from './html';
import {checkVAT, countries} from 'jsvat';
import {includeJs, isCurrentPageIndex, isIndex} from './helpers';

export const intro = {
  pageName: 'intro',
  input: document.querySelector('.vat-number__form__input'),
  message: document.querySelector('.vat-number__form__message'),
  submit_button: document.querySelector('.vat-number__form__submit'),

  init() {
    console.log('intro init')
    if (isCurrentPageIndex()) {
      console.log('intro included')
      this.inputState();
      this.hidePopup();
    }
  },

  inputState() {
    if (this.input) {
      this.input.addEventListener('input', (event) => {
        event.preventDefault();
        let vat_number_value = html.getValue(event);
        let check_response = checkVAT(vat_number_value, countries);
        let {isValid} = check_response;
        this.setVatInputMessage(isValid, vat_number_value);
      });
    }
  },

  setVatInputMessage: function (isValid, vat_number) {
    if (!isValid && vat_number !== '') {
      html.setInner(this.message, 'wrong vat number');
      this.setVatInputErrorClasses();
      this.submit_button.disabled = true;
    } else if (isValid) {
      html.setInner(this.message, '');
      this.setVatInputSuccessClasses();
      this.submit_button.disabled = false;
    } else {
      html.setInner(this.message, 'This field is required');
      this.removeVatInputClasses();
      this.submit_button.disabled = true;
    }
  },

  setVatInputErrorClasses() {
    html.addClass(this.input, 'vat-number__form__input--error');
    html.addClass(this.message, 'vat-number__form__message--error');
  },

  removeVatInputErrorClasses() {
    html.removeClass(this.input, 'vat-number__form__input--error');
    html.removeClass(this.message, 'vat-number__form__message--error');
  },

  setVatInputSuccessClasses() {
    html.removeClass(this.input, 'vat-number__form__input--error');
    html.removeClass(this.message, 'vat-number__form__message--error');
    html.addClass(this.input, 'vat-number__form__input--success');
    html.addClass(this.message, 'vat-number__form__message--success');
  },
  removeVatInputClasses() {
    html.removeClass(this.input, 'vat-number__form__input--error');
    html.removeClass(this.message, 'vat-number__form__message--error');
    html.removeClass(this.input, 'vat-number__form__input--success');
    html.removeClass(this.message, 'vat-number__form__message--success');
  },

  hidePopup() {
    const popUp = document.querySelector('.popup-message');
    popUp.style.display = 'none';
  },
};
