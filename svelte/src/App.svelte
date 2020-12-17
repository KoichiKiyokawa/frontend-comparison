<script lang="ts">
  import Form from "./components/Form.svelte"
  import type { TForm } from "./type"

  let forms: Partial<TForm>[] = []
  const getEmptyForm = (): Partial<TForm> => ({})

  function onSubmit() {
    forms.forEach((form) => {
      alert(`${form.name}, ${form.year}, ${form.month}, ${form.date}`)
    })
  }

  function addPerson() {
    forms = [...forms, getEmptyForm()]
  }
</script>

<style>
  form {
    background: orange;
  }
</style>

<button on:click={addPerson}>追加</button>
<form on:submit|preventDefault={onSubmit}>
  {#each forms as form, i}
    <p>{i + 1}</p>
    <Form bind:form />
  {/each}
  <button>送信</button>
</form>
