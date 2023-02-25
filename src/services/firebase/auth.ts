import { open } from '@tauri-apps/api/shell';
import { getAuth, GoogleAuthProvider, getRedirectResult, signInWithRedirect, signInWithCredential } from 'firebase/auth';

const openBrowserToConsent = (port: string) => {
  // Replace CLIEN_ID_FROM_FIREBASE
  // Must allow localhost as redirect_uri for CLIENT_ID on GCP: https://console.cloud.google.com/apis/credentials
  return open('https://accounts.google.com/o/oauth2/auth?' +
    'response_type=token&' +
    'client_id=<CLIEN_ID_FROM_FIREBASE>&' +
    `redirect_uri=http%3A//localhost:${port}&` +
    'scope=email%20profile%20openid&' +
    'prompt=consent'
  );
};

export const openGoogleSignIn = (port: string) => {
  return new Promise((resolve, reject) => {
    openBrowserToConsent(port).then(resolve).catch(reject);
  });
};

export const googleSignIn = (payload: string) => {
  const url = new URL(payload);
  // Get `access_token` from redirect_uri param
  const access_token = new URLSearchParams(url.hash.substring(1)).get('access_token');

  if (!access_token) return;

  const auth = getAuth();

  const credential = GoogleAuthProvider.credential(null, access_token);

  signInWithCredential(auth, credential)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

export const signOut = () => {
  const auth = getAuth();
  return auth.signOut();
}
