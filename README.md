# restful-api - Node.js/Express.js backend

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

  
### talks

| HTTP method   | path      	                       | description                |  access  |
|---------------|------------------------------------|----------------------------|----------|
| POST          | /api/talks 	                       | creates talk               | private  |
| PUT           | /api/talks/:talkId/add_attendee    | adds attendee to talk      | private  |
| PUT           | /api/talks/:talkId/remove_attendee | removes attendee from talk | private  |

   
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

## TESTING ROUTES 

### path: api/users
| HTTP method   | scenario      	       | behavior       |  status  |
|---------------|------------------------|----------------|----------|
| POST          | proper req.body 	     | success        | 200      |
| POST          | email exists           | bad request    | 400      |

### path: api/users/login
| HTTP method   | scenario      	       | behavior       |  status  |
|---------------|------------------------|----------------|----------|
| POST          | proper req.body 	     | success        | 200      |
| POST          | email exists           | unauthorized   | 401      |

### path: api/talks
| HTTP method   | scenario      	                   | behavior       |  status  |
|---------------|------------------------------------|----------------|----------|
| POST          | proper req.body + auth token 	     | success        | 200      |
| POST          | missing req.body.endTime           | internal error | 500      |
| POST          | missing auth                       | unauthorized   | 401      |

### path: api/talks/:talkId/add_attendee
| HTTP method   | scenario      	                     | behavior       |  status  |
|---------------|--------------------------------------|----------------|----------|
| PUT           | auth token + talkId + userId  	     | success        | 200      |
| PUT           | auth token + talkId - invalid userId | not found      | 404      |
| PUT           | missing auth                         | unauthorized   | 401      |
| PUT           | auth token + userId - invalid talkId | internal error | 500      |
| PUT           | auth + talkId + alreadyAttendingUser | bad request    | 400      |

### path: api/talks/:talkId/add_attendee
| HTTP method   | scenario      	                     | behavior       |  status  |
|---------------|--------------------------------------|----------------|----------|
| PUT           | auth token + talkId + userId  	     | success        | 200      |
| PUT           | auth token + talkId - invalid userId | not found      | 404      |
| PUT           | missing auth                         | unauthorized   | 401      |
| PUT           | auth token + userId - invalid talkId | internal error | 500      |




