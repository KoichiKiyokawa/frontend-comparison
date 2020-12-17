<script lang="ts">
  import DatePicker from "./DatePicker.svelte"
  import type { TForm } from "../type"

  export let form: Partial<TForm> = {}
</script>

<fieldset>
  <label for="name">氏名</label>
  <input name="name" bind:value={form.name} required />
</fieldset>

<fieldset>
  <label for="birthday">生年月日</label>
  <DatePicker
    bind:year={form.year}
    bind:month={form.month}
    bind:date={form.date} />
</fieldset>
