(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    hero: document.querySelector("[hero]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.openModalBtn.classList.toggle("hidden");
    refs.hero.classList.toggle("hidden");

    const isModalClose = refs.modal.classList.contains("is-open");
    const method = isModalClose ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }
})();
