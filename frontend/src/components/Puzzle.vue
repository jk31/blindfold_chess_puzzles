<template>
  <div id="puzzle">
    <h1>Puzzle</h1>
    <KingBlack />
    <KingWhite />
    <QueenBlack />
    <QueenWhite />
    <RookBlack />
    <RookWhite />
    <BishopBlack />
    <BishopWhite />
    <KnightBlack />
    <KnightWhite />
    <PawnBlack />
    <PawnWhite />
  </div>
</template>

<script>
import KingBlack from '../../public/pieces/king_b.svg';
import KingWhite from '../../public/pieces/king_w.svg';
import QueenBlack from '../../public/pieces/queen_b.svg';
import QueenWhite from '../../public/pieces/queen_w.svg';
import RookBlack from '../../public/pieces/rook_b.svg';
import RookWhite from '../../public/pieces/rook_w.svg';
import BishopBlack from '../../public/pieces/bishop_b.svg';
import BishopWhite from '../../public/pieces/bishop_w.svg';
import KnightBlack from '../../public/pieces/knight_b.svg';
import KnightWhite from '../../public/pieces/knight_w.svg';
import PawnBlack from '../../public/pieces/pawn_b.svg';
import PawnWhite from '../../public/pieces/pawn_w.svg';

export default {
  name: 'Puzzle',
  components: {
    KingBlack,
    KingWhite,
    QueenBlack,
    QueenWhite,
    RookBlack,
    RookWhite,
    BishopBlack,
    BishopWhite,
    KnightBlack,
    KnightWhite,
    PawnBlack,
    PawnWhite,
  },
};
</script>

<style></style>
