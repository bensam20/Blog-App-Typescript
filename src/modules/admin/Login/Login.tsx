import React, {useState, useContext, useRef} from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { AuthContext } from '../../Authentication/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Toast } from 'primereact/toast';

function Login() {
    console.log("inside login page");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useRef<any>(null);

    const authContext = useContext(AuthContext);  

    const showToast = (severity: string, msg: string, summary: string) => {
      toast.current.show({severity:severity, summary: summary, detail:msg, life: 3000});
    }

    const load = () => {
        setLoading(true);

        if(authContext?.authData.id === username && authContext?.authData.password === password) {
          showToast("success", "Login Success", "Success");
          authContext?.setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          setTimeout(() => {
            setLoading(false);
            navigate("/admin/dashboard");
          },1000);
        } else {
          showToast("error", "Incorrect Credentials", "Error");
          authContext?.setIsLoggedIn(false);
          setTimeout(() => {
            setLoading(false);
          },1000);
        }
    };

    
  return (
    <div className="login-container">
      <Toast ref={toast} />
      <div className="login-card flex justify-content-center">
        <div className='login-title'>Enter Credentials</div>
          <span className="username p-float-label">
              <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label htmlFor="username">Username</label>
          </span>
          <span className="password p-float-label">
              <InputText type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
          </span>
          <span className="flex flex-wrap justify-content-center gap-3">
              <Button className='login-submit' label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
          </span>
        </div>
    </div>
  )
}

export default Login