# MLH Localhost HackerLog

This app demonstrates setting up a simple NodeJS application to be deployed on Azure. If users have the password, they can post log messages with a chosen name. Posts are sorted in reverse chronological order and paginated.

## Configuration
Aspects of the app are controlled by the following environment variable. Feel free to modify them once deployed or before running locally.

| Name  | Description  | Default  |
|---|---|---|
|  PORT | The port to run the webserver on | 3000  |
|  PAGE_SIZE |  How many log items to display on each page in the application |  10 |
| HACKERLOG_PASSWORD | The password to post a log message | P@ssw0rd! |


## Running locally
To run the app locally, simply run:
`yarn` to install the dependencies of the app and then `npm start` or `yarn start`

Note: You will need a working instance of MongoDB. You can install mongoDB community edition locally by following the tutorial for your platform at [this](https://docs.mongodb.com/manual/installation/#tutorials) link.

## Deploying to Azure
Begin by forking this repository into your own GitHub account.

### Deploying application
1. On the left hand toolbar, click "Create a resource"
2. Search for "Web App" and hit enter. Note: Do not select the ones that come with a database like PostgreSQL.
3. Type in a name for the application, choose a subscription, select Linux as the OS, choose "Code" as the publish method, choose a service plan, and select Node 10.1 as the Runtime stack (or any Node 10.x variant available). You can disable Application Insights for the purpose of the demo application.
4. Click create, and wait for your application to get deployed.
5. Go to the application you just created, and click deployment options. Choose GitHub as the source (set up your account as needed), and choose "Personal" as the organization, choose "mlh-localhost-hacker-log" as the project, and choose "master" as the branch. Click OK.
6. Go to overview and restart the application. After you restart the application, you can visit it by clicking the link under "URL". 

## Next steps
- Add a socket library like Socket.io to update the log instead of needing to refresh to get new log messages.
- Implement an authentication using a provider like auth0 or use a authentication middleware like passport.js.
- Implement the [Azure Content Moderator](https://azure.microsoft.com/en-ca/services/cognitive-services/content-moderator/).

