<template>
    <v-container fill-height>
        <v-layout align-center>
            <v-card class="mx-auto mt-5" width="400">
                <v-card-title>
                    <h1>Register</h1>
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
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn @click="register"
                           color="info">Register
                    </v-btn>
                    <v-btn color="secondary"
                           to="/login">Back
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "register",
        data() {
            return {
                email: "",
                password: "",
                showPassword: false
            };
        },
        methods: {
            register: function () {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        function () {
                            alert("Konto zostało założone pomyślnie");
                            this.$router.replace('login')
                        },
                        function (err) {
                            alert("Błąd. " + err.message);
                        }
                    );
            }
        },
        mounted() {
        }
    };
</script>

<style scoped></style>
