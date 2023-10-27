describe('prueba componente', () => {  

    test('Esta prueba no debe fallar', () => { 
    
        //1.inicilizacion
        const mensaje = 'Hola Mundo';
        
        //2.estimulo
        const mensaje2 = mensaje.trim();
    
        //3.observar el comportamiento....esperado
        expect( mensaje2 ).toBe( 'Hola Mundo' );
    
    });
});





