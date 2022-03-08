//! Multiplay form validate
$(document).ready(function(){
    $('.js-form-validate').each(function(){
        $(this).validate();
    });
});

//! List item aside menu
let menuDropDownBtn = document.querySelectorAll('.js-menu-dropdown');
menuDropDownBtn.forEach(el => {
    el.addEventListener('click', function (e) {
        if (!el.classList.contains('show')){
             menuDropDownBtn.forEach(item => item.classList.remove('show'));
             el.classList.add('show')
        } else {
            el.classList.remove('show')
        }       
    })
})

//! Раскрытие card основной с исполнителями
const menuIconDownMenu = document.querySelectorAll(".js-card-drop");
const menuShow = document.querySelectorAll(".js-card-doer");
menuIconDownMenu.forEach((el, index) => {
    el.addEventListener('click', (e) =>  {
        if (!el.classList.contains('active')) {
            menuIconDownMenu.forEach(el => el.classList.remove('active'));
            el.classList.add('active')
          
        } else {
            el.classList.remove('active')
        }
    
      menuShow.forEach(elem => {
        if (elem !== menuShow[index]) {
          elem.classList.remove('show');
        }
        });
    if (menuShow[index].classList.contains('show')) {
            menuShow[index].classList.remove('show');
    } else {
            menuShow[index].classList.add('show');
        }
    });
});



//! SideBar burger
let aside = document.querySelector('.js-aside');
let asideShowBtn = document.querySelector('.js-btn-aside-show span');
let body = document.querySelector('body');
if (aside) {
    asideShowBtn.addEventListener('click', function(){
        asideShowBtn.classList.toggle('active');
        aside.classList.toggle('show');
        body.classList.toggle('hidden');
    })
}


//!Language panel
let languageBtn = document.querySelectorAll('.js-language-btn');
let laguageContent = document.querySelectorAll('.js-content');

if (languageBtn) {
    languageBtn.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();     
            if (item.classList.contains('show')) {
                languageBtn.forEach(el => el.classList.remove('show'));
                item.classList.remove('show');
                laguageContent.forEach(content => content.classList.remove('show'));
            } else {
                item.classList.add('show');
                laguageContent.forEach(content => content.classList.add('show'));
            }
        })
    })
}

//! Seclect choice 
const multiDefault = () => {
    const elements = document.querySelectorAll('.js-select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ''
      });
    })
}
multiDefault();

//! RATING звезд
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}
// Основная функция
function initRatings() {
    let ratingActive, ratingValue;
    // Пробегаемся по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
    //Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();
        // if (rating.classList.contains('rating__set')) {
        //     setRaiting(rating)
        // }
    }
  
    //Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
        }
    //Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;    
    }
    // Возможность указывать оценку
    // function setRaiting (rating) {
    //     const ratingItems =  document.querySelectorAll('.rating__item');
    //     for (let index = 0; index < ratingItems.length; index++) {
    //         const ratingItem = ratingItems[index];
            
    //         ratingItem.addEventListener('mouseenter', function (e) {
    //             // Обновляем переменные
    //             initRatingVars(rating);
                
    //             // Обновление активных звезд
    //             setRatingActiveWidth(ratingItem.value);
    //         })
    //         ratingItem.addEventListener('mouseleave', function (e) {           
    //             // Обновление активных звезд
    //             setRatingActiveWidth();
    //         })

    //         ratingItem.addEventListener('click', function (e) {
    //               // Обновляем переменные
    //               initRatingVars(rating);

    //               if (rating.dataset.ajax) {
    //                   setRatingValue(ratingItem.value, rating)
    //               } else{
    //                 ratingValue.innerHTML = index + 1;
    //                 setRatingActiveWidth();
    //               }
                 
    //         })
    //     }
    // }
}

