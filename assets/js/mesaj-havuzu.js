// 📚 Mühendis Dayanışması - Mesaj Havuzu
// Tüm paylaşım mesajları burada saklanır

const mesajHavuzu = {
  pazartesi: {
    sabah: [
      { 
        kisa: "☀️ Günaydın! Yeni hafta, mühendis haklarını konuşalım.",
        uzun: "☀️ Günaydın değerli mühendisler! Yeni hafta, yeni umutlar. Bu hafta mühendis haklarını konuşalım, sesimizi duyuralım. Adil çalışma koşulları için birlikte mücadele edelim.",
        hashtag: "#PazartesiSabahı" 
      },
      { 
        kisa: "🌅 Pazartesi motivasyonu: Adil çalışma koşulları için ses ver.",
        uzun: "🌅 Pazartesi sabahı motivasyonu: Adil çalışma koşulları için ses verelim. Her mühendis hak ettiği değeri görmeli, fazla mesai normalleşmemeli. Değişim bizim elimizde!",
        hashtag: "#SabahMotivasyonu" 
      }
    ],
    ogle: [
      { 
        kisa: "⏰ Öğle arası: Bu hafta kaç saat fazla mesai yapmamaya söz ver.",
        uzun: "⏰ Öğle arası düşüncesi: Bu hafta kaç saat fazla mesai yapmamaya söz verelim. Hayat iş değil, iş hayat değil. Dengeli yaşam hakkımız var.",
        hashtag: "#ÖğleArasıDüşünce" 
      },
      { 
        kisa: "🍽️ Öğle yemeği: Hakkını yeterince savunuyor musun?",
        uzun: "🍽️ Öğle yemeği yerken düşünelim: Hakkımızı yeterince savunuyor muyuz? Sessiz kalmak çözüm değil, birlikte hareket etmek gerek.",
        hashtag: "#ÖğleYemeği" 
      }
    ],
    aksam: [
      { 
        kisa: "🌆 Pazartesi akşamı: İlk gün nasıl geçti?",
        uzun: "🌆 Pazartesi akşamı değerlendirmesi: İlk gün nasıl geçti? Haklarımızı savunduk mu? Her gün bir adım atarsak, büyük değişimlere ulaşırız.",
        hashtag: "#PazartesiAkşamı" 
      },
      { 
        kisa: "🏠 Eve giderken düşün: Bu hafta farklı olacak mı?",
        uzun: "🏠 Eve giderken düşünelim: Bu hafta farklı olacak mı? Mühendis dayanışması güçlenirse, hepimiz için daha iyi koşullar mümkün.",
        hashtag: "#EveGiderken" 
      }
    ],
    gece: [
      { 
        kisa: "🌙 Pazartesi gecesi: Yarın daha bilinçli ol.",
        uzun: "🌙 Pazartesi gecesi düşüncesi: Yarın daha bilinçli olalım, haklarımızı bilelim. Her mühendis değerini bilmeli ve hak ettiğini talep etmeli.",
        hashtag: "#PazartesiGecesi" 
      },
      { 
        kisa: "💭 Gece düşüncesi: Dayanışma güçlü olduğumuzda gerçek.",
        uzun: "💭 Gece düşüncesi: Mühendis dayanışması ancak güçlü olduğumuzda gerçek anlamını buluyor. Birlik olduğumuzda çok daha güçlüyüz.",
        hashtag: "#GeceDüşüncesi" 
      }
    ]
  },
  
  sali: {
    sabah: [
      { 
        kisa: "📊 Günaydın! Türkiye'de mühendislerin %78'i fazla mesai yapıyor.",
        uzun: "📊 Günaydın! Türkiye'de mühendislerin %78'i fazla mesai yapıyor. Sen de mi? Bu rakamların değişmesi için birlikte hareket etmeliyiz. Normalleştirdiğimiz her şey, kabul ettiğimiz her şey oluyor.",
        hashtag: "#Salıİstatistik" 
      },
      { 
        kisa: "☕ Sabah kahven eşliğinde oku: Maaş adaletsizliği gerçeği.",
        uzun: "☕ Sabah kahven eşliğinde gerçekleri okuyalım: Maaş adaletsizliği sadece rakam değil, hayatımızın gerçeği. Bu durumu değiştirmek elimizde.",
        hashtag: "#SabahKahvesi" 
      }
    ],
    ogle: [
      { 
        kisa: "📈 Öğle arası sorusu: Kaç mühendis kariyer planında söz sahibi?",
        uzun: "📈 Öğle arası sorusu: Kaç mühendis kendi kariyer planında gerçekten söz sahibi? Çoğumuz şirketin belirlediği yolda yürüyoruz. Bu değişmeli.",
        hashtag: "#ÖğleArasıSoru" 
      },
      { 
        kisa: "📊 Rakamlar açık: Mühendisler hak ettiğini alamıyor.",
        uzun: "📊 Rakamlar açık ve üzücü: Mühendisler hak ettiklerini alamıyor. Bu sadece bireysel değil, sistemsel bir sorun. Çözüm de sistemsel yaklaşımda.",
        hashtag: "#RakamlarAçık" 
      }
    ],
    aksam: [
      { 
        kisa: "⏰ Mesai bitiyor ama soru aklında: Maaşın Avrupa'nın yarısı normal mi?",
        uzun: "⏰ Mesai bitiyor ama soru aklımızda kalıyor: Maaşımızın Avrupa'nın yarısı olması normal mi? Bu farkın nedenleri neler? Değişim mümkün mü?",
        hashtag: "#MesaiBitiyor" 
      },
      { 
        kisa: "⚖️ Akşam gerçeği: Adaletsizlik sadece rakam değil.",
        uzun: "⚖️ Akşam gerçeği: Adaletsizlik sadece rakam değil, her gün yaşadığımız gerçek. Bu gerçeği değiştirmek için birlikte hareket edebiliriz.",
        hashtag: "#AkşamGerçeği" 
      }
    ],
    gece: [
      { 
        kisa: "🌃 Gece vakti itiraf: Fazla mesai yapmayan mühendis var mı?",
        uzun: "🌃 Gece vakti itirafı: Fazla mesai yapmayan mühendis var mı aramızda? Bu durum ne kadar sürdürülebilir? Hayatımızı geri istiyoruz.",
        hashtag: "#GeceVakti" 
      },
      { 
        kisa: "💤 Uyumadan önce: Bu istatistiklerin parçası olmak zorunda değilsin.",
        uzun: "💤 Uyumadan önce düşünelim: Bu üzücü istatistiklerin parçası olmak zorunda değiliz. Değişim bireysel farkındalıkla başlar, kolektif hareketle gerçekleşir.",
        hashtag: "#UyumadanÖnce" 
      }
    ]
  },

  carsamba: {
    sabah: [
      { 
        kisa: "😴 Günaydın yorgun mühendis! Çarşamba sendromu başladı mı?",
        uzun: "😴 Günaydın yorgun mühendisler! Çarşamba sendromu başladı mı? Bu yorgunluk normal değil, sürdürülebilir değil. Hepimiz daha iyi koşulları hak ediyoruz.",
        hashtag: "#ÇarşambaSabahı" 
      },
      { 
        kisa: "🌅 Hafta ortası motivasyonu: Yorgunluk normal ama kabul etmek değil.",
        uzun: "🌅 Hafta ortası motivasyonu: Yorgunluk yaşamak normal ama bunu kabul etmek, normalleştirmek değil. Değişim için sesimizi çıkarmalıyız.",
        hashtag: "#HaftaOrtası" 
      }
    ],
    ogle: [
      { 
        kisa: "⏱️ Öğle arası itiraf: Kaç kere 'sadece 5 dakika' deyip saatlerce kaldın?",
        uzun: "⏱️ Öğle arası itirafı: Kaç kere 'sadece 5 dakika' deyip saatlerce işte kaldık? Bu durum ne kadar sürdürülebilir? Hayat-iş dengesi hakkımız.",
        hashtag: "#ÖğleArasıİtiraf" 
      },
      { 
        kisa: "🤝 Yalnız değilsin - milyonlarca mühendis aynı durumda.",
        uzun: "🤝 Yalnız değilsin - milyonlarca mühendis aynı durumda. Bu ortak sorunumuz için ortak çözümler bulabiliriz. Dayanışma gücümüz.",
        hashtag: "#YalnızDeğilsin" 
      }
    ],
    aksam: [
      { 
        kisa: "🌆 Akşam yorgunluğu: Bu kadar yorgunluk normal değil, çözüm var.",
        uzun: "🌆 Akşam yorgunluğu: Bu kadar yorgunluk normal değil, sürdürülebilir değil. Çözüm var ve bu çözümü hep birlikte bulabiliriz.",
        hashtag: "#AkşamYorgunluğu" 
      },
      { 
        kisa: "🔄 Çarşamba akşamı: Bu döngüyü kırmak mümkün.",
        uzun: "🔄 Çarşamba akşamı düşüncesi: Bu yorucu döngüyü kırmak mümkün. Bireysel ve kolektif adımlarla değişim yaratılabilir.",
        hashtag: "#ÇarşambaAkşamı" 
      }
    ],
    gece: [
      { 
        kisa: "💪 Gece enerjisi: Sen de değişimin parçası olabilirsin.",
        uzun: "💪 Gece enerjisi: Sen de bu değişimin parçası olabilirsin. Her farkına varan mühendis, bu dönüşümün bir parçası oluyor.",
        hashtag: "#GeceEnerjisi" 
      },
      { 
        kisa: "⚡ Hafta ortası enerji ihtiyacı: Mühendis dayanışmasından güç al.",
        uzun: "⚡ Hafta ortası enerji ihtiyacı: Mühendis dayanışmasından güç alalım. Birlikte hareket ettiğimizde çok daha güçlüyüz.",
        hashtag: "#Enerjiİhtiyacı" 
      }
    ]
  },

  persembe: {
    sabah: [
      { 
        kisa: "🚀 Günaydın! Perşembe enerjisi: Bu hafta neler öğrendin hakların hakkında?",
        uzun: "🚀 Günaydın! Perşembe enerjisi ile başlıyoruz: Bu hafta neler öğrendik haklarımız hakkında? Her öğrendiğimiz bilgi, gücümüzü artırıyor.",
        hashtag: "#PerşembeSabahı" 
      },
      { 
        kisa: "⭐ Sabah motivasyonu: Cumaya az kaldı ama hakların için mücadele devam ediyor.",
        uzun: "⭐ Sabah motivasyonu: Cumaya az kaldı ama haklarımız için mücadele her gün devam ediyor. Son güne kadar vazgeçmiyoruz.",
        hashtag: "#SabahMotivasyonu" 
      }
    ],
    ogle: [
      { 
        kisa: "🎯 Öğle arası hedefi: Bu hafta meslektaşlarınla hakları konuştun mu?",
        uzun: "🎯 Öğle arası hedefi: Bu hafta meslektaşlarımızla haklarımızı konuştuk mu? Farkındalık paylaştıkça çoğalıyor.",
        hashtag: "#ÖğleArasıHedefi" 
      },
      { 
        kisa: "🔥 Perşembe motivasyonu: Sessiz kalmak çözüm değil, birlik olacağız.",
        uzun: "🔥 Perşembe motivasyonu: Sessiz kalmak çözüm değil, birlik olacağız. Her ses önemli, her farkındalık değerli.",
        hashtag: "#PerşembeMotivasyonu" 
      }
    ],
    aksam: [
      { 
        kisa: "📈 Akşam değerlendirmesi: Bu hafta farkındalık ne durumda?",
        uzun: "📈 Akşam değerlendirmesi: Bu hafta farkındalığımız ne durumda? Kendimizi ve çevremizi ne kadar bilinçlendirdik?",
        hashtag: "#AkşamDeğerlendirmesi" 
      },
      { 
        kisa: "🌟 Perşembe akşamı: Yarın cuma, ama mücadele her gün.",
        uzun: "🌟 Perşembe akşamı: Yarın cuma ama mücademiz her gün devam ediyor. Hafta sonu da unutmayacağız.",
        hashtag: "#PerşembeAkşamı" 
      }
    ],
    gece: [
      { 
        kisa: "🌃 Gece planı: Bu hafta sonu mühendis haklarını araştırmaya ne dersin?",
        uzun: "🌃 Gece planı: Bu hafta sonu mühendis haklarını araştırmaya ne dersin? Bilgi güçtür, farkındalık özgürlüktür.",
        hashtag: "#GecePlanı" 
      },
      { 
        kisa: "💫 Perşembe gecesi: Umut her zaman var, birlik olduğumuzda.",
        uzun: "💫 Perşembe gecesi: Umut her zaman var, özellikle birlik olduğumuzda. Yarın yeni bir gün, yeni fırsatlar.",
        hashtag: "#PerşembeGecesi" 
      }
    ]
  },

  cuma: {
    sabah: [
      { 
        kisa: "🎉 Günaydın! Cuma geldi ama haftasonu da mühendis hakları için çalışacağız.",
        uzun: "🎉 Günaydın! Cuma geldi ama unutmayalım, haftasonu da mühendis hakları için çalışmaya devam edeceğiz. Mücadele süreklidir.",
        hashtag: "#CumaSabahı" 
      },
      { 
        kisa: "☕ Cuma sabahı kahvesi: Bu hafta kaç kere hakkını savundun?",
        uzun: "☕ Cuma sabahı kahvesi eşliğinde düşünelim: Bu hafta kaç kere hakkımızı savunduk? Her savunma önemli bir adım.",
        hashtag: "#CumaSabahıKahvesi" 
      }
    ],
    ogle: [
      { 
        kisa: "🍕 Cuma öğle yemeği: Haftasonu planında mühendis dayanışması var mı?",
        uzun: "🍕 Cuma öğle yemeği: Haftasonu planımızda mühendis dayanışması var mı? Dinlenirken de farkında olalım.",
        hashtag: "#CumaÖğleYemeği" 
      },
      { 
        kisa: "⏰ Hafta biterken sorulması gereken: Fazla mesaiyi normal karşılamaktan vazgeçtin mi?",
        uzun: "⏰ Hafta biterken kendimize sormalıyız: Fazla mesaiyi normal karşılamaktan vazgeçtik mi? Bu normalleştirme zihniyetini değiştirmeliyiz.",
        hashtag: "#HaftaBiterken" 
      }
    ],
    aksam: [
      { 
        kisa: "🎊 Cuma akşamı mutluluğu: Ama unutma, pazartesi yine aynı sorunlar var.",
        uzun: "🎊 Cuma akşamı mutluluğu yaşarken unutmayalım: Pazartesi yine aynı sorunlar bizi bekliyor. Çözüm üretmeye devam edelim.",
        hashtag: "#CumaAkşamı" 
      },
      { 
        kisa: "🌅 Hafta sonu başlıyor: İyi dinlen ama hakların için mücadeleyi unutma.",
        uzun: "🌅 Hafta sonu başlıyor: İyi dinlenelim ama haklarımız için mücadeleyi unutmayalım. Dinlenmek de hakkımız.",
        hashtag: "#HaftaSonuBaşlıyor" 
      }
    ],
    gece: [
      { 
        kisa: "🌙 Cuma gecesi: Haftasonu eğlenceli olsun ama bilinçli de ol.",
        uzun: "🌙 Cuma gecesi: Haftasonu eğlenceli olsun ama bilinçli de olalım. Keyif alırken de haklarımızı unutmayalım.",
        hashtag: "#CumaGecesi" 
      },
      { 
        kisa: "🎯 Hafta sonu hedefi: Bir meslektaşına mühendis haklarını anlat.",
        uzun: "🎯 Hafta sonu hedefi: Bir meslektaşımıza mühendis haklarını anlatalım. Farkındalık paylaştıkça büyüyor.",
        hashtag: "#HaftaSonuHedefi" 
      }
    ]
  },

  cumartesi: {
    sabah: [
      { 
        kisa: "🌞 Günaydın! Cumartesi sabahı: Hafta sonu bile mühendis hakları aklından çıkmasın.",
        uzun: "🌞 Günaydın! Cumartesi sabahı: Hafta sonu dinlenirken bile mühendis haklarını aklımızdan çıkarmayalım. Bu bilinç sürekli olmalı.",
        hashtag: "#CumartesiSabahı" 
      },
      { 
        kisa: "☕ Hafta sonu kahvesi: Rahatken bile farkında ol, mücadele devam ediyor.",
        uzun: "☕ Hafta sonu kahvesi: Rahatken bile farkında olalım, mücadele devam ediyor. Dinlenmek de haklarımızdan biri.",
        hashtag: "#HaftaSonuKahvesi" 
      }
    ],
    ogle: [
      { 
        kisa: "🏡 Cumartesi öğle saati: Ailene mühendislerin durumunu anlattın mı?",
        uzun: "🏡 Cumartesi öğle saati: Ailemize mühendislerin durumunu anlattık mı? Yakınlarımızın desteği çok önemli.",
        hashtag: "#CumartesiÖğle" 
      },
      { 
        kisa: "📚 Hafta sonu okuma önerisi: Mühendis hakları üzerine araştırma yap.",
        uzun: "📚 Hafta sonu okuma önerisi: Mühendis hakları üzerine araştırma yapalım. Bilgi edinmek gücümüzü artırıyor.",
        hashtag: "#HaftaSonuOkuma" 
      }
    ],
    aksam: [
      { 
        kisa: "🎭 Cumartesi akşamı: Eğlenirken bile unutma, değişim bizim elimizde.",
        uzun: "🎭 Cumartesi akşamı: Eğlenirken bile unutmayalım, değişim bizim elimizde. Keyifli anlar yaşarken de bilinçli olalım.",
        hashtag: "#CumartesiAkşamı" 
      },
      { 
        kisa: "🍽️ Hafta sonu yemeği: Sofrada mühendis hakları konuşmaya ne dersin?",
        uzun: "🍽️ Hafta sonu yemeği: Sofrada mühendis haklarını konuşmaya ne dersin? Aile içi farkındalık da çok değerli.",
        hashtag: "#HaftaSonuYemeği" 
      }
    ],
    gece: [
      { 
        kisa: "⭐ Cumartesi gecesi: Yarın pazar, ama pazartesi yine iş başı.",
        uzun: "⭐ Cumartesi gecesi: Yarın pazar, ama pazartesi yine iş başı. Bu döngüde haklarımızı unutmamaya devam edelim.",
        hashtag: "#CumartesiGecesi" 
      },
      { 
        kisa: "🌟 Hafta sonu keyfi: İyi dinlen, pazartesi enerjik başla hakların için.",
        uzun: "🌟 Hafta sonu keyfi: İyi dinlenelim, pazartesi enerjik başlayalım haklarımız için. Dinlenmek de mücadelenin parçası.",
        hashtag: "#HaftaSonuKeyfi" 
      }
    ]
  },

  pazar: {
    sabah: [
      { 
        kisa: "🙏 Günaydın! Pazar sabahı huzuru: Yarın yeni hafta, yeni mücadele.",
        uzun: "🙏 Günaydın! Pazar sabahı huzuru: Yarın yeni hafta, yeni mücadele başlıyor. Bu huzurlu anları değerlendirelim.",
        hashtag: "#PazarSabahı" 
      },
      { 
        kisa: "🌅 Pazar sabahı motivasyonu: Dinlenirken yarın için plan yap.",
        uzun: "🌅 Pazar sabahı motivasyonu: Dinlenirken yarın için plan yapalım. Hem fiziksel hem mental hazırlık önemli.",
        hashtag: "#PazarSabahıMotivasyonu" 
      }
    ],
    ogle: [
      { 
        kisa: "🏠 Pazar öğle saati: Ailenle geçirdiğin bu zamanı hak ediyorsun.",
        uzun: "🏠 Pazar öğle saati: Ailemizle geçirdiğimiz bu zamanı hak ediyoruz. Kaliteli zaman geçirmek temel hakkımız.",
        hashtag: "#PazarÖğle" 
      },
      { 
        kisa: "⏰ Hafta sonu son günü: Yarın iş başı, hazır mısın?",
        uzun: "⏰ Hafta sonu son günü: Yarın iş başı, hazır mıyız? Mental ve fiziksel olarak kendimizi hazırlayalım.",
        hashtag: "#HaftaSonuSonGünü" 
      }
    ],
    aksam: [
      { 
        kisa: "📝 Pazar akşamı: Yarın meslektaşlarınla mühendis hakları konuşmayı planlıyor musun?",
        uzun: "📝 Pazar akşamı: Yarın meslektaşlarımızla mühendis haklarını konuşmayı planlıyor muyuz? Bu konuşmalar çok değerli.",
        hashtag: "#PazarAkşamı" 
      },
      { 
        kisa: "🎯 Hafta sonu bitiyor: Pazartesi daha bilinçli başlayacaksın.",
        uzun: "🎯 Hafta sonu bitiyor: Pazartesi daha bilinçli başlayacağız. Her yeni hafta, yeni fırsatlar getiriyor.",
        hashtag: "#HaftaSonuBitiyor" 
      }
    ],
    gece: [
      { 
        kisa: "🌙 Pazar gecesi: İyi uyu, yarın mücadeleye devam.",
        uzun: "🌙 Pazar gecesi: İyi uyuyalım, yarın mücadeleye devam edeceğiz. Dinlenmek, daha güçlü olmak için gerekli.",
        hashtag: "#PazarGecesi" 
      },
      { 
        kisa: "💤 Hafta sonu son saatleri: Yarın yeni başlangıçlar için hazır ol.",
        uzun: "💤 Hafta sonu son saatleri: Yarın yeni başlangıçlar için hazır olalım. Her yeni hafta bir umut, bir fırsat.",
        hashtag: "#HaftaSonuSonSaatleri" 
      }
    ]
  }
};

// Platform konfigürasyonları
const platformKonfigurasyon = {
  twitter: {
    mesajTuru: 'kisa',
    karakterLimiti: 280,
    formatSablonu: '{mesaj}\n\n{sabitHashtag} {hashtag}'
  },
  linkedin: {
    mesajTuru: 'uzun',
    karakterLimiti: 3000,
    formatSablonu: '{mesaj}\n\n🔗 muhendisdayanismasi.github.io\n\n{sabitHashtag} {hashtag}'
  },
  whatsapp: {
    mesajTuru: 'uzun',
    karakterLimiti: 4096,
    formatSablonu: '{mesaj}\n\n👆 muhendisdayanismasi.github.io'
  },
  instagram: {
    mesajTuru: 'orta',
    karakterLimiti: 2200,
    formatSablonu: '{mesaj}\n\n{sabitHashtag} {hashtag}\n\n#mühendis #haklar #adalet'
  }
};

// Sabit hashtag
const sabitHashtag = "#MühendisDayanışması";

// Export - tarayıcı uyumluluğu için
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mesajHavuzu, platformKonfigurasyon, sabitHashtag };
}
