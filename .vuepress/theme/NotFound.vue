<template>
    <div class="page-wrapper mt-4">
        <b-container>
            <b-row>
                <b-col lg="8" offset-lg="2">
                    <transition name="fade" mode="out-in">
                        <b-card class="shadow-lg" bg-variant="light">
                            <h1>404</h1>
                            <blockquote>{{ getMsg() }}</blockquote>
                            <router-link to="/">Take me home</router-link>.
                        </b-card>
                    </transition>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  const msgs = [
    'There\'s nothing here.',
    'How did we get here?',
    'That\'s a Four-Oh-Four.',
    'Looks like we\'ve got some broken links.',
  ];

  export default {
    methods: {
      getMsg () {
        return msgs[Math.floor(Math.random() * msgs.length)];
      },
    },
  };
</script>
<style src="../scss/main.scss" lang="scss"></style>
