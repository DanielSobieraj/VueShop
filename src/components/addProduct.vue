<template>
    <v-form>
        <v-container>
            <v-row justify="center">
                <v-col class="text-center" cols="12">
                    <h1>Add new product</h1>
                </v-col>
                <v-col
                        cols="10"
                        md="7"
                >
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Name"
                            v-model="name"
                    />
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-select
                            :items="brand"
                            label="Brand"
                            v-model="selectedBrand"
                    />
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-textarea
                            label="Description"
                            v-model="description"
                    />
                </v-col>

                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Price"
                            prefix="PLN"
                            type="number"
                            v-model="price"
                    />
                </v-col>
                <v-col
                        cols="10"
                        md="7"
                >
                    <v-select
                            :items="category"
                            label="Category"
                            v-model="selectedCategory"
                    />
                </v-col>
                <v-col
                        cols="10"
                        md="7"
                >
                    <v-text-field
                            label="Image URL"
                            v-model="image_url"
                    />
                </v-col>
                <v-col class="text-center" cols="12">
                    <v-btn
                            @click="addProduct"
                            color="green"
                            dark
                            type="submit"
                    >Add product
                    </v-btn>
                </v-col>
                <v-alert
                        dense
                        text
                        type="error"
                        v-if="showError">
                    Error!
                </v-alert>
                <v-alert
                        dense
                        text
                        type="success"
                        v-if="showSuccess">
                    Product was added
                </v-alert>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    import db from '../api/firebaseInit'

    export default {
        name: "addProduct",
        data() {
            return {
                name: '',
                brand: ['ADBL', 'Vikan', 'Work Stuff', 'Monster Shine', 'Madness', 'CarPRO', 'CARTEC', 'Shiny Garage', 'Angerlwax', 'Chemical Guys', 'Swissvax', 'Nielsen', 'GOOD Stuff', 'Soft99'],
                description: '',
                price: null,
                category: ['Brush', 'Dryer', 'Glass', 'Shampoo', 'Sponge', 'Tires', 'Wax'],
                image_url: '',
                selectedCategory: '',
                selectedBrand: '',
                showSuccess: null,
                showError: null
            }
        },
        methods: {
            addProduct() {
                db.collection("products").doc().set({
                    name: this.name,
                    brand: this.selectedBrand,
                    description: this.description,
                    price: this.price,
                    category: this.selectedCategory,
                    image_url: this.image_url
                }).then(() => {
                        this.showSuccess = true;
                    },
                    (err) => {
                        this.showError = err.message;
                    });
            }
        },
    }
</script>

<style scoped>

</style>
