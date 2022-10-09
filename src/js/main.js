document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  const animate = () => {
    if (window.innerWidth <= 1200) {
      const inst = document.querySelector('.insta');

      if (inst.classList.contains('animate__fadeInRight')) {
        inst.classList.remove('animate__fadeInRight');
        inst.classList.add('animate__fadeIn');
      }
    }

    const titles = document.querySelectorAll('.title');

    titles.forEach((title) => {
      title.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
    });
  };
  
  animate();

  new WOW().init();

  const whoSlider = new Swiper('.swiper-who', {
    // Свои классы
    wrapperClass: 'swiper-who__wrapper',
    slideClass: 'swiper-who__item',
    spaceBetween: 80,

    // Вертикальный слайдер
    // direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 1,

    enabled: false,

    grabCursor: true,

    // Включаем параллакс
    // parallax: true,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    // mousewheel: {
    //   // Чувствительность колеса мыши
    //   sensitivity: 1,
    //   // Класс объекта, на котором будет
    //   // срабатывать прокрутка мышью
    //   // events.target: '.image-slider'
    // },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
      el: '.swiper-who__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-who__bullet',
      bulletActiveClass: 'swiper-who__bullet--active',
    },
    // Скролл
    // scrollbar: {
    //   el: '.page__scroll',
    //   dragClass: 'page__drag-scroll',
    //   // Возможность перетаскивать скролл
    //   draggable: true,
    // },

    // Отключаем автоинициализацию
    // init: false,

    // События
    // on: {
    //   // Событие инициализации
    //   init: function () {
    //     menuSlider();
    //     setScrollType();
    //     wrapper.classList.add('_loaded');
    //   },
    //   // Событие смены слайда
    //   slideChange: function () {},

    //   resize: function () {},
    // },

    breakpoints: {
      1001: {
        slidesPerView: 3,
      },
    },
  });

  const programSlider = new Swiper('.swiper-program', {
    // Свои классы
    wrapperClass: 'swiper-program__wrapper',
    slideClass: 'swiper-program__item',
    spaceBetween: 20,

    // Вертикальный слайдер
    // direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 1,

    enabled: false,

    grabCursor: true,

    // Включаем параллакс
    // parallax: true,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    // mousewheel: {
    //   // Чувствительность колеса мыши
    //   sensitivity: 1,
    //   // Класс объекта, на котором будет
    //   // срабатывать прокрутка мышью
    //   // events.target: '.image-slider'
    // },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
      el: '.swiper-program__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-program__bullet',
      bulletActiveClass: 'swiper-program__bullet--active',
    },
    // Скролл
    // scrollbar: {
    //   el: '.page__scroll',
    //   dragClass: 'page__drag-scroll',
    //   // Возможность перетаскивать скролл
    //   draggable: true,
    // },

    // Отключаем автоинициализацию
    // init: false,

    // События
    // on: {
    //   // Событие инициализации
    //   init: function () {
    //     menuSlider();
    //     setScrollType();
    //     wrapper.classList.add('_loaded');
    //   },
    //   // Событие смены слайда
    //   slideChange: function () {},

    //   resize: function () {},
    // },

    breakpoints: {
      1001: {
        slidesPerView: 3,
      },
    },
  });

  const ratesSlider = new Swiper('.swiper-rates', {
    // Свои классы
    wrapperClass: 'swiper-rates__wrapper',
    slideClass: 'swiper-rates__item',
    spaceBetween: 20,

    // Вертикальный слайдер
    // direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 'auto',

    enabled: true,

    grabCursor: true,

    // Включаем параллакс
    // parallax: true,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    // mousewheel: {
    //   // Чувствительность колеса мыши
    //   sensitivity: 1,
    //   // Класс объекта, на котором будет
    //   // срабатывать прокрутка мышью
    //   // events.target: '.image-slider'
    // },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
      el: '.swiper-rates__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-rates__bullet',
      bulletActiveClass: 'swiper-rates__bullet--active',
    },
    // Скролл
    // scrollbar: {
    //   el: '.page__scroll',
    //   dragClass: 'page__drag-scroll',
    //   // Возможность перетаскивать скролл
    //   draggable: true,
    // },

    // Отключаем автоинициализацию
    // init: false,

    // События
    // on: {
    //   // Событие инициализации
    //   init: function () {
    //     menuSlider();
    //     setScrollType();
    //     wrapper.classList.add('_loaded');
    //   },
    //   // Событие смены слайда
    //   slideChange: function () {},

    //   resize: function () {},
    // },

    breakpoints: {
      1001: {
        slidesPerView: 2,
      },
    },
  });

  const popupSlider = new Swiper('.swiper-popup', {
    // Свои классы
    wrapperClass: 'swiper-popup__wrapper',
    slideClass: 'swiper-popup__item',
    spaceBetween: 20,

    // Вертикальный слайдер
    // direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 'auto',

    enabled: true,

    grabCursor: true,

    // Включаем параллакс
    // parallax: true,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    // mousewheel: {
    //   // Чувствительность колеса мыши
    //   sensitivity: 1,
    //   // Класс объекта, на котором будет
    //   // срабатывать прокрутка мышью
    //   // events.target: '.image-slider'
    // },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
      el: '.swiper-popup__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-popup__bullet',
      bulletActiveClass: 'swiper-popup__bullet--active',
    },
    // Скролл
    // scrollbar: {
    //   el: '.page__scroll',
    //   dragClass: 'page__drag-scroll',
    //   // Возможность перетаскивать скролл
    //   draggable: true,
    // },

    // Отключаем автоинициализацию
    // init: false,

    // События
    // on: {
    //   // Событие инициализации
    //   init: function () {
    //     menuSlider();
    //     setScrollType();
    //     wrapper.classList.add('_loaded');
    //   },
    //   // Событие смены слайда
    //   slideChange: function () {},

    //   resize: function () {},
    // },

    breakpoints: {
      1001: {
        slidesPerView: 2,
      },
    },
  });

  const swiperActive = () => {
    if (window.innerWidth <= 1000) {
      whoSlider.enabled = true;
      programSlider.enabled = true;
    } else {
      whoSlider.enabled = false;
      programSlider.enabled = false;
    }
  };

  const questions = () => {
    const questionsList = document.querySelector('.questions__list');
    const questionsItems = document.querySelectorAll('.questions__item');

    questionsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('questions__head')) {
        questionsItems.forEach((item) => {
          if (item !== e.target.parentElement) {
            item.classList.remove('active');
            item.querySelector('.questions__body').style.maxHeight = null;
          }
        });

        if (!e.target.parentElement.classList.contains('active')) {
          e.target.parentElement.classList.add('active');
          e.target.nextSibling.style.maxHeight =
            e.target.nextSibling.scrollHeight + 40 + 'px';
        } else {
          e.target.parentElement.classList.remove('active');
          e.target.nextSibling.style.maxHeight = null;
        }
      }
    });
  };

  const popupOpenBtns = document.querySelectorAll('[data-open-pop]');
  const popups = document.querySelectorAll('[data-pop]');
  const headerBg = document.querySelector('.header__bg');
  const popupBgs = document.querySelectorAll('.popup__bg');

  const openPopup = () => {
    popupOpenBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        html.classList.add('lock');
        popups.forEach((popup) => {
          if (popup.dataset.pop == e.target.dataset.openPop) {
            popup.classList.add('active');
          }
        });
        e.preventDefault();
      });
    });
    popupBgs.forEach((bg) => {
      bg.addEventListener('click', (e) => {
        html.classList.remove('lock');
        let pop = document.querySelector(
          `[data-pop="${e.target.dataset.close}"]`
        );
        pop.classList.remove('active');
      });
    });
    document.querySelectorAll('[data-close]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let pop = document.querySelector(
          `[data-pop="${e.target.dataset.close}"]`
        );
        pop.classList.remove('active');
        html.classList.remove('lock');
      });
    });
  };

  window.addEventListener('resize', swiperActive);
  window.addEventListener('resize', animate);
  openPopup();
  swiperActive();
  questions();
});
