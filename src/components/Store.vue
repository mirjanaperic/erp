<template>
    <div class="store">
        <div class="store-wrapp">
            <div class="store-inner">
                <table class="">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <div class="logo-img-wrapp">
                                    <div class="store__logo-wrapp">
                                        <img class="store__logo" src="../assets/images/logo-white.svg" alt="logo-white">
                                    </div>
                                    <h4 class="store__name">Lev George</h4>
                                </div>
                                <div class="view-store-wrapp">
                                    <div>
                                        <img class="num-icon" src="../assets/images/num-icon.svg" alt="num-icon">
                                        <span>IRS ID: IRS_4231</span>
                                    </div>
                                    <router-link to="/editstore" class="btn btn--btns_color btns--store">View Store</router-link>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Today's revenue:</td>
                            <td>0€</td>
                        </tr>
                         <tr>
                            <td>Cash balance:</td>
                            <td>221€</td>
                        </tr>
                         <tr>
                            <td>Credit Card balance:</td>
                            <td>99.999,99€</td>
                        </tr>
                         <tr>
                            <td>Cashier status:</td>
                            <td class="status-open">OPEN</td>
                        </tr> 
                        <tr>
                            <td>
                                <img class="data-icon" src="../assets/images/user-purple.svg" alt="employee">
                                Employees:
                                </td>
                            <td>1</td>
                        </tr> 
                        <tr>
                            <td>
                                <img class="data-icon" src="../assets/images/customer.svg" alt="customers">
                                Customers:
                            </td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>
                                <img class="data-icon" src="../assets/images/customer.svg" alt="customers">
                                New customers today:
                            </td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Store'
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_btns.scss";
@import "../assets/scss/_table-general.scss";

.logo-img-wrapp {
    display: flex;
}
.store__logo-wrapp {
    max-width: 60px;
    padding: 10px;
    background-color: $border_secondary;
    border-radius: 5px;
    margin-right: 10px;

    img {
        margin: auto;
        display: block;
    }
}


.store__name {
    margin: 0 0 5px 0;
    vertical-align: top;
}
.store {
    max-width: 526px;

    th, td {
        background-color: $border_color;
    }
    th {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 2px solid $border_secondary;
    }
 
    td {
        border: 2px solid $border_secondary;
        padding: 5px;
        font-size: 14px;
    }

    tbody {
       td {
           padding: 5px 10px;
        }
    }

    td:nth-child(2) {
        background-color: $border_secondary;
        border-color: $border_color;
        text-align: center;
    }

    tr {
        &:last-of-type {
            td {
                &:first-of-type {
                    border-bottom-left-radius: 5px;
                }
                &:last-of-type {
                    border-bottom-right-radius: 5px;
                }
            }
        }
    }
}
.store-inner {
    padding: 15px;
    border-radius: 5px;
}
.view-store-wrapp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img, span {
        vertical-align: middle;
    }
}
.num-icon {
    margin-right: 10px;
}
.btns--store {
    border-radius: 5px;
    padding: 15px 75px;
    font-weight: bold;
}
.data-icon {
    margin-right: 5px;
}
</style>