<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header">Reset Password</div>
			<div class="card-body">
				<div class="text-center mb-4">
					<h4>Forgot your password?</h4>
					<p>Enter your email address and we will send you instructions on how to reset your password.</p>
				</div>
				<form>
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="email"
								id="inputEmail"
								class="form-control"
								placeholder="Enter email address"
								required="required"
								autofocus="autofocus"
							/>
							<label for="inputEmail">Enter email address</label>
						</div>
					</div>
					<a class="btn btn-primary btn-block" href="login.html">Reset Password</a>
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
    export default {
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        }
    };
</script>
