<template>
    <PulseLoader
            v-if="loading"
            class="my-3"
            :loading="loading"
            :color="color"
            :size="size"></PulseLoader>
</template>

<script>
  export default {
    name: 'Loader',
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: '#ffc107',
      },
      size: {
        type: Number,
        default: 12,
      },
    },
  };
</script>
