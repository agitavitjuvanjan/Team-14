:: Below is an example of extending a deploy.cmd file (see kudu custom deployment scripts) to clear an Azure CDN endpoint
:: using the Azure Resource Manager (ARM) API with help of cURL.exe and jq.exe utils.

:: 4. Purge CDN cache of all caches files
:: Requires an application to be setup in the Azure Active Directory on the same tenant, 
:: with a client id and key/secret, and permissions to the Azure CDN Endpoint (CDN Endpoint Contributor)

SET CLIENT_ID="jan.juvan@agito.si"
SET CLIENT_SECRET="Bender.17"

IF NOT DEFINED CLIENT_ID ( 
  echo 4. Skipping Azure CDN cache purge. App Setting "CLIENT_ID" was not found. Potentially this is a local test deployment run.
  goto end 
)
IF NOT DEFINED CLIENT_SECRET ( 
  echo 4. Skipping Azure CDN cache purge. App Setting "CLIENT_SECRET" was not found. Potentially this is a local test deployment run.
  goto end 
)

echo 4. Purging CDN of all cached files

:: You need to have extracted cURL files into the below location
SET CURL_CMD="%DEPLOYMENT_SOURCE%\build\curl-7.55.1-win64-mingw\bin\curl.exe"

:: You need to have jq file in the below location
SET JQ_CMD="%DEPLOYMENT_SOURCE%\build\jq\jq-win64.exe" -r

SET ACCESS_TOKEN_TMP_FILE=access_token.tmp

SET TENANT_ID=af16f59b-6e8d-40dc-86f5-61faff4b099a

:: Request access token, then grab it out of the response JSON with jq.exe and store it in a tmp file
%CURL_CMD% -X POST ^
  -F "grant_type=client_credentials" ^
  -F "client_id=%CLIENT_ID%" ^
  -F "client_secret=%CLIENT_SECRET%" ^
  -F "resource=https://management.core.windows.net/" ^
  https://login.windows.net/%TENANT_ID%/oauth2/token | %JQ_CMD% .access_token > %ACCESS_TOKEN_TMP_FILE%

:: Set access token in a variable
for /f "tokens=*" %%a in (%ACCESS_TOKEN_TMP_FILE%) do (
  SET ACCESS_TOKEN=%%a
)
call del %ACCESS_TOKEN_TMP_FILE%

SET SUBSCRIPTION_ID=f69598c2-84f3-42c9-a29c-d8d87a1e1b96
SET RESOURCE_GROUP=Team-14CDNRG
SET CDN_PROFILE=Team-14CDN
SET CDN_ENDPOINT=Modern-AppEP

call :ExecuteCmd %CURL_CMD% -X POST ^
  -H "Authorization: Bearer %ACCESS_TOKEN%" ^
  -H "Content-Type: application/json" ^
  -H "Accept: application/json" ^
  -d "{ \"contentPaths\": [ \"/*\" ] }" ^
  https://management.azure.com/subscriptions/%SUBSCRIPTION_ID%/resourceGroups/%RESOURCE_GROUP%/providers/Microsoft.Cdn/profiles/%CDN_PROFILE%/endpoints/%CDN_ENDPOINT%/purge?api-version=2016-10-02
IF !ERRORLEVEL! NEQ 0 goto error