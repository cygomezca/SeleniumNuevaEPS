import RegistroFormulario from "./Tests/primerTest.js"
import ConfigAutomaticTest from "./config/config.js"


async function main(){
    
    let driver = await ConfigAutomaticTest.initConfig()

    await(new RegistroFormulario(driver).CP_14());
    
    //await(new RegistroFormulario(driver).FindPage());
}

main()