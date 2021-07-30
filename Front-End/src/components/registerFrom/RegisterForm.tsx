import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormControl, Image, InputGroup, Row } from "react-bootstrap";
import SriLankanLogo from "../../assets/images/srilankanFlag/sri-lanka.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteLoginDetails } from "../../store/actions/LoginActions";

const RegisterForm : React.FC = () => {
    const [username , setUserName] = useState<string>("");
    const [password , setpassword] = useState<string>("");
    const [cpassword , setCpassword] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [contact_no , setContact_no] = useState<string>("");
    const history = useHistory();
    const dispatch = useDispatch(); 

    const handelOnUserNameChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const handelOnPasswordChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setpassword(e.target.value);
    }
    const handelOnCPasswordChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setCpassword(e.target.value);
    }
    const handelOnEmailChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handelOnContactChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setContact_no(e.target.value);
    }
    const handelOnSubmit =  () => {
       if(password !== cpassword ){
           alert("password are not matched!");
           return;
       }
       fetch("http://192.168.1.100:4000/user", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': "true",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": username,
                "email": email,
                "password": password,
                "contact": contact_no
            })
        }).then(function(response) {
            return response.json();
        }).then(function(responce){
            if(responce._id){
                dispatch(deleteLoginDetails(0))
                // console.log(JSON.stringify(responce));
                // localStorage.setItem("loginData", JSON.stringify(responce));
                history.push("/home");    
           }
            
        });
    }

    return (
        
        <Form >
            <h1 className="text-center logo"> Register </h1>
            <div className="pt-5 px-5 " >
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="text"   onChange={handelOnUserNameChange} />
                </Form.Group>
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="text"  onChange={handelOnEmailChange} />
                </Form.Group>
                <Row>
                    <Form.Label  className="px-3">Contact Number*</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon2" ><Image src={SriLankanLogo} width="30px"></Image> &nbsp; +94</InputGroup.Text>
                        <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        type="number"
                        onChange={handelOnContactChange}
                        />
                    </InputGroup>
                </Row>
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control type="password"  onChange={handelOnPasswordChange} />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control type="password"  onChange={handelOnCPasswordChange} />
                </Form.Group>
                <Button className="my-3" onClick={handelOnSubmit}>
                    Register
                </Button>
            </div>
        </Form>
       
    );
}

export default RegisterForm;