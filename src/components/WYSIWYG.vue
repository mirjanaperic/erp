<template>
    <div class="wysiwyg">
        <div class="wysiwyg__head">
            <select class="select--wysiwyg">
                <option value="0">Normal</option>
            </select>
            <img src="../assets/images/B.svg" alt="bold">
            <img src="../assets/images/I.svg" alt="I">
            <img src="../assets/images/U.svg" alt="u">
            <img src="../assets/images/attachment.svg" alt="attachment">
            <img src="../assets/images/ol.svg" alt="ol">
            <img src="../assets/images/ul.svg" alt="ul">
            <img src="../assets/images/T.svg" alt="T">
        </div>
        <textarea class="wysiwyg__body" rows="12"></textarea>
    </div>
</template>

<script>
export default {
    name: 'WYSIWYG'
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

    .wysiwyg {
        width: 100%;
    }
    .wysiwyg__head {
        display: flex;
        justify-content: flex-start;
        background-color: $secondary_color;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        img {
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .select--wysiwyg {
        background-color: $secondary_color;
        font-size: 12px;
        margin-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: auto;
        background-position: right 20px top 2em, right 10px top 1em;
        padding: 20px 40px 20px 10px;
    }
    .wysiwyg__body {
        background-color: $border_color;
        border: none;
        resize: none;
        color: $main_font_color;
        font-size: 12px;
        width: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

</style>