// //? Swiper иницилизация и первоначальные настройки ---------------------------------->>>>
if (document.querySelectorAll('.swiper-container.news__slider-container').length > 0) {
    const mySwiper = new Swiper('.swiper-container.news__slider-container', {
        loop: true,
        // simulateTouch: false,
        autoplay: false,
        observer: true,
        spaceBetween: 15,
        breakpoints: {
            1:{
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            993: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.news-button-next',
            prevEl: '.swiper-button-prev.news-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    });
}
if (document.querySelectorAll('.swiper-container.faq__slider-container').length > 0) {
    const mySwiper = new Swiper('.swiper-container.faq__slider-container', {
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //   },
        observer: true,
        spaceBetween: 20,
        slidesPerView: 3,
        breakpoints: {
            1:{
                slidesPerView: 1,
            },
            550: {
                slidesPerView: 2,
            },
            993: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.faq-button-next',
            prevEl: '.swiper-button-prev.faq-button-prev',
          },
    });
}
if (document.querySelectorAll('.swiper-container.slider-statistic__container').length > 0) {
    const mySwiper = new Swiper('.swiper-container.slider-statistic__container', {
        loop: true,
        observer: true,
        autoplay: {
            delay: 4000,
        },
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 4,
        breakpoints: {
            1:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
            },
            993: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.slider-statistic-next',
            prevEl: '.swiper-button-prev.slider-statistic-prev',
          },
    });
}
if (document.querySelectorAll('.slider-intro-container').length > 0) {
    const mySwiper = new Swiper('.slider-intro-container', {
        loop: true,
        speed: 1000,
        observer: true,
        autoplay: {
            delay: 4000,
        },
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.slider-intro__next',
            prevEl: '.slider-intro__prev',
          },
    });
}



//! Аккордион
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
 
});


// Для модалки под ссылки 
let btnHeirdomForLink = document.querySelectorAll('.js-btn-link-heirdom');
let linkHeirdomAfterBtn = document.querySelectorAll('.js-link-heirdom');
btnHeirdomForLink.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();     
        if (!el.classList.contains('active')) {
            btnHeirdomForLink.forEach(item => item.classList.remove('active'));
            el.classList.add('active')
        } else {
            el.classList.remove('active');
        }
        let currentBtn = el.getAttribute('data-src');
        if (currentBtn) {
            linkHeirdomAfterBtn.forEach(href => {
                href.setAttribute('href', currentBtn);
            })
        }
    })
})

// //????? Modal window -------------------------------------------->>>>>>>
;(function() {
    var body = document.querySelector('body');
        var closestItemByClass = function(item, className) {
            var node = item;
            while(node) {
                if (node.classList.contains(className)) {
                    return node;
                }
                node = node.parentElement;
            }
            return null;
        };
        var closestAttr = function(item, attr) {
            var node = item;
            while(node) {
                var attrValue = node.getAttribute(attr);
                if (attrValue) {
                    return attrValue;
                }
                node = node.parentElement;
            }
            return null;
        };
  
  
    //! Открытие попапа
    var showPopup = function (target) {
        target.classList.add('active');
    }
  
    //! Закрытие попапа
    var closePopup = function (target) {
        target.classList.remove('active');
    }
   
    body.addEventListener('click', function (e) {
        var target = e.target;
        var popupClass =  closestAttr(target, 'data-popup');
        if (popupClass === null) {
            return;
        }
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);
  
        if (popup) {
            showPopup(popup);
            body.style.overflow = 'hidden'
        } 
    })
    
    //! Закрытие по ESQ
    body.addEventListener('keydown', function (e) {
       if (e.keyCode !==27) {
           return;
       }
       var popup = document.querySelector('.popup.active')
       if (popup)  {
           closePopup(popup);
           body.style.overflow = '';
       }
    })
    
    //! Закрытие вне contenta (по крестики и по области)
    body.addEventListener('click', function (e) {
       var target = e.target;
  
       if (target.classList.contains('popup__btn-close') ||
            target.classList.contains('popup__inner') 
       ) {
            var  popup  = closestItemByClass(target, 'popup');
            closePopup(popup);
            body.style.overflow = '';
       }
     })
  }) ();
//   //????? Modal window END -------------------------------------------->>>>>>>


// //??? Tabs global   -------------------------------------->>>>>>
const tabsBtn = document.querySelectorAll('.js-tabs-btn');
const tabsItem = document.querySelectorAll('.tabs-content');
if (tabsBtn.length > 0) {
    const onTabClick = (item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            
            if (!curentBtn.classList.contains('active')){
                tabsBtn.forEach((item) => {
                    
                    item.classList.remove('active');
                })
                tabsItem.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
           
        })
    }
    
    tabsBtn.forEach(onTabClick);
    document.querySelector('.js-tabs-btn').click();
    
}

