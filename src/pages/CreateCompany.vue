<template>
     <div class="create-company">
        <TopNav/>
        <div class="page-inner row">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>

            <div class="page-inner-part-2 full-width">
                <div class="component-wrapp row">
                    <div class="large-component-part">
                         <div class="title-wrapp title-wrapp-rounded white-border">
                            <h2>Create Company</h2>
                        </div>
                         <div class="create-company-component-wrapp">
                            <CreateCompanyComponent/>
                        </div>
                    </div>
                    <div class="information-component-part">
                        <InformationComponent/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'
import CreateCompanyComponent from '@/components/CreateCompanyComponents/CreateCompanyComponent.vue'
import InformationComponent from '@/components/CreateCompanyComponents/InformationComponent.vue'


export default {
    name: 'CreateCompany',
     components: {
        Navbar,
        TopNav,
        CreateCompanyComponent,
        InformationComponent
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_title-wrapp.scss";
@import "../assets/scss/_forms.scss";
@import "../assets/scss/_page-inner.scss";


</style>