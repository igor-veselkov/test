const openPopUp1 = document.getElementById('open_pop_up1');
const openPopUp2 = document.getElementById('open_pop_up2');
const popUp = document.getElementById('pop_up');
const closePopUp = document.getElementById('pop_up_close');
const nameError = document.getElementById('name_error');
const numberError = document.getElementById('number_error');
const button = document.getElementById('submit');

const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
  });

}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}


openPopUp1.addEventListener('click', function (event) {
  event.preventDefault();
  popUp.classList.add('active');
})

openPopUp2.addEventListener('click', function (event) {
  event.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})

const mask = new IMask(number, {
  mask: "+{7}(000)000-00-00"
})

button.addEventListener('click', (event) => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;

  event.preventDefault();

  if (!name) {
    nameError.innerText = "Поле обязательно для заполнения";
  }

  if (number <= 16) {
    numberError.innerText = "Укажите корректный номер телефона";
  }

  if (number === '') {
    numberError.innerText = "Поле обязательно для заполнения";
  } else {
    if (number.length === 16 && name.length >= 1) {
      nameError.innerText = "";
      numberError.innerText = "";

      makeUser()

    }
  }

  function makeUser() {

    let user = new Object();

    user.name = name;
    user.email = email;
    user.number = number;

    console.log(user)
    return swal({
      title: "Форма отправлена!",
      text: "Я свяжусь с Вами в ближайшее время!",
      icon: "success",
      button: "Закрыть",
    });

  }


})
