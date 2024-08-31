//./plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_C4ltDQLygSY26ytrUBSG7VJeNArEeX1RnntvD1WFCuE',
      {
        api_host: 'https://us.i.posthog.com',
      }
    );
  },
};