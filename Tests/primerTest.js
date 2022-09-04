import Comands from "../Comandos/Comands.js"

export default class RegistroFormulario extends Comands{
    constructor(driver){
        super(driver);
    }

    async CP_14(){

        await this.newGetUrl();

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        // luego de realizar la espera maximiza la pantalla
        await this.maximizeWindow();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://portal.nuevaeps.com.co/Portal/home.jspx");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(2);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,150);

        // se realiza una espera de 1 segundos antes de realizar un scroll
        await this.delay(1);

        //Se da la orden para buscar el elemneto Usuario
        let Nombre = await this.getElementById("loginForm:id");

        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Nombre, "1082775651");

        //Despues de encontrar el elemento espera 1.
        await this.delay(1);

        //Se da la orden para buscar el elemneto Clave
        let Apellido = await this.getElementById("loginForm:clave");

        //se da la orden de escribir el texto en el elemento encontrado.
        await this.sendKey(Apellido, "G0m4z.26566");

        
        //Despues de encontrar el elemento espera 1 segundo.
        await this.delay(1);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 100px
        await this.scroll(0,100);

        // Se da la orden de buscar el datapicker
        let cumpleaños = await this.getElementById("loginForm:tipoId");

        // Se da click en el datapiker
        await this.click(cumpleaños);
        
        //Despues damos 1 segundo de espera
        await this.delay(1);       

        // Se da la orden de buscar el elemento con xPath  //*[@id="loginForm:tipoId"]/option[2]']
        let mes = await this.getElementByxPath("//option[@value='3']");

        // Se da la orden de hacer click en el elemento al macenado en la variable mes
        await this.click(mes);

        //Despues damos 1 segundo de espera
        await this.delay(1)

        // Se da la orden de buscar el elemento con el xpath //option[@value=1987]
        let añoSeleccionado = await this.getElementById("loginForm:loginButton");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(añoSeleccionado);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con el xpath //div[@aria-label='Choose Tuesday, August 25th, 1987']
        let dia = await this.getElementById("tabServicios");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(dia);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de realizar un desplazamiento de 200 px hacia abajo.
        await this.scroll(0,200);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        // Se da la orden de buscar el elemento con xPath //div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']
        let materia =  await this.getElementByxPath("html/body/div/div[1]/table/tbody/tr/td[2]/div/table/tbody/tr[1]/td/div/span/table/tbody/tr[2]/td/a"); 
        // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(materia);

        //Despues damos 1 segundo de espera
        await this.delay(1);
        
         // Se da la orden de buscar el elemento con xPath //div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']
        let servicioCliente =  await this.getElementByxPath("html/body/div/div[1]/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td/div/span/table/tbody/tr[13]/td/div"); 
         // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(servicioCliente);

         //Despues damos 1 segundo de espera
        await this.delay(1);
        
        
        // Se da la orden de buscar el elemento con xPath //div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']
        let certificaciones =  await this.getElementByxPath("html/body/div/div[1]/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td/div/span/table/tbody/tr[14]/td/div/table/tbody/tr[3]/td[2]/div/p"); 
         // Se da la orden de hacer click sobre le campo asignatura / materia
        await this.click(certificaciones);

         //Despues damos 1 segundo de espera
        await this.delay(1);

        let afiliacion = await this.getElementByxPath("html/body/div/div[1]/table/tbody/tr/td[2]/div/table/tbody/tr[2]/td/div/span/table/tbody/tr[14]/td/div/table/tbody/tr[4]/td/div/table/tbody/tr[1]/td[2]/p/a");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(afiliacion);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        let selectorTodos = await this.getElementById("form:allSelection");

        // Se da la orden de hacer clic el elemento encontrado
        await this.click(selectorTodos);

        //Despues damos 1 segundo de espera
        await this.delay(1);

        //let botonImprimir = await this.getElementById("form:j_id170");

        // Se da la orden de hacer clic el elemento encontrado
        //await this.click(botonImprimir);

        //Despues damos 1 segundo de espera
        await this.delay(1);
    //assert

    //assert using chai should
    let todoText = await this.findElement(By.xpath("html/body/div/div[1]/table/tbody/tr/td[3]/div/table/tbody/tr[2]/td/form/table/tbody/tr[5]/td[2]/table/tbody/tr[3]/td/div/table/tbody/tr/td[2]/span"))
    .getText().then(function(value){
        return value
    });

    //assert using chai should
    todoText.should.equal("CARMEN YISELLA GOMEZ CASTILLO");

        //https://portal.nuevaeps.com.co/Portal/downloadservlet?i=1&id=1662175136398x
        //*[@id="document:html"]/head/link[9]
    }
}
/*[@id="j_id107"] cedula
/html/body/div/div[1]/table/tbody/tr/td[3]/div/table/tbody/tr[1]/td/table/tbody/tr[2]/td/p/span/span[2]
/html/body/div/div[1]/table/tbody/tr/td[3]/div/table/tbody/tr[1]/td/table/tbody/tr[2]/td/p/span/span[3]
//*[@id="j_id109"]


//*[@id="form:j_id154:0"]
//*[@id="form:j_id154:0"]/td[1]
//*[@id="form:j_id154:0"]/td[2]


//*[@id="form:j_id154:0:j_id157"]
/html/body/div[1]/div[1]/table/tbody/tr/td[3]/div/table/tbody/tr[2]/td/form/table/tbody/tr[5]/td[2]/table/tbody/tr[3]/td/div/table/tbody/tr/td[1]/span


//*[@id="form:j_id154:0:j_id160"]
/html/body/div[1]/div[1]/table/tbody/tr/td[3]/div/table/tbody/tr[2]/td/form/table/tbody/tr[5]/td[2]/table/tbody/tr[3]/td/div/table/tbody/tr/td[2]/span

/html/body/div/div[1]/table/tbody/tr/td[3]/div/table/tbody/tr[2]/td/form/table/tbody/tr[5]/td[2]/table/tbody/tr[3]/td/div/table/tbody/tr/td[2]/span


*/