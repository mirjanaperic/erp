<template>
    <div class="action-logs">
      
        <!-- Table search -->
        <div class="table-search">
            <div class="entries-search-flex">
                <div>
                    Show <a class="num-of-entries">10 <i class="arrow down arrow--entries"></i></a> entries
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
        <table>       
            <thead>
                 <th>
                    Created At 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Status 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    Total 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </th>
                 <th>
                    User Name
                </th>
                 <th>
                    PDF
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>2019-12-10 16:17:34</td>
                    <td><span class="status-open">Open</span></td>
                    <td>0$</td>
                    <td>Store Manger User</td>
                    <td>
                        <div class="btn btn__table btn--edit">View PDF</div>
                    </td>
                </tr>
                <tr class="table-bottom">
                    <td>
                    Created At 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </td>
                 <td>
                    Status 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </td>
                 <td>
                    Total 
                    <i class="arrow down float-right"></i>
                    <i class="arrow up float-right"></i>
                </td>
                 <td>
                    User Name
                </td>
                 <td>
                    PDF
                </td> 
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
    </div>
</template>

<script>

export default {
    name: 'ActionLogs',
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_title-wrapp.scss";
@import "../../assets/scss/_tabs.scss";

.action-logs {
    // margin: 20px;
}
.btn__table {
    font-size: 12px;
}
</style>