// Data schema for a single user
class User {
    username;               // string           Username of the user
    email;                  // string           Email of the user
    password;               // string           Password of the user 
    muscleGroupFocus;       // array<string>    Muscle groups the user wants to focus on
    targetWorkouts;         // number           Number of workouts the user wants to complete
    workoutsCompleted;      // number           Number of workouts the user has completed
    preferredMusic;         // array<string>    Preferred music genres of the user

    // Constructor for user
    constructor() {
        this.username = "";
        this.email = "";
        this.password = "";
        this.muscleGroupFocus = [];
        this.targetWorkouts = 0;
        this.workoutsCompleted = 0;
        this.preferredMusic = [];
    }
}

module.exports = User;
