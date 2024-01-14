
//////////////////////////////////////////////////
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scroll-to-top").style.display = "block";
        } else {
            document.getElementById("scroll-to-top").style.display = "none";
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ar,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      }

      function validateForm(event) {
        event.preventDefault(); // يمنع النموذج من إرسال البيانات تلقائيًا
    
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // قم بإجراء التحقق من صحة المدخلات هنا
        if (username === "" || password === "") {
          alert("يرجى تعبئة جميع الحقول");
          return false;
        }
        else if (username === "tasnim" && password === "1234"){
        // توجيه المستخدم إلى الصفحة المطلوبة
        window.location.href = "insert.html";
        }
       else if (username === "soma" && password === "12345"){
        // توجيه المستخدم إلى الصفحة المطلوبة
        window.location.href = "insert.html";
      }
      else
      alert("اسم المستخدم او كلمة المرور خاطئان")
      };
        document.getElementById("productForm").addEventListener("submit", function(event) {
          event.preventDefault(); // منع إرسال النموذج
        // استخراج قيم المدخلات
        var productName = document.getElementById("productName").value;
        var productPrice = document.getElementById("productPrice").value;
        var productImage = document.getElementById("productImage").value;
  
        // قم بإجراء التحقق من صحة المدخلات هنا
        //if (productName === "" || productPrice === "" || productImage === "") {
          //alert("يرجى تعبئة جميع الحقول");
          //return;
        //}
  
        // معالجة البيانات هنا
  
        // إعادة تعيين النموذج
        document.getElementById("productForm").reset();
  
        // عرض رسالة للتأكيد أو إعادة التوجيه إلى صفحة أخرى
        alert("تمت إضافة المنتج بنجاح!");
      });

      //collapse
      function bookReservation(cardNumber) {
        // قم بتنفيذ الإجراء المرتبط بالحجز للبطاقة المحددة
        // يمكنك استخدام قواعد الأعمال الخاصة بك هنا
        alert("تم حجز البطاقة رقم: " + cardNumber);
        // يمكنك استبدال سطر الطباعة بالتعليمات اللازمة لعملية الحجز الفعلية
      }
function toggleMenu() {
  var navbarMenu = document.getElementById("navbar-menu");
  navbarMenu.classList.toggle("reverse-direction");
  if (navbarMenu.style.display === "block") {
    navbarMenu.style.display = "none";
  } else {
    navbarMenu.style.display = "block";
  }
}
