
<script>
  export default {
    data () {
      return {
        validateError: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length > 2) || 'Name must be more than 2 characters'
        ],
        rules: {
          required: value => !!value || 'Required field.',
        },
      }
    },
  }
</script>

<style>

</style>
