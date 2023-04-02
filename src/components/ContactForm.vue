<template>
  <div class="form-container">
    <div class="form-entry-info">
      <h3>contact title</h3>
      <p>
        *Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum
        similique omnis molestias temporibus voluptates distinctio nesciunt
        perferendis assumenda maxime, rem quas. Similique, nemo non? Unde quod
        eligendi distinctio ea.
      </p>
    </div>

    <form action="#">
      <div class="input-control">
        <label for="contact-topic">Topic</label>
        <input type="text" name="" id="contact-topic" />
      </div>
      <div class="input-control">
        <label for="contact-textarea">Description</label
        ><textarea
          name=""
          id="contact-textarea"
          cols="30"
          rows="10"
          class="contact-textarea"
        ></textarea>
      </div>

      <div class="input-container">
        <div class="input-control">
          <label for="first-name">First Name</label>
          <input type="text" name="" id="first-name" />
        </div>
        <div class="input-control">
          <label for="last-name">Last Name</label>
          <input type="text" name="" id="last-name" />
        </div>
      </div>

      <div class="input-container">
        <div class="input-control">
          <label for="street-number">Street & Number</label>
          <input type="text" name="" id="street-number" />
        </div>
        <div class="input-control">
          <label for="zip-city">Zipcode & City</label>
          <input type="text" name="" id="zip-city" />
        </div>
      </div>

      <div class="input-container">
        <div class="input-control">
          <label for="phone">Phone</label>
          <input type="text" name="" id="phone" />
        </div>
        <div class="input-control">
          <label for="email">E-mail Adress</label>
          <input type="text" name="" id="email" />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.input-container .input-control:nth-child(1) {
  margin-right: 15px;
}
.form-entry-info {
  background: #fff;
  padding: 1rem 0;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
}
.form-container {
  width: 100%;
  padding: 3rem;
  background-image: url("../assets/slider/slider02.jpg");
  background-size: cover;
}
.input-container {
  display: flex;
}

input,
label,
textarea {
  width: 100%;
}
.input-container label {
  text-align: right;
  height: auto;
  max-width: 200px;
}

.input-container .input-control {
  display: flex;
  width: 100%;
}
.input-control {
  margin-bottom: 15px;
}

input,
textarea,
label {
  border: none;
  padding: 0.5rem;
  margin: 3px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
}

input:focus,
textarea:focus {
  /* outline: 3px solid #bb8b73; */
  background: rgba(240, 255, 240, 0.95);
}

label {
  background: rgba(255, 255, 255, 0.8);
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: space-around;
  align-items: center; */
}

button {
  width: 150px;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 20px;
  transition: 0.5s;
  border-radius: 5px;
}

button:hover {
  background: lime;
  border-radius: 15px;
}
</style>
