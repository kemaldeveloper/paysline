$('.form').on('submit', function (e) {
  e.preventDefault();
  const formData = $(this).serializeArray();
  formData.map(item => {
    console.log(item);
  });
});
