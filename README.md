# riiid - restful-api

## API Endpoints - 

### users
   * POST /api/users - creates user/attendee
   * POST /api/users/login - authenticates user against database and authorizes user
  
### talks
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
