CURL PARA REGISTRAR
curl -X POST http://localhost:3000/login/register \
 -H "Content-Type: application/json" \
 -d '{
"username": "Juan_Perez",
"email": "juan@example.com",
"password": "Password123!"
}'

CURL PARA LOGUEARSE:
curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"email":"usuario@example.com","password":"Password123!"}'

Obtener todos los veterinarios (GET)

curl -X GET http://localhost:3000/ -H "Authorization: Bearer $TOKEN"
