<template>
    <div class="pop-up-customer">
        <div class="pop-up-inner row" v-if="!isHidden">
            <div class="customer customer--private col">
                <div class="customer-inner">
                    <!-- <vue-fontawesome icon="user" size="2" color="#fff"></vue-fontawesome> -->
                    <img src="../assets/images/user.png" alt="user">
                    <h2>Private Customer</h2>
                    <button class="btn btn--full-width btn--btns_color btn--private">
                        Make Private Customer
                    </button>
                </div>
            </div>
            <div class="customer customer--business col">
                <div class="customer-inner">
                    <!-- <vue-fontawesome icon="briefcase" size="2" color="#fff"></vue-fontawesome> -->
                    <img src="../assets/images/briefcase.png" alt="briefcase">
                    <h2>Business Customer</h2>
                    <select class="pop-up__select">
                        <option value="0">Choose Company</option>
                    </select>
                    <button class="btn btn--full-width btn--business">
                        New Company
                    </button>
                </div>
            </div>
            <div class="close-popup" v-on:click="isHidden = true">
                <span class="popup-line popup-line--first"></span>
                <span class="popup-line popup-line--second"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUpCustomer',
    data() {
        return {
            isHidden: false
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_btns.scss";

    .pop-up-inner {
        position: relative;
        justify-content: center;
        background-color: $border_color;
        padding: 50px;
        min-height: 80vh;
        width: 80vw;
        border-radius: 10px;
    }
    .customer {
        border: 1px solid $main_font_color;
        border-radius: 10px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .btn--business {
            background: $btns_secondary;
            color: $main_font_color;
            font-size: 14px;
            width: 90%;
            margin: 0 auto;
            transition: .4s ease;

            &:hover {
                background-color: $btns_color;
            }
        }
        .btn--private {
            font-size: 14px;
            width: 90%;
            margin: 0 auto;
        }
    }
    .customer-inner {
        text-align: center;
    }
   
    .pop-up__select {
        display: block;
        margin: 0 auto 15px;
        border: 1px solid $main_font_color;
    }
    .btn--btns_color {
        background: $btns_color;
        color: $main_font_color;
        font-size: 14px;
    }
  
    .close-popup {
        position: absolute;
        top: 20px;
        right: 20px;
        font-weight: bold;
    }
    .popup-line {
        width: 25px;
        height: 2px;
        background-color: #fff;
        display: block;
        cursor: pointer;
    }
    .popup-line--first {
       transform: rotate(-45deg) translate(-16px, 2px);
    }

    .popup-line--second {
        transform: rotate(45deg) translate(1px, 14px);
    }

</style>