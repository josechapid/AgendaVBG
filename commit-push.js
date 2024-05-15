const { execSync } = require('child_process');

// Obtén el mensaje del commit desde los argumentos de línea de comandos
const commitMessage = process.argv[2];

if (!commitMessage) {
 console.error('Por favor, proporciona un mensaje de commit.');
 process.exit(1);
}

// Ejecuta git add . { stdio: "inherit" } => Nos permite mostrar en consola lo que nos devuelve el comando de git 
execSync('git add .', { stdio: 'inherit' });

// Ejecuta git commit -m con el mensaje proporcionado
execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

// Ejecuta git push
execSync('git push', { stdio: 'inherit' });