# tp-intermedio-Franco-Galvan

#Clonar Repositorio
#Iniciar proyecto
npm init -y
#instalar dependencias:
npm install express
npm install -D typescript ts-node-dev @types/node @types/express
#configurar Archivo tsconfig.json:
{
"compilerOptions": {
"target": "ES2020",
"module": "CommonJS",
"rootDir": "src",
"outDir": "dist",
"strict": true,
"esModuleInterop": true
}
}
#Configurar Archivo Package.json:"scripts":
{
// Ejecuta el servidor en modo desarrollo
// Reinicia automáticamente cuando hay cambios en el código
"dev": "ts-node-dev --respawn src/index.ts",

// Compila el proyecto TypeScript y genera la carpeta dist/
"build": "tsc",

// Ejecuta el código ya compilado desde dist/
// Este script se usa normalmente en producción
"start": "node dist/index.js"
}

#instalar dependencias:
npm install jsonwebtoken

npm install jsonwebtoken bcrypt express-validator express-rate-limit

npm install -D @types/jsonwebtoken @types/bcrypt
