<template>
    <div class="wallpaper">
        <div class="container">
            <section class="hero ">
                <div class="hero-body">
                    <div class="container">
                        <img src="../../assets/logo.png" alt="logo" width="150" height="150">
                        <h2 class="title is-size-2">
                            <span class="brand-logo">Qa App</span>
                        </h2>
                        <h4 class="subtitle">
                            A tier 3 mobile app
                        </h4>
                    </div>
                    <form @submit.prevent="onSubmit">
                        <div class="field signin-form">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" v-model="email" type="email" placeholder="e.g Alex Smith">
                            </div>

                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input class="input" type="password" v-model="password" placeholder="e.g. alexsmith@gmail.com">
                            </div>
                        </div>
                        <div>
                          <button class="button is-info">Signin</button>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Signin",
        props: ['counter'],
        data () {
            return {
                email: '',
                password: '',
            };
        },
        methods:{
            onSubmit() {
                const formData ={
                    email: this.email,
                    password: this.password,
                };
                this.$store.dispatch('signin', { email: formData.email,
                    password: formData.password})

            }
        }
    }
</script>

<style scoped>
    .rounded{
        border-radius: 5px;
    }
    .signin-form{
        margin-top: 20px;

    }
    .brand-logo{
        font-family: 'Audiowide', cursive;
    }
    .wallpaper{
        min-height: 600px;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        background-size:cover;
        background: url('../../assets/background.png') no-repeat center;

    }
    a {
        color: #42b983;
    }
</style>