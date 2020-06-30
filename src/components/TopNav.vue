<template>
    <div class="top-nav">
       <div class="container">
            <div class="top-nav-inner">
                <div class="arrow-logo-wrapp">
                    <a href="#" class="long-arrow-left-link">
                       <img src="../assets/images/arrow-left.svg" alt="arrow-left">
                    </a>
                   <div class="logo-wrapp">
                        <a href="#"> 
                            <img class="logo" src="../assets/images/logo.png" alt="logo">
                        </a>
                        <span class="logo-text">IRS</span> 
                   </div>
                </div>

                <div class="top-nav-btns">
                    <span class="top-nav-btn">Cashier System Status: <span class="status-open">Open</span></span>
                    
					<router-link to="/cashiersystem" class="btn btn--top-nav btn--csc">
                        Cashier System
                    </router-link>
                    
                    <button class="top-nav-btn top-nav-btn--cursor" v-on:click="isHidden = !isHidden">
                        <img src="../assets/images/store-user.svg" alt="store-user">
                        <span class="top-nav-btn__text">Store manager User</span> <i class="arrow down arrow--top-nav"></i>
                    </button>
                    <div class="logout" v-if="!isHidden">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {
            isHidden: true
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_btns.scss"; 

    .top-nav {
        width: 100%;
        background-color: $secondary_color;
    }
    .top-nav-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        vertical-align: middle;
        margin-right: 5px;
    }
    .logo-text {
        vertical-align: middle;
        border-right: 2px solid $lines_color;
        // padding: 20px 28px 20px 20px;
    }
    .btn--top-nav {
        background-color: $btns_color;
        padding: 20px 40px;
        background-color: $btns_color;
        // margin-left: 25px;
        font-weight: bold;
    }
    .top-nav-btn {
        background-color: transparent;
        border: none;
        color: $main_font_color;
        margin-left: 30px;
        font-size: 14px;
        padding: 25px 5px;
	}
	.top-nav-btn--cursor {
		cursor: pointer;
	}
    .top-nav-btn__text {
        margin-left: 15px;
        vertical-align: middle;
        &:last-child {
            margin-left: 0;
        }
    }
    .long-arrow-left-link {
        padding: 20px 20px 20px 0; 
        border-right: 2px solid $lines_color;
        margin-right: 20px;
    }
    .long-arrow-left-link:hover + .long-arrow-left {
        color: $btns_color;
    }
    .arrow-logo-wrapp {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo-wrapp {
        margin-left: 22px;
    }
    .arrow--top-nav {
        margin-left: 10px;
        margin-bottom: 5px;
    }
    .btn--csc {
        padding: 25px 55px;
        margin-left: 25px;
        transition: .4s ease;

         &:hover {
            background-color: $secondary_color;
        }
    }
    .status-open {
        color: $status-open;
        font-weight: bold;
    }
    .top-nav-btns {
        position: relative;
    }
    .logout {
        position: absolute;
        right: -15px;
        top: 75px;
        padding: 22px 95px;
        background-color: #2D325A;
        font-size: 14px;
    }

</style>
