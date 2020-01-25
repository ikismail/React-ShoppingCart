import React from "react";

const Auth = () => {
  return (
    <div className='login'>
      <div className='row'>
        <div className='col'>
          {/* <createAccount v-if="isSignUp"></createAccount> */}

          <form className='form-signin'>
            <img
              className='mb-4'
              src='../assets/login-img.png'
              alt='login-img'
              width='72'
              height='72'
            />
            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
            <label className='sr-only'>Email address</label>
            <input
              type='email'
              id='email'
              className='form-control'
              placeholder='Email address'
              required
            />
            <label className='sr-only'>Password</label>
            <input
              type='password'
              id='password'
              className='form-control'
              placeholder='Password'
              required
            />
            <p className='text-muted'>
              <a href='#'>Forget password ?</a>
            </p>
            <button className='btn btn-lg btn-primary btn-block' type='submit'>
              <i className='fa fa-spinner fa-spin mr-1'></i> Log In
            </button>
          </form>
          <p className='mt-3 text-muted'>
            <span>
              Already a member?
              <a href='#'>Sign in</a>
            </span>
            <span>
              New to ikismail?
              <a href='#'>Create an Account</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
