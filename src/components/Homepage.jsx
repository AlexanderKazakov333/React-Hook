import "./Homepage.css";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Homepage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({ mode: "onChange" });

  const [error, setError] = useState(false)


  const [city, setCity] = useState('')
  const [name, setName ] = useState('')
  const [sex, setSex ] = useState('')
  const [job, setJob] = useState('')
  const [language, setLanguage] = useState('')
  console.log(city, name, sex, job, language);



  const Submit = async (data) => {
    try {
      const response = await axios.post(
        "https://codify-teens.vercel.app/login/",
        data
      );
      console.log(response.data);
      reset();
      localStorage.setItem('city', response.data.user.city)
      localStorage.setItem('name', response.data.user.fullName)
      localStorage.setItem('sex', response.data.user.sex)
      localStorage.setItem('job', response.data.user.job)
      localStorage.setItem('language', response.data.user.language)

      setCity(localStorage.getItem('city'));
      setName(localStorage.getItem('name'));
      setSex(localStorage.getItem('sex'));
      setJob(localStorage.getItem('job'));
      setLanguage(localStorage.getItem('language'));


    } catch (e) {
      console.log(e.response.data.message);
      setError(true)
    }
  };


  return (
    <div>
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
      <div className="info">
      { <div>{city}</div> }
      { <div>{name}</div> }
      { <div>{sex}</div> }
      { <div>{job}</div> }
      { <div>{language}</div> }
      </div>
      

    </div>
  );
};

export default Homepage;
