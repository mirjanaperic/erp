<template>
    <div class="csc">
        <div class="title-wrapp title-wrapp-rounded white-border">
            <h2>Cashier System</h2>
        </div>
        <div class="csc-body-wrapp">
            <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>

            <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
            <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
            <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
            <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
            <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>

             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>
             <div class="box"> 
                <div class="box__sum">1c</div>
                <div class="box__bottom-wrapp">
                    <div class="box__num">0</div>
                    <div class="box__calc">
                        <span class="plus">+</span>
                        <span class="minus">-</span>
                    </div>
                </div>
            </div>

            <button class="btn box btn--box">
                Reset
            </button>


        </div>
    </div>
</template>

<script>
export default {
    name: 'CSComponent'
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";  
@import "../../assets/scss/_title-wrapp.scss";  

    .csc-body-wrapp {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: $main_color;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 80px;
    }
    .box {
        border: none;
        min-width: 96px;
        margin: 15px 15px 0 15px;
        font-size: 14px;
    }
    .btn--box {
        background-color: $btns_secondary;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        transition: .4s ease;
        
        &:hover {
            background-color: $secondary-color;
        }
    }
    .box__bottom-wrapp {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .box__sum {
        background-color: $secondary_color;
        padding: 2px 2px 2px 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .box__num {
        background-color: $border_color;
        max-width: 80%;
        flex-basis: 80%;
        padding: 8px 0 10px 5px;
        border-bottom-left-radius: 5px;
    }
    .box__calc {
        background-color: $secondary_color;
        padding: 0 5px;
        max-width: 20%;
        flex-basis: 20%;
        border-bottom-right-radius: 5px;  
    }
    .plus {
        float: left;
        cursor: pointer;
    }
    .minus {
        cursor: pointer;
    }

</style>