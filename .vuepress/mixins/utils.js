/* global ga, fbq */

export default {
  methods: {
    isMobile () {
      try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      } catch (e) {
        return false;
      }
    },
    getParam (param) {
      const vars = {};
      window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
          vars[key] = value !== undefined ? value : '';
        },
      );

      if (param) {
        return vars[param] ? vars[param] : null;
      }
      return vars;
    },
    makeToast (title, text, variant = null) {
      this.$bvToast.toast(text, {
        title: title,
        variant: variant,
        solid: true,
      });
    },
    promisify (fn, ...args) {
      return new Promise((resolve, reject) => {
        fn(...args, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    },
    gaSend (category, action, label) {
      try {
        ga('send', 'event', category, action, label);
      } catch (e) {
        console.log('ga send', { category, action, label });
      }
    },
    fbtrack (eventName, eventParams) {
      try {
        fbq('track', eventName, (eventParams || {}));
      } catch (e) {
        console.log('fb track', { eventName: eventName, eventParams: (eventParams || {}) });
      }
    },
  },
};
