// Importa el módulo 'os' que proporciona información sobre el sistema operativo.
const os = require('os');

// Muestra el sistema operativo en la consola.
console.log('Sistema operativo:', os.platform());

// Obtiene la plataforma del sistema operativo.
const platform = os.platform();
// Muestra la plataforma del sistema operativo en la consola.
console.log('Sistema operativo:', platform);

// Obtiene el nombre del sistema operativo.
const nameOs = os.type();
// Muestra el nombre del sistema operativo en la consola.
console.log(nameOs);

// Obtiene el tiempo de actividad del sistema operativo en segundos.
const uptime = os.uptime();
// Muestra el tiempo de actividad del sistema operativo en la consola.
console.log(uptime);

// Obtiene la memoria total del sistema en bytes.
const totalMemory = os.totalmem();
// Convierte la memoria total a gigabytes y la muestra en la consola.
console.log(totalMemory / 1024 / 1024 / 1024);

// Obtiene la arquitectura de la CPU.
const cpuArchitecture = os.arch();
// Muestra la arquitectura de la CPU en la consola.
console.log(cpuArchitecture);

// Obtiene la información lógica de los núcleos de la CPU.
const cpuCoreLogic = os.cpus();
// Muestra la información lógica de los núcleos de la CPU en la consola.
console.log(cpuCoreLogic);

// Obtiene las interfaces de red del sistema.
const networkInterfaces = os.networkInterfaces();
// Muestra las interfaces de red del sistema en la consola.
console.log(networkInterfaces);

// Obtiene el directorio de inicio del usuario.
const homeDir = os.homedir();
// Muestra el directorio de inicio del usuario en la consola.
console.log(homeDir);