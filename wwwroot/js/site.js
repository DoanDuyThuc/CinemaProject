document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header_main');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });

//search input
var search = document.querySelector('.Search_Control');

search.addEventListener('click', function(){
  if(search.classList.contains("NoActive")){
    search.classList.remove('NoActive');
    search.classList.add('Active');
  }
})

// Thêm sự kiện click lên document
document.addEventListener('click', function (event) {
  // Kiểm tra xem phần tử được bấm có phải là .Search_Control hay không
  var isClickInsideSearch = search.contains(event.target);

  if (!isClickInsideSearch) {
      // Nếu không phải, thêm lớp NoActive và loại bỏ lớp Active
      search.classList.add('NoActive');
      search.classList.remove('Active');
  }
});