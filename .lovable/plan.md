## Replace hero YouTube embed with hosted MP4

Update `src/components/home/HeroSection.tsx` to swap the `<iframe>` YouTube embed for a native HTML5 `<video>` element pointing at the Supabase-hosted MP4.

### Changes
- Remove the `<iframe>` block.
- Add a `<video>` with `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`, and `poster` (optional, none for now) sourced from the Supabase signed URL.
- Use `object-cover w-full h-full absolute inset-0` so it fills the hero behind the dark overlay (overlay stays at `bg-black/40`).
- Keep all headline/sub-headline copy and the GET IN TOUCH button unchanged.

### Technical
File: `src/components/home/HeroSection.tsx`
```tsx
<video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay muted loop playsInline preload="auto"
  src="https://yuthbrxadentorgrsyar.supabase.co/storage/v1/object/sign/Tully%20Heard%20Consulting/Tully%20Heard%20Website%20Cut%20-%20Supabase.mp4?token=..."
/>
```
Overlay `<div className="absolute inset-0 bg-black/40 z-10" />` retained above the video for text contrast.
