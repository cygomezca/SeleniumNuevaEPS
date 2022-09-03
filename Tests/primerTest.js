import Comands from "../Comandos/Comands.js"

export default class RegistroFormulario extends Comands{
    constructor(driver){
        super(driver);
    }

  
    async CP_1(){

         // despues de abrir el navegador espera 2 segundos
         await this.delay(1);

         // luego de realizar la espera maximiza la pantalla
         await this.maximizeWindow();

         // ahora introduce la url en la barra de direcciones del navegador.
         await this.getUrl("https://demoqa.com/automation-practice-form");

         // ahora se realiza una espera de 2 segundos 
         await this.delay(2);
 
         // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
         await this.scroll(0,150);
 
         // se realiza una espera de 1 segundos antes de realizar un scroll
         await this.delay(1);
 
         //Se da la orden para buscar el elemneto firstName.
         let Nombre = await this.getElementById("firstName");
 
         //Despues de encontrar el elemento espera 1 segundo.
         await this.delay(1);
 
         //se da la orden de escribir el texto en el elemento encontrado.
         await this.sendKey(Nombre, "Juan Diego");
 
          //Despues de encontrar el elemento espera 1.
         await this.delay(1);
 
          //Se da la orden para buscar el elemneto LastName.
          let Apellido = await this.getElementById("lastName");
 
          //se da la orden de escribir el texto en el elemento encontrado.
         await this.sendKey(Apellido, "Moncaleano Quiñones");
 
         
          //Despues de encontrar el elemento espera 1 segundo.
          await this.delay(3);

    }

    async CP_2(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

         //Despues de encontrar el elemento espera 1.
        await this.delay(1);

         //Se da la orden para buscar el elemneto LastName.
         let Apellido = await this.getElementById("lastName");

         //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
         //Despues de encontrar el elemento espera 1 segundo.
         await this.delay(1);

          //Se da la orden para buscar el elemneto Last Name.
          let Correo = await this.getElementById("userEmail");
 
          //se da la orden de escribir el texto en el elemento encontrado.
         await this.sendKey(Correo, "juanmonca1075@gmail.com");

         //Despues damos 3 segundo de espera
         await this.delay(3);

    }

   async CP_3(){

    await this.newGetUrl();

    // despues de abrir el navegador espera 2 segundos
    await this.delay(1);

    // luego de realizar la espera maximiza la pantalla
    await this.maximizeWindow();

    // ahora introduce la url en la barra de direcciones del navegador.
    await this.getUrl("https://demoqa.com/automation-practice-form");

    // ahora se realiza una espera de 2 segundos 
    await this.delay(2);

    // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
    await this.scroll(0,150);

    // se realiza una espera de 1 segundos antes de realizar un scroll
    await this.delay(1);

    //Se da la orden para buscar el elemneto firstName.
    let Nombre = await this.getElementById("firstName");

    //Despues de encontrar el elemento espera 1 segundo.
    await this.delay(1);

    //se da la orden de escribir el texto en el elemento encontrado.
    await this.sendKey(Nombre, "Juan Diego");

     //Despues de encontrar el elemento espera 1.
    await this.delay(1);

     //Se da la orden para buscar el elemneto LastName.
     let Apellido = await this.getElementById("lastName");

     //se da la orden de escribir el texto en el elemento encontrado.
    await this.sendKey(Apellido, "Moncaleano Quiñones");

    
     //Despues de encontrar el elemento espera 1 segundo.
     await this.delay(1);

      //Se da la orden para buscar el elemneto Last Name.
      let Correo = await this.getElementById("userEmail");

      //se da la orden de escribir el texto en el elemento encontrado.
     await this.sendKey(Correo, "juanmonca1075@gmail.com");

      //Despues de encontrar el elemento espera 1 segundo.
      await this.delay(1);

      // Se da la orden de buscar el elemento input tipo radio.
      let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

      // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
      await this.click(genero);

      //Despues damos 3 segundo de espera
      await this.delay(3);

    }

