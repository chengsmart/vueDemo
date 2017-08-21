<template>
    <div id="email">
        <h1>这是第二个页面</h1>
        <a> 开发 {{ author }} </a>
        <p> 邮箱{{email}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                author: '小帅',
                email: 'chengshuai.tj@gmail.com',
            };
        }
    };
</script>

<style>
</style>