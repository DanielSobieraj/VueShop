<template>
    <v-container fill-height>
        <v-layout align-center>
            <v-card class="mx-auto mt-5" width="400">
                <v-card-title>
                    <h1>Login</h1>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                                label="E-Mail"
                                prepend-icon="mdi-account-circle"
                                v-model="email"
                        />
                        <v-text-field
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPassword ? 'text' : 'password'"
                                @click:append="showPassword = !showPassword"
                                label="Password"
                                prepend-icon="mdi-lock"
                                v-model="password"
                        />
                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-btn color="success"
                           to="/register">Register
                    </v-btn>
                    <v-btn @click="login"
                           color="info">Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "login",
        data() {
            return {
                email: "",
                password: "",
                loginAlert: "",
                showPassword: false
            };
        },
        methods: {
            login: function () {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password).then(
                    () => {
                        this.$router.replace('crud')
                    },
                    (err) => {
                        alert('Błąd. ' + err.message)
                    }
                )
            }
        },
    };
</script>

<style scoped></style>
