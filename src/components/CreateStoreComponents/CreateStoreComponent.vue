<template>
    <div class="create-store-component">
        <div class="create-store-body">
            <form action="submit">
                <div class="input-wrapp">
                    <div class="input-part input-part--4 required-wrapp">
                        <label for="name">Name</label>
                        <input type="text">
                        <span class="required">*</span>
                    </div>
                    <div class="input-part input-part--4">
                        <label for="discount">IRS ID</label>
                        <input type="text">
                    </div>
                    <div class="input-part input-part--4">
                        <label for="discount">Store Fee (%)</label>
                        
                    <div class="input-spec-wrap">
                            <input class="input--special" type="text">
                            <div class="btn--calc">
                                <div class="plus">+</div>
                                <div class="minus">-</div>
                            </div>
                            <button class="btn btn--forms">%</button>
                        </div>
                    </div>
                    <div class="input-part input-part--4">
                        <label for="discount">Price per hour (€)</label>
                        <div class="input-spec-wrap">
                            <input class="input--special" type="text">
                            <div class="btn--calc">
                                <div class="plus">+</div>
                                <div class="minus">-</div>
                            </div>
                            <button class="btn btn--forms">%</button>
                        </div>
                    </div>
                </div>
                <div class="input-wrapp">
                    <div class="input-part input-part--2">
                        <label for="name">Shifts Calendar Embed</label>
                        <input type="text">
                    </div>
                    <div class="input-part input-part--2">
                        <label for="surname">Suppliers Document (URL)</label>
                        <input type="text">
                    </div>
                
                </div>
                <div class="input-wrapp">
                    <div class="input-part input-part--3">
                        <label for="surname">VAT</label>
                        <div class="input-spec-wrap">
                            <input class="input--special" type="text">
                            <div class="btn--calc">
                                <div class="plus">+</div>
                                <div class="minus">-</div>
                            </div>
                            <button class="btn btn--forms">%</button>
                        </div>
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">Margin</label>
                        <div class="input-spec-wrap">
                            <input class="input--special" type="text">
                            <div class="btn--calc">
                                <div class="plus">+</div>
                                <div class="minus">-</div>
                            </div>
                            <button class="btn btn--forms">%</button>
                        </div>
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">ZIP</label>
                        <input type="text">
                    </div>
                </div>
                <div class="input-wrapp">
                    <div class="input-part input-part--3">
                        <label for="surname">Address</label>
                        <input type="text">
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">Phone</label>
                        <input type="text">
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">City</label>
                        <input type="text">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateStoreComponent'
}
</script>

<style lang="scss">
@import "../../assets/scss/_page-inner.scss";
@import "../../assets/scss/_btns.scss";

    .create-store-component {
        width: 100%;
    }
    .create-store-body {
        padding: 15px;
        background-color: $main_color;
    }

   

</style>