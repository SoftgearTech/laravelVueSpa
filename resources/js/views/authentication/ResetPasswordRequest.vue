<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header">Reset Password Request</div>
			<div class="card-body">
				<div class="text-center mb-4">
					<h4>Forgot your password?</h4>
					<p>Enter your email address and we will send you instructions on how to reset your password.</p>
				</div>
				<form v-on:submit.prevent="onSubmit">
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="email"
								id="inputEmail"
								class="form-control"
								placeholder="Enter email address"
								required="required"
								autofocus="autofocus"
                                v-model="user.email"
							/>
							<label for="inputEmail">Enter email address</label>
                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">Request Password</button>
				</form>
				<div class="text-center">
					<router-link to="/register" class="d-block small mt-3">Register an Account</router-link>
					<router-link class="d-block small" to="/login">Login Page</router-link>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
    import * as auth from '../../services/auth_service';
    export default {
        name: 'ResetPasswordRequest',
        data() {
            return {
                user: {
                    email: ''
                },

                btnOldHtml: '',
                errors: {}
            }
        },
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },
        methods: {
            onSubmit: async function() {
                try {
                    this.disableSubmission(this.$refs.btnSubmit);
                    this.errors = {};
                    const response = await auth.resetPasswordRequest(this.user);
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.$router.push({name: 'reset-password', params: { email: this.user.email }});
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }

                    this.enableSubmission(this.$refs.btnSubmit);
                }
            },
            disableSubmission(btn) {
                btn.setAttribute('disabled', 'disabled');
                this.btnOldHtml = btn.innerHTML;
                btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
            },
            enableSubmission(btn) {
                btn.removeAttribute('disabled');
                btn.innerHTML = this.btnOldHtml;
            }
        }
    };
</script>
