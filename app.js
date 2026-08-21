"use strict";

const translations = {
  sv: {
    origin:"Ursprung", craft:"Hantverket", oil:"Vår olja", oilTitle:"Premium Extra Virgin", collection:"Kollektion", contactNav:"Kontakta oss", buy:"Köp nu",
    kicker:"Kallpressad extra virgin olivolja", title:"Ett levande<br>arv.", heroText:"Uråldriga syriska olivlundar. Buteljerat guld för den skandinaviska smakpaletten. En tyst lyx, skapad av århundraden.", discover:"Upptäck oljan",
    originTitle:"I varje oliv finns en berättelse.", originText:"Syrian Gold föds ur respekt för Syriens olivtradition. Varje skörd bär spår av jorden, solen och omsorgen från generationer.", quote:"“Äkta lyx handlar om ursprung, tid och omsorg.”",
    craftTitle:"Från jord till flaska", craftLead:"En oförändrad tradition som möter modern precision.", step1:"Handplockat", step1t:"Oliverna skördas varsamt för hand för att skydda frukten och bevara dess naturliga karaktär.", step2:"Mekaniskt pressat", step2t:"Kontrollerad temperatur och mekaniska metoder skapar en ren, tydlig och balanserad smak.", step3:"Varsamt buteljerat", step3t:"Oljan får vila naturligt och buteljeras med omsorg för att skydda arom, färg och kvalitet.",
    oilText:"En balanserad signaturolja med grön friskhet, mjuk fruktighet och ett elegant pepprigt avslut.", taste:"Smak", tasteV:"Gräsig, fruktig och elegant pepprig.", source:"Ursprung", sourceV:"Syrisk olivtradition, skapad för den skandinaviska marknaden.", serve:"Passar till", serveV:"Bröd, sallader, grillade rätter, marinader och servering.",
    shopTitle:"Fyra storlekar. Samma guld.", shopLead:"Välj formatet som passar ditt bord, ditt kök eller din familj.", price:"Fråga om pris", popular:"Mest populär",
    contact:"Beställning och kontakt", contactTitle:"Bli en del av historien", contactText:"Skicka en förfrågan om priser, produktlansering, återförsäljning eller grossistmöjligheter.", name:"Namn", email:"E-post", interest:"Jag är intresserad av", selectSize:"Välj storlek", message:"Meddelande", send:"Skicka förfrågan", sending:"Skickar...", footer:"Uråldrig tradition, buteljerad för modern gastronomi."
  },
  en: {
    origin:"Origin", craft:"Craft", oil:"Our oil", oilTitle:"Premium Extra Virgin", collection:"Collection", contactNav:"Contact us", buy:"Buy now",
    kicker:"Cold-pressed extra virgin olive oil", title:"A living<br>legacy.", heroText:"Ancient Syrian olive groves. Bottled gold for the Scandinavian palate. Quiet luxury, shaped by centuries.", discover:"Discover the oil",
    originTitle:"Every olive carries a story.", originText:"Syrian Gold begins with respect for Syria's olive tradition. Every harvest carries the land, the sun and the care of generations.", quote:"“True luxury is about origin, time and care.”",
    craftTitle:"From soil to bottle", craftLead:"An enduring tradition meets modern precision.", step1:"Hand picked", step1t:"The olives are harvested gently by hand to protect the fruit and preserve its natural character.", step2:"Mechanically pressed", step2t:"Controlled temperature and mechanical methods create a clean, distinctive and balanced taste.", step3:"Carefully bottled", step3t:"The oil rests naturally and is bottled with care to protect its aroma, colour and quality.",
    oilText:"A balanced signature oil with green freshness, soft fruit and an elegant peppery finish.", taste:"Taste", tasteV:"Green, fruity and elegantly peppery.", source:"Origin", sourceV:"Syrian olive heritage, created for the Scandinavian market.", serve:"Perfect for", serveV:"Bread, salads, grilled dishes, marinades and finishing.",
    shopTitle:"Four sizes. The same gold.", shopLead:"Choose the size made for your table, your kitchen or your family.", price:"Request price", popular:"Most popular",
    contact:"Orders and contact", contactTitle:"Become part of the story", contactText:"Send an enquiry about prices, product availability, retail partnerships or wholesale opportunities.", name:"Name", email:"Email", interest:"I am interested in", selectSize:"Choose a size", message:"Message", send:"Send enquiry", sending:"Sending...", footer:"Ancient tradition, bottled for modern gastronomy."
  },
  ar: {
    origin:"الأصل", craft:"الحرفة", oil:"زيتنا", oilTitle:"زيت زيتون بكر ممتاز", collection:"المجموعة", contactNav:"تواصل معنا", buy:"اشتر الآن",
    kicker:"زيت زيتون بكر ممتاز معصور على البارد", title:"إرث<br>نابض.", heroText:"بساتين زيتون سورية عريقة. ذهب معبأ للذائقة الاسكندنافية. فخامة هادئة صنعتها القرون.", discover:"اكتشف الزيت",
    originTitle:"في كل زيتونة حكاية.", originText:"تبدأ سوريان غولد باحترام عميق لتقاليد الزيتون السورية. يحمل كل موسم حصاد أثر الأرض والشمس وعناية الأجيال.", quote:"«الفخامة الحقيقية هي الأصل والوقت والعناية.»",
    craftTitle:"من الأرض إلى العبوة", craftLead:"تقاليد راسخة تلتقي بالدقة الحديثة.", step1:"قطاف يدوي", step1t:"تُقطف حبات الزيتون يدوياً بعناية لحماية الثمرة والحفاظ على طابعها الطبيعي.", step2:"عصر ميكانيكي", step2t:"تمنح الحرارة المضبوطة والوسائل الميكانيكية الزيت مذاقاً نقياً ومميزاً ومتوازناً.", step3:"تعبئة بعناية", step3t:"يستريح الزيت طبيعياً ثم يُعبأ بعناية لحماية الرائحة واللون والجودة.",
    oilText:"زيت متوازن بنضارة خضراء وفاكهية ناعمة ونهاية فلفلية أنيقة.", taste:"المذاق", tasteV:"أخضر وفاكهي مع لمسة فلفلية أنيقة.", source:"الأصل", sourceV:"تراث الزيتون السوري بروح تناسب السوق الاسكندنافية.", serve:"مثالي مع", serveV:"الخبز والسلطات والمشاوي والتتبيلات واللمسة الأخيرة.",
    shopTitle:"أربعة أحجام. الذهب نفسه.", shopLead:"اختر الحجم المناسب لمائدتك أو مطبخك أو عائلتك.", price:"اطلب السعر", popular:"الأكثر طلباً",
    contact:"الطلبات والتواصل", contactTitle:"كن جزءاً من الحكاية", contactText:"أرسل استفسارك عن الأسعار أو توفر المنتجات أو فرص البيع بالتجزئة والجملة.", name:"الاسم", email:"البريد الإلكتروني", interest:"أنا مهتم بـ", selectSize:"اختر الحجم", message:"الرسالة", send:"إرسال الطلب", sending:"جارٍ الإرسال...", footer:"تقاليد عريقة معبأة لفن الطهي الحديث."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translationElements = document.querySelectorAll("[data-t]");
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");
const sizeSelect = document.querySelector("#size");
const productLinks = document.querySelectorAll("[data-size]");
const contactForm = document.querySelector('form[name="order"]');

function setLanguage(language) {
  const dictionary = translations[language] || translations.sv;

  // Change language, but KEEP the website layout LTR
  document.documentElement.lang = language;
  document.documentElement.dir = "ltr";
  document.body.dir = "ltr";

  const main = document.querySelector("main");

  if (main) {
    main.dir = language === "ar" ? "rtl" : "ltr";
  }

  translationElements.forEach((element) => {
    const value = dictionary[element.dataset.t];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("sglang", language);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem("sglang") || "sv");

if (menuButton && navigation) {

  // Open / close menu
  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const open = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });

  // Close when clicking a navigation link
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });

  // Close when clicking anywhere outside the menu
  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navigation.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (
      navigation.classList.contains("open") &&
      !clickedInsideMenu &&
      !clickedMenuButton
    ) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }
  });

  // Close menu when pressing Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
      menuButton.focus();
    }
  });
}

productLinks.forEach((link) => link.addEventListener("click", () => {
  if (sizeSelect) sizeSelect.value = link.dataset.size;
}));

const animatedElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), {threshold: 0.14, rootMargin: "0px 0px -45px 0px"});
  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("visible"));
}

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    const button = contactForm.querySelector('button[type="submit"]');
    const language = localStorage.getItem("sglang") || "sv";
    if (button) {
      button.disabled = true;
      button.textContent = translations[language].sending;
    }
  });
}
