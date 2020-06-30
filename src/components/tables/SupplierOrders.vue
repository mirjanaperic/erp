<template>
    <div>
        <div class="supplier-orders-wrapp">
            <!-- <div class="tabs">
                <a class="tab">Supplier orders</a>
                <a class="tab">Logs</a>
            </div>

            <div class="title-wrapp">
                <h2>Supplier Orders</h2>             
            </div> -->
                
            <!-- Table search --> 
            <div class="table-search">
                <div class="entries-search-flex">
                    <div>
                        Show <span class="num-of-entries">10 <i class="arrow down arrow--entries"></i></span> entries
                    </div>

                    <div class="input-group">
                        <input class="table-search__input" type="text" placeholder="Search">
                        <button class="btn btn--table-search">
                            <img src="../../assets/images/search-icon.svg" alt="search-icon">
                        </button>
                    </div>
                </div>
            </div>
            <!-- /table search -->

            <table class="supplier-orders">   
                <thead>
                    <tr>
                        <th>
                            Created At 
                            <i class="arrow down float-right"></i>
                            <i class="arrow up float-right"></i>
                        </th>
                        <th>
                            Action
                            <i class="arrow down float-right"></i>
                            <i class="arrow up float-right"></i>
                        </th>
                        <th>
                            Description
                            <i class="arrow down float-right"></i>
                            <i class="arrow up float-right"></i>
                        </th>
                        <th>Store Name</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b> Technician_User</div>
                            <div><b>Action:</b> order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b>Technician_User</div>
                            <div><b>Action: </b>order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b> Technician_User</div>
                            <div><b>Action: </b>order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b> Technician_User</div>
                            <div><b>Action: </b>order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b> Technician_User</div>
                            <div><b>Action: </b>order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b> Technician_User</div>
                            <div><b>Action: </b>order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b>Technician_User</div>
                            <div><b>Action: </b>order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                    <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2019-12-10 16:17:34</td>
                        <td>
                            <div><b>User: </b>Technician_User</div>
                            <div><b>Action: </b> order_new</div>
                        </td>
                        <td>
                            <div><b>Action description:</b> Order ID:ST0002 Order status: Estimation</div>
                            <div><b>Logged user name:</b> Technician User, Logged user role: technician</div>
                        </td>
                        <td>
                            <a href="#" class="store-link">
                                Store Ape
                            </a>
                        </td>
                        <td>
                            <div>Store manager</div> 
                            <div>User</div>
                        </td>
                    </tr>
                    <tr class="table-bottom">
                        <td>
                            Created At <i class="arrow up float-right"></i><i class="arrow down float-right"></i>
                        </td>
                        <td>Action</td>
                        <td>Description</td>
                        <td>Store Name</td>
                        <td>User Name</td>
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
                                        <img src="../../assets/images/arrow-left-gray.svg" alt="arrow-left-gray">
                                    </a>
                                    <span class="page-num">1</span>
                                    <a href="#">
                                        <img src="../../assets/images/arrow-right-gray.svg" alt="arrow-right-gray">
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <!-- /table pagination -->
                </tbody>
            </table>
            
        <!-- </div> -->
        </div>

    </div>
</template>

<script>

export default {
    name: 'SupplierOrders'
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_table-general.scss";
@import "../../assets/scss/_tabs.scss";
@import "../../assets/scss/_title-wrapp.scss";


.supplier-orders-wrapp {
    width: 100%;
}
.store-link {
    text-decoration: underline;
}

</style>