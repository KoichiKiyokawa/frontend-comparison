<template>
  <div>
    <label>
      生年月日
      <select
        :value="year"
        @change="$emit('update:year', Number($event.target.value))"
      >
        <option value>年</option>
        <option
          v-for="year in range(thisYear - 100, thisYear)"
          :key="`year_${year}`"
          >{{ year }}</option
        >
      </select>
      <select
        :value="month"
        @change="$emit('update:month', Number($event.target.value))"
      >
        <option value>月</option>
        <option v-for="month in range(1, 12)" :key="`month_${month}`">{{
          month
        }}</option>
      </select>
      <select
        :value="date"
        @change="$emit('update:date', Number($event.target.value))"
      >
        <option value>日</option>
        <option
          v-for="date in range(1, endOfMonthDate)"
          :key="`date_${date}`"
          >{{ date }}</option
        >
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

function range(from: number, to: number): number[] {
  const arr = []
  for (let i = from; i <= to; i++) arr.push(i)
  return arr
}

function isLeap(year: number): boolean {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true
  return false
}

export default Vue.extend({
  props: {
    year: { type: Number },
    month: { type: Number },
    date: { type: Number }
  },
  methods: { range },
  computed: {
    thisYear: () => new Date().getFullYear(),
    endOfMonthDate(): 28 | 29 | 30 | 31 {
      if (this.month === 2) return isLeap(this.year ?? 2000) ? 29 : 28
      if ([4, 6, 9, 11].includes(this.month ?? 1)) return 30
      return 31
    }
  }
})
</script>
