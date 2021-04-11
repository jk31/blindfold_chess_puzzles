<template>
  <div id="solution">
    <v-card elevation="2">
      <v-card-title class="mb-3"
        >{{ activePlayer }}'s next move: {{ solutionPiece }}
      </v-card-title>
      <!-- <v-card-subtitle></v-card-subtitle> -->
      <v-card-text>
        <v-container
          class="grey lighten-5 d-flex align-center justify-space-around"
        >
          <v-item-group v-model="solutionPiece">
            <div v-if="activePlayer === 'White'">
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="king_w"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="queen_w"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="rook_w"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="bishop_w"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="knight_w"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="pawn_w"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
            </div>

            <div v-if="activePlayer === 'Black'">
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="king_b"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="queen_b"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="rook_b"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="bishop_b"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="knight_b"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <Piece
                  piece="pawn_b"
                  class="piece"
                  :class="{ active: active }"
                  @click.native="toggle"
                />
              </v-item>
            </div>
          </v-item-group>
        </v-container>
        <v-btn color="primary" class="my-3">Check your move</v-btn>
      </v-card-text>
      {{ solution }}
    </v-card>
  </div>
</template>

<script>
import Piece from './Piece.vue';

export default {
  name: 'Solution',
  components: {
    Piece,
  },
  data() {
    return {
      solutionPiece: [],
      solutionFile: '',
      solutionRank: '',
      radios: 'Duckduckgo',
    };
  },
  computed: {
    activePlayer() {
      return this.activePuzzle.active === 'w' ? 'White' : 'Black';
    },
    activePuzzle() {
      return this.$store.state.puzzles.activePuzzle;
    },
    solution() {
      return this.activePuzzle.moves_alg.slice(1);
    },
    selectedPiece() {
      return true;
    },
  },
  methods: {
    pieceClick(piece, event) {
      this.solutionPiece = piece;
      console.log(piece);
      event.target.classList.toggle('selected-piece');
    },
  },
};
</script>

<style scoped>
.piece {
  transform: scale(1.1);
  border: 1px solid white;
  cursor: pointer;
}

.selected-piece {
  border: 1px solid rgb(76, 175, 80);
}

.active {
  border: 1px solid rgb(76, 175, 80);
}
</style>
