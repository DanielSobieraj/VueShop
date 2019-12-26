<template>
    <v-app>
        <div>
            <v-spacer/>
            <v-toolbar>
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
                            @click="logout"
                            text
                    >VueShop
                    </v-btn>
                </v-toolbar-title>

                <v-spacer/>

                <v-toolbar-items>
                    <v-btn text
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
            </v-toolbar>
        </div>


        <div>
            <v-sheet
                    class="overflow-hidden"
                    style="height: 100vh"
            >

                <v-navigation-drawer
                        absolute
                        temporary
                        v-model="drawer"
                >

                    <v-list dense>

                        <v-list-item
                                :key="item.title"
                                link
                                v-for="item in items"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title><p>aa</p></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-sheet>
        </div>
    </v-app>
</template>

<script>

    import firebase from 'firebase';

    export default {
        name: "Navbar",
        data() {
            return {
                user: '',
                drawer: null,
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
