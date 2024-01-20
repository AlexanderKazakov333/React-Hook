import "./Homepage.css";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({ mode: "onChange" });

  const [error, setError] = useState(false)

  const navigate = useNavigate()



  const Submit = async (data) => {
    try {
      const response = await axios.post(
        "https://codify-teens.vercel.app/login/",
        data
      );
      localStorage.setItem('data', JSON.stringify(response.data.user))
      reset();
      navigate('/characters')
    } catch (e) {
      console.log(e.response.data.message);
      setError(true)
    }
  };


  return (
    <div className="pre-form">
      <form onSubmit={handleSubmit(Submit)} className="form">
        <h1>Sign in</h1>
        <input type="text" placeholder="Login" 
            {...register('username', {
                required: 'Имя не может быть пустым',
                minLength: {
                    value: 4,
                    message: 'Минимум 4 символа'
                },
                maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов'
                }
            })}
        />
        {errors.username && ( <div>{errors.username.message}</div> )}

        <input type="password" placeholder="Password"
            {...register('password', {
                required: 'Пароль не может быть пустым',
                minLength: {
                    value: 5,
                    message: 'Минимум 5 символов'
                }
            })}
        />
        {errors.password && ( <div>{errors.password.message}</div> )}
        <button>Login</button>
      </form>
      {error && ( <div><h3>Неверный логин или пароль!</h3></div> )}
      
    
    </div>
  );
};

export default Homepage;
