<template>
  <div class="create-customer-component">
      <div class="create-body body-radius white-border">
            <form action="submit">
                <div class="input-wrapp">
                    <div class="input-part input-part--2 required-wrapp">
                        <label for="name">Name</label>
                        <input type="text" v-model="testValue1" :class="applyInputStyle(testValue1)">
                        <span class="required">*</span>
                    </div>
                    <div class="input-part input-part--2 required-wrapp">
                        <label for="surname">Surname</label>
                        <input type="text" v-model="testValue2" :class="applyInputStyle(testValue2)">
                        <span class="required">*</span>
                    </div>
                </div>
                <div class="input-wrapp">
                    <div class="input-part input-part--3">
                        <label for="name">Address</label>
                        <input type="text" v-model="testValue3" :class="applyInputStyle(testValue3)">
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">City</label>
                        <input type="text" v-model="testValue4" :class="applyInputStyle(testValue4)">
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">ZIP Code</label>
                        <input type="text" v-model="testValue5" :class="applyInputStyle(testValue5)">
                    </div>
                </div>
                <div class="input-wrapp">
                    <div class="input-part input-part--3">
                        <label for="surname">Phone</label>
                        <input type="text" v-model="testValue6" :class="applyInputStyle(testValue6)">
                    </div>
                    <div class="input-part input-part--3">
                        <label for="surname">Email</label>
                        <input type="text" v-model="testValue7" :class="applyInputStyle(testValue7)">
                    </div>
                    <div class="input-part input-part--3">
                        <label for="select-company">Select Company</label>
                        <select name="select-company" id="select-company">
                            <option value="0"></option>
                        </select>
                    </div>
                </div>
                <div class="input-wrapp">
                    <div class="input-part input-part--2">
                        <label for="vat">VAT</label>
                        <input type="text" v-model="testValue8" :class="applyInputStyle(testValue8)">
                    </div>
                    <div class="input-part input-part--2">
                        <label for="discount">Discount</label>
                        <div class="input-spec-wrap">
                            <input class="input--special" type="text" v-model="testValue9" :class="applyInputStyle(testValue9)">
                            <button class="btn btn--forms">%</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  </div>
</template>

<script>
export default {
    name: 'CreateCustomerComponent',
     data() {
        return {
			testValue1: '',
			testValue2: '',
            testValue3: '',
            testValue4: '',
            testValue5: '',
            testValue6: '',
            testValue7: '',
            testValue8: '',
			testValue9: ''
        }
    },

    methods: {

		applyInputStyle: function (targetInput) { 
			return [targetInput && targetInput.length > 0  ?  'input-has-value-style' : 'input-no-value-style']
		}
    }
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_checkbox.scss";
@import "../../assets/scss/_forms.scss";

.create-customer-component {
    width: 100%;
}

.checkbox-wrapp--info {
    margin-bottom: 20px;
}

.input-has-value-style {
   background-color: $input_light;
}

.input-no-value-style {
   border: 1px solid rgba(216, 52, 52, 0.6);
}
</style>