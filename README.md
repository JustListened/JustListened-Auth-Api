# JustListened-Auth-Api

## Indices
* [Create user](#1-create-user)
* [List users](#2-list-users)

### 1. Create user

Create user use `JSON` payload to create a user

***Endpoint:***

```bash
Method: POST
Type: RAW
URL: /v1/auth/user
```

***Body:***

```json        
{
    "firstName": "Gustavo",
    "lastName": "Barros",
    "dob": "1999-12-23T01:43:01.587Z",
    "email": "gusta",
    "password": "pwd123"
}
```

### 2. List users

List all users from database

***Endpoint:***

```bash
Method: GET
Type: RAW
URL: /v1/auth/users
```

***Response:***

```json        
[
    {
        "_id": "5fc4631cd916193790580246",
        "firstName": "Matheus",
        "lastName": "Lança",
        "dob": "1999-09-28T02:37:01.585Z",
        "email": "matheus.lancags@gmail.com",
        "password": "pwd123",
        "__v": 0
    },
    {
        "_id": "5fc46b92bf4d352778788a50",
        "firstName": "Gustavo",
        "lastName": "Barros",
        "dob": "1999-12-23T01:43:01.587Z",
        "email": "gustavosbarros@gmail.com",
        "password": "pwd123",
        "__v": 0
    }
]
```