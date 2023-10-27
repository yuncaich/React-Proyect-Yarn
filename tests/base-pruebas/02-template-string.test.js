
import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Prueba en 02 template' , () => {

    test('Prueba en el metodo getSaludo', () => {
            
            const nombre = 'Fernando';
    
            const saludo = getSaludo(nombre);
    
            expect( saludo ).toBe( 'Hola  ${nombre} ');
    
    });
});