<template>
    <div class="show-stores">
        <TopNav/>
        <div class="page-inner">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>
            <div class="page-inner-part-2">
                <div class="stores-wrapp">
                    <div class="title-wrapp white-border title-wrapp-rounded">
                        <h2>Stores</h2>             
                    </div>

                    <div class="body-component-part body-radius white-border body--stores">
                        <Store/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'
import Store from '@/components/Store.vue'


export default {
    name: 'ShowStores',
    components: {
        TopNav,
        Navbar,
        Store
    }
}
</script>

<style lang="scss">
@import "../assets/scss/_page-inner.scss";  
@import "../assets/scss/_title-wrapp.scss";  

.stores-wrapp {
    margin: 52px 28px;
}
.body--stores {
    background-color: $main_color;
}
</style>