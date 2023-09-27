export const environment = {
  production: true,
  auth_config: {
    client_id: 'mobile_web',
    server_host: 'http://10.0.2.2:44330',
    redirect_url: 'app-dci://oidc-callback',
    end_session_redirect_url: 'app-dci://oidc-callback',
    scopes: 'openid offline_access',
    pkce: true
  }
};
