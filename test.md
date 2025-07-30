---
layout: default
title: "Test - Site Güncellenme Durumu"
nav_title: "Test"
---

# 🔧 Site Test Sayfası

Bu sayfa sitenin güncel olup olmadığını test etmek için oluşturuldu.

## ⏰ Anlık Bilgiler
- **Şu anki zaman**: {{ "now" | date: "%Y-%m-%d %H:%M:%S" }}
- **Son build**: {{ site.time | date: "%Y-%m-%d %H:%M:%S" }}
- **Git revision**: {{ site.github.build_revision | slice: 0, 7 }}
- **Cache buster**: {{ "now" | date: "%s" }}

## 🎯 Test Checklist
- [ ] Favicon görünüyor mu? (tarayıcı tab'ına bakın)
- [ ] Paylaşım butonları çalışıyor mu?
- [ ] Bu sayfa güncel zaman gösteriyor mu?
- [ ] Ana sayfa güncel mesajları üretiyor mu?

## 📊 Status JSON
Test için: [/api/status.json](/api/status.json)

---

### 🔄 Cache Bypass Yöntemleri:
1. **Hard Refresh**: `Ctrl + F5` (Windows) / `Cmd + Shift + R` (Mac)
2. **Dev Tools**: F12 → Network → "Disable cache" ✅
3. **Incognito/Private**: Temiz cache ile test
4. **URL Parameter**: `?v={{ "now" | date: "%s" }}`

<div style="background: #f0f8f0; padding: 1rem; border-left: 4px solid #1a472a; margin: 1rem 0;">
<strong>💡 İpucu:</strong> Eğer bu sayfa eski zaman gösteriyorsa, site henüz güncellenmedi.
</div>

<script>
// Otomatik yenileme (her 30 saniyede bir)
setTimeout(() => {
  console.log('🔄 Sayfa otomatik yenileniyor...');
  location.reload();
}, 30000);

// Test fonksiyonları
function testPaylasimSistemi() {
  if (typeof paylasimSistemi !== 'undefined') {
    console.log('✅ Paylaşım sistemi yüklü');
    return true;
  } else {
    console.log('❌ Paylaşım sistemi yüklü değil');
    return false;
  }
}

function testFavicon() {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    console.log('✅ Favicon bulundu:', favicon.href);
    return true;
  } else {
    console.log('❌ Favicon bulunamadı');
    return false;
  }
}

// Sayfa yüklendiğinde testleri çalıştır
document.addEventListener('DOMContentLoaded', function() {
  console.log('🧪 Site testleri çalışıyor...');
  console.log('Paylaşım sistemi:', testPaylasimSistemi() ? '✅' : '❌');
  console.log('Favicon:', testFavicon() ? '✅' : '❌');
  console.log('Sayfa yüklenme zamanı:', new Date().toLocaleString());
});
</script>
