# Feature Specification: Baseline V0

## User stories
- As a player, I can select 2–4 participants and one or three races.
- As a player, I can secretly rank four toys before each race.
- As a player, I can spend stars on one purchase card per race.
- As a tester, I can compare scoring-only and trap-enabled games.
- As a tester, I can rate the experience and export anonymous JSON.

## Rules
Each participant starts with three stars. Each exact finishing position earns one star; a perfect order earns three additional stars. Stars spent on purchases are deducted. Highest cumulative stars wins. Ties are shared for V0. These numerical values are provisional.

One common six-sided die advances unfinished racers each turn. Draw one event after movement. Resolve powers and crossing traps deterministically; finish order is recorded as racers cross space 24. Rotate movement priority each turn to limit first-player bias.

Four toy archetypes: spring rabbit jumps occupied spaces, tin robot blocks overtaking, wind-up snail gains comeback movement, trickster ninja swaps with a nearby rival. Exact power limits are balance hypotheses.

Twelve distinct events and twelve distinct purchases (six scoring modifiers and six traps). Trap cards may trigger on first crossing or reveal on first and trigger on second. No elimination in baseline. Predictions are private until the race ends.

## Acceptance
A complete championship is playable without a network. All twelve events and purchases are represented in the rules. Results explain scoring. Mobile and desktop layouts remain usable. Feedback distinguishes modes.


## Mobile orientation
On touch devices, gameplay is landscape-only. Portrait displays a rotate-device screen and hides all game controls. Rotating back restores the current screen without resetting the session. Desktop remains usable in a narrow window. Landscape race view places the track beside the controls and standings; setup and prediction screens may scroll vertically.

## Automatic mobile races
Touch-device sessions use an automatic spectator mode. Once all private predictions and purchases are locked, start after a short delay. Racers move independently by a randomized 1–4 spaces per update, then resolve abilities, events and traps. No die is shown or used in this mode. Update approximately every 1.1 seconds. Pause while portrait or while the document is hidden; resume without advancing missed updates. Finish automatically and display results. Desktop retains the common die for tabletop testing. Record race mode in telemetry; compare balance separately because movement rules differ. Timing and movement range are provisional playtest settings.
