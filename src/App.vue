<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <PopUpCustomer></PopUpCustomer> -->
    <router-view/>
  </div>
</template>

<script>
    // import PopUpCustomer from "@/components/pages/PopUpCustomer";
    // export default {
    //   components: {
    //     PopUpCustomer
    //   }
    // };
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
@import "./assets/scss/_variables.scss";


html, body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        color: $main_font_color;
        background-color: $background;
}
#app {
    *:focus {
        outline: none;
    }
    * {
        box-sizing: border-box;
    }
   
}
.container {
    width: 100%; 
    margin: 0 auto;
    max-width: 1875px; 
}
 .row  {
    display: flex;     
}
.col {
    flex-basis: 50%;
    max-width: 50%;
}
a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
}

//////////////////////
// Arrows styles
.arrow {
    border: solid;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    margin-right: 5px;
    vertical-align: middle;
    cursor: pointer;
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  border-color: $btns_color;
  margin-top: 5px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  border-color: $main_font_color;
}


.float-right {
    float: right;
}

// Input
input {
    color: $main_font_color;
}

// Typography

h2 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
}
h3 {
    font-size: 30px;
    font-weight: 600;
}
h4 {
    font-size: 25px;
}
h5 {
    font-size: 16px;
}
// Form/table styles
.body-radius {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.white-border {
    border: 1px solid rgba(255, 255, 255, 0.2);
}
.full-width {
    width: 100%;
}

// Select
select {
    -webkit-appearance: button;
    -moz-appearance: button;
    -webkit-user-select: none;
    -moz-user-select: none;
    appearance: none;
    background-image: url('./assets/images/arrow-bottom.svg');
    background-repeat: no-repeat;
    background-position: right 15px top 1.5em, right 10px top 1em; 
    background-color: $border_color;
    border: transparent;
    color: $main_font_color;
    width: 100%;
    padding: 15px 50px 15px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    cursor: pointer;
}
.status-pending {
    color: $pending_color;
}
</style>
