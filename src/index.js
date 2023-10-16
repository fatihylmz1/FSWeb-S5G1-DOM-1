const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navitems = document.querySelectorAll('a');
navitems[0].textContent = "Servisler";
navitems[1].textContent = "Ürünler";
navitems[2].textContent = "Vizyon";
navitems[3].textContent = "Özellikler";
navitems[4].textContent = "Hakkımızda";
navitems[5].textContent = "İletişim";


const resim = document.querySelector("#logo-img");
resim.src = siteContent.images["logo-img"];


const baslik = document.querySelector(".cta-text h1");
baslik.textContent = siteContent.cta.h1;


const buton = document.querySelector(".cta-text button");
buton.textContent = siteContent.cta.button;


const resim2 = document.querySelector("#cta-img");
resim2.src = siteContent.images["cta-img"];


const resimüstübaslik = document.querySelectorAll(".top-content h4");
resimüstübaslik[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
resimüstübaslik[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];


const resimüstüiçerik = document.querySelectorAll(".top-content p");
resimüstüiçerik[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
resimüstüiçerik[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];


const resim3 = document.querySelector("#middle-img");
resim3.src = siteContent.images["accent-img"];


const resimaltibaslik = document.querySelectorAll(".bottom-content h4");
resimaltibaslik[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
resimaltibaslik[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
resimaltibaslik[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];


const resimaltiiçerik = document.querySelectorAll(".bottom-content p");
resimaltiiçerik[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
resimaltiiçerik[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
resimaltiiçerik[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];


document.querySelector(".contact h4").textContent = siteContent["iletisim"]["iletişim-h4"];
const iletisim = document.querySelectorAll(".contact p");
iletisim[0].textContent = siteContent["iletisim"]["adres"];
iletisim[1].textContent = siteContent["iletisim"]["telefon"];
iletisim[2].textContent = siteContent["iletisim"]["email"];


const footer = document.querySelector("footer a");
footer.textContent = siteContent["footer"]["copyright"];
footer.classList.add("bold");





