module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  setActive: menu => {
    var menuButton = document.querySelectorAll(".nav-item");
    menuButton.forEach(element => {
      if (element.textContent == menu) {
        element.className("active");
      }
    });
  },
}