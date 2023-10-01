const paginationConfig = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "</span>";
  },
};

export { paginationConfig };
