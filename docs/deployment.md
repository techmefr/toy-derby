# Deployment

In repository Settings > Pages, choose Deploy from a branch, main, / (root), then Save. The expected site URL is https://techmefr.github.io/toy-derby/. No build step is needed.

Optional analytics: create a private Drive file containing []; copy its ID. Create an Apps Script project using analytics/Code.gs, set script property RESULTS_FILE_ID, deploy as a web app executing as the owner with anonymous access if allowed, and copy its deployment URL into config.js. Keep the file private. The public endpoint is susceptible to spam; use only for limited playtests. Export remains available without it.

The experimental implementation uses two racers per color, elimination after two trap hits (maximum two eliminations), random collection purchases and a one-time shop refill. These are provisional rules. The final bonus category and automatic retry queue are not implemented. Browser playtests remain required.