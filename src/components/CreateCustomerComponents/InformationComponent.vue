<template>
    <div>
        <div class="title-wrapp title-wrapp-rounded">
            <h2>Information</h2>
        </div>
        <div class="information-body">
            <div class="checkbox-wrapp--info-create">
                <input class="input-checkbox" type="checkbox">
                <span class="checkbox-artificial" @click="$event.target.classList.toggle('checked')"></span>
                <span class="checkbox-text">Agree to receive emails</span>
            </div>
            <button class="btn btn--full-width btn--btns_color btn--information">Create</button>
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
@import "../../assets/scss/_page-inner.scss";
@import "../../assets/scss/_checkbox.scss";


.information-component {
   width: 100%;
}
.checkbox-wrapp--info-create {
    margin-bottom: 10px;
}
</style> 