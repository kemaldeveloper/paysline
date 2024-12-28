export const formSubmit = () => {
  const authMessage = $('#authMessage');

  $('.authorization__form').on('submit', function (e) {
    e.preventDefault();

    const formData = $(this).serialize();

    const isSuccess = true;
    const message = isSuccess ? 'Спасибо, ваши данные отправлены!' : 'Неверный email или пароль. Попробуйте еще раз.';

    authMessage.text(message);
    authMessage.removeClass('d-none', 'alert-success', 'alert-danger');
    authMessage.addClass(isSuccess ? 'alert-success' : 'alert-danger');

    console.log(formData);
    if (isSuccess) {
      this.reset();
    }
  });
};
