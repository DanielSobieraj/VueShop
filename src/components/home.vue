<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col>
                <v-select :items="categoryProducts"
                          label="Sort by categories"
                          multiple
                          v-model="categorySelect"/>
            </v-col>
        </v-row>

        <v-layout :key="product.name"
                  class="my-5"
                  justify-center="center"
                  style="height: auto;"
                  v-for="product in products">
            <v-lazy>
            <v-card
                    width="400px"
            >
                <v-img
                        :src="product.image_url"
                        class="white--text align-end"
                        height="400px"
                        width="400px"
                >
                </v-img>

                <v-card-subtitle class="pb-0">{{ product.brand }}</v-card-subtitle>
                <v-card-title class="py-0">{{ product.name }}</v-card-title>
                <v-card-text class="text--primary">
                    <div class="pb-1"></div>
                    <div>Price: {{ product.price }} zł</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            color="green"
                            text
                    >
                        <v-icon>shopping_cart</v-icon>
                        Add to cart
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-lazy>
        </v-layout>
    </v-container>
</template>

<script>
    import db from '../api/firebaseInit'

    export default {
        name: "home",
        data() {
            return {
                products: [],
                categoryProducts: ['Brush', 'Dryer', 'Glass', 'Shampoo', 'Sponge', 'Tires', 'Wax'],
                categorySelect: '',
            }
        },
        created() {
            db.collection('products').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'brand': doc.data().brand,
                        'category': doc.data().category,
                        'description': doc.data().description,
                        'image_url': doc.data().image_url,
                        'name': doc.data().name,
                        'price': doc.data().price
                    };
                    this.products.push(data)
                })
            })
        },
    };
</script>

<style scoped></style>
