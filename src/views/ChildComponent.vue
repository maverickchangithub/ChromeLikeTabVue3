<template>
    <div>
        Child
    </div>
</template>
<script setup>
    const refresh = () => {
        console.log('hello from child')
    }
    defineExpose({
        refresh
    })
</script>
<style scoped>

</style>