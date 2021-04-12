<template>
  <div id="filter">
    <v-expansion-panels v-model="openedFilterPanel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Puzzle Setings</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card flat color="transparent">
            <v-subheader>Puzzle Rating</v-subheader>
            <v-card-text>
              <v-row>
                <v-col class="px-4">
                  <v-range-slider
                    v-model="ratingRange"
                    :max="3000"
                    :min="500"
                    step="100"
                    hide-details
                    class="align-center"
                  >
                    <template v-slot:prepend>
                      <v-text-field
                        :value="ratingRange[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(ratingRange, 0, $event)"
                      ></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                        :value="ratingRange[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(ratingRange, 1, $event)"
                      ></v-text-field>
                    </template>
                  </v-range-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card flat color="transparent">
            <v-subheader>Number of Pieces</v-subheader>
            <v-card-text>
              <v-row>
                <v-col class="px-4">
                  <v-range-slider
                    v-model="numberOfPiecesRange"
                    :max="9"
                    :min="3"
                    hide-details
                    class="align-center"
                  >
                    <template v-slot:prepend>
                      <v-text-field
                        :value="numberOfPiecesRange[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(numberOfPiecesRange, 0, $event)"
                      ></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                        :value="numberOfPiecesRange[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(numberOfPiecesRange, 1, $event)"
                      ></v-text-field>
                    </template>
                  </v-range-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn
      block
      :color="noPuzzles ? 'warning' : 'success'"
      class="my-3"
      elevation="2"
      @click="playPuzzle"
      >{{
        noPuzzles
          ? 'No Puzzles found - change puzzle settings and try again'
          : 'Play a puzzle'
      }}</v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Test',
  computed: {
    ratingRange: {
      get() {
        return this.$store.state.puzzles.ratingRange;
      },
      set(range) {
        this.$store.commit('puzzles/updateRatingRange', range);
      },
    },
    openedFilterPanel: {
      get() {
        return this.$store.state.puzzles.openedFilterPanel;
      },
      set() {
        this.$store.commit('puzzles/updateOpenedFilterPanel');
      },
    },
    numberOfPiecesRange: {
      get() {
        return this.$store.state.puzzles.numberOfPiecesRange;
      },
      set(range) {
        this.$store.commit('puzzles/updateNumberOfPiecesRange', range);
      },
    },
    ...mapGetters('puzzles', ['activePuzzleExists', 'noPuzzles']),
  },
  methods: {
    playPuzzle() {
      this.$store.commit('puzzles/updatePuzzleSolved', false);
      this.$store.dispatch('puzzles/getRandomPuzzleFromFilteredPuzzles');

      if (this.activePuzzleExists) {
        this.$nextTick(() => {
          this.$vuetify.goTo('#puzzle', {
            duration: 1000,
            offset: 0,
            easing: 'easeInCubic',
          });
        });
      }
    },
  },
};
</script>

<style></style>
