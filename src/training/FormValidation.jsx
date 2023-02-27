import React, { useState } from 'react'

import './form.css'
import Show from './Show'

function FormValidation() {
    const [data, setData] = useState({
        name: "",
        tel: "",
        password: "",
        email: ""
    })
    const [error, setError] = useState()
    const [showData, setShowData] = useState(false)

    const handleChange = (e, type) => {
        if (type == 'n') {
            setData({ ...data, name: e.target.value })
        } else if (type == 't') {
            setData({ ...data, tel: e.target.value })
        } else if (type == 'p') {
            setData({ ...data, password: e.target.value })
        }
        else if (type == 'em') {
            setData({ ...data, email: e.target.value })
        }
        //    console.log(data)

    }
    const validateName = /^([A-Za-z]{0,20})$/gm
    const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm
    const validaPhone = /^([6789]{1})([1234789]{1})([0-9]{8})$/gm;
    const validateEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm;

    const onBlur = () => {


    }
    let name = document.getElementById('name')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    const handleSubmit = (e) => {
        e.preventDefault();

        (!validateName.test(data.name)) ?
            name.classList.add('is-invalid')
            : (!validateEmail.test(data.email)) ?
                 email.classList.add('is-invalid') 
                // console.log('email is false')

                : (!validaPhone.test(data.tel)) ?
                     phone.classList.add('is-invalid') 
                    // console.log('tel is false')

                    : (!validatePassword.test(data.password)) ?
                         password.classList.add('is-invalid')
                        // console.log('Password is false')
                        :
                        setShowData(true)
        //     setError('')
         


        // if (!validateName.test(data.name)) {
        //     setError('Invalid Name')
        //      name.classList.add('is-invalid')


        // } else if (!validateEmail.test(data.email)) {
        //      setError('Invalid Email')
        //     email.classList.add('is-invalid')
        // } else if (!validaPhone.test(data.tel)) {
        //     phone.classList.add('is-invalid')
        //     setError('Invalid Phone Number')
        // } else if (!validatePassword.test(data.password)) {
        //     password.classList.add('is-invalid')
        //     setError('Invalid Password')
        // }
        // else {

        //     setShowData(true)
        // }

    }
    const reset = () => {
        setData({
            name: "",
            tel: "",
            password: "",
            email: ""
        })
    }
    return (
        <>
            {
                !showData ? (
                    <section>

                        <div className="container">
                            <div style={{ color: "red" }}>{error}</div>
                            <div className="form">
                                <form action="" onSubmit={handleSubmit}>
                                    <h1>Form in React </h1>



                                    <div  >


                                        Full Name:  <input type="text"
                                            className=' form-control'
                                            id='name'
                                            required
                                            value={data.name}
                                            onChange={(e) => handleChange(e, 'n')}
                                            placeholder='enter name' />
                                        <div className="invalid-feedback">
                                            Name should only contains words
                                        </div>

                                    </div>

                                    <div>
                                        Email: <input
                                            className=' form-control'
                                            type="email" value={data.email}
                                            required
                                            id='email'
                                            onChange={(e) => handleChange(e, 'em')}
                                            placeholder='enter email' />
                                        <div className="invalid-feedback">
                                            please Enter valid email
                                        </div>
                                    </div>
                                    <div>
                                        Phone No: <input
                                            className=' form-control'
                                            type="tel" value={data.tel}
                                            id='phone'
                                            required
                                            onChange={(e) => handleChange(e, 't')} placeholder='enter phone' />
                                        <div className="invalid-feedback">
                                            Mobile should be  Indian                                          </div>

                                    </div>
                                    <div>

                                        Password:<input
                                            className=' form-control'
                                            type="password" value={data.password}
                                            id='password'
                                            required
                                            onChange={(e) => handleChange(e, 'p')}
                                            placeholder='enter password' />
                                        <div className="invalid-feedback">
                                            password must contain characters and number min-size would be 8
                                        </div>
                                    </div>

                                    <div>
                                        <input type="submit" />
                                        <button
                                            onClick={reset}
                                            style={{ margin: "0 .5rem" }}>Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </section>
                ) : (

                    <Show data={data}></Show>
                )
            }


        </>
    )
}

export default FormValidation