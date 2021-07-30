import React, { ChangeEvent, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginDetails } from "../../store/actions/LoginActions";

const LoginForm : React.FC = () => {
    const [email , setEmail] = useState<string>("");
    const [password , setPassword] = useState<string>("");
    const history = useHistory();
    const dispatch = useDispatch(); 

    const handelOnEmailChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handelOnPasswordChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handelOnSubmit =  () => {
        if(password == "" || email == "" ){
            alert("email and password required!");
            return;
        }
        fetch(`http://192.168.1.100:4000/user/${email}/${password}`, {
             method: "GET",
             headers: {
                 'Access-Control-Allow-Origin': "true",
                 "Content-Type": "application/json"
             }
         }).then(function(response) {
             return response.json();
         }).then(function(responce){
             if(responce[0]){
                dispatch(setLoginDetails({
                    email: responce[0].email,
                    contact: responce[0].contact,
                    password: responce[0].password
                }))
                 history.push("/home");    
            }
         });
    }
    return (
        <Form >
            <h1 className="text-center logo "> Login </h1>
            <div className="pt-5 px-5 " >
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>User email*</Form.Label>
                            <Form.Control type="text" placeholder="Your Email" onChange={handelOnEmailChange} />
                        </Form.Group>
                       
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control type="password" placeholder="Street Address" onChange={handelOnPasswordChange}/>
                        </Form.Group>
                        <Button className="my-3" onClick={handelOnSubmit} >
                            Register
                        </Button>
                    </div>
            </Form>
       
    );
}

export default LoginForm;