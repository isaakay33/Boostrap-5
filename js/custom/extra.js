// Sayfa yüklendiğinde (DOMContentLoaded event'i tetiklendiğinde), aşağıdaki işlemleri yap
window.addEventListener("DOMContentLoaded", event => {
    // `navbarMobile` adında bir fonksiyon tanımlanıyor
    var navbarMobile = function() {
        // Sayfa üzerinde "mainNavbar" id'sine sahip bir öğeyi bul
        const nCollapsible = document.body.querySelector("#mainNavbar");

        // Eğer böyle bir öğe yoksa fonksiyondan çık
        if (!nCollapsible) {
            return;
        }

        // Eğer pencerenin dikey kaydırma pozisyonu (screenY) 0 ise (en üstteyken)
        if (window.scrollY === 0) {
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


var BtnCanvas=document.querySelectorAll(".btn-close-canvas");
for(let i=0; i<BtnCanvas.length;i++){
    BtnCanvas[i].addEventListener("click",function(){
document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}