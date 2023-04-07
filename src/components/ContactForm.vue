<template>
  <div class="contact-form-container">
    <div v-if="this.screenOut === true" class="success-message">
      <h2>Contact Request has been send successfully!</h2>
      <i class="fa-solid fa-envelope-circle-check fa-bounce"></i>
    </div>
    <div @keyup="enableSubmit" class="form-container">
      <form @submit="onSubmit">
        <div class="input-group">
          <div class="input-control">
            <input
              v-on="{
                keydown: validateTopic,
                keyup: validateTopic,
                focus: onFocusAnimation,
                blur: onBlurCheckInput,
              }"
              type="text"
              v-model="topic"
              name="topic"
              id="topic"
              :is-valid="checkTopic"
              :class="checkTopic === true ? 'success' : ''"
            />
            <label id="topic-label" for="topic" class=""
              >Type in your topic here</label
            >
            <i
              v-if="checkTopic === true"
              class="fa-regular fa-circle-check"
              id="topic-success"
            ></i>
            <p class="topic-error" input-err-id="topic">
              {{ errorTopic }}
            </p>
          </div>

          <div class="input-control">
            <textarea
              v-on="{
                keydown: validateDescription,
                keyup: validateDescription,
                focus: onFocusAnimation,
                blur: onBlurCheckInput,
              }"
              type="text"
              v-model="description"
              name="description"
              id="description"
              :is-valid="checkDescription"
            />
            <label for="description"
              >Fill in your matter of contact here.</label
            >
            <p class="description-error" input-err-id="description">
              {{ errorDescription }}
            </p>
          </div>
        </div>

        <div class="input-group">
          <div class="input-control">
            <input
              @keyup="validatePhoneNumber"
              @focus="onFocusAnimation"
              @blur="onBlurCheckInput"
              type="text"
              v-model="phoneNumber"
              name="phone"
              id="phone"
              :class="checkPhone === true ? 'success' : ''"
            />
            <label for="phone">Enter Phone Number</label>
            <i
              v-if="checkPhone === true"
              class="fa-regular fa-circle-check"
              id="phone-success"
            ></i>
            <p class="phone-error" v-if="errorPhone">
              {{ errorPhone }}
            </p>
          </div>

          <div class="input-control">
            <input
              @keyup="validateMailAdress"
              @focus="onFocusAnimation"
              @blur="onBlurCheckInput"
              type="email"
              v-model="email"
              name="email"
              id="email"
              :class="checkMail === true ? 'success' : ''"
            />
            <label for="email">Enter E-mail Adress</label>
            <i
              v-if="checkMail === true"
              class="fa-regular fa-circle-check"
              id="mail-success"
            ></i>
            <p class="mail-error" v-if="errorMessageMail">
              {{ errorMessageMail }}
            </p>
          </div>

          <div class="input-control">
            <input
              @keyup="verifyMailAdress"
              @focus="onFocusAnimation"
              @blur="onBlurCheckInput"
              type="email"
              v-model="verifyEmail"
              name="email-repeat"
              id="email-repeat"
              :class="checkMailRepeat === true ? 'success' : ''"
            />
            <label for="email-repeat">Repeat E-mail Adress</label>
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
        <button type="submit" id="submit" disabled="disabled">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  emits: ["add-contact"],
  data() {
    return {
      // data
      id: "",
      date: "",
      topic: "",
      description: "",
      phoneNumber: "",
      email: "",
      verifyEmail: "",
      // for input error & success handling
      errorTopic: "",
      errorDescription: "test Desc",
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

      // animations
      animationTarget: "",
      animationInput: "",
    };
  },

  methods: {
    // label animation
    onFocusAnimation(e) {
      const targetID = e.currentTarget.id;
      const targetLabel = document.querySelector(`[for=${targetID}]`);

      if (targetLabel.classList.contains("labelSlideBackIn") === true) {
        targetLabel.classList.remove("labelSlideBackIn");
      }
      targetLabel.classList.add("labelSlideOut");
      this.animationTarget = targetLabel;
      this.animationInput = e.currentTarget;
    },

    onBlurCheckInput() {
      if (this.animationInput.value.length > 0) {
        return;
      }
      this.animationTarget.classList.add("labelSlideBackIn");
    },

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

    // error handling
    handleErrorMsg(el) {
      const errorTag = document.querySelector(`[input-err-id=${el.id}]`);
      const valid = el.getAttribute("is-valid");
      // if (id === "description") {
      //   if (this.checkTopic === false) {
      //     errorTag.classList.add("errorMsgShowTextarea");
      //   } else if (this.checkTopic === false) {
      //     errorTag.classList.add("errorMsgShowTextarea");
      //   }
      // } else {
      console.log(typeof valid);
      console.log(errorTag);
      if (valid === "false") {
        console.log("if");
        errorTag.classList.add("errorMsgShow");
      } else if (valid === "true") {
        console.log("else");
        errorTag.classList.remove("errorMsgShow");
      }
      console.log("nothing");
      // }
    },

    // validate Topic
    validateTopic(e) {
      this.toUpperCase(e);
      this.checkTopicLength(e);
    },

    toUpperCase(e) {
      const element = e.currentTarget;
      // guard when pressing tab -> element will be undefined -> eventlistener on keyup
      if (element === undefined) {
        return;
      }
      const str =
        element.value.charAt(0).toUpperCase() + element.value.slice(1);
      document.querySelector(`#${element.id}`).value = str;
    },

    checkTopicLength(e) {
      const minLength = 10;
      const input = e.currentTarget;
      if (this.topic.length <= minLength) {
        input.classList.add("error");
        this.errorTopic = "Topic to short.";
        this.checkTopic = false;
        this.handleErrorMsg(input);
      } else {
        input.classList.remove("error");
        this.errorTopic = "";
        this.checkTopic = true;
        this.handleErrorMsg(input);
      }
    },

    // validate Description
    validateDescription(e) {
      // const target = e.currentTarget;
      this.toUpperCase(e);
      this.checkDescriptionLength(e);
    },

    checkDescriptionLength(e) {
      const minLength = 30;
      const input = e.currentTarget;
      if (this.description.length <= minLength) {
        input.classList.add("error");
        this.errorDescription = "Description to short.";
        this.checkDescription = false;
        this.handleErrorMsg(input);
      } else {
        input.classList.remove("error");
        this.errorDescription = "";
        this.checkDescription = true;
        this.handleErrorMsg(input);
      }
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
    validateMailAdress(e) {
      const regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
      const target = e.currentTarget;
      if (!regex.test(this.email)) {
        target.classList.add("error");
        this.errorMessageMail = "Please enter a valid E-Mail adress.";
        this.checkMail = false;
      } else {
        target.classList.remove("error");
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
        mailRepeatInput.classList.add("error");
        this.errorMailRepeat =
          "Your E-Mail adresses don't match. Please check.";
        this.checkMailRepeat = false;
      } else {
        mailRepeatInput.classList.remove("error");
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

<style scoped></style>
