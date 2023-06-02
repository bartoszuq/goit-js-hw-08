import throttle from 'lodash.throttle';

const emailInput = document.querySelector(`input[name="email"]`);
const message = document.querySelector(`textarea[name="message"]`);
const feedbackForm = document.querySelector('.feedback-form');

function handleSubmit(e) {
  e.preventDefault();
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  const { email: localEmail, message: localMessage } = localData;

  const submitedInfo = {
    email: localEmail,
    message: localMessage,
  };

  console.log(submitedInfo);

  localData.email = '';
  localData.message = '';

  localStorage.setItem('feedback-form-state', JSON.stringify(localData));
  feedbackForm.reset();
}

function saveValue(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = feedbackForm;

  const data = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

window.addEventListener('load', () => {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = localData.email;
  message.value = localData.message;
});
feedbackForm.addEventListener('input', throttle(saveValue, 500));
feedbackForm.addEventListener('submit', handleSubmit);

// console.log(localStorage.getItem('feedback-form-state'));
