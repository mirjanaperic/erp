<template>
    <div class="dashboard">
        <TopNav/>
        <div class="page-inner">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>
            <div class="page-inner-part-2">
                <div class="items-wrapp">
                    <div class="title-wrapp title-wrapp-rounded"> 
                        <h2>Items</h2>             
                    </div>
					
                    <Items/> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Items from '@/components/tables/Items.vue'
import TopNav from '@/components/TopNav.vue'


export default {
    name: 'Dashboard',
    components: {
      Navbar,
      Items,
      TopNav
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_page-inner.scss";  
@import "../assets/scss/_title-wrapp.scss";  

.items-wrapp {
    margin: 52px 28px;
}

</style>