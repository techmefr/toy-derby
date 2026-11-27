# Mobile acceptance checklist

- [ ] Open on iOS Safari and Android Chrome in portrait: only the rotation prompt is visible.
- [ ] Rotate to landscape: setup appears.
- [ ] Start a race, wait for an automatic update, rotate to portrait, then back: same race resumes without missed updates.
- [ ] Verify private predictions are hidden while in portrait.
- [ ] Check 667×375 and 844×390 landscape viewports: track, live race indicator and standings are visible; log scrolls independently.
- [ ] Check safe-area insets on notched phones.
- [ ] Complete a championship with touch controls.
- [ ] Verify desktop and keyboard operation.

Orientation is enforced by CSS for coarse-pointer devices, not by an OS orientation lock. No fullscreen permission is required. Rotation preserves in-memory state; refreshing the page does not restore an unfinished session.

- [ ] Lock the final prediction: race starts without tapping a control.
- [ ] Confirm no die or roll button appears on touch devices.
- [ ] Background the browser and verify progress pauses until return.
- [ ] Verify the race stops on results and no timer leaks into the next prediction screen.
- [ ] Verify desktop manual mode remains playable.
