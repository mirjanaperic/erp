<template>
    <div class="coupons-component">
        <table>
            <thead>
                <th>
                    Created At 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Name
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Code
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Expires On
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Usage Count
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Action Links
                </th>
                
            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td>Discount 200€</td>
                    <td>45697</td>
                    <td>2019-08-31</td>
                    <td>32</td>
                    <td>
                        <div class="btn btn__table btn--edit btn--edit--diff">Edit</div>
                        <div class="btn btn__table btn--delete">Delete</div>
                    </td>
                </tr>
                 <tr>
                    <td></td>
                    <td>Discount 30%</td>
                    <td>13568</td>
                    <td>2019-08-31</td>
                    <td>9</td>
                    <td>
                        <div class="btn btn__table btn--edit btn--edit--diff">Edit</div>
                        <div class="btn btn__table btn--delete">Delete</div>
                    </td>
                </tr>
                 <tr class="table-bottom">
                    <td>Created At</td>
                    <td>Name</td>
                    <td>Code</td>
                    <td>Expires On</td>
                    <td>Usage Count</td>
                    <td>Action Links</td>
                </tr>
                 <!-- Table pagination -->
                    <tr>
                        <td class="table-pagination" colspan="6">
                            <div class="row table-pagination__flex">
                                <div>
                                    Showing <b>1</b> to <b>8</b> of <b>8</b> entries  
                                </div> 
                                
                                <div>
                                    <a href="#">
                                        <img src="../../assets/images/arrow-left-gray.svg" alt="arrow-left-gray">
                                    </a>
                                    <span class="page-num">1</span>
                                    <a href="#">
                                        <img src="../../assets/images/arrow-right-gray.svg" alt="arrow-left-gray">
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <!-- /table pagination -->
            </tbody>
        </table>
        
    </div>
</template>

<script>

export default {
    name: "CouponsComponent"
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_btns.scss"; 
@import "../../assets/scss/_table-general.scss";

.coupons-component {
    width: 100%;
}
</style>