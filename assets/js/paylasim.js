// 🔧 Mühendis Dayanışması - Paylaşım Sistemi
// Temiz kod yaklaşımı: Veri ve mantık ayrılmış

class PaylasimSistemi {
  constructor() {
    this.mesajHavuzu = window.mesajHavuzu || {};
    this.platformKonfigurasyon = window.platformKonfigurasyon || {};
    this.sabitHashtag = window.sabitHashtag || "#MühendisDayanışması";
    this.init();
  }

  init() {
    console.log('✅ Paylaşım sistemi başlatıldı - Temiz kod yaklaşımı');
    this.mesajGoster();
  }

  // 📅 Zaman fonksiyonları
  bugunNeGunu() {
    const gunler = ['pazar', 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi'];
    return gunler[new Date().getDay()];
  }

  simdiHangiSaat() {
    const saat = new Date().getHours();
    if (saat >= 6 && saat < 12) return 'sabah';
    if (saat >= 12 && saat < 17) return 'ogle';
    if (saat >= 17 && saat < 22) return 'aksam';
    return 'gece';
  }

  // 🎲 Rastgele seçim
  rastgeleSec(array) {
    if (!Array.isArray(array) || array.length === 0) return null;
    return array[Math.floor(Math.random() * array.length)];
  }

  // 💬 Mesaj üretimi
  mesajUret(platform = 'genel') {
    const gun = this.bugunNeGunu();
    const saat = this.simdiHangiSaat();
    
    // Platform konfigürasyonunu al
    const config = this.platformKonfigurasyon[platform] || {
      mesajTuru: 'uzun',
      karakterLimiti: 2000,
      formatSablonu: '{mesaj}\n\n{sabitHashtag} {hashtag}'
    };

    // Mesajı seç
    let seciliMesaj = this.mesajSeç(gun, saat);
    if (!seciliMesaj) {
      seciliMesaj = this.varsayilanMesaj();
    }

    // Platform'a göre mesaj türünü belirle
    const mesajMetni = seciliMesaj[config.mesajTuru] || seciliMesaj.uzun || seciliMesaj.kisa;

    // Mesajı formatla
    return this.mesajFormatla(mesajMetni, seciliMesaj.hashtag, config);
  }

  mesajSeç(gun, saat) {
    if (!this.mesajHavuzu[gun] || !this.mesajHavuzu[gun][saat]) {
      return this.yedekMesajSeç(gun);
    }
    return this.rastgeleSec(this.mesajHavuzu[gun][saat]);
  }

  yedekMesajSeç(gun) {
    if (!this.mesajHavuzu[gun]) return null;
    
    const mevcutSaatler = Object.keys(this.mesajHavuzu[gun]);
    if (mevcutSaatler.length === 0) return null;
    
    const rastgeleSaat = this.rastgeleSec(mevcutSaatler);
    return this.rastgeleSec(this.mesajHavuzu[gun][rastgeleSaat]);
  }

  varsayilanMesaj() {
    return {
      kisa: "🔥 Mühendis hakları için ses çıkar!",
      uzun: "🔥 Mühendis hakları için ses çıkaralım! Birlikte güçlüyüz, birlikte değişim yaratabiliyoruz.",
      hashtag: "#MühendisHakları"
    };
  }

  mesajFormatla(mesaj, hashtag, config) {
    return config.formatSablonu
      .replace('{mesaj}', mesaj)
      .replace('{hashtag}', hashtag)
      .replace('{sabitHashtag}', this.sabitHashtag);
  }

  // 📋 Kopyalama fonksiyonu
  async kopyala(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('✅ Panoya kopyalandı:', text.substring(0, 50) + '...');
      return true;
    } catch (err) {
      console.error('❌ Kopyalama hatası:', err);
      return false;
    }
  }

