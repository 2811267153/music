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
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 0px;
    width: 100%;
}
</style>
