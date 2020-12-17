<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>
        氏名
        <input name="name" v-model="name" />
      </label>
    </div>

    <DatePicker :year.sync="year" :month.sync="month" :date.sync="date" />

    <button>送信</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue"
import DatePicker from "./components/DatePicker.vue"

export default Vue.extend({
  name: "App",
  components: { DatePicker },
  data: (): Partial<{
    name: string
    year: number
    month: number
    date: number
  }> => ({
    name: "",
    year: undefined,
    month: undefined,
    date: undefined
  }),
  methods: {
    onSubmit() {
      alert(`Hello, ${name}. ${this.year}/${this.month}/${this.date}`)
    }
  }
})
</script>