  // 🎨 UI Güncellemeleri
  mesajGoster(platform = 'genel') {
    const mesaj = this.mesajUret(platform);
    const element = document.getElementById('paylasim-mesaj');
    
    if (element) {
      const platformAdi = platform.charAt(0).toUpperCase() + platform.slice(1);
      element.innerHTML = `
        <strong>${platformAdi} için hazır:</strong><br><br>
        ${mesaj.replace(/\n/g, '<br>')}
      `;
    }
    
    return mesaj;
  }

  // 🌐 Platform paylaşım fonksiyonları
  async linkedinPaylas() {
    const mesaj = this.mesajUret('linkedin');
    await this.kopyala(mesaj);
    this.mesajGoster('linkedin');
    
    setTimeout(() => {
      window.open('https://www.linkedin.com/sharing/share-offsite/', '_blank');
    }, 1000);
  }

  async twitterPaylas() {
    const mesaj = this.mesajUret('twitter');
    await this.kopyala(mesaj);
    this.mesajGoster('twitter');
    
    setTimeout(() => {
      window.open('https://twitter.com/compose/tweet', '_blank');
    }, 1000);
  }

  async whatsappPaylas() {
    const mesaj = this.mesajUret('whatsapp');
    await this.kopyala(mesaj);
    this.mesajGoster('whatsapp');
    
    setTimeout(() => {
      window.open('https://web.whatsapp.com/', '_blank');
    }, 1000);
  }

  async instagramPaylas() {
    const mesaj = this.mesajUret('instagram');
    await this.kopyala(mesaj);
    this.mesajGoster('instagram');
    
    // Instagram web paylaşımı yok, sadece mesajı kopyalıyoruz
    alert('Instagram mesajı panoya kopyalandı. Instagram uygulamasında paylaşabilirsiniz.');
  }

  async genelPaylas() {
    const mesaj = this.mesajUret('genel');
    await this.kopyala(mesaj);
    this.mesajGoster('genel');
  }

  // 📊 Debug ve test fonksiyonları
  debugBilgi() {
    const gun = this.bugunNeGunu();
    const saat = this.simdiHangiSaat();
    
    console.log('🔍 Debug Bilgileri:');
    console.log('Bugün:', gun);
    console.log('Şu anki zaman dilimi:', saat);
    console.log('Mevcut mesaj havuzu:', this.mesajHavuzu[gun]?.[saat]?.length || 0, 'mesaj');
    
    return { gun, saat, mesajSayisi: this.mesajHavuzu[gun]?.[saat]?.length || 0 };
  }

  tumPlatformlarIcinTest() {
    const platformlar = Object.keys(this.platformKonfigurasyon);
    const sonuclar = {};
    
    platformlar.forEach(platform => {
      sonuclar[platform] = this.mesajUret(platform);
    });
    
    console.table(sonuclar);
    return sonuclar;
  }
}

// 🚀 Global fonksiyonlar (geriye dönük uyumluluk için)
let paylasimSistemi;

function linkedinPaylas() { 
  paylasimSistemi?.linkedinPaylas(); 
}

function twitterPaylas() { 
  paylasimSistemi?.twitterPaylas(); 
}

function whatsappPaylas() { 
  paylasimSistemi?.whatsappPaylas(); 
}

function instagramPaylas() { 
  paylasimSistemi?.instagramPaylas(); 
}

function genelPaylas() { 
  paylasimSistemi?.genelPaylas(); 
}

// Debug fonksiyonu
function debugPaylasim() {
  return paylasimSistemi?.debugBilgi();
}

function tumPlatformlarTest() {
  return paylasimSistemi?.tumPlatformlarIcinTest();
}

// 🎯 Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', function() {
  // Mesaj havuzunun yüklenmesini bekle
  if (typeof mesajHavuzu !== 'undefined') {
    paylasimSistemi = new PaylasimSistemi();
  } else {
    console.warn('⚠️ Mesaj havuzu bulunamadı. mesaj-havuzu.js dosyasının yüklendiğinden emin olun.');
  }
});

// Export - Node.js uyumluluğu için
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PaylasimSistemi;
}
