import RegistroFormulario from "./Tests/primerTest.js"
import ConfigAutomaticTest from "./config/config.js"


async function main(){
    
    let driver = await ConfigAutomaticTest.initConfig()

    await(new RegistroFormulario(driver).CP_1());

    await(new RegistroFormulario(driver).CP_2());

    await(new RegistroFormulario(driver).CP_3());

    await(new RegistroFormulario(driver).CP_4());

    await(new RegistroFormulario(driver).CP_5());

    await(new RegistroFormulario(driver).CP_6());

    await(new RegistroFormulario(driver).CP_7());

    await(new RegistroFormulario(driver).CP_8());

    await(new RegistroFormulario(driver).CP_9());

    await(new RegistroFormulario(driver).CP_10());

    await(new RegistroFormulario(driver).CP_11());

    await(new RegistroFormulario(driver).CP_12());

    await(new RegistroFormulario(driver).CP_13());

    await(new RegistroFormulario(driver).CP_14());

    await(new RegistroFormulario(driver).CP_15());

    await(new RegistroFormulario(driver).FindPage());
}

main()