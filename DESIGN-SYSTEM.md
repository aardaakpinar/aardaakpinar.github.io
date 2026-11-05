# Tasarım Sistemi

Site tek bir token + primitive katmanı üzerinden çalışır. Yeni bir bölüm veya buton eklerken
özel CSS yazmak yerine önce buradaki hazır parçaları kullan.

## Katmanlar

| Katman | Dosya | Görev |
| --- | --- | --- |
| Token | `src/styles/tokens.css` | Renk, tipografi, boşluk, yarıçap, hareket |
| Primitive | `src/styles/section.css`, `button.css`, `chip.css`, `heading.css`, `link.css` | Global class'lar |
| Bileşen | `src/components/Section.astro`, `SectionHeading.astro`, `Button.astro`, `Chip.astro`, `Heading.astro` | Tekrar kullanılan Astro parçaları |
| Özellik | `about.css`, `projects.css`, `blog-*.css` vb. | Sadece o bölüme özel düzen |

Primitive dosyaları `global.css` içinden yüklenir. Bu yüzden class'lar her sayfada hazırdır;
bileşen import etmeden de kullanılabilir.

## Bölüm (Section)

Her sayfa bölümü aynı dikey ritmi kullanır:

```astro
---
import Section from "@/components/Section.astro";
---

<Section id="about" heading={copy.about.heading}>
  <!-- bölüm içeriği -->
</Section>
```

Başlığın yanına aksiyon eklemek için `action` slot'u:

```astro
<Section id="contact" heading={copy.contact.heading}>
  <Button slot="action" href={`mailto:${site.email}`}>Email me</Button>
</Section>
```

Kendi yüksekliğini yöneten bölümler (ör. sticky projeler rayı) için:

```astro
<Section id="work" padding="flush" labelledby="work-title" class="work-section">
  <SectionHeading id="work-title" heading={copy.projects.heading} />
</Section>
```

`padding` seçenekleri: `default`, `page` (blog sayfaları), `flush` (sıfır padding).

## Başlık

İki parçalı başlıklar `Heading` ile yazılır; ikinci parça otomatik olarak vurgu rengine döner:

```astro
<Heading as="h3" lead="Things I Work" accent="With." br={false} />
```

Bölüm başlığı gerekiyorsa `SectionHeading` kullan:

```astro
<SectionHeading id="work-title" heading={copy.projects.heading} />
```

## Buton

Varsayılan buton tema çizgisindedir. `href` verilirse `<a>`, verilmezse `<button>` üretir:

```astro
<Button href="/blog/">Blog</Button>
<Button variant="solid">Kaydet</Button>
<Button variant="ghost">Vazgeç</Button>
<Button variant="icon" aria-label="Geri">←</Button>
<Button variant="icon" size="lg" aria-label="Yukarı çık">↑</Button>
```

- `variant`: `outline` (varsayılan), `solid`, `ghost`, `icon`
- `size`: `sm`, `md` (varsayılan), `lg`
- Mobilde `icon` dışındaki tüm butonlar kapsayıcısının tam genişliğine yayılır.

Bileşen kullanmadan sadece class ile de aynı tema elde edilir:

```html
<a class="button" href="/blog/">Blog</a>
<a class="button button--solid" href="/">Ana sayfa</a>
<button class="button button--ghost">Vazgeç</button>
```

## Chip ve link

Etiketler, filtreler ve proje bağlantıları:

```astro
<Chip href={source} target="_blank" rel="noopener noreferrer">Source</Chip>
<Chip href="/blog/" active>All</Chip>
```

Metin bağlantıları:

```html
<a class="link" href="#about">About</a>
```

## Tema değiştirmek

Renkleri veya tipografiyi değiştirmek için bileşenlere dokunma; `tokens.css` içindeki
değerleri güncelle. Örneğin vurgu rengi:

```css
:root {
  --color-accent: #ff7a45;
}
```

Buton, chip, link, başlık ve bölümler bu token'ı otomatik takip eder.

## Yeni sayfa bölümü eklerken

1. Metni `src/content/copy.json` içine ekle.
2. Bölümü `Section` ile sar.
3. Buton gerekiyorsa `Button`, etiket gerekiyorsa `Chip` kullan.
4. Sadece o bölüme özel grid/ölçü varsa ayrı bir CSS dosyası aç.

Böylece yeni bölümler de aynı boşluk, başlık, buton ve renk dilini otomatik alır.
