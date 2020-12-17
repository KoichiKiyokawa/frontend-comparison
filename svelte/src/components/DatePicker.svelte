<script lang="ts">
  import { getEndOfMonthDate, range } from "../util"

  export let year: number | undefined = undefined
  export let month: number | undefined = undefined
  export let date: number | undefined = undefined

  const thisYear = new Date().getFullYear()

  $: endOfDate = getEndOfMonthDate(year ?? 2000, month ?? 1)
</script>

<select bind:value={year} required>
  <option value="">年</option>
  {#each range(thisYear - 100, thisYear).reverse() as year}
    <option value={year}>{year}</option>
  {/each}
</select>
<select bind:value={month} required>
  <option value="">月</option>
  {#each range(1, 12) as month}
    <option value={month}>{month}</option>
  {/each}
</select>
<select bind:value={date} required>
  <option value="">日</option>
  {#each range(1, endOfDate) as date}
    <option value={date}>{date}</option>
  {/each}
</select>
