let primerarespuesta = window.prompt("Enhorabuena terricola,has encontrado una maquina del tiempo ¿Quieres ir al pasado o al futuro? (futuro/pasado)");

if (primerarespuesta === "futuro") {
    alert("¡Muy bien! Vamos hasta el infinito y más allá.");

    let segundarespuesta = window.prompt("¿Cuántos años quieres viajar? (diez/cien/mil)");

    if (segundarespuesta === "diez") {
        alert("Por fin España gana Eurovisión (no existe la mayoría de países europeos)");
        
        let tercerarespuesta = window.prompt ("¿Quieres saber quien ha llevado España (si/no)?")
        
        if (tercerarespuesta === "si") {
            alert ("Ha sido la 30 edicion de OT")
        }
        if (tercerarespuesta === "no") {
            alert ("Te falta cotilleo en vena")
        }
        if (tercerarespuesta!== "si" && tercerarespuesta !== "no") {
        alert("te has equivocado.");
    }

    }

    if (segundarespuesta === "cien") {
        alert("Estamos en guerra...otra vez. Argentina ha invadido Francia,porque les han dicho que Messi no era buen jugador");
        let cuartarespuesta = window.prompt ("¿Con que pais vais?(Argentina/Francia)");
        if (cuartarespuesta ==="Argentina") {
            alert ("Milei criogenizado te convierte en un esclavo más")
        }
        if (cuartarespuesta === "Francia") {
            alert ("Francia gana, ahora eres conde de Toulouse")
        }
        if (cuartarespuesta !== "Argentina" && cuartarespuesta !== "Francia")
        {
            alert ("te has equivocado")
        }

    }

    if (segundarespuesta === "mil") {
        alert("Bomba nuclear,se veía venir");
        let quintarespuesta = window.prompt ("Bueno, ¿te quieres quedar? (si/no)")
        if (quintarespuesta === "si") {
            alert ("Tendrás que vivir bajo la superficie sin Tik Tok")
        }
        if (quintarespuesta === "no") {
            alert("O no, te has quedado sin combustible...")
        }
        if (quintarespuesta!== "si" && quintarespuesta !== "no")
        {
            alert ("te has equivocado")
        }

    }

    if (segundarespuesta !== "diez" && segundarespuesta !== "cien" && segundarespuesta !== "mil") {
        alert("Esa no es una opción válida.");
    }
}

if (primerarespuesta === "pasado") {
    alert("Muy bien, prepárate para viajar atrás en el tiempo.");

    let segundarespuesta = window.prompt("¿Cuántos años quieres viajar? (diez/cien/mil)");

    if (segundarespuesta === "diez") {
        alert("2015, se aprueba el matriomonio igualitario en EEUU (que esto no lo vea Trump).");
        let sextarespuesta = window.prompt ("¿Te gustaría quedarte en EEUU o en España?(EEUU,España)")
        if (sextarespuesta === "EEUU" ) {
            alert ("puedes vivir tranquilo pero no te pongas enfermo, unos 10 añitos")
        }
        if (sextarespuesta == "España") {
            alert ("Felipe VI es rey pero puedes comprarte una casa")
        }
        if (sextarespuesta!== "EEUU" && sextarespuesta !== "España")
        {
            alert ("te has equivocado")
        }

    }

    if (segundarespuesta === "cien") {
        alert("1925,Europa acaba de salir de una guerra mundial... no te recomiendo quedarte");
        let septimarespuesta = window.prompt ("¿Quieres quedarte?(si/no)")
        if (septimarespuesta ==="si") {
            alert ("Espero que te gusta el fascismo, Musolini empieza su regimen y Hitler escribe el Meink Kampf")
        }
        if (septimarespuesta ==="no") {
            alert ("O no,nos hemos quedado sin combustible...")
        }
        if (septimarespuesta!== "si" && septimarespuesta!== "no") {
        alert("te has equivocado.");
    }
    }
    

    if (segundarespuesta === "mil") {
        alert(" 1025,resulta que hay un virus por ahi rondando...Depende de tu día te dejo quedarte");
          let octavarespuesta = window.prompt ("¿Te quieres quedar? (si/no)")
        
        if (octavarespuesta ==="si") {
            alert ("Espero que te guste la peste. Es menos divertida sin Tik Tok")
        }
        if (octavarespuesta==="no") {
            alert ("O no,nos hemos quedado sin combustible...")
        }
        if (octavarespuesta!== "si" && octavarespuesta!== "no") {
        alert("te has equivocado.");
    }

    if (segundarespuesta!== "diez" && segundarespuesta!== "cien" && segundarespuesta !== "mil") {
        alert("Esa no es una opción válida.");
    }
}

if (primerarespuesta !== "futuro" && primerarespuesta !== "pasado") {
    alert("Te has equivocado. Vuelve a intentarlo.");
}
} 
