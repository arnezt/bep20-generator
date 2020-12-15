<template>
    <div class="faq-table">
        <b-row>
            <b-col>
                <b-card bg-variant="light" class="mb-4">
                    <h3 class="font-weight-light">BEP20 Token Generator</h3>
                    <p class="font-weight-light">
                        Create an BEP20 Token in less than a minute with the new Smart Contract Generator for
                        BEP20 Token. No login. No setup. No coding required.
                    </p>
                    <hr class="my-4">
                    <h6 class="font-weight-light">The BEP20 Standard</h6>
                    <p class="font-weight-light">
                        BEP20 provides basic functionality to transfer tokens, as well as allow tokens to be approved so
                        they can be spent by another on-chain third party.
                    </p>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h5 class="font-weight-light text-white">
                    <a v-b-toggle
                       href="#about-token-features"
                       @click.prevent
                       class="btn-block text-reset text-decoration-none">
                        <b-icon-caret-down-fill></b-icon-caret-down-fill> Token Features
                    </a>
                </h5>
                <b-collapse id="about-token-features" visible accordion="main-accordion" class="mt-4">
                    <div class="accordion mb-3" role="tablist">
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#difference-between-fixed-capped"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    What's the difference between Fixed, Capped and Unlimited Supply?
                                </a>
                            </b-card-header>
                            <b-collapse id="difference-between-fixed-capped" class="p-4" accordion="features-accordion">
                                <b-card-text>
                                    <b>Fixed Supply</b><br>
                                    The entire token supply will be generated during deploy and sent to Token Owner
                                    wallet. You can't increase or reduce supply later.
                                </b-card-text>
                                <b-card-text>
                                    <b>Capped Supply</b><br>
                                    You can define an initial supply to sent to Token Owner's wallet. You can increase
                                    or reduce supply later by minting or burning tokens (if allowed).
                                    You won't be able to generate more tokens than the defined supply cap.
                                </b-card-text>
                                <b-card-text>
                                    <b>Unlimited Supply</b><br>
                                    You can define an initial supply to sent to Token Owner's wallet. You can increase
                                    or reduce supply later by minting or burning tokens (if allowed).
                                    You will be able to generate unlimited tokens without an upper limit.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#difference-between-access"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    What's the difference between None, Ownable and Role Based Access?
                                </a>
                            </b-card-header>
                            <b-collapse id="difference-between-access" class="p-4" accordion="features-accordion">
                                <b-card-text>
                                    <b>None</b><br>
                                    Your Token doesn't need an access type because of there are not actions that needs
                                    privileges.
                                </b-card-text>
                                <b-card-text>
                                    <b>Ownable</b><br>
                                    Your Token will have an Owner. The account you use to deploy your Token will be
                                    owner by default and will be able to mint new tokens or call the finish minting
                                    function. You can transfer token ownership to addresses or Smart Contract.
                                </b-card-text>
                                <b-card-text>
                                    <b>Role Based</b><br>
                                    Your Token will have Roles. Accounts with "MINTER" role will be able to mint new
                                    tokens. Accounts with "ADMIN" role will be able to add or remove roles to minters
                                    or other admins. The account you use to deploy your Token will be ADMIN and MINTER
                                    by default. In addition your Token will have the Ownable behaviour too.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#who-can-mint-burn"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Who can mint or burn tokens?
                                </a>
                            </b-card-header>
                            <b-collapse id="who-can-mint-burn" class="p-4" accordion="features-accordion">
                                <b-card-text>
                                    <b>Mint</b><br>
                                    It depends on your Token Access Type. If you choose Ownable Access only Token Owner
                                    will be able to mint new tokens. If you choose Role Based Access only addresses
                                    with MINTER role will be able to mint new tokens.
                                    In both cases, if you choose a Capped supply you won't be able to mint more tokens
                                    than the defined cap. By choosing Unlimited supply instead, you will be able to
                                    generate unlimited tokens.
                                </b-card-text>
                                <b-card-text>
                                    <b>Burn</b><br>
                                    Everyone will be able to burn tokens he held. A third party can burn tokens from
                                    other addresses only after an approval. Nobody, not even the Token Owner, will be
                                    able to burn tokens from other addresses without approval.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#will-copyright-be-an-issue"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Will be having BEP20 Generator Copyright an issue?
                                </a>
                            </b-card-header>
                            <b-collapse id="will-copyright-be-an-issue" class="p-4" accordion="features-accordion">
                                <b-card-text>
                                    No. BEP20 Generator code is released under MIT License so, using SimpleBEP20 for
                                    FREE, you will have a view method in your Smart Contract named "generator" showing
                                    a link to this page. You will also have a disclaimer in source code. It is not an
                                    issue for you because of your Token will be fully compliant with BEP20 definition.
                                    You can remove it by choosing a token type with remove Copyright feature.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-collapse>

                <h5 class="font-weight-light text-white">
                    <a v-b-toggle
                       href="#about-token-behaviours"
                       @click.prevent
                       class="btn-block text-reset text-decoration-none">
                        <b-icon-caret-down-fill></b-icon-caret-down-fill> Token Behaviours
                    </a>
                </h5>
                <b-collapse id="about-token-behaviours" accordion="main-accordion" class="mt-4">
                    <div class="accordion mb-3" role="tablist">
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#where-is-my-token-address"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Where is my Token address?
                                </a>
                            </b-card-header>
                            <b-collapse id="where-is-my-token-address" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    Once you confirm your transaction you will receive transaction hash (first) and
                                    Token address (when transaction is confirmed). If your transaction will take some
                                    time to be confirmed due to network status, you can monitor it and your Token will
                                    be visible in transaction page. Watch the above video tutorial for details.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#who-will-be-token-owner"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Who will be Token Owner?
                                </a>
                            </b-card-header>
                            <b-collapse id="who-will-be-token-owner" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    Once your Token will be deployed you (your MetaMask address) will be the only owner.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#where-token-supply-will-go"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Where will token supply go after deploy?
                                </a>
                            </b-card-header>
                            <b-collapse id="where-token-supply-will-go" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    The initial token supply will be held by the address used to deploy the token (your
                                    MetaMask address). This address will be Token Owner and will be able to generate new
                                    tokens (in case you selected a token type with Mintable behaviour).
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#which-wallet-support"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Which wallet will my Token be supported by?
                                </a>
                            </b-card-header>
                            <b-collapse id="which-wallet-support" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    Your Token will be a fully BEP20 compatible token. Any BEP20 wallet will support
                                    your Token.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#how-to-mint-new-tokens"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    How to mint new tokens?
                                </a>
                            </b-card-header>
                            <b-collapse id="how-to-mint-new-tokens" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    To generate new tokens you must use the "mint" function using token owner wallet.
                                    You can doing this by using the Contract/Write tab on your BscScan token page.
                                    You can also import ABI from the Docs page in tools like MyEtherWallet and calling
                                    the mint function.<br>
                                    <small>
                                        Note: remember that your tokens has a number of decimals (usually 18), so you
                                        must use the entire number with decimals.<br>I.e. if you need to generate 500
                                        additional tokens, call the mint function by inserting 500000000000000000000.
                                    </small>
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#will-my-token-be-verified"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Will my Token Source Code be verified on BscScan?
                                </a>
                            </b-card-header>
                            <b-collapse id="will-my-token-be-verified" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    Yes, your token source code will be already verified by "Similar Match".
                                    It means that your source code is similar to other tokens deployed using this
                                    generator.
                                </b-card-text>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#can-i-add-logo"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    Can I add logo and information to my token on BscScan?
                                </a>
                            </b-card-header>
                            <b-collapse id="can-i-add-logo" class="p-4" accordion="bep20-accordion">
                                <b-card-text>
                                    Once your token will be deployed you will be able to add information on BscScan
                                    using their procedure.
                                </b-card-text>
                                <b-link href="https://bscscan.freshdesk.com/support/solutions/articles/67000221190-how-to-update-token-information-on-bscscan-"
                                        class="card-link" target="_blank">
                                    Update Token Information
                                </b-link>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-collapse>

                <h5 class="font-weight-light text-white">
                    <a v-b-toggle
                       href="#about-bsc"
                       @click.prevent
                       class="btn-block text-reset text-decoration-none">
                        <b-icon-caret-down-fill></b-icon-caret-down-fill> Binance Smart Chain and Ecosystem
                    </a>
                </h5>
                <b-collapse id="about-bsc" accordion="main-accordion" class="mt-4">
                    <div class="accordion mb-3" role="tablist">
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#what-is-bsc"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    What is Binance Smart Chain?
                                </a>
                            </b-card-header>
                            <b-collapse id="what-is-bsc" class="p-4" accordion="bsc-accordion">
                                <b-card-text>
                                    TODO
                                </b-card-text>
                                <b-link href="#" class="card-link" target="_blank">
                                    BSC official website
                                </b-link>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#explore-bsc"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    How to explore the BSC blockchain?
                                </a>
                            </b-card-header>
                            <b-collapse id="explore-bsc" class="p-4" accordion="bsc-accordion">
                                <b-card-text>
                                    A Block Explorer is basically a search engine that allows users to easily
                                    lookup, confirm and validate transactions that have taken place on the Binance
                                    Smart Chain.
                                </b-card-text>
                                <b-link href="https://bscscan.com" class="card-link" target="_blank">
                                    BscScan
                                </b-link>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#what-is-a-dapp"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    What is a DApp?
                                </a>
                            </b-card-header>
                            <b-collapse id="what-is-a-dapp" class="p-4" accordion="bsc-accordion">
                                <b-card-text>
                                    DApp is an abbreviated form for decentralized application.<br>
                                    A DApp has its backend code running on a decentralized peer-to-peer network.
                                    Contrast this with an app where the backend code is running on centralized
                                    servers.<br>
                                    A DApp can have frontend code and user interfaces written in any language (just
                                    like an app) that can make calls to its backend. Furthermore, its frontend can
                                    be hosted on decentralized storage such as Swarm or IPFS.<br>
                                    For an application to be considered a Dapp (pronounced Dee-app, similar to
                                    Email) it must meet the following criteria:
                                </b-card-text>
                                <ul>
                                    <li>
                                        The application must be completely open-source, it must operate
                                        autonomously, and with no entity controlling the majority of its tokens. The
                                        application may adapt its protocol in response to proposed improvements and
                                        market feedback but all changes must be decided by consensus of its users.
                                    </li>
                                    <li>
                                        The application's data and records of operation must be cryptographically
                                        stored in a public, decentralized blockchain in order to avoid any central
                                        points of failure.
                                    </li>
                                    <li>
                                        The application must use a cryptographic token (bitcoin or a token native to
                                        its system) which is necessary for access to the application and any
                                        contribution of value from (miners / farmers) should be rewarded in the
                                        application’s tokens.
                                    </li>
                                    <li>
                                        The application must generate tokens according to a standard crytptographic
                                        algorithm acting as a proof of the value nodes are contributing to the
                                        application (Bitcoin uses the Proof of Work Algorithm).
                                    </li>
                                </ul>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#what-is-a-bep20-token"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    What is a BEP20 token?
                                </a>
                            </b-card-header>
                            <b-collapse id="what-is-a-bep20-token" class="p-4" accordion="bsc-accordion">
                                <b-card-text>
                                    TODO
                                </b-card-text>
                                <b-link href="#" class="card-link" target="_blank">
                                    BEP20 Technical specification
                                </b-link>
                            </b-collapse>
                        </b-card>
                        <b-card no-body
                                bg-variant="light">
                            <b-card-header role="tab">
                                <a v-b-toggle
                                   href="#what-is-gas"
                                   @click.prevent
                                   class="btn-block text-reset text-decoration-none">
                                    What is GAS and how to set Gas price?
                                </a>
                            </b-card-header>
                            <b-collapse id="what-is-gas" class="p-4" accordion="bsc-accordion">
                                <b-card-text>
                                    TODO
                                </b-card-text>
                                <b-link href="#"
                                        class="card-link" target="_blank">
                                    Good explanation of Gas
                                </b-link>
                                <b-link href="https://bscscan.com/gastracker"
                                        class="card-link" target="_blank">
                                    BscScan Gas tracker
                                </b-link>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-collapse>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-alert show variant="warning" class="mt-4">
                    <h4 class="alert-heading">DISCLAIMER</h4>
                    <p>
                        BEP20 Token Generator and its author are free of any liability regarding Tokens built using
                        this App, and the use that is made of them. Tokens built on BEP20 Token Generator, their
                        projects, their teams, their use of Token (as well as anything related to Token) are in no way
                        connected to BEP20 Token Generator or its author.
                    </p>
                    <hr>
                    <small>
                        BEP20 Token Generator's code is provided under MIT License. Anyone can use it as per their
                        needs. The App's purpose is to make people able to tokenize their ideas without coding or
                        paying large amounts for it. Source code is public and well tested and continuously updated to
                        reduce risk of bugs and introduce language optimizations. Anyway the purchase of tokens
                        involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weighs
                        all the information and risks detailed in Token owner's Conditions.
                    </small>
                </b-alert>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    name: 'Faq',
  };
</script>
