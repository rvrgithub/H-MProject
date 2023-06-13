import React from 'react'
import { useState } from 'react'
const SocialButton = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [errName, setErrName] = useState("")
    const [errEmail, setErrEmail] = useState("")
    const [errPhone, setErrPhone] = useState("")
    const [errMessage, setErrmessage] = useState("")
    const isValidName = function (name) {
        return /^[a-zA-Z ]{2,30}$/.test(name)
    }
    const isValidPhone = function (phone) {
        return /^((?!(0))[0-9]{10})$/.test(phone)
    }
    const isValidEmail = function (Email) {
        return /^(?=.{1,30}$)[a-zA-Z0-9_\.]+\@(([a-z])+\.)+([a-z]{2,4})$/.test(Email)
    }

    const nameValidate = (data) => {
        if (data == "") {
            setName(data)
            setErrName("Required")
        } else if (!isValidName(data)) {
            setName(data)
            setErrName("Invalid Name")
        } else {
            setName(data)
            setErrName("")
        }
    }


    const emailValidate = (data) => {
        if (data == "") {
            setEmail(data)
            setErrEmail("Required")
        } else if (!isValidEmail(data)) {
            setEmail(data)
            setErrEmail("Invalid Email Id")
        } else {
            setEmail(data)
            setErrEmail("")
        }
    }

    const phoneValidate = (data) => {
        if (data == "") {
            setPhone(data)
            setErrPhone("Required")
        } else if (!isValidPhone(data)) {
            setPhone(data)
            setErrPhone("Invalid Phone Number")
        } else {
            setPhone(data)
            setErrPhone("")
        }
    }

    const messageValid = (data) => {
        if (data == "") {
            setMessage(data)
            setErrmessage("Required")
        } else {
            setMessage(data)
            setErrmessage("")
        }
    }



    const func = (e) => {
        e.preventDefault();
        if (name == "" && email == "" && phone == "" && message == "") {
            setErrName("Required")
            setErrEmail("Required")
            setErrPhone("Required")
            setErrmessage("Required")
            return;
        } else if (email == "" && phone == "" && message == "") {
            setErrEmail("Required")
            setErrPhone("Required")
            setErrmessage("Required")
            return;
        } else if (phone == "" && message == "") {
            setErrPhone("Required")
            setErrmessage("Required")
        } else if (message == "") {
            setErrmessage("Required")
            return;
        }
        if (name == "") {
            setErrName("Required")
            return;
        }
        if (!isValidName(name)) {
            setErrName("Invalid Name")
            return;

        } else {
            setErrName("")
        }

        if (email == "") {
            setErrEmail("Required")
            return;

        }
        if (!isValidEmail(email)) {
            setErrEmail("Invalid Email Id")
            return;

        } else {
            setErrEmail("")
        }
        if (phone == "") {
            setErrPhone("Required")
            return;

        }
        if (!isValidPhone(phone)) {
            setErrPhone("Invalid Phone Number")
            return;

        } else {
            setErrPhone("")
        }
        if (message == "") {
            setErrmessage("Required")
            return;
        } else {
            setErrmessage("")
        }

        try {
            fetch("http://localhost:4000/contact/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name, email, phone, message
                })
            }).then((res) => res.json())
                .then(data => {
                    if (data.status == true) {
                        alert(data.message)
                        setEmail("")
                        setName("")
                        setMessage("")
                        setPhone("")
                    }
                    else {
                        // console.log(data)
                    }
                })
                .catch(error => {
                    alert(error)
                })

        } catch (err) {
            alert(err.message)

        }

    }
    return (

        <>
            {/* <div style={{ zIndex: "1" }} className="btn2">
                <p className="text-white" >&nbsp;Contact Us</p>
                <div style={{ zIndex: "1" }} className="form" id="contactUs">
                    <form action=""  >
                        <h4 style={{ color: "blueviolet" }}>Contact Us</h4>
                        <input className="container-fluid  formInput" type="text" id="name2" name="name"
                            placeholder="Name*" autoComplete="off" required value={name} onChange={(e) => nameValidate(e.target.value)} />
                        <div style={{ color: 'red', fontSize: 15, height: "30px", width: "100%" }}>{errName}</div>
                        <input className="container-fluid" type="text" name="email" id="email2"
                            placeholder="Email*" autoComplete="off" required value={email} onChange={(e) => emailValidate(e.target.value)} />
                        <div style={{ color: 'red', fontSize: 15, height: "30px", width: "100%" }}>{errEmail}</div>
                        <input className="container-fluid" type="text" name="phone" id="phone2"
                            placeholder="Phone*" autoComplete="off" required value={phone} onChange={(e) => phoneValidate(e.target.value)} />

                        <div style={{ color: 'red', fontSize: 15, height: "30px", width: "100%" }}>{errPhone}</div>


                        <input className="container-fluid" type="text" name="message" id="message2"
                            placeholder="Message" autoComplete="off" value={message} onChange={(e) => messageValid(e.target.value)} />
                        <div style={{ color: 'red', fontSize: 15, height: "30px", width: "100%" }}>{errMessage}</div>

                    </form>
                    <input className="container-fluid" style={{ backgroundColor: "blueviolet" }} type="submit" value="Submit" onClick={func} />
                </div>
            </div> */}
            {/* <div style={{ zIndex: "1", paddingTop: '6px' }} className="btn3 bg-success">
                <a target='_blank' href="https://wa.me/+918059465353"><img className="logo" src="./assets/icons/whatsapp.png" alt="Innovative Web Devlopment Company In Delhi NCR" title='Innovative Web Devlopment Company In Delhi NCR' height="25px" width="25px" /></a>
            </div> */}
            {/* <div style={{ zIndex: "1", paddingTop: '6px' }} className="btn4 bg-primary">
                <a target='_blank' href="tel:8059465353"><img className="logo" src="./assets/icons/phone.png" alt="Innovative Web Devlopment Company In Delhi NCR" title='Innovative Web Devlopment Company In Delhi NCR' height="22px" width="22px" /></a>
            </div> */}
        </>
    )
}

export default SocialButton