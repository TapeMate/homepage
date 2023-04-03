<template>
  <div v-if="this.screenOut === true" class="success-message">
    <h2>Contact Request has been send successfully!</h2>
    <i class="fa-solid fa-envelope-circle-check fa-bounce"></i>
  </div>
  <div @keyup="enableSubmit" class="form-container">
    <form @submit="onSubmit">
      <div class="input-control" style="width: 25%">
        <label for="topic">Topic</label>
        <div class="success-icon-wrapper">
          <input
            @keyup="validateTopic"
            type="text"
            v-model="topic"
            name="topic"
            id="topic"
            placeholder="Type in your topic here"
            :class="checkTopic === true ? 'success' : ''"
          />
          <i
            v-if="checkTopic === true"
            class="fa-regular fa-circle-check"
            id="topic-success"
          ></i>
        </div>
        <p class="topic-error" v-if="errorTopic">
          {{ errorTopic }}
        </p>
      </div>
      <div class="input-control">
        <label for="description">Description</label>
        <textarea
          @keyup="validateDescription"
          type="text"
          v-model="description"
          name="description"
          id="description"
          placeholder="Type in your topic here"
        />
        <p class="description-error" v-if="errorDescription">
          {{ errorDescription }}
        </p>
      </div>
      <div class="input-container">
        <div class="input-control">
          <label for="phone">Phone</label>
          <div class="input-control">
            <div class="success-icon-wrapper">
              <input
                @keyup="validatePhoneNumber"
                type="text"
                v-model="phoneNumber"
                name="phone"
                id="phone"
                placeholder="Enter your phonenumber"
                :class="checkPhone === true ? 'success' : ''"
              />
              <i
                v-if="checkPhone === true"
                class="fa-regular fa-circle-check"
                id="phone-success"
              ></i>
            </div>
          </div>
          <p class="phone-error" v-if="errorPhone">
            {{ errorPhone }}
          </p>
        </div>
        <div class="input-control">
          <label for="email">E-mail Adress</label>
          <div class="success-icon-wrapper">
            <input
              @keyup="validateMailAdress"
              type="email"
              v-model="email"
              name="email"
              id="email"
              placeholder="Enter your email adress"
              :class="checkMail === true ? 'success' : ''"
            />
            <i
              v-if="checkMail === true"
              class="fa-regular fa-circle-check"
              id="mail-success"
            ></i>
          </div>
          <p class="mail-error" v-if="errorMessageMail">
            {{ errorMessageMail }}
          </p>
        </div>
        <div class="input-control">
          <label for="email-repeat">E-mail Verification</label>
          <div class="success-icon-wrapper">
            <input
              @keyup="verifyMailAdress"
              type="email"
              v-model="verifyEmail"
              name="email-repeat"
              id="email-repeat"
              placeholder="Repeat your email adress"
              :class="checkMailRepeat === true ? 'success' : ''"
            />
            <i
              v-if="checkMailRepeat === true"
              class="fa-regular fa-circle-check"
              id="mail-repeat-success"
            ></i>
            <p class="mail-repeat-error" v-if="errorMailRepeat">
              {{ errorMailRepeat }}
            </p>
          </div>
        </div>
      </div>
      <button type="submit" id="submit" disabled="disabled">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  emits: ["add-contact"],
  data() {
    return {
      id: "",
      date: "",

      topic: "",
      description: "",
      phoneNumber: "",
      email: "",
      verifyEmail: "",
      // for input error & success handling
      errorTopic: "",
      errorDescription: "",
      errorPhone: "",
      errorMessageMail: "",
      errorMailRepeat: "",
      // build checksum Object for validation
      screenOut: false,

      // status for enable Submit
      checkTopic: false,
      checkDescription: false,
      checkPhone: false,
      checkMail: false,
      checkMailRepeat: false,
    };
  },

  methods: {
    // enabling Submit Button after checksum is "true" and check if changed
    enableSubmit() {
      if (
        this.checkTopic === true &&
        this.checkDescription === true &&
        this.checkPhone === true &&
        this.checkMail === true &&
        this.checkMailRepeat === true
      ) {
        document.querySelector("#submit").disabled = false;
      } else {
        document.querySelector("#submit").disabled = true;
      }
    },

    // validate Topic
    toUpperCase(e) {
      const str = e.value.charAt(0).toUpperCase() + e.value.slice(1);
      document.querySelector(`#${e.id}`).value = str;
    },

    checkTopicLength(e) {
      if (this.topic.length <= 8) {
        e.classList.add("error");
        this.errorTopic = "Topic to short.";
        this.checkTopic = false;
      } else {
        e.classList.remove("error");
        this.errorTopic = "";
        this.checkTopic = true;
      }
    },

    validateTopic(e) {
      const target = e.currentTarget;
      this.toUpperCase(target);
      this.checkTopicLength(target);
    },

    // validate Description
    checkDescriptionLength(e) {
      if (this.description.length <= 30) {
        e.classList.add("error");
        this.errorDescription = "Description to short.";
        this.checkDescription = false;
      } else {
        e.classList.remove("error");
        this.errorDescription = "";
        this.checkDescription = true;
      }
    },

    validateDescription(e) {
      const target = e.currentTarget;
      this.toUpperCase(target);
      this.checkDescriptionLength(target);
    },

    // validate Phone
    validatePhoneNumber(e) {
      const regex = /^(\+49|0)(?:(?!\d*(\d)\1{7})[\d\s()-]{8,})$/;
      const target = e.currentTarget;
      if (!regex.test(this.phoneNumber)) {
        target.classList.add("error");
        this.errorPhone = "Please enter a valid phone number.";
        this.checkPhone = false;
      } else {
        target.classList.remove("error");
        this.errorPhone = "";
        this.checkPhone = true;
      }
    },

    // validate E-Mail
    validateMailAdress() {
      const regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(this.email)) {
        document.querySelector("#email").classList.add("error");
        this.errorMessageMail = "Please enter a valid E-Mail adress.";
        this.checkMail = false;
      } else {
        document.querySelector("#email").classList.remove("error");
        this.errorMessageMail = "";
        this.checkMail = true;
      }
    },

    verifyMailAdress() {
      const mail = document.querySelector("#email").value;
      const mailRepeat = document.querySelector("#email-repeat").value;
      const mailRepeatInput = document.querySelector("#email-repeat");

      // prevents copy pasting on email repeat input
      mailRepeatInput.addEventListener("paste", (e) => e.preventDefault());

      if (mail !== mailRepeat) {
        document.querySelector("#email-repeat").classList.add("error");
        this.errorMailRepeat =
          "Your E-Mail adresses don't match. Please check.";
        this.checkMailRepeat = false;
      } else {
        document.querySelector("#email-repeat").classList.remove("error");
        this.errorMailRepeat = "";
        this.checkMailRepeat = true;
      }
    },

    // submit Data
    onSubmit(e) {
      e.preventDefault();

      const currentDate = new Date();
      const day = currentDate.getDate();
      // Add 1 because months are zero-indexed
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const newID = Math.floor(Math.random() * 10000);

      const newContact = {
        id: `${newID}-${day}${month}${year}`,
        date: `${day}.${month}.${year}`,
        topic: this.topic,
        description: this.description,
        phoneNumber: this.phoneNumber,
        email: this.email,
        verifyEmail: this.verifyEmail,
      };
      // emits data to the parent component. can be called in template.
      this.$emit("add-contact", newContact);

      // resets input values.
      this.topic = "";
      this.description = "";
      this.phoneNumber = "";
      this.email = "";
      this.verifyEmail = "";
      this.screenOut = true;
      setTimeout(() => {
        this.screenOut = false;
        window.location.reload();
      }, 2500);
    },
  },
};
</script>

