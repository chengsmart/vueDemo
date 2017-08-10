<template>
    <div id="democomponent">
        <h1>I am a title.</h1>
        <a> my name is {{ author }} </a>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                author: "Smart"
            }
        }
    }
</script>

<style>
</style>