// //??? Tabs END   -------------------------------------->>>>>>
const tabsBtnPublish = document.querySelectorAll('.js-btn-pub');
const tabsItemPublish = document.querySelectorAll('.host__tabs-content');
if (tabsBtnPublish.length > 0) {
    const onTabClickPublish = (item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            
            if (!curentBtn.classList.contains('active')){
                tabsBtnPublish.forEach((item) => {
                    
                    item.classList.remove('active');
                })
                tabsItemPublish.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
           
        })
    }
    
    tabsBtnPublish.forEach(onTabClickPublish);
    document.querySelector('.js-btn-pub').click();
    
}
//!Tabs for Filter
const filterBtn = document.querySelectorAll('.js-block-filter-btn');
const filterContent = document.querySelectorAll('.js-filter-content');
if (filterBtn.length > 0) {
    const filterBtns = (item) => {;
     
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            if (!curentBtn.classList.contains('active')){
                filterBtn.forEach((item) => {
                    item.classList.remove('active');
                 
                })
                filterContent.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
                refreshSelected();
                // countSelected();
            }
        })
    }
    filterBtn.forEach(filterBtns);
    document.querySelector('.js-block-filter-btn').click();
 
}

function refreshSelected () {
    var parent = $('.block-filter__choice.active');
    var selected = $('#selected');
    var available = $('#available');
    var lengthCheck = $('.checkbox__input:checked', parent).length;    
    var lengthCheckNotSelected = $('.checkbox__input', parent).length;   
    available.text(lengthCheckNotSelected);
    selected.text(lengthCheck);
}

function countSelected () {
    $('.js-filter-content').map(function (index, item) {
        var id = $(item).attr("id");
        var count = $(item).find(".checkbox__input").length
        $("[data-tab='#"+id+"']").find(".js-countSelect").text("(" + count + ")");
    }) 
}
countSelected();
$('.block-filter__choice .checkbox__input').change(refreshSelected);
refreshSelected();





// //?? for input card number 1111 1111 1111 1111
if (document.querySelectorAll('.form').length > 0) {
    let cardInput = document.querySelectorAll('.js-card-input')
    cardInput.forEach(el => {
        el.addEventListener('input', function(e) {
            var target = e.target, 
            position = target.selectionEnd, 
            length = target.value.length;
      
        target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        
        target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
        })
    })
}

// //?? Слеш 32/11
 let cardInputDate = document.querySelectorAll('.js-card-date');
 if (cardInputDate.length > 0) {
    var characterCount;
    cardInputDate.forEach(el => {
        el.addEventListener('input', function (e) {
            if($(this).val().length == 2 && characterCount < $(this).val().length) {
                $(this).val($(this).val()+'/');
            }
            characterCount = $(this).val().length;
        })
    })
 }

// Для модалки payment 
$("#main-form-wrapper .form-1 .next").on("click",function(){
	if($(".form-1 input").valid() == true){
		$("#main-form-wrapper .form-1").removeClass('opened');
		$("#main-form-wrapper .form-2").addClass('opened');
	}
})

$("#main-form-wrapper .form-2 .next").on("click",function(){
	if($(".form-1 input:checked").length != 0){
		$("#main-form-wrapper .form-1").removeClass('opened');
		$("#main-form-wrapper .form-2").addClass('opened');
	}
})

$("#main-form-wrapper .form-2 .next").on("click",function(){
	if($("#main-form-wrapper .form-2 input").valid() == true){
		$("#main-form-wrapper .form-2").removeClass('opened');
		$("#main-form-wrapper .form-3").addClass('opened');
	}
})

//! See passord 
var passwordEnter = document.querySelectorAll('.js-pass-enter');
function showPasswrod (input) {
  input.setAttribute('type', 'text');
}
function hidePassWord(input) {
  input.setAttribute('type', 'password');
}
function toggleShowing(input) {
    input.getAttribute('type') === 'password' ?
    input.setAttribute('type', 'text') :
    input.setAttribute('type', 'password');
}

let seePasswored = document.querySelectorAll('.js-pass-see');
seePasswored.forEach(el => {
  el.addEventListener('click', function () {
    el.classList.toggle('active');
    const parent = el.closest('.form__input');
    const input = parent.querySelector('.js-pass-enter');
    toggleShowing(input);
  })
}, false)



