<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
#tab-bar{
    height: 50px;
    position: sticky;
    bottom: 10px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 0px auto;
    width:  calc(100% - 5%);
    background-color: rgb(208,217,234);
    border-radius: 8px;
    overflow: hidden;
}
</style>
