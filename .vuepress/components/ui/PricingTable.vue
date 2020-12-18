<template>
    <div class="pricing-table">
        <b-row class="mb-5">
            <b-col lg="10" offset-lg="1">
                <h4 class="text-center font-weight-light text-light">
                    Choose between {{ tokenDetails.length }} different Token types.
                </h4>
                <p class="text-center font-weight-light text-light">
                    What are your Token requirements?
                </p>
            </b-col>
        </b-row>
        <component v-if="carousel"
                   :is="carousel"
                   :perPageCustom="[[0, 1], [576, 2], [992, 3], [1536, 4]]"
                   paginationColor="#343a40"
                   paginationActiveColor="#f8f9fa">
            <component v-if="slide"
                       :is="slide"
                       v-for="(t, index) in tokenDetails">
                <b-card no-body class="mb-3 mx-3" itemscope itemtype="http://schema.org/Product">
                    <b-card-title class="pt-5 font-weight-light text-center" itemprop="name">
                        {{ t.name }}
                    </b-card-title>
                    <p class="card-price text-center">
                        <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                            <span itemprop="price">{{ t.price }}</span>
                            <small class="term" itemprop="priceCurrency">BNB</small>
                        </span>
                    </p>

                    <b-list-group flush>
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            BEP20 Compliant <ui--checkmark :value="t.standard"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Verified Source Code <ui--checkmark :value="t.verified"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Detailed <ui--checkmark :value="t.detailed"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Customizable Decimals <ui--checkmark :value="t.customizeDecimals"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Remove Copyright <ui--checkmark :value="t.removeCopyright"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Supply Type
                            <b-badge :variant="t.supplyType === 'Capped' ? 'success' : (t.supplyType === 'Unlimited' ? 'info' : 'dark')">
                                {{ t.supplyType}}
                            </b-badge>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Access Type
                            <b-badge :variant="t.accessType === 'Role Based' ? 'success' : (t.accessType === 'Ownable' ? 'info' : 'dark')">
                                {{ t.accessType}}
                            </b-badge>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Burnable <ui--checkmark :value="t.burnable"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                            Mintable <ui--checkmark :value="t.mintable"></ui--checkmark>
                        </b-list-group-item>

                        <b-list-group-item variant="warning"
                                           :to="{ path: '/create-token/', query: { tokenType: t.name }}"
                                           class="justify-content-between align-items-center text-center py-3"
                                           itemprop="url">
                            Create
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </component>
        </component>
        <b-row>
            <b-col lg="6" offset-lg="3" class="mt-4">
                <p class="text-center text-light">
                    * GAS fee will be added to final amount
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import tokenDetails from '../../mixins/tokenDetails';

  export default {
    name: 'PricingTable',
    mixins: [
      tokenDetails,
    ],
    data () {
      return {
        carousel: null,
        slide: null,
      };
    },
    mounted () {
      import('vue-carousel').then(module => {
        this.carousel = module.Carousel;
        this.slide = module.Slide;
      }).catch((e) => {
        console.log(e); // eslint-disable-line no-console
      });
    },
  };
</script>
