# Mobile acceptance checklist

- [ ] Open on iOS Safari and Android Chrome in portrait: only the rotation prompt is visible.
- [ ] Rotate to landscape: setup appears.
- [ ] Start a race, roll the die, rotate to portrait, then back: same race and turn remain.
- [ ] Verify private predictions are hidden while in portrait.
- [ ] Check 667×375 and 844×390 landscape viewports: track, roll button and standings are visible; log scrolls independently.
- [ ] Check safe-area insets on notched phones.
- [ ] Complete a championship with touch controls.
- [ ] Verify desktop and keyboard operation.

Orientation is enforced by CSS for coarse-pointer devices, not by an OS orientation lock. No fullscreen permission is required. Rotation preserves in-memory state; refreshing the page does not restore an unfinished session.
