<template>
    <div>
        <nav class="sidebar">
            <router-link to="/estimation" class="btn-navbar-link">
                <button class="btn btn--navbar">
                    <img class="plus-sign" src="../assets/images/plus-sign.svg" alt="plus-sign">
                    <span>New Cost Estimation</span>
                </button>
            </router-link>
            <ul class="navbar">
                <div class="sidebar-heading--diff">Selected store: </div>
                <li class="sidebar-item-colored">
                    <router-link to="/storenotset" class="nav-link--colored">
                        <span>Store Ape</span>
                    </router-link>
                </li>
                <li class="sidebar-item"> 
                   <a href="#" class="nav-link" @click="calendarHighlighted = !calendarHighlighted" :class="{ highlight: calendarHighlighted }">
                        <!-- <vue-fontawesome class="nav-icon" icon="calendar" size="1" color="#3C4379"></vue-fontawesome> -->
                        <img class="nav-icon" src="../assets/images/calendar-icon.svg" alt="caledar-icon">
                        <span>Shifts Calendar</span>
                   </a>
                </li>
                <li class="sidebar-item sidebar-item--dashboard">
                    <router-link to="/dashboard" class="nav-link" @click="dashboardHighlighted = !dashboardHighlighted" :class="{ highlight: dashboardHighlighted }">
                        <img class="nav-icon" src="../assets/images/dashboard-icon.svg" alt="dashboard-icon">
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <div class="sidebar-heading">
                    Stores
                </div> 
                <li class="sidebar-item">
                    <a href="#" class="nav-link" @click="stores.my_store = !stores.my_store, storesHighlighted = !storesHighlighted" :class="{ highlight: storesHighlighted }">
                        <img class="nav-icon" src="../assets/images/store-icon.svg" alt="store-icon">
                        <span>My Store</span>
                        <i class="arrow down float-right arrow--nav"></i>
                    </a>
                    <div class="collapse" v-if="!stores.my_store">
                        <router-link to="/showstores" class="collapsed-item">
                            Show All
                        </router-link>
                        <router-link to="/createstore" class="collapsed-item">
                            Add New
                        </router-link>
                    </div>
                </li>
                <li class="sidebar-item sidebar-item--checklist">
                   <a href="#" class="nav-link" @click="stores.checklists = !stores.checklists, checklistHighlighted = !checklistHighlighted" :class="{ highlight: checklistHighlighted }">
                        <img class="nav-icon" src="../assets/images/checklist-icon.svg" alt="checklist-icon">
                        <span>Checklists</span>
                        <i class="arrow down float-right arrow--nav"></i>
                    </a>
                    <div class="collapse" v-if="!stores.checklists">
                        <a href="#" class="collapsed-item">
                            Show All
                        </a>
                        <a href="#" class="collapsed-item">
                            Add New
                        </a>
                   </div>
                </li>
                <div class="sidebar-heading">
                    Items
                </div>
                <li class="sidebar-item sidebar-item--items">
                    <a href="#" class="nav-link"  @click="items.my_items = !items.my_items, itemsHighlighted = !itemsHighlighted" :class="{ highlight: itemsHighlighted }">
                        <img src="../assets/images/items-icon.svg" class="nav-icon" alt="items-icon">
                        <span>Items</span>
                        <i class="arrow down float-right arrow--nav"></i>
                    </a>
                     <div class="collapse" v-if="!items.my_items">
                        <a href="#" class="collapsed-item">
                            Show All
                        </a>
                         <router-link to="/createitem" class="collapsed-item">
                            Add New
                        </router-link>
						<router-link to="/items" class="collapsed-item">
							Import CSV
						</router-link>
                    </div>
                </li>
                <div class="sidebar-heading">
                    Customers
                </div>
                <li class="sidebar-item">
                    <a href="#" class="nav-link"  @click="customers.my_customers = !customers.my_customers, customersHighlighted = !customersHighlighted" :class="{ highlight: customersHighlighted }">
                        <img class="nav-icon" src="../assets/images/customers-icon.svg" alt="customers-icon">
                        <span>Customers</span>
                        <i class="arrow down float-right arrow--nav"></i>
                    </a>
                     <div class="collapse" v-if="!customers.my_customers">
                        <a href="#" class="collapsed-item" @click="selected = 15">
                            Show All
                        </a>
                         <router-link to="/createcustomer" class="collapsed-item">
                            Add New
                        </router-link>
                   </div>
                </li>
                <li class="sidebar-item sidebar-item--companies">
                   <a href="#" class="nav-link" @click="customers.companies = !customers.companies, companiesHighlighted = !companiesHighlighted" :class="{ highlight: companiesHighlighted }">
                        <img class="nav-icon" src="../assets/images/companies-icon.svg" alt="companies-icon">
                        <span>Companies</span>
                        <i class="arrow down float-right arrow--nav"></i>
                   </a>
                   <div class="collapse" v-if="!customers.companies">
                        <a href="#" class="collapsed-item">
                            Show All
                        </a>
                        <router-link to="/createcompany" class="collapsed-item">
                            Add New
                        </router-link>
                   </div>
                </li>     
            </ul> 
       </nav>
    </div> 
