<template>
  <div class="about">
    <v-card elevation="2">
      <v-card-title>Blindfold Chess Puzzles v.0.1</v-card-title>
      <v-card-subtitle
        >Developed by
        <a href="mailto:jaroslaw@kornowicz.com">Jaroslaw Kornowicz</a>. <br />
        Puzzles from
        <a href="https://database.lichess.org/#puzzles" target="_blank"
          >lichess</a
        >.
      </v-card-subtitle>
      <v-card-text class="d-flex justify-center">
        <v-timeline dense>
          <v-timeline-item small>
            <div class="py-4">
              <h2 class="mb-3">v.0.1 - 12th April 2012</h2>
              <ul>
                <li>
                  First version
                  <ul>
                    <li>Filter for rating and number of pieces</li>
                    <li>Piece rendering</li>
                    <li>Puzzle input and feedback</li>
                    <li>Solution rendering</li>
                  </ul>
                </li>
                <li>2000 Puzzles</li>
              </ul>
            </div>
          </v-timeline-item>
          <v-timeline-item small>
            <div class="py-4">
              <h2 class="mb-3">v.0.2 - Potential Features</h2>
              <ul>
                <li>(interactive) Board in the solution</li>
                <li>Design improvements</li>
                <li>More puzzles</li>
                <li>Puzzle URLs</li>
                <li>User management</li>
                <li>
                  Do you have more ideas? Write me an email:
                  <a href="mailto:jaroslaw@kornowicz.com">Jaroslaw Kornowicz</a>
                </li>
              </ul>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>
