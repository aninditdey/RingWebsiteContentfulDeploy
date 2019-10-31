export SPACE_ID=my-space-id
contentful space use --space-id $SPACE_ID
contentful space migration --environment-id 'staging' ../migrations/contentful-migration.js
contentful space migration --environment-id 'staging' ../migrations/content-migration-all.js
