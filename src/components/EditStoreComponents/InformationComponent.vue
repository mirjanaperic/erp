<template>
    <div class="information-component">
        <div class="title-wrapp title-wrapp-rounded">
            <h2>Information</h2>
        </div>
        <div class="information-body--store">
             <div class="checkbox-wrapp--info checkbox-wrapp--full-width">
                <input class="input-checkbox" type="checkbox">
                <span class="checkbox-artificial" @click="$event.target.classList.toggle('checked')"></span>
                <span class="checkbox-text">Warehouse</span>
            </div>
            <div class="information-body-bottom">
                <button class="btn btn--full-width btn--btns_color btn--information">Update</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InformationComponent'
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_forms.scss";
@import "../../assets/scss/_checkbox.scss";
@import "../../assets/scss/_page-inner.scss";

    .checkbox-wrapp {
        margin: 0 0 50px 0;
    }
    .checkbox-wrapp--full-width {
        background-color: $border_color;
        // padding: 15px 50px 15px 10px;
    }
    .checkbox-wrapp--info {
        padding: 15px 50px 15px 15px;
    }
    .checkbox-wrapp--btn {
        background-color: $border_color;
        padding: 15px 50px 15px 10px;
        border-radius: 5px;
        margin-bottom: 15px;
        .checkbox-text {
            font-size: 16px;
            vertical-align: middle;
        }
    }
    .label--discount-type {
        margin: 0 0 5px;
    }
  
    .information-body-bottom {
        padding: 15px;
        background-color: $main_color;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .information-component {
        width: 100%;
    }
    .information-body--store {
        .checkbox-wrapp--info {
            margin-bottom: 0;
        }
    }
</style>

