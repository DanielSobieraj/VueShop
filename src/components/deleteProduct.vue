<template>
    <v-container fill-height>
        <v-col cols="12">
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
                Product deleted
            </v-alert>
        </v-col>
        <v-row>
        <v-layout align-center
                  :key="product.name"
                  v-for="product in products"
                  class="my-5">
            <v-card
                    class="mx-auto"
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

                <v-card-text class="text--primary">
                    <div>{{ product.name }}</div>
                    <div>Cena: {{ product.price }} zł</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            @click="deleteProduct(product.id)"
                            color="red"
                            text
                            type="submit"
                    >
                        <v-icon>delete</v-icon>
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
        </v-row>
    </v-container>
</template>

<script>
    import db from '../api/firebaseInit'

    export default {
        name: "removeProduct",
        data() {
            return {
                products: [],
                showSuccess: '',
                showError: '',
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
                        'price': doc.data().price,
                    };
                    this.products.push(data)
                })
            })
        },
        methods: {
            deleteProduct(id) {
                db.collection('products').doc(id).delete().then(() => {
                        this.showSuccess = true;
                    },
                    (err) => {
                        this.showError = err.message;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
