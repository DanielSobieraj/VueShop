<template>
    <div class="mb-10">
        <v-app-bar fixed>
            <v-spacer/>

            <v-toolbar-items>
                <v-btn @click.stop="drawer = !drawer"
                       text
                >
                    <i class="material-icons">
                        reorder
                    </i>
                </v-btn>
            </v-toolbar-items>

            <v-spacer/>

            <v-toolbar-title>
                <v-btn
                        text
                        to="/home"

                >VueShop
                </v-btn>
            </v-toolbar-title>

            <v-spacer/>

            <v-toolbar-items>
                <v-btn @click.stop="searchIcon = !searchIcon"
                       text
                       to="/search"
                >
                    <i class="material-icons">
                        search
                    </i>
                </v-btn>
                <v-btn text
                >
                    <i class="material-icons">
                        shopping_cart
                    </i>
                </v-btn>
                <v-btn text
                       to="/login"
                >
                    <i class="material-icons">
                        perm_identity
                    </i>
                </v-btn>
            </v-toolbar-items>

            <v-spacer/>
        </v-app-bar>

        <v-sheet
        >

            <v-navigation-drawer
                    app
                    temporary
                    v-model="drawer"
            >

                <v-list dense>

                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://i.stack.imgur.com/l60Hf.png"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Welcome, guest</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>


                    <v-list-item
                            link
                            to="/home"
                    >
                        <v-list-item-icon>
                            <v-icon>dashboard</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>shopping_cart</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Shopping cart</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item
                            link
                            to="/search"
                    >
                        <v-list-item-icon>
                            <v-icon>search</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Search</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>


                    <v-divider></v-divider>

                    <v-list-item
                            @click="logout"
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>logout</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-navigation-drawer>
        </v-sheet>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "Navbar",
        data() {
            return {
                user: '',
                drawer: null,
                searchIcon: null
            };
        },
        methods: {
            logout: function () {
                firebase
                    .auth()
                    .signOut()
                    .then(() => this.$router.replace("login"));
            }
        },
    };
</script>

<style scoped></style>
