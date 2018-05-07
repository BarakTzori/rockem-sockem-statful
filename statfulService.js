export class StatfulService {

  //this class describes an FSA for checking winners and sending metrics to statful
  //there are 4 classes (N, R, B, T) aligning with [0, 1, 2, 3]

  constructor() {
    this.red_counter = 0;
    this.blue_counter = 0;
    this.current_state = 'N';
  }

  consumeInput(inputId) {
    if (this.current_state === 'N') {
      this.transition_from_N(inputId);
    }
    if (this.current_state === 'R') {
      this.transition_from_R(inputId);
    }
    if (this.current_state === 'B') {
      this.transition_from_B(inputId);
    }
    if (this.current_state === 'T') {
      this.transition_from_T(inputId);
    }
  }

  transition_from_N(inputId) {
    this.red_counter = 0;
    this.blue_counter = 0;
    if (inputId === 0) {
      this.current_state = 'N';
    }
    if (inputId === 1) {
      this.current_state = 'R';
    }
    if (inputId === 2) {
      this.current_state = 'B';
    }
    if (inputId === 3) {
      this.current_state = 'N';
    }
  }

  transition_from_R(inputId) {
    if (inputId === 0) {
      this.current_state = 'N';
    }
    if (inputId === 1) {
      this.current_state = 'R';
      this.red_counter++;
      console.log(this.red_counter);
      this.check_winner();
    }
    if (inputId === 2) {
      this.current_state = 'B';
      this.blue_counter = 0;
    }
    if (inputId === 3) {
      this.current_state = 'T';
      this.check_winner();
    }
  }

  transition_from_B(inputId) {
    if (inputId === 0) {
      this.current_state = 'N';
    }
    if (inputId === 1) {
      this.current_state = 'R';
      this.red_counter = 0;
    }
    if (inputId === 2) {
      this.current_state = 'B';
      this.blue_counter++;
      console.log(this.blue_counter);
      this.check_winner();
    }
    if (inputId === 3) {
      this.current_state = 'T';
      this.check_winner();
    }
  }

  transition_from_T(inputId) {
    if (inputId === 0) {
      this.current_state = 'N';
    }
    if (inputId === 1) {
      this.current_state = 'T';
    }
    if (inputId === 2) {
      this.current_state = 'T';
    }
    if (inputId === 3) {
      this.current_state = 'T';
    }
  }

  check_winner() {
    if (this.red_counter > 25) {
      console.log("Blue Wins!");
      this.current_state = 'T';
    }
    if (this.blue_counter > 25) {
      console.log("Red Wins!");
      this.current_state = 'T';
    }
  }
}
