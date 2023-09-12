let sehirler = [
    "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];
  
  let selec = document.getElementById("selec");
  let kup = document.querySelector(".kup");
  
  sehirler.forEach(e => {
    let op = document.createElement("option");
    op.innerHTML = e;
    selec.appendChild(op);
  });
  
  selec.addEventListener("change", () => {
    let sehir = selec.value;
    const key = "eaacb4541c9790dd70da56c141c86e54";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${key}&lang=tr&units=metric`;
    kup.classList.remove("inactive");
    kup.classList.add("active");
  
    fetch(api)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        console.log(resJson);
        let sehirisim = document.getElementById("sehirisim");
        let sicaklik = document.getElementById("sıcaklık");
        let hissedilen = document.getElementById("hissedilen");
        let nem = document.getElementById("nem");
        sehirisim.innerText = resJson.name
        sicaklik.innerText = resJson.main.temp
        hissedilen.innerText = resJson.main.feels_like
        nem.innerText = resJson.main.humidity

      })
      .catch(error => {
        console.error("Hata:", error);
      });
      
  });
  
