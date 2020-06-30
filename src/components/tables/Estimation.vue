<template>
    <div>
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
                    Surname
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Address
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Zip Code
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    City
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Customer Since
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Email
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Company
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                <th>Action Links</th>
            </thead>

            <tbody>
                <tr>
                    <td>2019-12-10 16:17:34</td>
                    <td>Customer</td>
                    <td>Customer</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2019-12-10 16:17:34</td>
                    <td>customer5@mailinator.com</td>
                    <td>Test company</td>
                    <td>
                        <div class="btn btn__table btn--add">+Add Order</div>
                        <div class="btn btn__table btn--edit">Edit</div>
                        <div class="btn btn__table btn--delete">Delete</div>
                    </td>
                </tr>
                 <tr>
                    <td>2019-12-10 16:17:34</td>
                    <td>Customer</td>
                    <td>Customer</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2019-12-10 16:17:34</td>
                    <td>customer5@mailinator.com</td>
                    <td>Test company</td>
                    <td>
                        <div class="btn btn__table btn--add">+Add Order</div>
                        <div class="btn btn__table btn--edit">Edit</div>
                        <div class="btn btn__table btn--delete">Delete</div>
                    </td>
                </tr>
                 <tr>
                    <td>2019-12-10 16:17:34</td>
                    <td>Customer</td>
                    <td>Customer</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2019-12-10 16:17:34</td>
                    <td>customer5@mailinator.com</td>
                    <td>Test company</td>
                    <td>
                        <div class="btn btn__table btn--add">+Add Order</div>
                        <div class="btn btn__table btn--edit">Edit</div>
                        <div class="btn btn__table btn--delete">Delete</div>
                    </td>
                </tr>
                 <tr>
                    <td>2019-12-10 16:17:34</td>
                    <td>Customer</td>
                    <td>Customer</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2019-12-10 16:17:34</td>
                    <td>customer5@mailinator.com</td>
                    <td>Test company</td>
                    <td>
                        <div class="btn btn__table btn--add">+Add Order</div>
                        <div class="btn btn__table btn--edit">Edit</div>
                        <div class="btn btn__table btn--delete">Delete</div>
                    </td>
                </tr>

                 <tr class="table-bottom">
                    <td>Created At</td>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Address</td>
                    <td>Zip Code</td>
                    <td>City</td>
                    <td>Customer Since</td>
                    <td>Email</td>
                    <td>Company</td>
                    <td>Action Links</td>
                </tr>
                 <!-- Table pagination -->
                    <tr>
                        <td class="table-pagination" colspan="5">
                            <div class="row table-pagination__flex">
                                <div>
                                    Showing <b>1</b> to <b>8</b> of <b>8</b> entries  
                                </div> 
                                
                                <div>
                                    <a href="#">
                                        <img src="../assets/images/arrow-left-gray.svg" alt="arrow-left-gray">
                                    </a>
                                    <span class="page-num">1</span>
                                    <a href="#">
                                        <img src="../assets/images/arrow-right-gray.svg" alt="arrow-left-gray">
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
    name: "Estimation"
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_btns.scss"; 
@import "../../assets/scss/_table-general.scss";


</style>