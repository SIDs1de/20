document.addEventListener('DOMContentLoaded', () => {
  const wowF = () => {
    new WOW().init();
  };

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

  const swiperActive = () => {
    if (window.innerWidth <= 1000) {
      whoSlider.enabled = true;
    } else {
      whoSlider.enabled = false;
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

  const animate = () => {
    if (window.innerWidth <= 1200) {
      const inst = document.querySelector('.insta');

      if (inst.classList.contains('animate__fadeInRight')) {
        inst.classList.remove('animate__fadeInRight');
        inst.classList.add('animate__fadeIn');
      }
    }
  };

  window.addEventListener('resize', swiperActive);
  animate();
  window.addEventListener('resize', animate);
  questions();
  swiperActive();
  wowF();
});
