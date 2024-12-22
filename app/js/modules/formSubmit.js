export const formSubmit = () => {
  $('#signIn').on('submit', function (e) {
    e.preventDefault();

    const formData = $(this).serialize();

    console.log(formData);
  });
};