    async CP_4(){

    await this.newGetUrl();

    // despues de abrir el navegador espera 2 segundos
    await this.delay(1);

    // luego de realizar la espera maximiza la pantalla
    await this.maximizeWindow();

    // ahora introduce la url en la barra de direcciones del navegador.
    await this.getUrl("https://demoqa.com/automation-practice-form");

    // ahora se realiza una espera de 2 segundos 
    await this.delay(2);

    // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
    await this.scroll(0,150);

    // se realiza una espera de 1 segundos antes de realizar un scroll
    await this.delay(1);

    //Se da la orden para buscar el elemneto firstName.
    let Nombre = await this.getElementById("firstName");

    //Despues de encontrar el elemento espera 1 segundo.
    await this.delay(1);

    //se da la orden de escribir el texto en el elemento encontrado.
    await this.sendKey(Nombre, "Juan Diego");

     //Despues de encontrar el elemento espera 1.
    await this.delay(1);

     //Se da la orden para buscar el elemneto LastName.
     let Apellido = await this.getElementById("lastName");

     //se da la orden de escribir el texto en el elemento encontrado.
    await this.sendKey(Apellido, "Moncaleano Quiñones");

    
     //Despues de encontrar el elemento espera 1 segundo.
     await this.delay(1);

      //Se da la orden para buscar el elemneto Last Name.
      let Correo = await this.getElementById("userEmail");

      //se da la orden de escribir el texto en el elemento encontrado.
     await this.sendKey(Correo, "juanmonca1075@gmail.com");

      //Despues de encontrar el elemento espera 1 segundo.
      await this.delay(1);

      // Se da la orden de buscar el elemento input tipo radio.
      let genero = await this.getElementByxPath("//label[normalize-space()='Female']");

      // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
      await this.click(genero);

      //Despues damos 3 segundo de espera
      await this.delay(3);
    }


    async CP_5(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Other']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues damos 3 segundo de espera
         await this.delay(3);
    }


    async CP_6(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");

        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues damos 3 segundo de espera
        await this.delay(3);
    }


