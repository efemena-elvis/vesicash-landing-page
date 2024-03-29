<template>
  <div class="fund-payout-rules">
    <div class="disbursement-title h4-text grey-900 mgb-32">Payout Details</div>

    <div class="instruction-wrapper col-xl-8 mgb-12">
      <!-- INSTRUCTION TEXT -->
      <div class="instruction-text grey-900 primary-2-text mgr-5">Provide details for the Payout</div>

      <div class="button-row">
        <button class="btn btn-primary btn-md mgr-15" @click="autoFillFields">
          <div class="text">Auto fill fields</div>
        </button>

        <button
          class="btn btn-secondary btn-md"
          v-if="getTransactionType === 'milestone'"
          @click="addNewMilestone"
        >
          <div class="icon icon-plus"></div>
          <div class="text">Add new milestone</div>
        </button>
      </div>
    </div>

    <!-- PAYOUT CARDS -->
    <div class="wrapper row">
      <div class="col-xl-8" v-for="(milestone, index) in getTransactionMilestones" :key="index">
        <PayoutCard
          :milestone="milestone"
          :currency="getTransactionAmount.currency"
          :index="index"
        />
      </div>
    </div>

    <!-- INSTRUCTION TEXT -->
    <div class="instruction-text grey-900 primary-2-text mgb-12">How May Any Dispute Be Handled?</div>

    <div class="wrapper row mgb-32">
      <div class="col-xl-8">
        <div class="row">
          <div class="col-12 col-sm-6 dispute-wrapper">
            <RadioSelectCard
              card_name="dispute"
              label_id="disputeCard1"
              label_text="Handled by the platform"
              tooltip_text="Dispute
              resolution will be handled by Vesicash."
              :is_checked="
                getTransactionSetup.dispute_handler == 'vesicash' ? true : false
              "
              @clicked="UPDATE_TRANSACTION_DISPUTE_MGT('vesicash')"
            />
          </div>

          <div class="col-12 col-sm-6 dispute-wrapper">
            <RadioSelectCard
              card_name="dispute"
              label_id="disputeCard2"
              label_text="Arbitration"
              tooltip_text="Any dispute will be handled via arbitration. Cost of which will be borne by the transacting parties."
              :is_checked="
                getTransactionSetup.dispute_handler == 'arbitration'
                  ? true
                  : false
              "
              @clicked="UPDATE_TRANSACTION_DISPUTE_MGT('arbitration')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- SUMMATION TOTAL -->
    <div class="wrapper mgb-40">
      <div class="col-xl-8">
        <SummationCard :milestones="getTransactionMilestones" :amount_data="getTransactionAmount" />
      </div>
    </div>

    <!-- CTA ACTION ROW -->
    <div class="action-row mgt-14">
      <button class="btn btn-primary btn-md" @click="nextProgressFlow">Continue</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import {
  INSPECTION_OPTIONS,
  CURRENCY_OPTIONS,
  RANDOM_MILESTONE_NAMES,
  RANDOM_TRANSACTION_AMOUNTS,
} from "@/modules/transactions/constants";