//! Функция для рангеслайдера c одним значением
function initRange(range, rangeInput, input){
    range.noUiSlider.on('update', function(values, handle) {
        $(input).val(parseInt(range.noUiSlider.get())); 
        $(rangeInput).val(Math.round(values[handle]));
    })
    $(input).change(function(){
        range.noUiSlider.set($(this).val())
    })
}
// Range slider для количество подписчиков все специалисты
const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [2000, 150000],
        step: 1000,
        connect: true,
        range: {
            'min': [2000],
            'max': [150000],
        }
    });
    const input0 = document.getElementById('input-followres-0');
    const input1 = document.getElementById('input-followres-1');
    const inputs = [input0, input1];
    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
        console.log('3213');
        
    })
}
// Range slider для возвраста в рекламной компании
const auditRangeSlider = document.getElementById('audit-range-slider');
if (auditRangeSlider) {
    noUiSlider.create(auditRangeSlider, {
        start: [20, 52],
        step: 1,
        connect: true,
        range: {
            'min': [20],
            'max': [52],
        }
    })
    const inputAge0 = document.getElementById('input-age-0');
    const inputAge1 = document.getElementById('input-age-1');
    const inputsAge = [inputAge0, inputAge1];
    const mainInput = document.getElementById('input-for-range');
    auditRangeSlider.noUiSlider.on('update', function(values, handle) {
        inputsAge[handle].value = Math.round(values[handle]);
        mainInput.value = parseInt(auditRangeSlider.noUiSlider.get()[0]) + '-' + parseInt(auditRangeSlider.noUiSlider.get()[1])
    })
    
    $(mainInput).change(function(){
        val1 = $(this)[0].value.split('-')[0];
        val2 = $(this)[0].value.split('-')[1];
        auditRangeSlider.noUiSlider.set([val1,val2]);
    })
}

// Range slide для бюджета
const budgetRangeSlider = document.getElementById('budget-range-slider');
if (budgetRangeSlider) {
    noUiSlider.create(budgetRangeSlider, {
        start: [350000],
        step: 10000,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': [350000],
            'max': [9999999],
        }
    })
    initRange(budgetRangeSlider, '#input-budget-0', '#input-main-budget');
}
// Range slide для индивидуального бюджета
const projectBudgetSlider = document.getElementById('project-range-slider');
if (projectBudgetSlider) {
    noUiSlider.create(projectBudgetSlider , {
        start: [350000],
        step: 10000,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': [350000],
            'max': [9999999],
        }
    })
    initRange(projectBudgetSlider , '#project-input-count-budget', '#project-budget-input');
}

// Range slide для индивидуального бюджета max
const projectBudgetSliderMax = document.getElementById('project-range-budget-max');
if (projectBudgetSliderMax) {
    noUiSlider.create(projectBudgetSliderMax , {
        start: [550000],
        step: 10000,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': [550000],
            'max': [9999999],
        }
    })
    initRange(projectBudgetSliderMax , '#project-input-count-budget-max', '#project-budget-input-max');
}
const demandRange = document.getElementById('demand-range');
if (demandRange) {
    noUiSlider.create(demandRange , {
        start: [350000],
        step: 10000,
        behaviour: 'snap',
        connect: [true, false],
        range: {
            'min': [350000],
            'max': [9999999],
        }
    })
    initRange(demandRange, '#demand-count-budget', '#demand-input');
}

const rangeSliderTenderBudget = document.getElementById('range-slider-tender-budjet');
if (rangeSliderTenderBudget) {
    noUiSlider.create(rangeSliderTenderBudget, {
        start: [1000000, 8000000],
        step: 10000,
        connect: true,
        range: {
            'min': [1000000],
            'max': [8000000],
        }
    });
    const input0 = document.getElementById('input-tender-budget-0');
    const input1 = document.getElementById('input-tender-budget-1');
    const inputs = [input0, input1];
    rangeSliderTenderBudget.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle])
    })
}


//! CHART METHODS
function setParsingInstData(data) {
    $('.parsing__btn').removeClass('active');
    $('.parsing__btn').eq(data).addClass('active')
    chart = parsingInst;

    chart.data.datasets[0].data = window['parsingIntData_' + data]
    chart.update();
}


