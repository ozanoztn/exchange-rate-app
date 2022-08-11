<template>
  <h2>{{ header }}</h2>
  <select
    class="form-select mb-3"
    v-model="Unit"
    v-on:change="postUnitToParent"
  >
    <option value="TRY">Türk Lirası</option>
    <option value="KWD">Kuveyt Dinarı</option>
    <option value="BHD">Bahreyn Dinarı</option>
    <option value="OMR">Umman Riyali</option>
    <option value="JOD">Ürdün Dinarı</option>
    <option value="GBP">İngiliz Sterlini</option>
    <option value="EUR">Euro</option>
    <option value="CHF">İsviçre Frangı</option>
    <option value="USD">Amerikan Doları</option>
    <option value="CAD">Kanada Doları</option>
    <option value="AUD">Avustralya Doları</option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      Unit: String,
    };
  },
  props: ["header"],
  methods: {
    async postUnitToParent() {
      await this.$emit("getUnit", [this.header, this.Unit]);
    },
  },
};
</script>
 <style>
.form-select {
  width: 40%;
  height: 2.5rem;
  border-radius: 10px;
}
</style>