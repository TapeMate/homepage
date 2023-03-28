<template>
  <h5>Angaben zum Sitz des Unternehmens</h5>
  <p>{{ company.name }}</p>
  <p>{{ company.street }}</p>
  <p>{{ company.zipCode }} {{ company.city }}</p>
  <p>E-Mail: {{ company.email }}</p>
  <p>Telefon: {{ company.phone }}</p>

  <h5>Geschäftsführung</h5>
  <p>{{ ceo.ceo01 }}</p>
  <p>{{ ceo.ceo02 }}</p>
  <p>{{ ceo.ceo03 }}</p>
  <h5>Aufsichtsratsvorsitzender</h5>
  <p>{{ ceo.executive }}</p>
  <h5>Sitz der Gesellschaft: {{ company.city }}, {{ company.country }}</h5>
  <p>Registergericht {{ company.city }}</p>
  <p>HRB {{ company.registerID }}</p>
  <p>Ust.-ID.: {{ company.taxID }}</p>
  <h5>Internet: {{ company.homepage }}</h5>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      company: {
        name: "Muster GmbH & Co. KG",
        street: "Musterstraße 123",
        zipCode: "12345",
        city: "Musterstadt",
        country: "Deutschland",
        email: "company@muster-firma.de",
        homepage: "https://muster-firma.de",
        phone: "01234 555 666 777",
        registerID: "123456",
        taxID: "DE123456789",
      },
      ceo: {
        ceo01: "Hans Mustermann",
        ceo02: "Thomas Mustermann",
        ceo03: "Sabine Mustermann",
        executive: "Sabine Mustermann",
      },
    };
  },
};
</script>
