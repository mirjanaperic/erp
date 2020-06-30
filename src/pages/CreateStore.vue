<template>
  <div class="create-store">
      <TopNav/>
        <div class="page-inner row">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>

            <div class="page-inner-part-2 full-width ">
                <div class="component-wrapp row">
                    <div class="large-component-part">
                         <div class="title-wrapp title-wrapp-rounded white-border">
                            <h2>Create Store</h2>
                        </div>

                         <div class="body-component-part body-radius white-border">
                            <CreateStoreComponent/> 
                            <div class="body-component-part-inner">
                                <label for="terms-and-conditions">Terms & Conditions</label>
                                <WYSIWYG/>
                                <div class="wysiwyg-wrapper-3">
                                    <div class="wysiwyg-wrapp">
                                        <label for="note">Note</label>
                                        <WYSIWYG/>
                                    </div>
                                    <div class="wysiwyg-wrapp">
                                        <label for="note">Note</label>
                                        <WYSIWYG/>
                                    </div>
                                    <div class="wysiwyg-wrapp">
                                        <label for="note">Note</label>
                                        <WYSIWYG/>
                                    </div>
                                </div>
                            </div>
                             <div class="title-wrapp title-wrapp--diff">
                                <h5>Customer email titles and content for different statuses</h5>
                            </div>
                                <div class="tabs tabs--no-border-radius">
                                <a class="tab">Estimation</a>
                                <a class="tab">Processing</a>
                                <a class="tab">Repaired</a>
                                <a class="tab">Canceled</a>
                                <a class="tab">Paid</a>
                            </div>
                            <div class="title-wrapp">
                                <h2>Estimation</h2>             
                            </div>
                            <StatusComponent/>
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
import CreateStoreComponent from '@/components/CreateStoreComponents/CreateStoreComponent.vue'
import InformationComponent from '@/components/CreateStoreComponents/InformationComponent.vue'
import StatusComponent from '@/components/CreateStoreComponents/StatusComponent.vue'
import WYSIWYG from '@/components/WYSIWYG.vue'


export default {
    name: 'CreateStore', 
    components: {
        Navbar,
        TopNav,
        CreateStoreComponent,
        InformationComponent,
        WYSIWYG,
        StatusComponent
    }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_title-wrapp.scss";
@import "../assets/scss/_page-inner.scss";
@import "../assets/scss/_tabs.scss";


.body-component-part-inner {
    padding: 15px;
    background-color: $main_color;
}

.wysiwyg-wrapper-3 {
    display: flex;
    justify-content: space-between;
}
.wysiwyg-wrapp {
    flex-basis: 32%;
    max-width: 32%;
}
.tabs--no-border-radius {
    border-radius: 0;
    border-top: 1px solid $lines_color;
}


</style>
