<template>
    <div class="total">
        <div class="title-wrapp title-wrapp-rounded white-border">
            <h2>Total</h2>
        </div>
        <table class="csc-table-wrapp white-border">
           
                <tr>
                    <td>Cash Registry Total: </td>
                    <td>0$</td>
                </tr>
                <tr>
                    <td>Banknotes sum:</td>
                    <td>0.00$</td>
                </tr>
                <tr>
                    <td>Credit Card Registry Total:</td>
                    <td>90.999,00$</td>
                </tr>
                <tr>
                    <td colspan="2">Cashier status: <span class="status-open">OPEN</span></td>
                </tr>
            
        </table>
    </div>
</template>

<script>
export default {
    name: 'Total'
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";  

    .csc-table-wrapp {
        width: 100%;
        // border: 1px solid rgba(255, 255, 255, 0.2);
        // border-radius: 10px;
        // border-bottom-left-radius: 10px;
        // border-bottom-right-radius: 10px;
        
        td {
            border-bottom: 2px solid $lines_color;
            border-right: transparent;
            border-left: transparent;
            padding: 25px 10px;
            font-weight: bold;
        }
         td:nth-child(2) {
            background-color: $border_secondary;
            border-color: $border_color;
            text-align: center;
        }
         tr {
            &:last-of-type {
                td {
                    &:last-of-type {
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }
                }
            }
        }
    }
   
</style>