//! CHART for bloger
if (document.getElementById('parsing-inst')) {
var ctx = document.getElementById('parsing-inst').getContext("2d");
var barStroke = ctx.createLinearGradient(700, 0, 120, 0);

var barFill = ctx.createLinearGradient(700, 0, 120, 0);
barFill.addColorStop(0, "#3772FF");

var barFillHover = ctx.createLinearGradient(700, 0, 120, 0);
barFillHover.addColorStop(0, "#3772FF");

var parsingInst = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["13 - 17", "18 - 24", "25 - 34", "35 - 44", "45 - 54", '55 - 64', '65+'],
        datasets: [{
            borderRadius: 5,
            backgroundColor: barFill,
            // data: [9, 29, 56, 61, 18, 4, 1]
        }]
    },
    options: {
        plugins: {
            tooltip: {
                enabled:false
            },
            legend: {
                display: false
            }
        },
        animation: {
            easing: "easeOutQuart"
        },
        indexAxis: 'y',
        scales: {
            x: {
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
                color: '#EFF3F9'
              },
              ticks: {
                font: {
                    color: '#5B6571',
                    family: "Gilroy",
                    weight: 600
                }
              }
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                  font: {
                    color: '#5B6571',
                    family: "Gilroy",
                    weight: 600
                  }
              }
            }
          }
    }
});
}
if (document.getElementById('parsing-follow')) {
var cyx = document.getElementById('parsing-follow').getContext("2d");
var parsingFollow = new Chart(cyx, {
    type: 'doughnut',
    plugins: [ChartDataLabels],
    data: {
        labels: ['Жен', 'Муж'],
        datasets: [{
         backgroundColor: ['#FF6262','#12A6C7'],
          data: [32, 68]
        }]
    },
    options: {
      plugins: {
        datalabels: {
            display: true,
            formatter: (value) => {
                return value + '%';
              },
            color: 'white',
            weight: 'bold',
            font: {
                size: 16,
            }
          },
        //   doughnutlabel: {
        //     labels: [{
        //       text: '550',
        //       font: {
        //         size: 50,
        //         weight: 'bold'
        //       }
        //     }, {
        //       text: 'total'
        //     }]
        //   },
        legend: {
          position: 'right',
          labels: {
              padding: 20,
              color: '#0B2239',
              font: {
                size: 16,
                weight: 600,
                family: 'Gilroy',
              },
              usePointStyle: true
          }
        },
      }
    },
})
}

//Clear input after click button
$('body').on('input', '.js-control', function (e) {  
    $(this).siblings('.reset-input').addClass('show');
})
$('body').on('click', '.reset-input', function (e) {
    e.preventDefault();
    $(this).siblings('.js-control').val('');
    $(this).removeClass('show')  
})


// Function on aside page
if ($(window).width() < 992 || $(window).width() == 992) {
    if (document.querySelectorAll('.js-content-aside').length > 0) {
        let currentBtnShowAside = document.querySelector('.js-btn-show-aside');
        let currentContent = document.querySelector('.js-content-aside');
        let currentBtnClose = document.querySelector('.aside-btn-close');
        function toggleAsideContent (e) {
            e.preventDefault();
            currentContent.classList.toggle('show');
            document.body.classList.toggle('hidden');
            
        }
        currentBtnClose.addEventListener('click', toggleAsideContent);
        currentBtnShowAside.addEventListener('click', toggleAsideContent);
    }
 }

//! Image add 
const defaultBtn = document.querySelector(".js-default-btn");
const customBtn = document.querySelector(".js-custom-btn");
const img = document.querySelector(".image img");
const avatarWrapper = document.querySelector('.add-avatar__wrapper');
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive(){
    defaultBtn.click();
}
if (document.querySelectorAll('.js-default-btn').length > 0) {
    defaultBtn.addEventListener("change", function(){
        const file = this.files[0];
        if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            avatarWrapper.classList.add('active')
        }
        reader.readAsDataURL(file);
        }
    });
}

//! Tags for input plugin
$(document).ready(function(){
    let amsifyPlace = document.querySelectorAll('.amsify-suggestags-input');
    amsifyPlace.forEach(el => {
        el.removeAttribute('placeholder');
        el.setAttribute('placeholder', '')
    })
  });
$('.form-control[name="tags"]').amsifySuggestags({
  type :'bootstrap',
  tagLimit: 10,
});

//! Input type file
(function() {    
    $('.input-file-input').each(function() {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();
        $input.on('change', function(element) {
        var fileName = '';
        if (element.target.value) fileName = element.target.value.split('\\').pop();
        fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });
})();

//! Switch trigger on settings 
$('.switch__check:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).closest('.block-acc__item').removeClass("disabled");
      
    } else {
        $(this).closest('.block-acc__item').addClass("disabled");
    }
});
$('.switch__check:checkbox').trigger("change");



