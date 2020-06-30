<template>
     <div class="create-customer">
        <TopNav/>
        <div class="page-inner row">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>

            <div class="page-inner-part-2 full-width">
                <div class="component-wrapp row">
                    <div class="large-component-part">
                         <div class="title-wrapp title-wrapp-rounded white-border">
                            <h2>Create Customer</h2>
                        </div>
                        <CreateCustomerComponent/> 
                    </div>
                    <div class="information-component-part">
                        <InformationComponent/> 
                    </div>
                </div>
            </div>
        </div>
        <!-- <PopUpCustomer/> -->
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'
import CreateCustomerComponent from '@/components/CreateCustomerComponents/CreateCustomerComponent.vue'
import InformationComponent from '@/components/CreateCustomerComponents/InformationComponent.vue'
// import PopUpCustomer from '@/pages/PopUpCustomer.vue'



export default {
    name: 'CreateCustomer',
     components: {
        Navbar,
        TopNav,
        CreateCustomerComponent,
        InformationComponent,

        // PopUpCustomer
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_title-wrapp.scss";
@import "../assets/scss/_forms.scss";
@import "../assets/scss/_btns.scss";
@import "../assets/scss/_page-inner.scss";




</style>
