<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header">Login</div>
			<div class="card-body">
				<form v-on:submit.prevent="login">
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="email"
                                v-model="user.email"
								id="email"
								class="form-control"
								placeholder="Email address"
								autofocus="autofocus"
							/>
							<label for="email">Email address</label>
                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
						</div>
					</div>
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="password"
                                v-model="user.password"
								id="password"
								class="form-control"
								placeholder="Password"
							/>
							<label for="password">Password</label>
                            <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
						</div>
					</div>
					<div class="form-group">
						<div class="checkbox">
							<label>
								<input type="checkbox" value="remember-me" v-model="user.remember_me" />
								Remember Password
							</label>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
				</form>
				<div class="text-center">
                    <router-link to="/register" class="d-block small mt-3">Register an Account</router-link>
                    <router-link to="/reset-password" class="d-block small">Forgot Password?</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import * as auth from '../../services/auth_service';
    export default {
        name: 'Login',
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    remember_me: false
                },

                errors: {}
            }
        },
        methods: {
            login: async function() {
                try {
                    const response = await auth.login(this.user);
                    this.errors = {};
                    this.$router.push('/home');
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }
                }
            }
        }
    };
</script>
