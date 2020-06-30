<template>
    <div class="cashier-system">
        <TopNav/> 
        <div class="page-inner">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>
            <div class="page-inner-part-2">
                <div class="row cs-flex-wrapp">
                    <div class="cs-part-1">
                        <CSComponent/>
                    </div>
                   <div class="cs-part-2">
                        <Total/>
                   </div>
                   <div class="cs-part-3">
                       <Information/>
                   </div>
                </div>
                <div class="action-logs-wrapp">
                    <div class="tabs">
                    <a class="tab">Action Logs</a>
                    <a class="tab">Transactions</a>
                </div>
                <div class="title-wrapp">
                    <h2>Action Logs</h2>
                </div>
                <ActionLogs/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Navbar from '@/components/Navbar.vue'
import CSComponent from '@/components/CashierSystemComponents/CSComponent.vue'
import ActionLogs from '@/components/tables/ActionLogs.vue'
import Total from '@/components/CashierSystemComponents/Total.vue'
import Information from '@/components/CashierSystemComponents/Information.vue'


export default {
    name: 'CashierSystem',
    components: {
        TopNav,
        Navbar,
        CSComponent,
        ActionLogs,
        Total,
        Information
    }
}
</script>
 
<style lang="scss">
@import "../assets/scss/_variables.scss";  
@import "../assets/scss/_page-inner.scss";  
@import "../assets/scss/_table-general.scss";  
@import "../assets/scss/_tabs.scss";  


.cs-flex-wrapp {
    justify-content: flex-start;
    align-items: center;
    margin: 40px 0; 
}
.cs-part-1 {
    flex-basis: 45%;
    max-width: 45%; 
    margin-left: 30px;
}
.cs-part-2 {
    flex-basis: 25%;
    max-width: 25%;
    margin-left: 30px;
}
.cs-part-3 {
    flex-basis: 25%;
    max-width: 25%;
    margin-left: 30px;
    margin-right: 30px;
}

.action-logs-wrapp {
    margin: 40px 30px;
}

</style>
