"use strict";


function loginPopup(bool) {


    let [logo,subtitle] = getElementsById(["login","login-subtitle"])


    if (bool == true) {

        logo.style.zIndex = "2"
        
        //subtitle.textContent = ""
       


        let [box, backdrop] = createElements("div", 2)
        let [username, password] = createElements("input", 2)
        let button = document.createElement("button")
        let word = document.createTextNode("Log In")


        const username_attributes = {

            "class": "login-input",
            "placeholder": "username",
            "id": "username",

        }


        const password_attributes = {

            "class": "login-input",
            "placeholder": "password",
            "id": "password",

        }


        const button_attributes = {


            "onclick": "verify()",
            "id": "login-button",

        }



setAttributes([username,password,button],[username_attributes,password_attributes,button_attributes])


setAttributes([backdrop,box,logo], [{"id": "backdrop"},
                                    {"id" : "login-box"},
                                    {'onclick': `loginPopup(${!bool})`}] )
        
        
        //                 

        button.append(word)
        box.append(username, password, button)
        backdrop.append(box)

        
        document.body.appendChild(backdrop)


backdrop.style.height = document.body.clientHeight + "px"
  


toggleSubtitleContainer(bool)
    }




    else if (bool == false) {

        logo.style.zIndex = "0"  

        toggleSubtitleContainer(bool)
        // delaySubtitles(subtitle, "LOGIN")
        
        disappearLogin()


    }

}






function closeBackdrop(){


disappearLogin()

}







function disappearLogin() {

    let logo = document.getElementById("login")

    const backdrop = document.getElementById("backdrop")

    backdrop.style.animation = "fadeOut 0.4s"

    setTimeout(() => { document.body.removeChild(backdrop) }, 390)

    logo.setAttribute('onclick', `loginPopup(${true})`)



}



async function verify() {

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value


    const object = {

        username: username,
        password: password

    }



    const options = {

        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

            username: username,
            password: password


        })


    }



    const response = await fetch("/verify", options)
    const result = await response.json();
    const log_in = await logIn(result)

}





function logIn(result) {

    let logo = document.getElementById("login")

    if (result == true) {


        disappearLogin()

      
        makeButton()

  
setAttributes(logo, {'onclick':`loginPopup(${true})`})

    }

    else {



        let box = document.getElementById("login-box").style.animation = "shake 0.5s"
        location.reload()



    }




}
