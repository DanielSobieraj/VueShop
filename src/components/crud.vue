<template>
    <v-container fill-height>
        <v-row justify="center">
                <v-btn color="green"
                       text
                        to="/addProduct">
                    <v-icon>add</v-icon>
                    Add product
                </v-btn>
                <v-btn color="blue"
                       to="/editProduct"
                       text>
                    <v-icon>edit</v-icon>
                    Edit product
                </v-btn>
                <v-btn color="red"
                       text
                       to="/deleteProduct"
                light>
                    <v-icon>delete</v-icon>
                    Delete product
                </v-btn>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "crud"
    }
</script>

<style scoped>

</style>
