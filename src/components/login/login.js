import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Login() {

    const navigate = useNavigate();

      return (
        <div>
            <div id="container">
                    <div id="left">
                        <img className='Home-imglogin' src="agilly.png" alt="" />
                        <h1 id="welcome"></h1>
                        <p id="lorem">
                            
                        </p>
                    </div>
                    <div id="right">
                        <h1 id="login">Se Connecter</h1><br/>
                        <input type="email" id="email" className="client-info"/>
                        <label for="email">Identifiant</label>
                        <input type="password" id="password" className="client-info"/>
                        <label for="password">Mot de passe</label>
                        <input onClick={() => navigate("/dashboad")} type="submit" id="submit" className="client-info" value="Se Connecter"/>
                        <p className='Login-forget'><a href='' onClick={() => navigate("/reset")}>J'ai oublier mon mot de passe</a></p>
                    </div>
            </div>
        </div>

      );
  }
  

export default Login;