</template>

<script>
export default {
    name: 'Navbar',

     data() {
         return {
			dashboardHighlighted: false,
			calendarHighlighted: false,

			stores: {
				my_store: true,
				checklists: true,
				storeHighlighted: false,
				checklistHighlighted: false
			},
			items: {
				my_items: true,
				itemsHighlighted: false
			},
			customers: {
				my_customers: true,
				companies: true,
				customersHighlighted: false,
				companiesHighlighted: false
			},


         }
    },   
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_btns.scss";

    .sidebar {
        background-color: $secondary_color;
        min-width: 220px;
        min-height: 100vh;

        ul {
            padding-left: 0;
        }
        .sidebar-item-colored {
            background-color: $border_color;
            margin-bottom: 25px;
            font-size: 16px;
            font-weight: bold;
            a {
                padding: 8px 20px;
            }
        }
    }
    .navbar {
        margin-top: 10px;
    }
    .nav-link {
        width: 220px;
        display: block;
        padding: 15px 20px 15px 10px;
        border-left: 10px solid transparent;
        font-size: 14px;
    }
    .nav-link--colored {
        width: 220px;
        display: block;
        padding: 15px 20px 15px 10px;
    }
    .plus-sign {
        vertical-align: middle;
        margin-right: 8px;
    }
    .btn--navbar {
        background-color: $btns_color;
        width: 100%;
        color: $main_font_color;
        font-weight: bold;
        padding: 25px 0;
        transition: .4s ease;

         &:hover {
            background-color: $secondary_color;
        }
    }
  
    .btn-navbar-link {
        padding: 20px 0;       
    }
    .sidebar-item--dashboard {
        margin-bottom: 10px;
        border-bottom: 1px solid $lines_color;
    }
    .sidebar-item--items {
        margin-bottom: 10px;
        border-bottom: 1px solid $lines_color;
    }
    .sidebar-item--checklist {
        margin-bottom: 17px;
        border-bottom: 1px solid $lines_color;
    }
    .sidebar-item--companies {
        border-bottom: 1px solid $lines_color;
    }
    .sidebar-heading {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        padding: 15px 20px;
    }
    .sidebar-heading--diff {
        font-size: 12px;
        padding: 9px 20px;
    }
    .arrow--nav {
        margin-top: 3px;
    }
    .nav-icon {
        margin-right: 15px;
        transition: .4s ease;
    }
    .collapse {
        transition: .4s ease;
        padding: 0;
        max-height: 10em;
        overflow: hidden;
    }
    .is-closed .collapse {
        max-height: 0;
    }
    .collapsed-item {
        display: block;
        padding: 15px 0 15px 30px;
        background-color: $main_color;
        margin-bottom: 2px;
        border-left: 10px solid transparent;
        font-size: 14px;
    }
    .nav-link:hover .nav-icon {
        filter: brightness(0) invert(1);
    }
    .nav-link:hover {
        background-color: $btns_color;
    } 
    .highlight {
        background-color: $list_item_click;
        border-left-color: $btns_color;
    }
    .highlightBorder {
        border-left-color: $btns_color;
	}
	
.router-link-active {
	background-color: $list_item_click;
	border-left-color: $btns_color;
}
.collapsed-item + .router-link-active {
	border-left-color: $btns_color;
}
</style>

