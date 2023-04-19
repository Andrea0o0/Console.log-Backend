# Console.log(KATA) REST API
## Description

This is a the backend repository for the React application Console.log(KATA).

---

## Instructions

When cloning the project, change the <code>sample.env</code> file name for <code>.env</code>. The project will run on **PORT 8000**.

**.ENV**
All are examples

```bash
PORT=8080
MONGO_URL='mongodb+srv://console:console@data.asdasd8w.mongodb.net/katadb'
NODE_ENV='produ'
TOKEN_SECRET=console
ORIGIN='http://localhost:3000'
CLIENT_ID_GITHUB="jhsdgcjh5hghcEhgcj"
CLIENT_ID_GITHUB_SECRET="jhgvd7c8sdcg7sdc8sdchbbYGVJjvjhygVH8975"
```


Then, run:
```bash
npm install
```
## Scripts

- To start the project run:
```bash
npm run start
```
- To start the project in development mode, run:
```bash
npm run dev
```
- To seed the database, run:
```bash
npm run seed
```
---

## Models

### User

Users in the database have the following properties:

```js
{
  "image":String,
  "username": String,
  "email": String,
  "hashedPassword": String,
  "role":String
}
```

### Champions

Champions in the database have the following properties:

```js
{
  "namefight":String,
  "kata": Schema.Types.ObjectId,
  "users": [Schema.Types.ObjectId],
  "users_request": [Schema.Types.ObjectId],
  "winner": Schema.Types.ObjectId,
  "function": String,
  "status":['REQUEST','START','FINISHED'],
  "time": Number
}
```

### Kata

Kata in the database have the following properties:

```js
{
  "name":String,
  "initialValue": String,
  "input": String,
  "instructions":String,
  "example":Array,
  "output":Array,
  "level":[1,2,3,4,5]
}
```

### Solution

Solution in the database have the following properties:

```js
{
  "kata":Schema.Types.ObjectId,
  "user": Schema.Types.ObjectId,
  "status": Boolean,
  "function":String
}
```

### Comment

Comment in the database have the following properties:

```js
{
  "solution":Schema.Types.ObjectId,
  "kata":Schema.Types.ObjectId,
  "comment": String,
  "user": Schema.Types.ObjectId
  
}
```

### Like

Like is an unused model, but in the database would have the following properties:

```js
{
  "solution":Schema.Types.ObjectId,
  "kata":Schema.Types.ObjectId,
  "user": Schema.Types.ObjectId
  
}
```

---

## API endpoints and usage 

NO USED means a Backlog, or concepts that hasn't given me time to finish


| Action           | Method    | Endpoint                             | Req.body                        | Private/Public |
|------------------|-----------|--------------------------------------|---------------------------------|-----------------|
| SIGN UP user     | POST      | /api/v1/auth/signup                  | { username, email, password }   |    Public |                 
| LOG IN user      | POST      | /api/v1/auth/login                   | { email, password }             |    Public |               
| LOG IN GOOGLE    | POST      | /api/v1/auth/login/google            | { email, username, image }      |    Public |     
| LOG IN GITHUB    | GET       | /api/v1/auth/login/github/:githubId  |                                 |    Public |        
| GET logged in user   | GET     | /api/v1/auth/me    |   | Private |
| Image/Username    | POST       | /api/v1/auth/imageusername  |                                 |    Private |  
| User info    | GET       | /api/v1/auth/userinfo  |                                 |    Private |
| Users    | GET       | /api/v1/auth/users  |                                 |    Private |
| ME    | GET       | /api/v1/auth/me  |                                 |    Private |


| ONE CHAMPION    | GET       |  /champions/:championsId  |                                 |    Private |
| STATUS CHAMPIONS    | GET       |  /champions/status/:typeStatus  |                                 |    Private |
| EDIT USERS_REQUEST    | PUT       |  /champions/user-request/:championId  |                                 |    Private |
| WINNER CHAMPIONS   | PUT       |  /champions/classification/:championId  |                                 |    Private |
| CREATE CHAMPIONS   | POST       |  /champions/  |     { users_request, namefight,status, kata }            |    Private |
| (NO USED) CLASSIFICATION    | PUT       |  /champions/classification/:championId  |                        |    Private |
| DELETE CHAMPIONS   | POST       |  /champions/:championId  |                 |    Private |


| ALL KATAS    | GET       |  /kata/  |                                 |    Public |
| ONE KATA    | GET       |  /kata/:kataId  |                                 |    Public |
| EDIT KATA (NO USED)   | PUT       |  /kata/:kataId  |                                 |    Admin |
| CREATE KATA (NO USED)   | PUT       |  /kata/  |                                 |    Admin |
| DELETE KATA (NO USED)   | DELETE    |  /kata/:kataId  |                                 |    Admin |


| SOLUTIONS USER    | GET       |  /solutions/user  |                                 |    Private |
| SOLUTIONS KATA & USER    | GET       |  /solutions/user/:kataId  |                                 |    Private |
| SOLUTIONS KATA    | GET       |  /solutions/kata/:kataId  |                                 |    Private |
| ONE SOLUTION REFACTOR (NO USED)    | GET       |  /solutions/:solutionId  |                                 |    Private |
| EDIT SOLUTION (NO USED)    | PUT       |  /solutions/:solutionId  |                                 |    Private |
| CREATE SOLUTION    | POST       |  /solutions/  |   {function, kata}                              |    Private |
| DELETE SOLUTION    | DELETE       |  /solutions/:solutionId  |                                |    Admin |


| COMMENTS KATA    | GET       |  /comments/kata/:kataId  |                                 |    Private |
| COMMENTS SOLUTIONS (NO USED)   | GET       |  /comments/solution/:solutionId  |                                 |    Private |
| CREATE COMMENT  | POST      |  /comments/  |      {kata(can be solution or kata),comment}                      |    Private |
| DELETE COMMENT (NO USED) | DELETE       |  /comments/:commentsId  |                           |    Admin |


| LIKES KATA  (NO USED)  | GET       |  /likes/kata/:kataId  |                                 |    Private |
| LIKES SOLUTIONS (NO USED)   | GET       |  /likes/solution/:solutionId  |                                 |    Private |
| CREATE LIKE (NO USED) | GET       |  /likes/  |      {kata(can be solution or kata)}                      |    Private |
| DELETE LIKE (NO USED) | GET       |  /likes/:commentsId  |                           |    Admin |

---

## Useful links

- [Presentation slides](https://slides.com/andrea_0o0_/console-log-kata/fullscreen#/2)
- [Frontend repository](https://github.com/Andrea0o0/Console.log-Frontend)
- [Frontend deploy](https://console-log-kata.netlify.app/)
- [Deployed REST API](https://kataapp.fly.dev/)

