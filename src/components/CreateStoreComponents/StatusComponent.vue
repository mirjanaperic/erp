<template>
    <div class="status-component">
        <label for="status-title">Status Title</label>
		<textarea class="status-content status-content-title" name="status-content-title" cols="30" rows="2"></textarea>
        <label for="status-title">
            Order Paid Status Content
        </label> 
		<textarea class="status-content status-content-body" name="status-content" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    name: 'StatusComponent'
}
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss"; 

.status-component {
    width: 100%;
    background-color: $main_color;
    padding: 15px;
}
.status-content {
	background-color: $border_color;
    border-radius: 5px;
	font-size: 16px;
	width: 100%;
	border: none;
	resize: none;
	color: $main_font_color;
	font-size: 16px;
	padding: 10px;
}

.status-content-body {
    min-height: 377px;
}
</style>