npm run build
rsync -rlzv --progress --exclude=.git --exclude=.vscode /Users/bsettle/Desktop/metrics/metric-app/build/ bsettle@secret.ndexbio.org:/home/bsettle