<style scoped>
.success-icon-wrapper {
  position: relative;
}
#topic-success {
  position: absolute;
  display: inline;
  color: rgb(0, 187, 0);
  top: 28%;
  right: 2px;
}

#phone-success,
#mail-success,
#mail-repeat-success {
  position: absolute;
  display: inline;
  color: rgb(0, 187, 0);
  top: 28%;
  right: 9px;
}
.success-message {
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: lime;
  background: rgba(0, 0, 0, 0.9);
}
.success-message h2 {
  width: 100%;
  height: 25%;
}
.success-message i {
  font-size: 100px;
  margin-top: -900px;
}
.error {
  background: #fdebeb !important;
  /* color: rgb(165, 0, 0) !important; */
  outline: 1px solid red !important;
}
.success {
  background: rgb(209, 255, 209);
  color: rgb(0, 85, 0);
}

.phone-error,
.mail-error,
.mail-repeat-error,
.topic-error,
.description-error {
  padding: 0.5rem;
  font-size: 12px;
  margin: 2px;
  left: 65%;
  background: #ffe3e3;
  border: 1px solid;
  color: rgb(255, 0, 0);
  display: inline;
}
#phone {
  width: 20%;
}
.form-entry-info {
  background: rgba(255, 255, 255, 0.6);
  padding: 1rem 0;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
}
.form-container {
  padding: 4% 10% 2%;
  background-image: url("../assets/slider/slider02.jpg");
  background-size: cover;
}
.input-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
}
input,
label {
  width: 100%;
  display: inline-block;
  padding: 0.5rem;
  margin: 3px;
}
input {
  padding: 0.5rem 1rem;
  min-width: 200px;
}
textarea {
  width: 100%;
  height: 200px;
  display: inline-block;
  padding: 1rem;
  margin: 3px;
}
.input-container label {
  text-align: center;
  height: auto;
  max-width: max-content;
  min-width: 120px;
}
.input-container .input-control {
  display: flex;
  justify-content: left;
  width: 100%;
}
.input-container .input-control:nth-child(2) {
  margin-bottom: 0px !important;
}
.input-container .input-control label,
.input-container .input-control input {
  width: 20%;
}
.input-control {
  margin-bottom: 15px;
}
input,
textarea,
label {
  border: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
}
input:focus,
textarea:focus {
  background: #fff8e4;
  outline: 1px solid rgb(255, 199, 78);
}
label {
  background: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 12px;
}
form {
  padding: 1rem;
  background: #333;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
#submit {
  width: 150px;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  border: none;
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.8);
  background: rgba(100, 255, 100, 0.8);
  font-weight: 600;
  font-size: 20px;
  transition: 0.5s;
  border-radius: 5px;
}
#submit:hover {
  background: rgba(12, 124, 12, 0.8);
  color: #fff;
  border-radius: 15px;
}
#submit:disabled {
  color: #555;
  background: #aaa;
  box-shadow: none;
}
#submit:disabled:hover {
  border-radius: 5px;
  background: #aaa;
}
</style>