//! Messenger apend item, delete, add
const THEME_URL = '';
var multiDefaultMessenger = () => {
    const elements = document.querySelectorAll('.js-select-messenger');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        callbackOnCreateTemplates: function(template) {
            return {
              item: (classNames, data) => {
                return template(`
                  <div class="${classNames.item} ${
                  data.highlighted
                    ? classNames.highlightedState
                    : classNames.itemSelectable
                } ${
                  data.placeholder ? classNames.placeholder : ''
                }" data-item data-id="${data.id}" data-value="${data.value}" ${
                  data.active ? 'aria-selected="true"' : ''
                } ${data.disabled ? 'aria-disabled="true"' : ''}>
                    <span><img src="${THEME_URL}img/select-social/${data.label}.svg"></span> ${data.label}
                  </div>
                `);
              },
              choice: (classNames, data) => {
                return template(`
                  <div class="${classNames.item} ${classNames.itemChoice} ${
                  data.disabled ? classNames.itemDisabled : classNames.itemSelectable
                }" data-select-text="${this.config.itemSelectText}" data-choice ${
                  data.disabled
                    ? 'data-choice-disabled aria-disabled="true"'
                    : 'data-choice-selectable'
                } data-id="${data.id}" data-value="${data.value}" ${
                  data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                }>
                    <span><img src="${THEME_URL}img/select-social/${data.label}.svg"></span> ${data.label}
                  </div>
                `);
              },
            };
        },
      });
    })
}

multiDefaultMessenger();

function addSocialItem() {
    $('#js-messengers').append($('#addSocialItemTemplate').html())
    const choices = new Choices($('.currensy-select', $('#js-messengers .messenger__item').last())[0], {
        searchEnabled: false,
        itemSelectText: '',
        callbackOnCreateTemplates: function(template) {
            return {
              item: (classNames, data) => {
                return template(`
                  <div class="${classNames.item} ${
                  data.highlighted
                    ? classNames.highlightedState
                    : classNames.itemSelectable
                } ${
                  data.placeholder ? classNames.placeholder : ''
                }" data-item data-id="${data.id}" data-value="${data.value}" ${
                  data.active ? 'aria-selected="true"' : ''
                } ${data.disabled ? 'aria-disabled="true"' : ''}>
                    <span><img src="${THEME_URL}img/select-social/${data.label}.svg"></span> ${data.label}
                  </div>
                `);
              },
              choice: (classNames, data) => {
                return template(`
                  <div class="${classNames.item} ${classNames.itemChoice} ${
                  data.disabled ? classNames.itemDisabled : classNames.itemSelectable
                }" data-select-text="${this.config.itemSelectText}" data-choice ${
                  data.disabled
                    ? 'data-choice-disabled aria-disabled="true"'
                    : 'data-choice-selectable'
                } data-id="${data.id}" data-value="${data.value}" ${
                  data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                }>
                  <span><img src="${THEME_URL}img/select-social/${data.label}.svg"></span> ${data.label}
                  </div>
                `);
              },
            };
        },
    });
}

$('.js-messenger-add').click(function(e) {
    e.preventDefault();
    addSocialItem();
})

$('body').on('click', '.js-messenger-delete', function (e) {
    e.preventDefault();
    $(this).parents('.messenger__item').remove();
})
//! Messenger apend item, delete, add



//! Open comment and apend main comment
$('body').on('click', '.js-open-comment', function (e) {

    $('.comment__wrapper', $(this).parents('.comment__some')).fadeToggle('fast');
    
    if($(this).hasClass('active')){
        $('span',this).toggle()
        $('.commentsAction',this).text('Показать')
        $(this).toggleClass('active')
    } else {
        $('.commentsAction',this).text('Скрыть')
        $('span',this).toggle()
        $(this).toggleClass('active')
    }
})

$('body').on('click', '.answer-comment', function(e){
    e.preventDefault();

    if($('.addComment .comment-main',$(this).parents('.some-comment')).length == 0){
        if($(this).hasClass('js-answer-comment')){
            $('.addComment',$(this).parents('.comment-block')).last().append($($('#addCommentTemplate').html()).hide().fadeIn());
        } else {
            $('.addComment',$(this).parents('.some-comment')).append($($('#addCommentTemplate').html()).hide().fadeIn());
        }
    }
})

$(document).mouseup(function(e) 
{
    var container = $(".comment-main").filter(function(){
        return $(this).parent().is(":not(#addCommentTemplate)");
    });

    if (!container.is(e.target) && container.has(e.target).length === 0)
        container.remove();
});
//! Open comment and apend main comment


