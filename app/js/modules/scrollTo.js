export const scrollTo = () => {
  const offcanvas = $('.offcanvas');

  $('a[data-href^="#"]').on('click', function (e) {
    e.preventDefault();

    const target = $($(this).attr('data-href'));
    console.log(target);

    if (target.length) {
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 15,
        },
        300,
      );
    }
  });
};
