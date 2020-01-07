<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col>
                <p class="mx-auto">Categories</p>
                <v-select multiple
                :items="product.category"
                v-for="product in products"
                :key="product.name">
                </v-select>
            </v-col>
        </v-row>
        <v-layout align-center>
            <v-card
                    :key="product.name"
                    class="mx-auto"
                    max-width="400"
                    v-for="product in products"
            >
                <v-img
                        :src="product.image_url"
                        class="white--text align-end"
                        max-height="400"
                >
                </v-img>

                <v-card-subtitle class="pb-0">{{ product.brand }}</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>{{ product.name }}</div>

                    <div class="pb-1">{{ product.description }}</div>
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
        </v-layout>
    </v-container>
</template>

<script>
    import db from '../api/firebaseInit'

    export default {
        name: "home",
        data() {
            return {
                products: []
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
        }
    };
</script>

<style scoped></style>
