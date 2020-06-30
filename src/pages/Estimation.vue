<template>
    <div class="estimation">
        <TopNav/>
       <div class="page-inner">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>

            <div class="page-inner-part-2 page-inner-part-2--estimation">
                <div class="estimation-wrapp">
                    <h2>Estimation</h2>

                    <div class="customers-wrapp">
                        <div class="customer new-customer">
                            <img src="../assets/images/new-customer.svg" alt="new-customer">
                            <h3>New Customer</h3>
                            <button class="customer__btn btn customer__btn--new">
                                New Customer
                            </button>
                        </div>
                        <div class="customer existing-customer">
                            <img src="../assets/images/existing-customer.svg" alt="existing-customer">
                            <h3>Existing Customer</h3>
                            <button class="customer__btn btn customer__btn--existing">
                                Existing Customer
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'


export default {
    name: 'Estimation',
    components: {
      Navbar,
      TopNav
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_page-inner.scss";
@import "../assets/scss/_btns.scss";

    .page-inner-part-2--estimation {
        position: relative;
    }

    .estimation-wrapp {
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 40%;
        left: 50%;
        // width: 100%;
        // top: 0;
        // bottom: 0;
        // left: 0;
        // right: 0;
        // width: 50%;
        // margin: auto;
    }
    .customers-wrapp {
        background-color: $border_color;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        padding: 70px 105px;
        border-radius: 10px;
    }
    .customer {
        // margin: 20px;
        &:first-child {
            margin-right: 100px;
        }
    }
    .customer__btn {
        padding: 10px 30px;
        border-radius: 5px;
        // border: transparent;
        font-weight: bold;
    }
    .customer__btn--new {
        background-color: $btns_color;
    }
     .customer__btn--existing {
        background-color: $btns_secondary;
    }
</style>
