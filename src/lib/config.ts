/**
 * Central configuration service to handle environment variables.
 * This ensures that hardcoded "hardcore" variables are moved to .env.
 */

export const config = {
  social: {
    twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/SuperteamAU',
    discord: import.meta.env.VITE_DISCORD_URL || 'https://discord.gg/superteam',
    luma: import.meta.env.VITE_LUMA_URL || 'https://lu.ma/superteam-au',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'au@superteam.fun',
  },
  ecosystem: {
    bounties: import.meta.env.VITE_BOUNTIES_URL || 'https://earn.superteam.fun',
    grants: import.meta.env.VITE_GRANTS_URL || 'https://superteam.fun/grants',
  },
  app: {
    url: import.meta.env.APP_URL || 'http://localhost:3000',
  }
};
