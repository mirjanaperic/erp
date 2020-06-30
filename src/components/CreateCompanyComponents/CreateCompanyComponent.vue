<template>
  <div class="create-company-component">
      <div class="create-body body-radius white-border">
        <form action="submit">
            <div class="input-wrapp">
                <div class="input-part input-part--2 required-wrapp">
                    <label for="name">Name</label>
                    <input type="text">
                    <span class="required">*</span>
                </div>
                <div class="input-part input-part--2">
                    <label for="discount">Discount amount</label>
                    <div class="input-spec-wrap">
                        <input class="input--special" type="text">
                        <button class="btn btn--forms">%</button>
                    </div>
                </div>
            </div>
            <div class="input-wrapp">
                <div class="input-part input-part--3">
                    <label for="name">Street</label>
                    <input type="text">
                </div>
                <div class="input-part input-part--3">
                    <label for="surname">ZIP</label>
                    <input type="text">
                </div>
                <div class="input-part input-part--3">
                    <label for="surname">City</label>
                    <input type="text">
                </div>
            </div>
            <div class="input-wrapp">
                <div class="input-part input-part--2">
                    <label for="surname">Phone</label>
                    <input type="text">
                </div>
                <div class="input-part input-part--2">
                    <label for="surname">Email</label>
                    <input type="text">
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>

export default {
    name: 'CreateCompanyComponent'
}
</script>

<style lang="scss">
    .create-company-component {
        width: 100%;
    }

</style>