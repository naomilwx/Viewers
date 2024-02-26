#!/bin/sh

sed -i "s|DICOM_SERVER_URL|'${DICOM_SERVER_URL}'|g" /app/dist/app-config.js
sed -i "s|OHIF_OIDC_AUTHORITY|'${OHIF_OIDC_AUTHORITY}'|g" /app/dist/app-config.js
sed -i "s|OHIF_OAUTH_CLIENT_ID|'${OHIF_OAUTH_CLIENT_ID}'|g" /app/dist/app-config.js
sed -i "s|OHIF_REDIRECT_URL|'${OHIF_REDIRECT_URL}'|g" /app/dist/app-config.js
sed -i "s|APP_ROUTER_BASENAME|'\/${APP_BASENAME}'|g" /app/dist/app-config.js

sed -i "s|app-placeholder|${APP_BASENAME}|g" /app/dist/index.html

exec "$@"
