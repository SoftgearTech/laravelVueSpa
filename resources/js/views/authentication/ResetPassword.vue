<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header">Reset Password</div>
			<div class="card-body">
				<div class="text-center mb-4">
					<h4>Reset your password</h4>
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
                                v-model="user.email"
							/>
							<label for="inputEmail">Enter email address</label>
                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
						</div>
					</div>
                    <div class="form-group">
						<div class="form-label-group">
							<input
								type="number"
                                id="verificationCode"
								class="form-control"
								placeholder="Enter verifcation code"
								required="required"
								autofocus="autofocus"
                                v-model="user.verification_code"
							/> 
							<label for="verificationCode">Enter verification code</label>
                            <div class="invalid-feedback" v-if="errors.verification_code">{{errors.verification_code[0]}}</div>
						</div>
					</div>
                    <div class="form-group">
						<div class="form-label-group">
							<input
								type="password"
								id="password"
								class="form-control"
								placeholder="Enter new password"
								required="required"
                                v-model="user.password"
							/>
							<label for="password">Enter new password</label>
                            <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
						</div>
					</div>
                    <div class="form-group">
						<div class="form-label-group">
							<input
								type="password"
								id="passwordConfirmation"
								class="form-control"
								placeholder="Confirm password"
								required="required"
                                v-model="user.password_confirmation"
							/>
							<label for="passwordConfirmation">Confirm password</label>
                            <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">Reset Password</button>
				</form>
				<div class="text-center">
					<router-link to="/reset-password-request" class="d-block small mt-3">Resend Verification Code</router-link>
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
                    email: '',
                    verification_code: '',
                    password: '',
                    password_confirmation: '',
                },

                btnOldHtml: '',
                errors: {}
            }
        },
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.user.email = to.params.email
            });
        },
        methods: {
            onSubmit: async function() {
                try {
                    this.disableSubmission(this.$refs.btnSubmit);
                    this.errors = {};
                    const response = await auth.resetPassword(this.user);
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.$router.push('/login');
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
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
