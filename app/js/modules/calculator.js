export const calculator = () => {
  const keyCodes = {
    e: 69,
    backspace: 8,
    minus: 189,
    delete: 46,
  };

  const $calcInput = $('#calcValue');
  const $calcResultFrom = $('#calcResultFrom');
  const $calcResultToo = $('#calcResultToo');

  $calcInput.on('keydown keyup', event => {
    const { keyCode } = event;

    // Блокировка нежелательных символов и ограничение длины
    if (($calcInput.val().length > 8 && keyCode !== keyCodes.delete && keyCode !== keyCodes.backspace) || keyCode === keyCodes.minus || keyCode === keyCodes.e) {
      event.preventDefault();
    }

    let calcValue = $calcInput.val();

    // Установка значения по умолчанию, если поле пустое
    if (!calcValue) {
      calcValue = 100000;
    }

    calcValue = parseFloat(calcValue);

    if (calcValue <= 999999999 && calcValue >= 0.00001) {
      const priceFrom = calcValue * 0.01;
      const priceToo = calcValue * 0.05;

      $calcResultFrom.text(resultFormatter(priceFrom));
      $calcResultToo.text(resultFormatter(priceToo));
    }
  });

  // Форматирование числа в "К" или "М"
  const kFormatter = num => (num > 999999 ? `${(num / 1000000).toFixed(0)}M` : num > 999 ? `${(num / 1000).toFixed(0)}K` : num);

  // Форматирование результата
  const resultFormatter = num => (num > 999 ? kFormatter(num) : num > 99 ? num.toFixed(0) : num.toFixed(2));
};
