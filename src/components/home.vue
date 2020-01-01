<template>
    <v-container fill-height>
        <v-layout align-center>
            <v-card
                    class="mx-auto"
                    max-width="400"
                    v-bind:key="product.id"
                    v-for="product in products"
            >
                <v-img
                        :src="product.img"
                        class="white--text align-end"
                        max-height="400"
                >
                </v-img>

                <v-card-subtitle class="pb-0">{{ product.brand }}</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>{{ product.name }}</div>

                    <div>{{ product.description }}</div>
                    <br>
                    <div>Cena: {{ product.price }} zł</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            color="green"
                            text
                    >
                        <v-icon>shopping_cart</v-icon>
                        Dodaj do koszyka
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
                        'img': doc.data().img,
                        'name': doc.data().name,
                        'price': doc.data().price,
                        'product_id': doc.data().product_id
                    };
                    this.products.push(data)
                })
            })
        }
    };
</script>

<style scoped></style>
