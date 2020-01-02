<template>
    <v-form v-model="valid">
        <v-container>
            <v-row justify="center">
                <v-col class="text-center" cols="12">
                    <h1>Add new product</h1>
                </v-col>
                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Product ID"
                            required
                            type="number"
                            v-model="firstname"
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Name"
                            required
                            v-model="firstname"
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Brand"
                            required
                            v-model="lastname"
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-textarea
                            label="Description"
                            required
                            v-model="email"
                    ></v-textarea>
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Price"
                            prefix="PLN"
                            required
                            type="number"
                            v-model="a"
                    ></v-text-field>
                </v-col>
                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Category"
                            required
                            v-model="email"
                    ></v-text-field>
                </v-col>
                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Image URL"
                            required
                            v-model="email"
                    ></v-text-field>
                </v-col>
                <v-col class="text-center" cols="12">
                    <v-btn
                            color="info">Add product
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        name: "addProduct"
    }
</script>

<style scoped>

</style>