// Drop ZONE for page__placing
$(document).ready(function () {
Dropzone.autoDiscover = false;
$("#dz-upload").dropzone({
    url: '#',
    maxFiles: 5,
    uploadMultiple: true,
    parallelUploads: 1,
    previewsContainer: '#dropZoneItems',
    previewTemplate: $('#dropZoneItemsTemplate').html(),
    init: function() {
        this.on("addedfile", file => {
            count = this.files.length;
            $('#countDropItem').text(5 - count)
            if (this.files[5]!=null){
                this.removeFile(this.files[0]);
            }
            $('.elem__file').each(function(){
                var name = $('.elem__file-name', this).text()                                      
                var format = name.split('.').pop();                                                 
                $('.dropZoneItemIcon',this).attr('src', THEME_URL+'img/upload-img/'+format+'.png')  
            })
        });
        this.on('removedfile', file => {
            count = this.files.length;
            $('#countDropItem').text(5 - count)
        })
    },
})
});

// Drop Zone for settings-work
$(document).ready(function () {
    Dropzone.autoDiscover = false;
    $("#dz-works-upload").dropzone({
        url: '#',
        maxFiles: 9,
        uploadMultiple: true,
        parallelUploads: 1,
        previewsContainer: '#dropZoneItems',
        previewTemplate: $('#dropZoneItemsTemplate').html(),
        thumbnailWidth:"276",
        thumbnailHeight:"220",
        init: function() {
            this.on("addedfile", file => {
                if (this.files[9]!=null){
                    this.removeFile(this.files[0]);
                }
            });
            this.on("complete", function(file) {
                var el = $(file.previewElement)
                $(".change-image").closest(".works__item").before(el);
                $(".change-image").next().trigger('click');
            });
        },
        
    })
    $('body').on('click', '.js-works-edit', function (e) {
        $(this).addClass('change-image');
        $('#dz-works-upload').trigger('click')
    })
});

// Drop zone for stat 
$(document).ready(function () {
    Dropzone.autoDiscover = false;
    InitializeDropzones();
    function InitializeDropzones() {
        Array.prototype.slice.call(document.querySelectorAll('.js-dropzoner'))
            .forEach((element, index) => {
                var myDropzone = new Dropzone(element, {
                    url: '#',
                    maxFiles: 5,
                    maxFilesize: 2,
                    uploadMultiple: true,
                    parallelUploads: 1,
                    previewsContainer: '.js-drop-item-' + index,
                    previewTemplate: $('#dropZoneItemsTemplate').html(),
                    thumbnailWidth:"278",
                    thumbnailHeight:"490",
                    init: function() {
                        this.on("addedfile", file => {
                            if (this.files[5]!=null){
                                this.removeFile(this.files[0]);
                            }
                        });
                    },
                });
        })
    }
});



// Script for storis 
function removePublishCard () {
    $(this).parents('.card-publish__item').remove();
}
$('body').on('click', '.js-btn-publish-delete', removePublishCard);

// 1 drozone
$(document).ready(function () {
    Dropzone.autoDiscover = false;
    $("#dropzone-1").dropzone({
        url: '#',
        maxFiles: 1,
        maxFilesize: 2,
        parallelUploads: 1,
        previewsContainer: '',
        previewTemplate: $('#dropZoneItemsTemplate').html(),
        thumbnailWidth:"386",
        thumbnailHeight:"409",
        init: function() {
            this.on("addedfile", file => {
                if (this.files[1]!=null){
                    this.removeFile(this.files[0]);
                }
            });
            this.on("totaluploadprogress", function(progress) {
                $('#total-progress-1 .progress-bar').css('width', progress + '%');
            });
            this.on("sending", function(file) {
                $('#total-progress-1').css('opacity', '1');
            });

            this.on("queuecomplete", function(progress) {
                $('#total-progress-1').css('opacity', '0');
            });
            this.on("complete", function (file) {
                var parent = $('#dropzone-1');
                $(parent).find('.story-item').addClass('show')
            })
        },
    })
});
// 2 drozone 
$(document).ready(function () {
    Dropzone.autoDiscover = false;
    $("#dropzone-2").dropzone({
        url: '#',
        maxFiles: 1,
        maxFilesize: 2,
        parallelUploads: 1,
        previewsContainer: '',
        previewTemplate: $('#dropZoneItemsTemplate').html(),
        thumbnailWidth:"386",
        thumbnailHeight:"409",
        init: function() {
            this.on("addedfile", file => {
                if (this.files[1]!=null){
                    this.removeFile(this.files[0]);
                }
            });
            this.on("totaluploadprogress", function(progress) {
                $('#total-progress-2 .progress-bar').css('width', progress + '%');
            });
            this.on("sending", function(file) {
                $('#total-progress-2').css('opacity', '1');
            });

            this.on("queuecomplete", function(progress) {
                $('#total-progress-2').css('opacity', '0');
            });
            this.on("complete", function (file) {
                var parent = $('#dropzone-2');
                $(parent).find('.story-item').addClass('show')
            })
        },
    })
});

