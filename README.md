# riiid - restful-api

## API Endpoints - 

### users
   * POST /api/users - creates user/attendee
   * POST /api/users/login - authenticates user against database and authorizes user
  
### talks
   * POST /api/talks - creates talk
   * PUT /api/talks/:talkId - adds attendee to talk
   * PUT /api/talks/:talkId/remove_attendee - removes attendee from talk
   
### Users
| column name   | data type 	| details   |
|---------------|-------------|-----------|
| name          | string    	| required  |
| email         | string    	| required  |
| password      | string      | required  | 

### Talks
| column name  	| data type 	| details   |
|---------------|-------------|-----------|
| name         	| string    	| required  |
| location      | string    	| required  |
| startTime     | string      | required  |
| endTime       | string      | required  |
