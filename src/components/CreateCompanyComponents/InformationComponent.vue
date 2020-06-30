<template>
  <div>
      <div class="title-wrapp title-wrapp-rounded">
            <h2>Information</h2>
        </div>
        <div class="information-body">
            <label for="discount-type" class="label--discount-count">Discount type</label>
                <select name="discount-type" class="select--discount-type">
                    <option value="0">Fixed</option>
                </select>
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
@import "../../assets/scss/_title-wrapp.scss";
@import "../../assets/scss/_page-inner.scss";

.information-body {
    padding: 5px 10px 10px 10px;
}
.label--discount-count {
    margin: 5px 0;
}
.btn--information {
    padding: 15px 10px;
}
.select--discount-type {
    margin-block: 12px;
}
</style>