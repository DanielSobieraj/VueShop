<template>
    <v-container fluid fill-height style="background-color: black; height: 100vh">
        <v-row>
            <v-col cols="12">
                <video autoplay muted width="100%" height="720" :src="video"></video>
            </v-col>
            <v-col cols="12" style="display: flex; justify-content: space-around">
                <v-btn @click="changeVideo">Disassemble</v-btn>
                <v-btn @click="changeYellow">Yellow</v-btn>
                <v-btn @click="changeGreen">Green</v-btn>
                <v-btn @click="changeBlue">Blue</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import stock from '../src/assets/stock.mp4'
    import disassemble from '../src/assets/disassemble.mp4'
    import yellow from '../src/assets/yellow.mp4'
    import green from '../src/assets/green.mp4'
    import blue from '../src/assets/blue.mp4'

    export default {
        name: 'App', data() {
            return {video: stock,}
        }, methods: {
            changeVideo() {
                this.video = disassemble;
            }, changeYellow() {
                this.video = yellow;
            }, changeGreen() {
                this.video = green;
            }, changeBlue() {
                this.video = blue;
            }
        }
    }
</script>
<style>

</style>
