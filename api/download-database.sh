curl -L -o f1db-json-single.zip "$(curl -sL https://api.github.com/repos/f1db/f1db/releases/latest | jq -r '.assets[] | select(.name == "f1db-json-single.zip") | .browser_download_url')"

unzip f1db-json-single.zip -d db

rm f1db-json-single.zip