// Drop ZONE for keys
$(document).ready(function () {
    Dropzone.autoDiscover = false;
    $("#dz-keys").dropzone({
        url: '#',
        maxFiles: 5,
        parallelUploads: 1,
        uploadMultiple: true,
        maxFilesize: 10240,
        maxThumbnailFilesize: 10,
        previewsContainer: '#dropZoneItems',
        previewTemplate: $('#dropZoneItemsTemplate').html(),
        thumbnailWidth:"156",
        thumbnailHeight:"110",
        init: function() {
            this.on("addedfile", file => {
                if (this.files[5]!=null){
                    this.removeFile(this.files[5]);
                    $('.keys-preview-item', this).remove();
                }
            });
            this.on("totaluploadprogress", function(progress) {
                $('#total-progress .progress-bar').css('width', progress + '%');
            });
            this.on("sending", function(file) {
                $('.total-progress').css('opacity', '1');
            });

            this.on("queuecomplete", function(progress) {
                $('.total-progress').css('opacity', '0');
            });
            this.on("complete", function(file) {
                $('.keys-item').addClass('show');
                $('.keys-preview-row').append($('#item-append-after-comlete').html());
                $('.keys-item').css('pointer-events', 'all');
                if ($('.keys-preview-item').length > 6) {
                    $('.keys-preview-item').last().remove();
                }
            });
        },
    })
    $('body').on('click', '.keys-preview-body', function (e) {
        $('#dz-keys').trigger('click')
    })
})




//! Search main
$('.js-header-search-input').click(function(e){
    $('.search-list').toggleClass('show');
})
  
$(document).mouseup(function(e) 
{
    var container = $(".js-header-search-input");
    if (!container.is(e.target) && container.has(e.target).length === 0)
       $('.search-list').removeClass('show')
});


//! Statistic bloger circle
$( document ).ready(function() {
    if (document.querySelectorAll('.circle-progress').length> 0) {
        let progressBar = document.querySelector('.circle-progress');
        let valueContainer = document.querySelector('.value-container');
        let progressValue = 0;
        let progressEndValue = parseInt($('#stat-count').attr('data-value'));
        let speed = 50;
        
        let progress = setInterval(() => {
            progressValue++
            valueContainer.textContent = `${progressValue}%`;
            progressBar.style.background = `conic-gradient(
                #ffffff ${progressValue * 3.6}deg,
                #cadcf3 ${progressValue * 3.6}deg
            )`;        
            if (progressValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed)
    }
});


// Function hat
    const userItem = document.querySelectorAll('.js-chat-list-item');
    const userContent = document.querySelectorAll('.js-chat-talk');
    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    if (userItem.length > 0) {
        const onClickChat = (item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let curentBtn = item;
                let tabId = curentBtn.getAttribute('data-chat');
                let currentContent = document.querySelector(tabId);
                
                if (!curentBtn.classList.contains('chat__list-item--active')){
                    userItem.forEach((item) => {
                        item.classList.remove('chat__list-item--active');
                    })
                    userContent.forEach((item) => {
                        item.classList.remove('chat__talk--show');
                    })
            
                    curentBtn.classList.add('chat__list-item--active');
                    currentContent.classList.add('chat__talk--show');
                }
               
            })
        }
        
        userItem.forEach(onClickChat);
  
    }
    if (document.querySelectorAll('.js-chat-list-item').length > 0) {
        if (mediaQuery.matches) {
            document.querySelector('.js-chat-list-item').click();
        } 
    }
   
  
  $('body').on('click', '.js-back-user-list', function (e) {
    $('.chat__talk').removeClass('chat__talk--show');
    $('.js-chat-list-item').removeClass('chat__list-item--active');
    })




// Количество текста 
