<template>
    <v-app>
        <v-card width="400" class="mx-auto mt-5">
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
                            :type="showPassword ? 'text' : 'password'"
                            label="Password"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            v-model="password"
                    />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="info"
                       @click="register">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
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
