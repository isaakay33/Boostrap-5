// Sayfa yüklendiğinde (DOMContentLoaded event'i tetiklendiğinde), aşağıdaki işlemleri yap
window.addEventListener("DOMContentLoaded", event => {
    // `navbarMobile` adında bir fonksiyon tanımlanıyor
    var navbarMobile = function() {
        // Sayfa üzerinde "mainNavbar" id'sine sahip bir öğeyi bul
        const nCollapsible = document.body.querySelector("#mainNavbar");

        const myHeaderHeight = document.querySelector("#myHeader").offsetHeight;

        // Eğer böyle bir öğe yoksa fonksiyondan çık
        if (!nCollapsible) {
            return;
        }

        // Eğer pencerenin dikey kaydırma pozisyonu (screenY) 0 ise (en üstteyken)
        if (window.scrollY < myHeaderHeight) {
            // "navbar-mobile" sınıfını "mainNavbar" öğesinden kaldır
            nCollapsible.classList.remove("navbar-mobile");
        } else {
            // Eğer dikey kaydırma pozisyonu 0 değilse (aşağıda bir yerdeyken)
            // "navbar-mobile" sınıfını "mainNavbar" öğesine ekle
            nCollapsible.classList.add("navbar-mobile");
        }
    };

    // "navbarMobile" fonksiyonunu çalıştır (sayfa yüklendiğinde)
    navbarMobile();

    // Sayfa üzerinde her kaydırma (scroll) olayı meydana geldiğinde "navbarMobile" fonksiyonunu tekrar çalıştır
    document.addEventListener("scroll", navbarMobile);
});


// Canvas kapatma düğmeleri için etkileşim kodu
var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function() {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

(function() {
    'use strict';

    var myForm = document.querySelector("#frmContact");
    var myBtn = document.querySelector("#btnContact");
    var currentCharacterCount = document.getElementById("current-character");

    function updateCharacterCount() {
        currentCharacterCount.textContent = myMessage.value.length;
    }

    function updateButtonState() {
        if (myMessage.value.length >= 10) {
            myBtn.disabled = false;
        } else {
            myBtn.disabled = true;
        }
    }

    var myMessage = document.querySelector("#message");
    myMessage.addEventListener("input", function() {
        updateCharacterCount();
        updateButtonState();
    });

    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

        var formData = new FormData(myForm);

        // Form verilerini sunucuya göndermek için uygun yöntemi kullanın,
        // örneğin AJAX veya Fetch API

        // Simüle edilmiş bir AJAX isteği
        setTimeout(function() {
            alert("Mesajınız başarıyla gönderildi!");

            // Formu sıfırla
            myForm.reset();
            updateCharacterCount();
            updateButtonState();
        }, 1000); // 1 saniye bekletelim

    });

    // Sayfa yüklendiğinde de kontrolü yap
    updateCharacterCount();
    updateButtonState();
})();
