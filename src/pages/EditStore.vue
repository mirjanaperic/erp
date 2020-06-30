<template>
    <div class="edit-store">
         <TopNav/>
        <div class="page-inner row">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>

            <div class="page-inner-part-2 full-width ">
                <div class="component-wrapp row">
                    <div class="large-component-part">
                        <div class="title-wrapp title-wrapp-rounded white-border">
                            <h2>Edit Store</h2> 
                        </div>

                         <div class="body-component-part body-radius white-border">
                            <EditStoreComponent/> 
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
                             <div class="title-wrapp title-wrapp--checkbox">
                                <input class="input-checkbox" type="checkbox">
                                <span class="checkbox-artificial checkbox-artificial--title" @click="$event.target.classList.toggle('checked')"></span>    
                                <h4>Customer email titles and content for different statuses</h4>
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
                <div class="coupons-wrapp">
                    <div class="tabs">
                        <a class="tab">Coupons</a>
                        <a class="tab">Services</a>
                        <a class="tab">Contracts</a>
                        <a class="tab">Orders</a>
                        <a class="tab">Checklists</a>
                        <a class="tab">Supplier Orders</a>
                        <a class="tab">Cashier System Logs</a>
                        <a class="tab">Transactions</a>
                        <a class="tab">Shifts Calendar</a>
                    </div>
                    <div class="title-wrapp">
                        <h2>Coupons</h2> 
                    </div>
                     <!-- Table search --> 
                    <div class="table-search">
                        <div class="entries-search-flex">
                            <div>
                                Show <span class="num-of-entries">10 <i class="arrow down arrow--entries"></i></span> entries
                            </div>

                            <div class="input-group">
                                <input class="table-search__input" type="text" placeholder="Search">
                                <button class="btn btn--table-search">
                                    <img src="../assets/images/search-icon.svg" alt="search-icon">
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- /table search -->
                    <CouponsComponent/> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'
import WYSIWYG from '@/components/WYSIWYG.vue'
import EditStoreComponent from '@/components/EditStoreComponents/EditStoreComponent.vue'
import InformationComponent from '@/components/EditStoreComponents/InformationComponent.vue'
import StatusComponent from '@/components/CreateStoreComponents/StatusComponent.vue'
import CouponsComponent from '@/components/EditStoreComponents/CouponsComponent.vue'


export default {
    name: 'EditStore',
    components: {
        TopNav,
        Navbar,
        WYSIWYG,
        EditStoreComponent,
        InformationComponent,
        StatusComponent,
        CouponsComponent
    }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_table-general.scss";
@import "../assets/scss/_title-wrapp.scss";
@import "../assets/scss/_page-inner.scss";
@import "../assets/scss/_checkbox.scss";


.body-component-part-inner {
    padding: 15px;
    background-color: $main_color;
}
.coupons-wrapp {
    margin: 52px 28px;
}

.title-wrapp--checkbox {
    display: flex;
    align-items: center;
}
.checkbox-artificial--title {
    margin-top: 4px;
}
</style>
