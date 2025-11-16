export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO ||
  "/logo.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

export const GITBOOK_URL = "https://docs.noderr.xyz";
export const DAPP_URL = "https://app.noderr.xyz";
export const FAUCET_URL = "https://faucet.noderr.xyz";
export const TYPEFORM_URL = "https://form.typeform.com/to/01KA5J8C7F4Q5MWWH1928GJB3R";
export const NODE_DOWNLOAD_URL = "https://app.noderr.xyz/nodes";
export const VALIDATOR_APPLICATION_URL = "https://app.noderr.xyz/stake";
export const GUARDIAN_APPLICATION_URL = "https://app.noderr.xyz/governance";
export const ORACLE_APPLICATION_URL = "https://app.noderr.xyz/governance";
