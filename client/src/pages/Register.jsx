import axios from "axios";
import { useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";

import "../style/login.css"
import { useNavigate } from "react-router-dom";
import { login } from "../redux/features/auth/authSlice";
import { useState } from "react";


function Register() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleGoLoginPage = () => {
        navigate("/login")
    }

    const openControl = Boolean(anchorEl)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickRegister = async (e) => {
        const name=e.target.previousSibling.previousSibling.previousSibling.previousSibling.value
        const email=e.target.previousSibling.previousSibling.previousSibling.value
        const password=e.target.previousSibling.previousSibling.value
        await axios.post('http://localhost:5000/api/auth/register', {

            name: name,
            email: email,
            password: password,
            
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                localStorage.setItem("access_data" ,JSON.stringify( response.data))
                navigate("/")
                dispatch(login());
            })
            .catch(function (error) {
                console.log(e.target);
                setAnchorEl(error.response.data.message);
            });
    }

    return (

        <div className="ana" >
            <div className="icdiv">
                <div className="d-flex justify-content-center mb-5">
                    <h2 className="h2">Kayıt Ol</h2>

                </div>
                <div className="d-flex flex-column align-items-center">
                    <input type="text" className="input" placeholder="İsim" />
                    <input type="text" className="input" placeholder="E-mail" />
                    <input type="password" className="input" placeholder="Şifre" />
                    <label className="kayitlidegilmisin mb-1" onClick={handleGoLoginPage}>Zaten Hesabın Var mı?</label>
                    <button className="input" onClick={handleClickRegister}>Kayıt Ol</button>


                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    open={openControl}
                    autoHideDuration={2000}
                    onClose={handleClose}

                    message="Note archived"
                >

                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {anchorEl}
                    </Alert>
                </Snackbar>

            </div>

        </div>

    );
}

export default Register;