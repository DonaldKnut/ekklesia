# Flow image prompts for Ekklesia

Save files into `ekklesia-web/public/images/` (and `carousel/`) using the **exact filenames** below. Then update the `src` paths in `src/lib/content.ts` (carousel) and `src/components/hero.tsx` (hero) from `.svg` to `.jpg` (or `.webp`).

**Shared style for every prompt (append to each):**  
Photorealistic, cinematic, soft natural light, cool stone and teal color mood, premium editorial photography, no text overlays, no logos, no watermarks, no UI mockups, shallow depth of field where natural, 16:9 composition, respectful and warm church atmosphere (not dark gothic, not purple neon).

---

## 1. Hero — `hero-sanctuary.jpg`

```
Wide interior of a modern church sanctuary at golden morning light, empty wooden pews in soft focus, tall windows casting gentle beams across a stone aisle, calm and hopeful atmosphere, premium architectural photography, cool teal-gray tones with warm highlights, no people in the foreground, no text, 16:9
```

## 2. Carousel 01 — `carousel/01-welcome.jpg`

```
Diverse guests being warmly welcomed at a church entrance on a bright Sunday morning, greeters smiling at the door, soft daylight, contemporary African or global city church exterior mixed with welcoming porch, candid documentary style, hopeful and inclusive mood, no text, 16:9
```

## 3. Carousel 02 — `carousel/02-people.jpg`

```
Small group of church members of different ages talking joyfully after service in a bright fellowship hall, coffee cups on a side table, natural window light, genuine community connection, editorial lifestyle photography, soft teal and stone palette, no text, 16:9
```

## 4. Carousel 03 — `carousel/03-events.jpg`

```
Church event in a warm modern hall, rows of seats facing a simple stage with subtle lighting, musicians preparing quietly, sense of orderly gathering about to begin, cinematic wide shot, calm professional atmosphere, no screens with readable text, no logos, 16:9
```

## 5. Carousel 04 — `carousel/04-giving.jpg`

```
Quiet respectful scene of generosity: open offering basket and hands placing a gift on a wooden table near soft window light, tasteful and dignified, no cash brands visible, warm bronze and teal accents, shallow depth of field, premium still life meets documentary, no text, 16:9
```

## 6. Carousel 05 — `carousel/05-prayer.jpg`

```
Two people praying together with bowed heads in soft sanctuary light, gentle and intimate, respectful distance, serene mood, cool stone surroundings with a touch of morning teal light, photorealistic, emotional but calm, no text, 16:9
```

## 7. Carousel 06 — `carousel/06-leaders.jpg`

```
Pastor and church leaders reviewing notes together at a simple wooden table in a bright meeting room, open laptop closed enough to hide any UI, collaborative leadership, natural light, trustworthy professional tone, diverse team, no readable documents, no logos, 16:9
```

---

## Optional extras (nice to have later)

### Features page band — `features-band.jpg`
```
Abstract architectural detail of church arches and soft light shafts, minimal and premium, cool stone textures, teal ambient light, empty and peaceful, no people, no text, ultra-wide 21:9 feel cropped to 16:9
```

### Contact page mood — `contact-calm.jpg`
```
Quiet corner of a modern church lobby with a simple chair, plant, and morning light through frosted glass, inviting and calm, premium interior photo, teal-stone palette, no text, 16:9
```

---

## After you generate

1. Export **JPG or WebP**, 1920×1080 or larger.
2. Drop files into `public/images/` and `public/images/carousel/`.
3. In `src/lib/content.ts`, change each carousel `src` from `.svg` to `.jpg`.
4. In `src/components/hero.tsx`, change hero `src` to `/images/hero-sanctuary.jpg`.
