//ENUMS

enum Color { 
    Rojo = 100,
    Verde,
    Azul
}

console.log(Color.Verde);

console.log(Color.Rojo);

let colorPrimario = Color.Rojo;

colorPrimario = Color.Verde;
// colorPrimario = 29;  --------- no deja porque la variable colorPrimario ahora es de tipo 'Color'
console.log('ColorPrimario ', colorPrimario);

enum DireccionesCardinales {
    Norte = 'Norte',
    Sur = 'Sur',
    Este = 'Este',
    Oeste = 'Oeste'
}

let direccion: DireccionesCardinales = DireccionesCardinales.Sur;
console.log('Dirección ', direccion);

enum CodigosDeEstado {
    Exito = 200,
    NoEncontrado = 404,
    ErrorInterno = 500
}

let codigoDeEstado: CodigosDeEstado = CodigosDeEstado.Exito;

console.log('Código de estado: ', codigoDeEstado);

enum NivelDeVolumen {
    Bajo = 1,
    Medio = 5,
    Alto = 10
}

let nivelDeVolumen: NivelDeVolumen = NivelDeVolumen.Medio;
console.log('Nivel de Volumen ', nivelDeVolumen);




//RETO PRACTICA 6

enum MetodoDePagoEnum {
    TarjetaCredito = 'Tarjeta de Crédito',
    TarjetaDebito = 'Tarjeta de Débito',
    PayPal = 'PayPal',
    Transferencia = 'Transferencia Bancaria',
    Efectivo = 'Efectivo'
}

// Uso del enum en la clase MetodoDePago
class MetodoDePago {
    tipo: MetodoDePagoEnum;
    numeroCuenta: string;
    titular: string;

    constructor(tipo: MetodoDePagoEnum, numeroCuenta: string, titular: string) {
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
    }

    public getTipo(): MetodoDePagoEnum {
        return this.tipo;
    }

    public getNumeroCuenta(): string {
        return this.numeroCuenta;
    }

    public getTitular(): string {
        return this.titular;
    }

    public procesarPago(monto: number): void {
        console.log(`Procesando pago de ${monto} con el método ${this.tipo} a nombre de ${this.titular}`);
    }
}

// Ejemplo de uso
const pago = new MetodoDePago(MetodoDePagoEnum.Transferencia, '87654321', 'María López');
pago.procesarPago(250);