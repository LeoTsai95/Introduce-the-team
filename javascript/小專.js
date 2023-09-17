
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');

  var content = document.getElementById('content');
  content.classList.toggle('collapsed');

  var ul = document.querySelector('#sidebar ul');
  ul.classList.toggle('collapsed');
}

// 
// 
// 
// 
// 輪播圖

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = 0; // 隱藏並將不透明度設置為0
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  // 使用淡入動畫效果
  fadeIn(slides[slideIndex - 1]);

  dots[slideIndex - 1].className += " active";
}

function fadeIn(element) {
  var op = 0; // 初始不透明度為0
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += 0.1; // 調整淡入速度，可以根據需要自行調整
  }, 60); // 每50毫秒執行一次淡入效果
}

// 設定每5秒自動切換幻燈片
var autoSlideTimer = setInterval(function () {
  plusSlides(1);
}, 5000); // 每5秒執行一次切換幻燈片

// 
// 
// 
// 
// 輪播圖結束


// 
// 
// 
// 
// 
// 
// Open the Modal
function openModal(slideIndex) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";

  if (slideIndex === 0) {
    modalImage.src = "./img/arttis.jpg";
  } else {
    modalImage.src = "./img/p" + slideIndex + ".jpg";
  }

  // Add event listener to close the modal when clicking outside the image or on the close button
  window.addEventListener("click", closeModalOutside);
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  // Remove event listener when closing the modal
  window.removeEventListener("click", closeModalOutside);
}

function closeModalOutside(event) {
  var modalContent = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  var closeBtn = document.getElementsByClassName("close-btn")[0];
  if (event.target === modalContent || event.target === closeBtn || event.target === modalImage) {
    closeModal();
  }
}

// Get the modal element
var modal = document.getElementById("myModal");

// When clicking outside the modal, close the modal and return to the webpage
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    // Code to return to the webpage
  }
};


function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  // Add event listener to close the modal when clicking outside the modal content or on the close button
  window.addEventListener("click", function (event) {
    if (event.target === modal || event.target.classList.contains("close-btn")) {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
  // Remove event listener when closing the modal
  window.removeEventListener("click", closeModal);
}
//
//
//
//
// 


// 至頂導覽列
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function () {
  var currentScrollPos = window.pageYOffset;
  var topnav = document.querySelector('.topnav');
  if (prevScrollpos > currentScrollPos) {
    topnav.style.top = '0';
  } else {
    topnav.style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;

  // 按鈕顯示與隱藏
  var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

// 滾動到頁面頂部
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// 
// 
// 
// 
// 
// 
// 
// 


// 
// 
// 
// 
// 
// 
// 

 // Get the modal element
 var modal = document.getElementById("myModal");

 // Get the <span> element that closes the modal
 var closeBtn = document.getElementsByClassName("close")[0];

 // Get all the images that open the modal
 var images = document.getElementsByClassName("hover-shadow");

 // Function to open the modal
 function openModal(index) {
   modal.style.display = "block";
   var modalImage = document.getElementById("modalImage");
   modalImage.src = images[index].src;
 }

 // Function to close the modal
 function closeModal() {
   modal.style.display = "none";
 }

 // When the user clicks on an image, open the modal
 for (var i = 0; i < images.length; i++) {
   (function (index) {
     images[i].onclick = function () {
       openModal(index);
     };
   })(i);
 }

 // When the user clicks on <span> (x), close the modal
 closeBtn.onclick = function () {
   closeModal();
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target == modal) {
     closeModal();
   }
 }


//
//
//
//
//
//
//
// 

// 獲取分頁連結元素
const paginationLinks = document.querySelectorAll('.pagination a');

// 為每個分頁連結添加點擊事件監聽器
paginationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // 防止點擊連結時頁面跳轉

    // 移除所有分頁連結的 active 類別
    paginationLinks.forEach(link => link.classList.remove('active'));

    // 為當前點擊的分頁連結添加 active 類別
    link.classList.add('active');

    // 獲取要顯示的頁面索引
    const pageIndex = parseInt(link.textContent);

    // 顯示對應索引的頁面內容
    showPage(pageIndex);
  });
});

// 顯示指定頁面的內容
function showPage(pageIndex) {
  // 隱藏所有頁面
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');

  // 顯示指定索引的頁面
  const pageToShow = document.getElementById(`page-${pageIndex}`);
  pageToShow.style.display = 'block';
}

// 
// 
// 
// 
// 
// 
// 在 JavaScript 中獲取下拉選單元素
var dropdownMenu = document.getElementById("dropdownMenu");

// 在下拉選單項目被點擊時執行相應的操作
dropdownMenu.addEventListener("click", function(event) {
  // 獲取被點擊的元素
  var target = event.target;
  
  // 檢查被點擊的元素是否為連結
  if (target.tagName === "A") {
    // 在這裡可以添加相應的操作，例如根據點擊的連結顯示相應的網頁內容
    // 可以使用 target.getAttribute("href") 獲取連結的 href 屬性值
    // 例如:
    // var href = target.getAttribute("href");
    // 根據 href 值進行相應操作
  }
});


