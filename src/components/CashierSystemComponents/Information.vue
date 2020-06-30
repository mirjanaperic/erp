<template>
    <div class="information">
         <div class="title-wrapp title-wrapp-rounded white-border">
            <h2>Information</h2>
        </div>
        <table class="csc-table-wrapp white-border">
            <tr>
                <td>Current amount of money:</td>
                <td class="td--special">0$</td>
            </tr>
            <tr>
                <td colspan="2" class="data-link">
                    <a href="#">Last Cashier System Action</a>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="data-link">
                    <a href="#">Last Cashier System Action</a>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn--full-width btn--information">Submit</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Information' 
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";  

.information {
    // margin: 0 10px;
    .data-link {
        font-weight: normal;
        a {
            text-decoration: underline;
        }
    }
     td:nth-child(2) {
        background-color: $border_secondary;
        border-color: $border_color;
        text-align: center;
        padding: 30px 40px;
    }
    
}
.btn--information {
    background: $btns_color;
    color: $main_font_color;
}
.csc-table-wrapp {
    td {
        font-size: 16px;
        vertical-align: middle;
    }
    // &:last-child > td {
    //     padding: 10px;
    // }
}


</style>
