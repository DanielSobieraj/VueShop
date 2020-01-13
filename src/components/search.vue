<template>
    <v-container>
        <v-layout>
            <v-text-field v-model="searchField" @keyup="searchInput"></v-text-field>
        </v-layout>
        <v-layout
                v-for="product in products"
        :key="product.id">
            {{ product.name }}
        </v-layout>
    </v-container>
</template>

<script>
    import db from '../api/firebaseInit'

    export default {
        name: "search",
        data() {
            return {
                searchField: '',
                products: []
            }
        },
        methods: {
            searchInput() {
                db.collection('products').get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const data = {
                            'id': doc.id,
                            'name': doc.data().name,
                        };
                        this.products.push(data)
                    })
                })
            }
        },
    }
</script>

<style scoped>

</style>
