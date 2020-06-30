<template>
  <div class="store-not-set">
       <TopNav/>
       <div class="page-inner">
            <div class="page-inner-part-1">
                <Navbar/>
            </div>

            <div class="page-inner-part-2">
                <div class="store-not-set-wrapp">
                    <div class="store-not-set-img-wrapp">
                        <img src="../assets/images/store-not-set.png" alt="store-not-set">
                    </div>
                    <h1 class="store-not-set__title">Store Not Set</h1>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'

export default {
    name: 'StoreNotSet',
    components: {
        Navbar,
        TopNav
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_page-inner.scss";
    .store-not-set {
        position: relative;
    }
    .store-not-set-wrapp {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .store-not-set-img-wrapp {
        background-color: $main_color;
        padding: 40px;
        max-width: 988px;
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            height: auto;
        }
    }

.store-not-set__title {
    font-size: 50px;
    font-weight: bold;
}
</style>