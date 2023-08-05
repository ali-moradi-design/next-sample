const Config = {
  AUTH_KEY: 'at_cp_au',
  OIDC_STATE: 'at_o_s',
  OIDC_SCOPE: process.env.NEXT_PUBLIC_OIDC_SCOPE,
};

const oauthConfig = {
  base_url: process.env.NEXT_PUBLIC_OIDC_AUTHORITY,
  queryParams: {
    response_type: 'id_token+token',
    scope: process.env.NEXT_PUBLIC_OIDC_SCOPE,
    client_id: process.env.NEXT_PUBLIC_OIDC_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_OIDC_REDIRECT_URL,
  },
};

export const makeURLQueryParams = (q: object) => {
  let res = '&';
  if (Object.entries(q).length === 0 && q.constructor === Object) return '';
  Object.entries(q).forEach(([key, value]) => (res += `${key}=${value}&`));
  res = res.substring(0, res.length - 1);
  var state =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  res += '&state=' + state;
  //   localStorage.setItem(Config.OIDC_STATE, state);
  return res;
};

export const makeOauthURL = () => {
  return `${oauthConfig.base_url}?${makeURLQueryParams(
    oauthConfig.queryParams
  )}`;
};