export default {
  name: "FundPayoutRules",

  components: {
    PayoutCard: () =>
      import(
        /* webpackChunkName: "transactions-module" */ "@/modules/transactions/components/card-comps/payout-card"
      ),

    RadioSelectCard: () =>
      import(
        /* webpackChunkName: "shared-module" */ "@/shared/components/card-comps/radio-select-card"
      ),

    SummationCard: () =>
      import(
        /* webpackChunkName: "transactions-module" */ "@/modules/transactions/components/card-comps/summation-card"
      ),
  },

  computed: {
    ...mapGetters({
      getTransactionSetup: "transactions/getTransactionSetup",
      getTransactionBeneficiaries: "transactions/getTransactionBeneficiaries",
      getTransactionMilestones: "transactions/getTransactionMilestones",
      getTransactionAmount: "transactions/getTransactionAmount",
      getMilestoneRecipients: "transactions/getMilestoneRecipients",
    }),

    // =============================================
    // GET THE TRANSACTION PARTY TYPE FROM ROUTE
    // =============================================
    getTransactionParty() {
      return this.$route.query.party ? this.$route.query.party : "single";
    },

    // ===================================================
    // GET THE TRANSACTION DISBURSEMENT TYPE FROM ROUTE
    // ===================================================
    getTransactionType() {
      return this.$route.query.type ? this.$route.query.type : "oneoff";
    },
  },

  mounted() {
    // this.loadMileStoneData();
    this.getTransactionMilestones.length
      ? this.loadAllCurrentMilestones()
      : this.loadMileStoneData();
  },

  methods: {
    ...mapMutations({
      UPDATE_TRANSACTION_MILESTONE: "transactions/UPDATE_TRANSACTION_MILESTONE",
      UPDATE_MILESTONE_RECIPIENT: "transactions/UPDATE_MILESTONE_RECIPIENT",
      UPDATE_RECIPIENT_AMOUNT: "transactions/UPDATE_RECIPIENT_AMOUNT",
      UPDATE_TRANSACTION_DISPUTE_MGT:
        "transactions/UPDATE_TRANSACTION_DISPUTE_MGT",
      UPDATE_MILESTONE_DATA: "transactions/UPDATE_MILESTONE_DATA",
    }),

    generateRandomNumber(range) {
      return Math.floor(Math.random() * range);
    },

    generateRandomDate() {
      //use current year
      const year = new Date().getFullYear();

      // choose random month
      let month = Math.floor(Math.random() * 12) + 1;

      let day = 1;

      // choose day based on month (30 has sept, april june & nov....)
      if (month === 2) day = Math.floor(Math.random() * 28) + 1;
      else if ([9, 4, 6, 11].includes(month))
        day = Math.floor(Math.random() * 30) + 1;
      else day = Math.floor(Math.random() * 31) + 1;

      // allow only today or future day
      if (day < new Date().getDate()) day = new Date().getDate();

      // allow current month or future month
      if (month < new Date().getMonth() + 1) month = new Date().getMonth() + 1;

      if (month < 10) month = `0${month}`;

      if (day < 10) day = `0${day}`;

      return `${year}-${month}-${day}`;
    },

    generateRandomPayoutDetails() {
      const due_date = this.generateRandomDate();
      const inspection_period =
        INSPECTION_OPTIONS[
          this.generateRandomNumber(INSPECTION_OPTIONS.length)
        ];
      const milestone_name =
        RANDOM_MILESTONE_NAMES[
          this.generateRandomNumber(RANDOM_MILESTONE_NAMES.length)
        ];
      const amount =
        RANDOM_TRANSACTION_AMOUNTS[
          this.generateRandomNumber(RANDOM_TRANSACTION_AMOUNTS.length)
        ];
      const currency =
        CURRENCY_OPTIONS[this.generateRandomNumber(CURRENCY_OPTIONS.length)];

      return {
        due_date,
        inspection_period,
        milestone_name,
        amount,
        escrow_fee: amount * 0.05,
        currency,
      };
    },

    autoFillFields() {
      let payment_amount = 0;
      let milestone_amounts = [];

      const random_milestones_data = [...this.getTransactionMilestones].map(
        (milestone, index) => {
          const { due_date, inspection_period } =
            this.generateRandomPayoutDetails();

          let amount = 0;
          //update recipeints accordingly
          [...this.getMilestoneRecipients]
            .filter((rec) => rec.milestone_id === milestone.id)
            .map((recipient) => {
              const { amount: randomAmount } =
                this.generateRandomPayoutDetails();
              amount += randomAmount;
              let recipient_index = this.getMilestoneRecipients.findIndex(
                (user) => user.update_id == recipient.update_id
              );

              let recipient_payload = {
                ...this.getMilestoneRecipients[recipient_index],
              };
              recipient_payload.amount = randomAmount;

              this.UPDATE_RECIPIENT_AMOUNT({
                recipient_payload,
                recipient_index,
              });
            });

          payment_amount += amount;
          milestone_amounts.push(amount);

          return {
            ...milestone,
            due_date,
            inspection_period,
            name: `Milestone Level ${index + 1}`,
          };
        }
      );

      this.UPDATE_TRANSACTION_MILESTONE(random_milestones_data);

      const { currency } = this.generateRandomPayoutDetails();

      console.log("PAYMENTS ARE", milestone_amounts, payment_amount);

      const amount_data = {
        currency,
        escrow_fee: payment_amount * 0.05,
        milestone_amounts,
        payment_amount,
        total_fee: payment_amount + payment_amount * 0.05,
      };

      Object.entries(amount_data).map(([type, selected]) => {
        this.UPDATE_MILESTONE_DATA({
          outer_data: {
            type,
            selected,
          },
        });
      });

      const dispute_handler = ["vesicash", "arbitration"][
        this.generateRandomNumber(2)
      ];
      this.UPDATE_TRANSACTION_DISPUTE_MGT(dispute_handler);
    },

    nextProgressFlow() {
      this.checkValidState();

      // this.$router.push({
      //   name: "TransactionConfirmPayout",
      //   query: {
      //     type: this.$route.query.type,
      //     party: this.$route.query.party,
      //   },
      // });
    },

    // ========================================================
    // CHECK IF ALL INPUT AND SELECTIONS ARE MADE
    // ========================================================
    checkValidState() {
      for (
        let index = 0;
        index < this.getTransactionMilestones.length;
        index++
      ) {
        let milestone = this.getTransactionMilestones[index];
        let payout_error = [];

        let milestone_recipients = this.getMilestoneRecipients.filter(
          (user) => user.milestone_id === milestone.id
        );

        milestone_recipients.map((user) => {
          if (!user.amount) {
            let error_obj = {};

            error_obj.name = milestone.name;
            error_obj.index = index;
            error_obj.message = `is missing a payout amount for user (${user.email_address})`;

            payout_error.push(error_obj);
          }
        });

        // DUE DATE
        if (!milestone.due_date) {
          this.logErrorMessage(milestone.name, index, "is missing a due date.");
          break;
        }

        // INSPECTION PERIOD
        else if (!Object.values(milestone.inspection_period).length) {
          this.logErrorMessage(
            milestone.name,
            index,
            "is missing an inspection period."
          );
          break;
        }

        // FETCH MILESTONE RECIPIENTS
        else if (payout_error.length) {
          this.logErrorMessage(
            payout_error[0].name,
            payout_error[0].index,
            payout_error[0].message
          );
          break;
        }

        // DISPUTE HANDLING
        else if (!this.getTransactionSetup.dispute_handler) {
          this.logErrorMessage(
            milestone.name,
            index,
            "is missing a dispute handler.",
            true
          );
          break;
        }

        // CHECK MILESTONE LENGTH FOR MILESTONE TRANSACTION
        else if (
          this.getTransactionMilestones.length < 2 &&
          this.getTransactionType === "milestone"
        ) {
          this.logErrorMessage(
            milestone.name,
            index,
            "should contain more than one (1) milestone",
            true
          );
          break;
        }

        // MOVE TO CONFIRM PAYOUT PAGE
        else {
          if (index + 1 === this.getTransactionMilestones.length) {
            this.$router.push({
              name: "TransactionConfirmPayout",
              query: {
                type: this.$route.query.type,
                party: this.$route.query.party,
                pay: this.$route.query.pay,
                name: this.$route.query.name,
                parties: this.$route.query.parties,
                fee: this.getTransactionAmount.total_fee,
              },
            });
          }
        }
      }
    },

    // ==========================================================
    // LOG ERROR MESSAGE DEPENDING ON MILESTONE
    // ==========================================================
    logErrorMessage(
      milestone_name = "",
      milestone_index = 0,
      message = "",
      pass = false
    ) {
      let naming_intro =
        this.getTransactionType === "oneoff" || pass
          ? "Transaction"
          : milestone_name
          ? milestone_name
          : `Milestone ${milestone_index + 1}`;

      this.pushToast(`${naming_intro} ${message}`, "error");
    },

    // ============================================================
    // GENERATE A LIST OF BENEFICIARIES WHO ARE PAYOUT RECIPIENTS
    // ============================================================
    getBeneficiariesReceivingPay(milestone_id) {
      let milestone_recipients = [];

      this.getTransactionBeneficiaries
        .filter((user) => user.recipient.name === "Yes")
        .map((i) => {
          milestone_recipients.push({
            ...i,
            milestone_id,
            update_id: this.$string.getRandomString(12),
          });
        });

      return milestone_recipients;
    },

    // CHECK CURRENT RECIPIENT STATE
    // checkCurrentRecipientState() {
    //   let parties_list = [];
    //   let recipient_list = [];

    //   // POPULATE PARTIES LIST
    //   this.getTransactionBeneficiaries.map((user) =>
    //     parties_list.push(user.id)
    //   );

    //   // LOOP MILESTONE RECIPIENT LIST
    //   this.getMilestoneRecipients.map((user) => {
    //     if (parties_list.includes(user.id)) {
    //       // POPULATE RECIPIENT LIST
    //       recipient_list.push(user);

    //       // POP FROM PARTIES LIST
    //     }
    //   });
    // },

    // ==============================
    // LOAD MILESTONE DATA
    // ==============================
    loadMileStoneData() {
      let milestone_data = {};

      milestone_data.id = this.$string.getRandomString(12);
      milestone_data.name = "";
      milestone_data.due_date = "";
      milestone_data.inspection_period = {};
      milestone_data.status = "Sent - Awaiting Confirmation";

      this.UPDATE_TRANSACTION_MILESTONE([milestone_data]);
      this.UPDATE_MILESTONE_RECIPIENT([
        ...this.getBeneficiariesReceivingPay(milestone_data.id),
      ]);
    },

    // ==============================
    // LOAD ALL CURRENT MILESTONES
    // ==============================
    loadAllCurrentMilestones() {
      this.UPDATE_TRANSACTION_MILESTONE([...this.getTransactionMilestones]);
      this.UPDATE_MILESTONE_RECIPIENT([...this.getMilestoneRecipients]);
    },

    // ==============================
    // CREATE A NEW MILESTONE DATA
    // ==============================
    addNewMilestone() {
      let previous_milestone =
        this.getTransactionMilestones[this.getTransactionMilestones.length - 1];

      let new_milestone_data = {
        ...previous_milestone,
        id: this.$string.getRandomString(12),
      };

      this.UPDATE_TRANSACTION_MILESTONE([
        ...this.getTransactionMilestones,
        new_milestone_data,
      ]);

      this.UPDATE_MILESTONE_RECIPIENT([
        ...this.getMilestoneRecipients,
        ...this.getBeneficiariesReceivingPay(new_milestone_data.id),
      ]);
    },
  },
};
</script>

<style lang="scss" scoped>
.fund-payout-rules {
  .disbursement-title {
    @include breakpoint-down(xl) {
      @include generate-font-type("h5");
    }
  }

  .instruction-wrapper {
    @include flex-row-between-wrap;
    gap: toRem(20) 0;

    .btn {
      padding: toRem(8) toRem(24) toRem(8) toRem(18);

      @include breakpoint-down(xs) {
        margin-top: toRem(10);
      }

      .icon {
        font-size: toRem(14.25);
        margin-right: toRem(4);
      }
    }
  }

  .dispute-wrapper {
    @include breakpoint-down(sm) {
      &:first-of-type {
        margin-bottom: toRem(20);
      }
    }
  }

  .action-row {
    padding-bottom: toRem(55);

    .btn {
      padding: toRem(9) toRem(24);
      width: toRem(260);

      @include breakpoint-down(xs) {
        width: 100%;
      }
    }
  }

  .button-row {
    display: flex;
    align-items: center;
  }
}
</style>
