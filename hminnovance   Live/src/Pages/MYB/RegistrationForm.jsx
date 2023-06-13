import React, { useState } from 'react';
import "./Registration.css"


const Registration = () => {

  const submit = (event) => {
    event.preventDefault();
  };
  const isValidPhone = function (phone) {
    return /^((?!(0))[0-9]{10})$/.test(phone)
  }
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [location, setLocation] = useState("")
  const [gender, setGender] = useState("")
  const [educationDetail, setEducationDetail] = useState("")
  const [boardDetails, setBoardDetails] = useState("")
  const [schoolDetails, setSchoolDetails] = useState("")
  const [degree, setDegree] = useState("")
  const [paymentID, setPaymentID] = useState("")
  const [reference, setReference] = useState("")
  //err

  const [errFirstName, setErrFirstName] = useState("")
  const [errLastName, setErrLastName] = useState("")
  const [errFatherName, setErrFatherName] = useState("")
  const [errPhoneNumber, setErrPhoneNumber] = useState("")
  const [errLocation, setErrLocation] = useState("")
  const [errGender, setErrGender] = useState("")
  const [errEducationDetail, setErrEducationDetails] = useState("")
  const [errBoardDetails, setErrBoardDetails] = useState("")
  const [errSchoolDetails, setErrSchoolDetails] = useState("")
  const [errDegree, setErrDegree] = useState("")
  const [errPaymentID, setErrPaymentID] = useState("")
  const [errReference, setErrReference] = useState("")

  const isValidName = function (name) {
    return /^[a-zA-Z ]{2,30}$/.test(name)
  }

  const handleInputs = () => {

  }
  const submitFunc = (e) => {
    e.preventDefault()
    try {
      if (firstName == "") {
        setErrFirstName("Required")
        return;
      } else if (lastName == "") {
        setErrLastName("Required")
        return;
      } else if (fatherName == "") {
        setErrFatherName("Required")
        return;
      } else if (phoneNumber == "") {
        setErrPhoneNumber("Required")
        return;
      } else if (location == "") {
        setErrLocation("Required")
        return;
      } else if (gender == "") {
        setErrGender("Required")
        return;
      } else if (educationDetail == "") {
        setErrEducationDetails("Required")
        return;
      } else if (boardDetails == "") {
        setErrBoardDetails("Required")
        return;
      } else if (schoolDetails == "") {
        setErrSchoolDetails("Required")
        return;
      } else if (paymentID == "") {
        setErrPaymentID("Required")
        return;
      }
      // if (firstName == "" || lastName == "" || fatherName == "" || phoneNumber == "" || location == "" || gender == "" || educationDetail == "" || errBoardDetails == "" || errSchoolDetails == "" || errPaymentID == "") {
      //   return;
      // }
      let details;
      if (educationDetail == "twelveth" || educationDetail == "eleventh") {
        details = {
          board: boardDetails,
          school: schoolDetails,
          degree: degree
        }
      } else {
        details = {
          board: boardDetails,
          school: schoolDetails
        }

      }
      fetch("http://localhost:4000/scholarship/contact", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({

          firstName: firstName,
          lastName: lastName,
          fName: fatherName,
          phone: phoneNumber,
          address: location,
          gender: gender,
          reference: reference,
          paymentId: paymentID,
          standard: educationDetail,
          details: details
        })
      }).then((res) => res.json())
        .then(data => {
          if (data.status == true) {
            alert(data.message)
            setFirstName("")
            setLastName("")
            setFatherName("")
            setPhoneNumber("")
            setLocation("")
            setGender("")
            setEducationDetail("")
            setBoardDetails("")
            setSchoolDetails("")
            setDegree('')
            setReference("")
            setPaymentID("")

          }
          else {
            return;
          }
        })
        .catch(error => {
          alert(error)
        })
    } catch (error) {
      alert(error)
    }
  }


  return (

    <div className="container">
      <div className="row d-flex justify-content-center">
        <div>
          <h4 className='text-center mt-4'><strong>MYB Scholarship Registration</strong></h4>
        </div>
        <div className="col-lg-8 col-md-12 ">

          <div style={{ backgroundColor: '', padding: '20px' }}>
            <div className='form-styling m-auto'>

              <form >
                <div className='d-flex'>
                  <input style={{ marginRight: '10px' }} type="text" id="firstName" name="firstName" placeholder='First Name' value={firstName} onChange={(e) => {
                    if (e.target.value == "") {
                      setErrFirstName("Required")
                      setFirstName(e.target.value)
                    } else if (!isValidName(e.target.value)) {
                      setFirstName(e.target.value)
                      setErrFirstName("Invalid Name")
                    } else {
                      setFirstName(e.target.value)
                      setErrFirstName("")
                    }
                  }} />

                  <input type="text" id="lastName" name="lastName" placeholder='Last Name' value={lastName} onChange={(e) => {
                    if (e.target.value == "") {
                      setErrLastName("Required")
                      setLastName(e.target.value)
                    } else if (!isValidName(e.target.value)) {
                      setLastName(e.target.value)
                      setErrLastName("Invalid Name")
                    } else {
                      setLastName(e.target.value)
                      setErrLastName("")
                    }
                  }
                  } />


                </div>
                <div className='d-flex justify-content-between'><p className='warning'>{errFirstName}</p> <p className='warning'>{errLastName}</p></div>

                <input type="text" id="fatherName" name='fatherName' placeholder="Father's Name" value={fatherName} onChange={(e) => {
                  if (e.target.value == "") {
                    setErrFatherName("Required")
                    setFatherName(e.target.value)
                  } else if (!isValidName(e.target.value)) {
                    setFatherName(e.target.value)
                    setErrFatherName("Invalid Name")
                  } else {
                    setFatherName(e.target.value)
                    setErrFatherName("")
                  }
                }
                } />
                <p className='warning'>{errFatherName}</p>

                <input type="tel" id="phoneNumber" name='phoneNumber' placeholder='Phone Number' value={phoneNumber} onChange={(e) => {
                  if (e.target.value == "") {
                    setErrPhoneNumber("Required")
                    setPhoneNumber(e.target.value)
                  } else if (!isValidPhone(e.target.value)) {
                    setPhoneNumber(e.target.value)
                    setErrPhoneNumber("Invalid Phone Number ")
                  } else {
                    setPhoneNumber(e.target.value)
                    setErrPhoneNumber("")
                  }
                }} />

                <p className='warning'>{errPhoneNumber}</p>

                <input type="text" id="location" name='location' placeholder='Enter Your Permanent Address' value={location} onChange={(e) => {
                  if (e.target.value == "") {
                    setErrLocation("Required")
                    setLocation(e.target.value)
                  } else if (e.target.value.length < 5) {
                    setLocation(e.target.value)
                    setErrLocation("Please Full Address")
                  } else {
                    setLocation(e.target.value)
                    setErrLocation("")
                  }
                }} />
                < p className='warning'>{errLocation}</p>

                <select id="gender" name='gender' value={gender} onChange={(e) => {
                  if (e.target.value == "") {
                    setErrGender("Required")
                    setGender(e.target.value)
                  } else {
                    setGender(e.target.value)
                    setErrGender("")
                  }
                }} >
                  <option value="">Select Your Gender Type</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <p className='warning'>{errGender}</p>

                <div>
                  <select id="education-detail-dropdown" name='educationDetail' value={educationDetail} onChange={(e) => {
                    console.log(e.target.value)
                    if (e.target.value == "") {

                      setErrEducationDetails("Required")
                      setEducationDetail(e.target.value)
                    } else {
                      setEducationDetail(e.target.value)
                      setErrEducationDetails("")
                    }
                  }} required >
                    <option value="">Select Your Class</option>
                    <option value="twelveth">12'th </option>
                    <option value="eleventh">11'th </option>
                    <option value="tenth">10'th </option>
                    <option value="nineth">9'th</option>
                    <option value="eight">8'th</option>
                  </select>
                </div>

                <p className='warning'>{errEducationDetail}</p>


                {
                  educationDetail == "twelveth" || educationDetail == "eleventh" ?
                    (
                      <>
                        <div className='d-flex'>
                          <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardDetails' value={boardDetails} placeholder='Board Name' required onChange={(e) => {
                            if (e.target.value == "") {
                              setErrBoardDetails("Required")
                              setBoardDetails(e.target.value)
                            } else if (!isValidName(e.target.value)) {
                              setBoardDetails(e.target.value)
                              setErrBoardDetails("Invalid Board Name")
                            } else {
                              setBoardDetails(e.target.value)
                              setErrBoardDetails("")
                            }
                          }} />


                          <input style={{ marginRight: '10px' }} type="text" id="school-name" name='schoolDetails' value={schoolDetails} placeholder='School Name' required onChange={(e) => {
                            if (e.target.value == "") {
                              setErrSchoolDetails("Required")
                              setSchoolDetails(e.target.value)
                            } else if (!isValidName(e.target.value)) {
                              setSchoolDetails(e.target.value)
                              setErrSchoolDetails("Invalid School Name")
                            } else {
                              setSchoolDetails(e.target.value)
                              setErrSchoolDetails("")
                            }
                          }} />


                          <input type='text' placeholder='Stream' id="degree" name='degree' value={degree} onChange={(e) => {
                            if (e.target.value == "") {
                              setErrDegree("Required")
                              setDegree(e.target.value)
                            } else if (!isValidName(e.target.value)) {
                              setDegree(e.target.value)
                              setErrDegree("Invalid Degree Name")
                            } else {
                              setDegree(e.target.value)
                              setErrDegree("")
                            }
                          }} />


                        </div>
                        <div className='d-flex justify-content-between'><p className='warning'>{errBoardDetails}</p> <p className='warning'>{errSchoolDetails}</p> <p className='warning'>{errDegree}</p></div>
                      </>
                    ) :
                    (<>

                    </>)
                }
                {educationDetail == "tenth" || educationDetail == "nineth" || educationDetail == "eight" ? <>
                  <div className='d-flex'>
                    <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardDetails' value={boardDetails} placeholder='Board Name' required onChange={(e) => {
                      if (e.target.value == "") {
                        setErrBoardDetails("Required")
                        setBoardDetails(e.target.value)
                      } else if (!isValidName(e.target.value)) {
                        setBoardDetails(e.target.value)
                        setErrBoardDetails("Invalid Board Name")
                      } else {
                        setBoardDetails(e.target.value)
                        setErrBoardDetails("")
                      }
                    }} />

                    <input style={{ marginRight: '10px' }} type="text" id="school-name" name='schoolDetails' value={schoolDetails} placeholder='School Name' required onChange={(e) => {
                      if (e.target.value == "") {
                        setErrSchoolDetails("Required")
                        setSchoolDetails(e.target.value)
                      } else if (!isValidName(e.target.value)) {
                        setSchoolDetails(e.target.value)
                        setErrSchoolDetails("Invalid School Name")
                      } else {
                        setSchoolDetails(e.target.value)
                        setErrSchoolDetails("")
                      }
                    }} />

                  </div>
                  <div className='d-flex justify-content-between'><p className='warning'>{errBoardDetails}</p> <p className='warning'>{errSchoolDetails}</p></div>

                </> : <></>}
                <input type="text" id="patmentID" name='reference' placeholder=" Reference If Any   example:'friend'" value={reference} onChange={(e) => setReference(e.target.value)} />
                <p className='warning' >{errReference}</p>

                <input type="text" id="patmentID" name='paymentID' placeholder="Enter your payment I'D here" value={paymentID} onChange={(e) => {
                  if (e.target.value == "") {
                    setErrPaymentID("Required")
                    setPaymentID(e.target.value)
                  } else if (e.target.value.length < 10) {
                    setPaymentID(e.target.value)
                    setErrPaymentID("Invalid PaymentId")
                  } else {
                    setPaymentID(e.target.value)
                    setErrPaymentID("")
                  }
                }} />
                <p className='warning'>{errPaymentID}</p>

                <div style={{ textAlign: "center" }}>
                  <button className="p-2" type="submit" value="Submit" onClick={submitFunc}>SignUp</button>
                </div>

              </form>
            </div>
          </div>


        </div>
        {/* form ends here */}
        <div className="col-lg-4 col-md-12 ">
          <div style={{ width: "80%", height: "80%", background: "" }}>
            <div style={{ border: "5px solid black", marginTop: "20%" }}>
              <img src="assets/image/QRCodecopy.jpeg" className='QRCode' alt="" style={{ width: "100%", height: "50%", padding: "auto", marginTop: "-10px" }} />

            </div>
            <div style={{ marginTop: "20px", color: "blue", fontSize: "15px", fontWeight: "500" }}>Marchant Name :  M/S.H M INNOVANCE LLP </div>
            <div style={{ color: "blue", fontSize: "15px", fontWeight: "500" }}>Mobile Number : 8059465353 </div>
          </div>
        </div>

      </div>
    </div>

  )
};

export default Registration;