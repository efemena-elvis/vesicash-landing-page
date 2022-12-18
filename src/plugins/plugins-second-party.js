import Vue from "vue";
import { APP_BASE_DOMAIN, OLD_APP_BASE_DOMAIN } from "@/utilities/constant";

// ===========================
// APPLICATION MIXINS
// ===========================
import { MixinAssets } from "@/shared/mixins/mixin-assets";
import { MixinEvents } from "@/shared/mixins/mixin-events";
import { MixinAuthUser } from "@/shared/mixins/mixin-auth-user";

// ===========================
// APPLICATION SERVICES
// ===========================
import { $serviceString as $string } from "@/services/service-string";
import { $serviceColor as $color } from "@/services/service-color";
import { $serviceDate as $date } from "@/services/service-date";
import { $serviceValidators as $validate } from "@/services/service-validators";
import { $serviceCurrency as $money } from "@/services/service-currency";

Vue.mixin(MixinAssets);
Vue.mixin(MixinEvents);
Vue.mixin(MixinAuthUser);

Vue.mixin({
  computed: {
    $string: () => $string,
    $color: () => $color,
    $date: () => $date,
    $validate: () => $validate,
    $money: () => $money,
  },
});

// ===============================================
// SETUP APPLICATION EVENT BUS AND URL CONSTANTS
// ===============================================
Vue.prototype.$bus = new Vue();
Vue.prototype.$app_url = APP_BASE_DOMAIN;
Vue.prototype.$old_app_url = OLD_APP_BASE_DOMAIN;
