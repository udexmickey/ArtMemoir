import React from 'react';
import { useForm } from 'react-hook-form';
import IconList from '../../components/IconList/IconList';
import flowerLeft from '../../assets/Images/flower-left.png';
import flowerRight from '../../assets/Images/flowerRight.png';
import HeadBadge from '../../components/HeaderBadge';
import './login.scss';
import useLogin from '../../hooks/loginPost';

export const Login = () => {
  const { reset, register, handleSubmit } = useForm();
const {login} = useLogin()
  
  const onSubmit = async (arg) => {
   login(arg).then(data => {
    console.log(data)
    reset();
   }).catch(error => console.log(error)) 
  };

  return (
    <div className="login">
      <div className="left-flower">
        {/* <FlowerRight /> */}
        <img loading="lazy"src={flowerLeft} alt="" srcSet="" />
      </div>

      <div className="login-container">
        <div className="login-holder-container">
          <div className="login-title-container">
            <HeadBadge name="Login" />
          </div>
          <div className="login-text">
            <small>Already an Admin?</small>
            {/* <h4>Admin Login</h4> */}
          </div>
          <div className="login-form">
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="login-form-title">
                {/* Leave us a message */}
                <div className="group-form">
                  <label htmlFor="login-email">Email address</label>
                  <input
                    type="email"
                    name="login-email"
                    id="login-email"
                    placeholder="example@email.com"
                    {...register('email')}
                  />
                </div>
                <div className="group-form">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    {...register('password')}
                  />
                </div>
                <div className="group-form group-form-button">
                  <button type="submit"> Login </button>
                </div>
              </div>
            </form>
          </div>

          <div className="login-icons">
            <IconList />
          </div>
        </div>
      </div>
      <div className="right-flower">
        <img loading="lazy"src={flowerRight} alt="" srcSet="" />
      </div>
    </div>
  );
};
