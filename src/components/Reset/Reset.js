import React from 'react'
import './Reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Reset() {
  return (
    <div className='Reset-Body'>
                <div className="card login-form">
            <div className="card-body">
                <h3 className="card-title text-center">Retrouver votre mot de passe</h3>
                
                <div className="card-text">
                    <form>
                        <div className="form-group">
                            <strong className='Reset-label'>Entrer votre adresse email pour recevoir votre mot de passe.</strong>
                            <input type="email" className="form-control form-control-sm" placeholder="Entrer votre adresse E-mail"/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Envoyer le mot de passe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
