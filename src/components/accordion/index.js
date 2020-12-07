class Accordion {
  constructor() {
    // Опции по умолчанию
    this.defaultOptions = {
      selector: '.j-accordion',
      item: '.j-accordion-item',
      activeClass: 'accordion__item_active',
      closeOthers: true
    };
  }

  /**
   * Иницализирует модуль
   * @param {object} options - опции аккордиона
   */
  init(options) {
    // применение опций из настроек
    this.optionsUpdate(options);
    this.accordionList(this.defaultOptions.selector);
  }

  /**
   * Получает список аккордионов
   * @param {object} wrapper - обёртка аккордиона
   */
  accordionList(wrapper) {
    const accordionList = Array.from(document.querySelectorAll(wrapper));

    if (!accordionList.length) {
      return;
    }

    // console.log(accordionList);

    accordionList.forEach(item => {
      this.bindEvents(item);
    });
  }

  /**
   * Навешивает обработчик событий
   * @param {object} item - аккордион
   */
  bindEvents(item) {
    item.addEventListener('click', event => {
      // event.stopPropagation();
      const btn = event.target.closest('[data-btn]');

      console.log();

      if (!btn) {
        return;
      }

      const currentItem = event.target.closest('[data-item]');

      // console.log(currentItem);

      this.activeToggler(currentItem);

      console.log(event.target);
    });
  }

  /**
   * Переключает класс элемента аккардиона
   * @param {object} currentItem - текущий элемент
   */
  activeToggler(currentItem) {
    currentItem.classList.toggle(this.defaultOptions.activeClass);
  }

  /**
   * Применяет пользовательские опции
   * @param {object} options - текущий элемент аккардиона
   */
  optionsUpdate(options) {
    if (options) {
      for (const key in options) {
        if (this.defaultOptions[key]) {
          this.defaultOptions[key] = options[key];
        } else {
          console.log(`Опции: ${key}, нет для аккордиона`);
        }
      }
    }
  }

  /**
   * Если изначально установлен активный класс, то метод откроет аккордион.
   * @private
   */
  checkActiveState() {
    const isActive = this.wrapper.classList.contains(this.activeClass);

    if (isActive) {
      this.contentWrapper.style.height = `${this.height}px`;
      this.state = 'open';
    }
  }
}

export default Accordion;
