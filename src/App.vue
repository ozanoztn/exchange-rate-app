<template>
  <div
    class="
      container
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <currency-unit @getUnit="setTheUnitValue" header="From" />
    <currency-unit @getUnit="setTheUnitValue" header="To" />
    <input
      type="number"
      class="form-control mb-2"
      placeholder="Amount"
      v-model="Amount"
    />
    <button
      class="btn btn-success mb-5"
      v-on:click="convert(ToValue, FromValue, Amount)"
    >
      Convert
    </button>
    <input
      type="text"
      class="form-control mb-4 text-center"
      placeholder="Result"
      v-model="Result"
      readonly
    />
  </div>
</template>

<style>
.container {
  border: 1px solid black;
  width: 30%;
  height: 50vh;
}
.form-control {
  width: 35%;
}
</style>

<script>
import CurrencyUnit from "./components/CurrencyUnit.vue";
import convertion from "./mixins/convertion";
export default {
  data() {
    return {
      FromValue: "",
      ToValue: "",
      Amount: "",
    };
  },
  mixins: [convertion],
  components: {
    CurrencyUnit,
  },
  methods: {
    setTheUnitValue(e) {
      e[0] == "From" ? (this.FromValue = e[1]) : (this.ToValue = e[1]);
    },
  },
};
</script>

