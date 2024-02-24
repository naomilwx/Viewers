import { UserManager } from 'oidc-client-ts';

/**
 * Creates a userManager from oidcSettings
 * LINK: https://github.com/IdentityModel/oidc-client-js/wiki#configuration
 *
 * @param {Object} oidcSettings
 * @param {string} oidcSettings.authority,
 * @param {string} oidcSettings.client_id,
 * @param {string} oidcSettings.redirect_uri,
 * @param {string} oidcSettings.post_logout_redirect_uri,
 * @param {string} oidcSettings.responseType,
 * @param {Record<string, string | number | boolean>} oidcSettings.extraQueryParams,
 */
export default function getUserManagerForOpenIdConnectClient(oidcSettings) {
  if (!oidcSettings) {
    return;
  }

  const settings = {
    ...oidcSettings,
    automaticSilentRenew: true,
    revokeTokensOnSignout: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
  };
  // TODO: check if token refresh is an issue: https://github.com/OHIF/Viewers/issues/2896
  const userManager = new UserManager(settings);

  return userManager;
}
