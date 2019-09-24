Install dependencies
`npm install`

Deploy prisma
`cd lambda && prisma deploy`

Scroll down and select deploy to prisma could demo server. `lambda/prisma.yml` should now have and endpoint and `lambda/generated` directory should be created

Change back to project root
`cd ..`

Build site and run functions locally
`netlify dev`

View site on [http://localhost:8888](http://localhost:8888)

View graphql playground on [http://localhost:8888/.netlify/functions/graphql](http://localhost:8888/.netlify/functions/graphql)
