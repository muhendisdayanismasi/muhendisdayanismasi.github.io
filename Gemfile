source "https://rubygems.org"

# GitHub Pages gem - tüm bağımlılıkları içerir
gem "github-pages", "~> 228", group: :jekyll_plugins

# Cayman tema - GitHub Pages native support
# Cayman GitHub Pages'da otomatik destekleniyor, gem gerekmiyor

# Faraday retry gem - GitHub Actions hatası için
gem "faraday-retry"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-remote-theme"
end

# Windows compatibility
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.0" if Gem.win_platform?
