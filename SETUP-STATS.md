# Live follower counts

`gawvestor.com/api/stats` (in `functions/api/stats.js`) feeds the follower numbers on the homepage and media kit. It refreshes every 6 hours. Every number on the site is rounded **down** (24,960 shows as "24K+"), so it can never overstate.

Each platform turns on when its secrets are added in **Cloudflare dashboard → Workers & Pages → gawvestor-site → Settings → Variables and Secrets** (add as *Secret*, Production), then redeploy.

| Platform | Status without setup | Secrets to add |
|---|---|---|
| YouTube | Live (reads public channel page) | Optional: `YT_API_KEY` for a sturdier source |
| TikTok | Uses last known number | `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET`, `TIKTOK_REFRESH_TOKEN` |
| Instagram | Uses last known number | `IG_ACCESS_TOKEN` |

## TikTok (Display API)
1. developers.tiktok.com → Manage apps → create an app, add **Login Kit**, request scopes `user.info.basic` and `user.info.stats`.
2. Authorize the app with the @gawvestor account once to get a refresh token.
3. Paste client key, client secret and refresh token as the three secrets.

## Instagram (Instagram API with Instagram Login)
1. Instagram must be a Professional (Creator or Business) account.
2. developers.facebook.com → create an app with the Instagram product, generate a long-lived token for @gawvestor.
3. Paste it as `IG_ACCESS_TOKEN`. Long-lived tokens last 60 days.

## Optional: KV so tokens never expire
Create a KV namespace and bind it to the project as `STATS_KV`. The function then stores rotated TikTok refresh tokens and refreshes the Instagram token weekly on its own. Without it, re-paste the Instagram token every ~60 days.

## Check it
Open `https://gawvestor.com/api/stats`. `live` lists which platforms came back live; `notes` says why any didn't.
