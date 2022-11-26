const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");
// console.log(tabs);

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 2) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

const forms = document.querySelectorAll("form");
console.log(forms);

const postData = (url, data) => {
  const res = fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return res;
};

const bindPostData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const obj = {};

    formData.forEach((item, i) => {
      obj[i] = item;
    });
    const json = JSON.stringify(obj);

    postData("server.php", json)
    .then((data) => console.log(data.json()))
    .catch(() => {console.log("error");});
  });
};

forms.forEach((item) => {
  bindPostData(item);
});