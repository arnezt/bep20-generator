<template>
    <span>
        <b-icon-check-circle-fill v-if="value" variant="success"></b-icon-check-circle-fill>
        <b-icon-x-circle-fill v-else variant="danger"></b-icon-x-circle-fill>
    </span>
</template>

<script>
  export default {
    name: 'Checkmark',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
