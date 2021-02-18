<template>
  <div class="card">
    <h3 class="card-header text-center">Register Area</h3>
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group  col-md-6">
            <label>First Name</label>
            <input type="text" class="form-control" v-model.trim="$v.firstname.$model" :class="{
                    'is-invalid' :$v.firstname.$error , 'is-valid' : !$v.firstname.$invalid }">
            <div class="valid-feedback">Your first name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.firstname.required">First name is required</span>
              <span v-if="!$v.firstname.minLength">First name must have at least {{
                  $v.firstname.$params.minLength
                }} Letters.</span>
              <span v-if="!$v.firstname.maxLength">First name must have at most {{
                  $v.firstname.$params.maxLength
                }} Letters.</span>
            </div>
          </div>

          <div class="form-group col-md-6">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model.trim="$v.lastname.$model" :class="{
                    'is-invalid' :$v.lastname.$error , 'is-valid' : !$v.lastname.$invalid }">
            <div class="valid-feedback">Your Last name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.lastname.required">Last name is required</span>
              <span v-if="!$v.lastname.minLength">Last name must have at least {{
                  $v.lastname.$params.minLength
                }} Letters.</span>
              <span v-if="!$v.lastname.maxLength">Last name must have at most {{
                  $v.lastname.$params.maxLength
                }} Letters.</span>
            </div>
          </div>

          <div class="form-group col-md-12">
            <label>age</label>
            <input type="number" class="form-control" v-model.number.lazy="$v.age.$model" :class="{
                    'is-invalid' :$v.age.$error , 'is-valid' : !$v.age.$invalid }">
            <div class="valid-feedback">Your age name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</span>
            </div>
          </div>

          <div class="form-group col-md-12">
            <label>Username</label>
            <input type="text" class="form-control" v-model.trim="$v.username.$model" :class="{
                    'is-invalid' :$v.username.$error , 'is-valid' : !$v.username.$invalid }">
            <div class="valid-feedback">Your username name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.username.required">Username is required.</span>
              <span v-if="!$v.username.isUnique">this username is already registerd.</span>
            </div>
          </div>


          <div class="form-group col-md-12">
            <label>Email</label>
            <input type="email" class="form-control" v-model.trim="$v.email.$model" :class="{
                    'is-invalid' :$v.email.$error , 'is-valid' : !$v.email.$invalid }">
            <div class="valid-feedback">Your Email name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.email.required">Email is required.</span>
              <span v-if="!$v.email.isUnique">this Email is already registerd.</span>
            </div>
          </div>

          <div class="form-group col-md-12">
            <label>Password</label>
            <input type="password" id="password" class="form-control" v-model.trim="$v.password.$model" :class="{
                    'is-invalid' :$v.password.$error , 'is-valid' : !$v.password.$invalid }">
            <div class="valid-feedback">Your Password name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.password.required">Password is required.</span>
              <span v-if="!$v.password.minLength">Your Password must be {{ $v.password.$params.minLength.min }}</span>
            </div>
          </div>

          <div class="form-group form-check">
            <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword">
            <label class="form-check-label" for="showpassword"></label>Show Password
          </div>

          <div class="form-group col-md-12">
            <label>Repeat Password</label>
            <input type="password"  class="form-control" v-model.trim="$v.repeatpassword.$model" :class="{
                    'is-invalid' :$v.repeatpassword.$error , 'is-valid' : (password != '') ?
                    !$v.repeatpassword.$invalid : '' }">
            <div class="valid-feedback">Your Password is identical!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.repeatpassword.sameAsPassword">Password must be identical.</span>
            </div>
          </div>



        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {required, minLength, maxLength, between , email , sameAs } from 'vuelidate/lib/validators'


export default {
  name: "FormValidation",
  data() {
    return {
      'firstname': '',
      'lastname': '',
      'age': 0,
      'username' : '' ,
      'email' : '' ,
      'password' : '' ,
      'repeatpassword' : '',
      'showpassword' : false
    }
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10)
    },
    lastname: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(12)
    },
    age: {
      between: between(15, 40)
    },
    username: {
      required,
      isUnique(value) {
        if (value === '') return true

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          }, 350 + Math.random() * 300)
        })
      }
    },
    email: {
      required,
      email,
      isUnique(value) {
        if (value === '') return true

        var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email_regex.test(value))
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatpassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods :{
    toggleShowPassword () {
      var show = document.getElementById('password')
      if (this.showpassword == false ){
        this.showpassword = true
        show.type = 'text'
      } else {
        this.showpassword = false
        show.type = 'password'
      }
    }

  }
}
</script>

<style scoped>

</style>