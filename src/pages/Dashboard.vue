<template>
    <div class="dashboard">
        <TopNav/>
        <div class="page-inner">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>
            <div class="page-inner-part-2">
                <div class="suppliers-orders-wrapp">
                     <div class="tabs">
                        <a class="tab">Supplier orders</a>
                        <a class="tab">Logs</a>
                    </div>

                    <div class="title-wrapp">
                        <h2>Supplier Orders</h2>             
                    </div>
                    <SupplierOrders/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SupplierOrders from '@/components/tables/SupplierOrders.vue'
import TopNav from '@/components/TopNav.vue'


export default {
    name: 'Dashboard',
    components: {
      Navbar,
      SupplierOrders,
      TopNav
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_page-inner.scss";  

.suppliers-orders-wrapp {
    margin: 52px 28px;
}

</style>