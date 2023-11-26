var navLinks = document.querySelectorAll('.navbar-collapse a.nav-link');
// Lặp qua tất cả các thẻ <a> và kiểm tra xem có lớp "active" không
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Lấy href của thẻ được nhấp
      var href = link.getAttribute('href');

      // Lưu trạng thái "active" vào localStorage
      localStorage.setItem('activeLink', href);

      // Xóa lớp "active" từ tất cả các thẻ <a>
      navLinks.forEach(function(innerLink) {
          innerLink.classList.remove('active');
      });

      // Thêm lớp "active" cho thẻ được nhấp
      link.classList.add('active');
    });
});

// Kiểm tra xem có trạng thái "active" đã được lưu trong localStorage hay không
var storedActiveLink = localStorage.getItem('activeLink');
if (storedActiveLink) {
    // Tìm thẻ có href trùng khớp với trạng thái đã lưu và thêm lớp "active"
    var activeLink = document.querySelector('.navbar-collapse a.nav-link[href="' + storedActiveLink + '"]');
    if (activeLink) {
        // Xóa lớp "active" từ tất cả các thẻ <a>
        navLinks.forEach(function(innerLink) {
            innerLink.classList.remove('active');
        });

        // Thêm lớp "active" cho thẻ được nhấp
        activeLink.classList.add('active');
    }
}