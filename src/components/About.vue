<template>
  <h3>Mission / Story / More leading Content</h3>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus soluta
    nemo earum nostrum, laborum voluptas minus ab expedita, similique maiores,
    nulla animi. Quae alias non nihil debitis adipisci vel numquam? Illo
    facilis, at, velit itaque optio error aperiam ratione distinctio id omnis
    ipsam ad, repellendus accusamus consequatur ullam earum voluptate pariatur
    eaque eum iusto. Recusandae consequatur dolor id hic. Eveniet?
  </p>

  <h5>Angaben zum Sitz des Unternehmens</h5>
  <p>{{ companyData[0].name }}</p>
  <p>{{ companyData[0].street }}</p>
  <p>{{ companyData[0].zipCode }} {{ companyData[0].city }}</p>
  <p v-if="companyData[0].email != ''">E-Mail: {{ companyData[0].email }}</p>
  <p v-if="companyData[0].phone != ''">Telefon: {{ companyData[0].phone }}</p>

  <h5>Geschäftsführung</h5>
  <p>{{ companyData[0].ceo01 }}</p>
  <p v-if="companyData[0].ceo02 != ''">{{ companyData[0].ceo02 }}</p>
  <p v-if="companyData[0].ceo03 != '' > 0">{{ companyData[0].ceo03 }}</p>

  <h5 v-if="companyData[0].executive != ''">Aufsichtsratsvorsitzende</h5>
  <p v-if="companyData[0].executive != ''">
    {{ companyData[0].executive }}
  </p>

  <h5>
    Sitz der Gesellschaft: {{ companyData[0].city }},
    {{ companyData[0].country }}
  </h5>
  <p>Registergericht {{ companyData[0].city }}</p>
  <p>HRB {{ companyData[0].registerID }}</p>
  <p>Ust.-ID.: {{ companyData[0].taxID }}</p>
  <h5 v-if="companyData[0].homepage != ''">
    Internet: <a :href="companyData[0].homepage">Besuchen Sie uns!</a>
  </h5>
</template>

<script>
export default {
  name: "About",
  props: {
    companyData: Array,
  },
};
</script>

<style scoped>
.about {
  padding: 1rem;
}
h3 {
  padding: 2rem;
  font-weight: bold;
}
h5 {
  padding: 1rem;
  font-weight: bold;
}
p {
  line-height: 1;
}
a {
  text-decoration: none;
}
</style>
