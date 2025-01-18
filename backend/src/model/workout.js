// Data schema for a single workout
class Workout {
    tags;                   // array<string>    List of tags for classifying the workout
    exercises;              // array<string>    List of exercises in the workout
    song;                   // string           Song to play during the workout

    // Constructor for workout
    constructor() {
        this.tags = [];
        this.exercises = [];
        this.song = "";
    }
}

module.exports = Workout;
