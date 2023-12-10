import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Login.css'
import { User } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'






function Login() {

    const [name, setName] = useState("")
    console.log(name);

    // useNavigate() is a hook
    const navigate = useNavigate()


    
  

    const handleNavigate = () => {
        if(!name){

            alert("enter your name")
    
        }
        else{

        
            navigate('/home',{state:{name}})

        }
       
    }


   




    return (
        <>

            <Row>
                <Col>

                    <img src="https://woxsen.edu.in/uploads/A20230612062101.webp" alt="" width={560} height={350} style={{ marginTop: '150px', borderRadius: '50px', marginBottom:'30px' }} />

                </Col>
                <Col>
                    <div className="log">

                        <div className="header">
                            <div className="text">Welcome</div>
                            <div className="underline"></div>

                        </div>

                        <div className="inputs">

                            <div className="input">
                                <User className='me-4' size={30} />
                                <TextField  name="name"  autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} id="standard-basic" className='field' label="What can i call you" variant="standard" />
                            </div>

                        </div>




                        <div className="submit-container">
                            <Button variant="contained" onClick={handleNavigate} className='bg-info'>Go</Button>
                        </div>

                    </div>
                </Col>
            </Row>

            



        </>
    )
}

export default Login