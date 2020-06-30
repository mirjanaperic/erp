<template>
    <div class="wrapper">
        <div class="row login-inner">
            <div class="col logo-part">
                <div class="logo-wrapp">
                    <img src="../assets/images/login-logo-white.png" alt="login-logo">
                </div>
            </div>
            <div class="col login-part">
                <div class="login-wrapp">
                    <div class="login__title-wrapp">
                        <h1 class="login__title">
                            Welcome to <br> Instant Repair Store
                        </h1>
                    </div>
                    <input class="input-text input-text--first" type="text" placeholder="E-Mail Address">
                    <input class="input-text" type="text" placeholder="Password">
                    <div class="checkbox-wrapp">
                        <input class="input-checkbox" type="checkbox">
                        <span class="checkbox-artificial" @click="$event.target.classList.toggle('checked')"></span>
                        <span class="checkbox-text">Remember Me</span> 
                    </div>
                     <router-link to="/dashboard">
                        <button class="btn btn--full-width btn--btns_color">
                            Login
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_btns.scss";
@import "../assets/scss/_checkbox.scss";


    .wrapper {
        color: $main_font_color;
    }
    .login-inner {
        justify-content: space-between;
        align-items: center;  
    }
    .logo-wrapp {
        text-align: center;
        max-width: 346px;
        img {
            max-width: 100%;
            height: auto;
        }
    }
    .logo-part {
        background-color: $main_color;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .login-part {
        background: $secondary_color;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
      
    .login__title {
        font-size: 50px;
        line-height: 68px;
    }

    .input-text {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $main_font_color;
      display: block;
      width: 100%;
      font-size: 14px;
      color: $main_font_color;
      padding-bottom: 8px;
    }
  .input-text--first {
      margin-bottom: 20px;
  }
  ::placeholder {
      color: $placeholder_color;
  }
  


</style>