    async CP_7(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_8(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        ///Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"A")
    

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_9(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        ///Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden 
        await this.scroll(0,200);
 
        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_10(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        ///Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden 
        await this.scroll(0,200);
 
        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie2 = await this.getElementByxPath("//label[normalize-space()='Reading']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie2);

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_11(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        ///Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden 
        await this.scroll(0,200);
 
        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie2 = await this.getElementByxPath("//label[normalize-space()='Reading']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie2);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie3 = await this.getElementByxPath("//label[normalize-space()='Music']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie3);

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_12(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        ///Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"A")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria1= await this.getElementById("react-select-2-option-2");
        
        await this.click(OpcionMateria1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden 
        await this.scroll(0,200);
 
        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie2 = await this.getElementByxPath("//label[normalize-space()='Reading']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie2);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie3 = await this.getElementByxPath("//label[normalize-space()='Music']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie3);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id uploadPicture
        let img = await this.getElementById("uploadPicture");

        // Se da la orden de insertar la direccion del archivo que se desea cargar.
        await this.sendKey(img,"C:\\Users\\juan.moncaleano\\Downloads\\perfil.jpg");

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_13(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        ///Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"A")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria1= await this.getElementById("react-select-2-option-2");
        
        await this.click(OpcionMateria1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden 
        await this.scroll(0,200);
 
        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie2 = await this.getElementByxPath("//label[normalize-space()='Reading']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie2);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie3 = await this.getElementByxPath("//label[normalize-space()='Music']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie3);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id uploadPicture
        let img = await this.getElementById("uploadPicture");

        // Se da la orden de insertar la direccion del archivo que se desea cargar.
        await this.sendKey(img,"C:\\Users\\juan.moncaleano\\Downloads\\perfil.jpg");

        //Despues damos 1 segundo de espera
        await this.delay(1);
      
        // Se da la orden de buscar el elemento con el id currentAddress
        let direccion =await this.getElementById("currentAddress");

        // Se da la orden de insertar texto en el campo de direcciòn
        await this.sendKey(direccion,"Calle 47 # 19 - 11 Barrio Prado Norte.");

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_14(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']
        let materia =  await this.getElementByxPath("//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.enter(materia, "maths");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden 
        await this.scroll(0,200);
 
        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie2 = await this.getElementByxPath("//label[normalize-space()='Reading']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie2);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie3 = await this.getElementByxPath("//label[normalize-space()='Music']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie3);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id uploadPicture
        let img = await this.getElementById("uploadPicture");

        // Se da la orden de insertar la direccion del archivo que se desea cargar.
        await this.sendKey(img,"C:\\Users\\juan.moncaleano\\Downloads\\perfil.jpg");

        //Despues damos 1 segundo de espera
        await this.delay(1);
      
        // Se da la orden de buscar el elemento con el id currentAddress
        let direccion =await this.getElementById("currentAddress");

        // Se da la orden de insertar texto en el campo de direcciòn
        await this.sendKey(direccion,"Calle 47 # 19 - 11 Barrio Prado Norte.");

         //Despues damos 1 segundo de espera
         await this.delay(1);

        //se da la orden de reducir el contenedor principal del formulario a un alto de 800px
        await this.resizeContainer("practice-form-wrapper",800);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,700);

           //Despues damos 1 segundo de espera
        await this.delay(1);


        // Se da la orden de buscar el elemento con clase react-select-3-input
        let Estado = await this.getElementById("state");
 
        // Se da la orden de hacer click en el campo estado
        await this.click(Estado);
 
        // //Despues damos 1 segundo de espera

        // Se da la orden de buscar el elmento con id react-select-3-option-1
        let opcionEstado = await this.getElementById("react-select-3-option-1");
         
        // se da la orden de hacer clic sobre el elemento opcionEstado
        await this.click(opcionEstado);
 
        //se da la orden de buscar el elemento con la clase css-1wy0on6
        let ciudad = await this.getElementById("city"); 
      
        //Despues damos 1 segundo de espera
        await this.delay(1);

        //se da la orden de hacer clic sobre el elemento ciudad
        await this.click(ciudad);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // se da la orden de buscar el elemento con id V 
        let opcionCiudad = await this.getElementById("react-select-4-option-0");

        // se da la orden de ahcer clic en elemento llamado opcionCiudad
        await this.click(opcionCiudad);

        //Despues damos 3 segundo de espera
        await this.delay(3);


    }

    async CP_15(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://demoqa.com/automation-practice-form");

        // // ahora se realiza una espera de 2 segundos 
        await this.delay(1);

         // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto firstName.
        let Nombre = await this.getElementById("firstName");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "Juan Diego");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto LastName.
        let Apellido = await this.getElementById("lastName");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "Moncaleano Quiñones");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Last Name.
        let Correo = await this.getElementById("userEmail");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Correo, "juanmonca1075@gmail.com");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // Se da la orden de buscar el elemento input tipo radio.
        let genero = await this.getElementByxPath("//label[normalize-space()='Male']");

        // Se da la orden de hacer click sobre el elemento rinput de tipo radio.
        await this.click(genero);

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id userNumber
        let numeroCelular = await this.getElementById("userNumber");
    
        // Se da la orden de ingrsar el número de celular
        await this.sendKey(numeroCelular,"3204434172");

        //Despues de encontrar el elemento espera 1 segundo
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("dateOfBirthInput");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //select[@class='react-datepicker__month-select']
        let mes = await this.getElementByxPath("//select[@class='react-datepicker__month-select']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con xPath //option[@value='7']
        let mesSeleccionado = await this.getElementByxPath("//option[@value='7']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mesSeleccionado
        await this.click(mesSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //select[@class='react-datepicker__year-select']
        let año = await this.getElementByxPath("//select[@class='react-datepicker__year-select']");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(año);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementByxPath("//option[@value=1987]");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementByxPath("//div[@aria-label='Choose Tuesday, August 25th, 1987']");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,200);

         await this.delay(2);

        // Se da la orden de buscar el elemento con id subjectsInput
        let materia =  await this.getElementById("subjectsInput");

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"M")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria = await this.getElementById("react-select-2-option-0");
        
        await this.click(OpcionMateria);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de insertar texto en el campo
        await this.sendKey(materia,"A")
        
        //Despues damos 1 segundo de espera
        await this.delay(1);

        let OpcionMateria1= await this.getElementById("react-select-2-option-2");
        
        await this.click(OpcionMateria1);

        //Despues damos 1 segundo de espera
        await this.delay(1); 

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie1 = await this.getElementByxPath("//label[normalize-space()='Sports']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie1);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie2 = await this.getElementByxPath("//label[normalize-space()='Reading']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie2);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //label[normalize-space()='Sports']
        let hobbie3 = await this.getElementByxPath("//label[normalize-space()='Music']");
 
        // Se da la orden de hacer clisk sobre el elemento 
        await this.click(hobbie3);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el id uploadPicture
        let img = await this.getElementById("uploadPicture");

        // Se da la orden de insertar la direccion del archivo que se desea cargar.
        await this.sendKey(img,"C:\\Users\\juan.moncaleano\\Downloads\\perfil.jpg");

        //Despues damos 1 segundo de espera
        await this.delay(1);
      
        // Se da la orden de buscar el elemento con el id currentAddress
        let direccion =await this.getElementById("currentAddress");

        // Se da la orden de insertar texto en el campo de direcciòn
        await this.sendKey(direccion,"Calle 47 # 19 - 11 Barrio Prado Norte.");

        //Despues damos 1 segundo de espera
        await this.delay(1);

        //se da la orden de reducir el contenedor principal del formulario a un alto de 800px
        await this.resizeContainer("practice-form-wrapper",800);

        //Despues damos 1 segundo de espera
        await this.delay(1);

         // Se da la orden 
         await this.scroll(0,700);

           //Despues damos 1 segundo de espera
        await this.delay(1);


        // Se da la orden de buscar el elemento con clase react-select-3-input
        let Estado = await this.getElementById("state");
 
        // Se da la orden de hacer click en el campo estado
        await this.click(Estado);
 
        // //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elmento con id react-select-3-option-1
        let opcionEstado = await this.getElementById("react-select-3-option-1");
         
        // se da la orden de hacer clic sobre el elemento opcionEstado
        await this.click(opcionEstado);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);
 
        //se da la orden de buscar el elemento con la clase css-1wy0on6
        let ciudad = await this.getElementById("city"); 
      
        //Despues damos 1 segundo de espera
        await this.delay(1);

        //se da la orden de hacer clic sobre el elemento ciudad
        await this.click(ciudad);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // se da la orden de buscar el elemento con id V 
        let opcionCiudad = await this.getElementById("react-select-4-option-0");

        // se da la orden de ahcer clic en elemento llamado opcionCiudad
        await this.click(opcionCiudad);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con id submit
       let boton =  await this.getElementById("submit");

        // Se da la orden de hacer click sobre el boton Submit / Enviar
        await this.click(boton);

        // //Despues damos 3 segundo de espera
        await this.delay(2);

        await this.scroll(0,300);

        await this.delay(2);

        // let cerrarModal = await this.getElementById("closeLargeModal");

        // await this.click(cerrarModal);


    }

    async FindPage(){
      
        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(2);

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("http://automationpractice.com");

        // // ahora se realiza una espera de 2 segundos 
        await this.delay(4);

        await this.close()
    }

    




 

}

  