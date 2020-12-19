<template>
    <div class="how-it-works-table">
        <b-row>
            <b-col lg="10" offset-lg="1" class="text-center">
                <b-link v-b-modal.modal-tutorial size="lg">
                    <h2 class="btn btn-outline-info">
                        <b-icon-play-fill></b-icon-play-fill>
                    </h2>
                </b-link>
                <div>
                    <small>Watch a Video Tutorial</small>
                </div>
                <b-modal id="modal-tutorial"
                         size="lg"
                         ok-only
                         title="BEP20 Token Generation Tutorial">
                    <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/0e5oGXIrEIQ"
                            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                            allowfullscreen
                    ></b-embed>
                </b-modal>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="4">
                <b-card class="mb-3" bg-variant="light" border-variant="light">
                    <b-card-title class="font-weight-light text-center">
                        <p class="h1 mb-2">
                            <b-icon-wallet class="m-4"></b-icon-wallet>
                        </p>
                        <p>Install MetaMask</p>
                    </b-card-title>
                    <p class="card-text text-center">
                        You need to have
                        <a class="text-reset" href="https://metamask.io/" target="_blank">MetaMask</a>
                        installed with an amount of BNB
                        to pay for contract deployment.
                    </p>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-card class="mb-3" bg-variant="light" border-variant="light">
                    <b-card-title class="font-weight-light text-center">
                        <p class="h1 mb-2">
                            <b-icon-card-checklist class="m-4"></b-icon-card-checklist>
                        </p>
                        <p>Enter Details</p>
                    </b-card-title>
                    <p class="card-text text-center">
                        Enter your preferred Token name and symbol.
                        Choose your supply and Token type.
                    </p>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-card class="mb-3" bg-variant="light" border-variant="light">
                    <b-card-title class="font-weight-light text-center">
                        <p class="h1 mb-2">
                            <b-icon-link class="m-4"></b-icon-link>
                        </p>
                        <p>Deploy Token</p>
                    </b-card-title>
                    <p class="card-text text-center">
                        Confirm your transaction using MetaMask.
                        Once deployed your Token is ready to use.
                    </p>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="10" offset-lg="1" class="text-center">
                <b-button to="/create-token/" size="lg" variant="outline-success" class="my-5 py-3 px-5 text-uppercase">
                    Get Started
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    name: 'HowItWorks',
  };
</script>
