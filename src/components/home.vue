<template>
    <v-container fill-height>
        <v-layout align-center>
        </v-layout>
    </v-container>
</template>

<script>
    import {db} from '../main'

    export default {
        name: "home",
        data() {
            return {
                products: []
            }
        },
        firestore() {
            return {
                products: db.collection("products")
            }
        }
    };
</script>

<style scoped></style>
