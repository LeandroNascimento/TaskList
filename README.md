# TaskList

> Endpoints

###List Tasks

```sh
curl -X GET -H "apiKey: 26e81eb2-80f3-11e6-ae22-56b6b6499611" -H "Cache-Control: no-cache" -H "Postman-Token: 5b29c2b1-7020-da04-9b1b-f6bb5ec5b91f" "http://localhost:8080/api/v1/tasks"
```

###Create Task
```sh
curl -X POST -H "apiKey: 26e81eb2-80f3-11e6-ae22-56b6b6499611" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: b3434698-e376-0b2a-bc8c-239dbc6fb836" -d '{
	"name":"Atividade 01",
	"project":"Test",
	"percentage":10,
	"status": "Parado",
	"order":1
}' "http://localhost:8080/api/v1/task"
```

###Show Task
```sh
curl -X GET -H "apiKey: 26e81eb2-80f3-11e6-ae22-56b6b6499611" -H "Cache-Control: no-cache" -H "Postman-Token: 99d0296a-7c45-a65c-3e76-dd7539a1cba1" "http://localhost:8080/api/v1/task/2"
```

###Update Task
```sh
curl -X PUT -H "Content-Type: application/json" -H "apiKey: 26e81eb2-80f3-11e6-ae22-56b6b6499611" -H "Cache-Control: no-cache" -H "Postman-Token: 68a2d2f0-f99e-01c5-aa59-8cb272354de5" -d '{
	"name":"Atividade 02",
	"project":"Test",
	"percentage":10,
	"status": "Parado",
	"order":1
}' "http://localhost:8080/api/v1/task/2"
```

###Delete Task
```sh
curl -X DELETE -H "apiKey: 26e81eb2-80f3-11e6-ae22-56b6b6499611" -H "Cache-Control: no-cache" -H "Postman-Token: aec02e6d-1150-8e9a-fde0-a4fdbbc2a642" "http://localhost:8080/api/v1/task/3"
```
