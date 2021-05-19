<template>
    <div id="search-rec">
        <span>搜索历史</span>
        <div class="rec-info"></div>
    </div>
</template>

<script>
export default {
    name: 'search-rec'
}
</script>

<style scoped>
#search-rec{
    margin: 3% 0;
}
.rec-info{
    margin-top: 2%;
    background-color: #fff;
    width: 100%;
    height: 20vh;
    border-radius: 8px;
}
</style>