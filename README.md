# riiid - restful-api - Node.js/Express.js backend

## Dependencies:
* express.js: server framework to build out our api
* mongoose: handles our schema and models, as well as queries to DB
* jsonwebtoken: allows us to sign and verify our Authorization tokens
* bcryptjs: encrypts/hashes our passwords so we can safely store in DB
* express-async-handler: passes exceptions to our custom error handlers
* colors: emphasizes console logs
* dotenv: configures out environment variables
</hr>

## API Endpoints - 

### users
| HTTP method   | path      	     | description              |  access  |
|---------------|------------------|--------------------------|----------|
| POST          | /api/users 	     | creates user/attendee    | public   |
| POST          | /api/users/login | authorizes/authenticates | public   |

* POST /api/users - creates user/attendee
* POST /api/users/login - authenticates user against database and authorizes user
  
### talks

| HTTP method   | path      	                       | description                |  access  |
|---------------|------------------------------------|----------------------------|----------|
| POST          | /api/talks 	                       | creates talk               | private  |
| PUT           | /api/talks/:talkId/add_attendee    | adds attendee to talk      | private  |
| PUT           | /api/talks/:talkId/remove_attendee | removes attendee from talk | private  |

* POST /api/talks - creates talk
* PUT /api/talks/:talkId/add_attendee - adds attendee to talk
* PUT /api/talks/:talkId/remove_attendee - removes attendee from talk
   
### Users
| column name   | data type 	| details        |
|---------------|-------------|----------------|
| name          | String    	| required       |
| email         | String    	| required       |
| password      | String      | required       |
| isAdmin       | Boolean     | default: false |

### Talks
| column name  	| data type 	| details      |
|---------------|-------------|--------------|
| name         	| String    	| required     |
| location      | String    	| required     |
| startTime     | String      | required     |
| endTime       | String      | required     |
| attendees     | Array       | default: []  |
