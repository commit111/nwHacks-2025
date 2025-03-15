# Hip Interactive Physical Therapy (HIPT) - NwHacks 2025 Hackathon
Created by Ivan, Linda, Bart and Jacob.

## Inspiration
Why does physical therapy have to be boring? What if it felt more like dancing your way tailored to personal recovery? Picture moving to music, having fun, and feeling good while you heal. Let’s make PT less of a chore and more of an experience you actually look forward to.

## What it does
Hip Interactive Physical Therapy (HIPT) leverages TensorFlow's API to provide real-time pose recognition, ensuring proper form and accurate progress tracking. Users follow dance-inspired routines, complete reps, and advance through levels designed to target different strength, flexibility, and balance as part of a physical therapy plan. Curated playlists sync with exercises, creating an engaging and effective therapy experience that blends fitness and fun. 

## How we built it

Frontend:
We used React and Tailwind CSS to build a dynamic and responsive webpage, delivering an interactive and engaging user experience.

Backend:
Powered by Node.js, managed user and client data with MongoDB as the database, ensuring secure and efficient data handling.

Core functionality:
We integrated TensorFlow to track and analyze people's movements in real time, enabling accurate motion recognition and feedback to enhance user engagement.

Deployment: The entire application is deployed with Defang.

## Challenges we ran into

There were definitely some challenges along the way. We started with MediaPipe but quickly realized it wasn’t working for what we needed, so we switched over to TensorFlow. We also had to figure out how to analyze movements and really get a handle on the tools we were using. Using Defang proved to be challenging due to the extensive time required for debugging and loading.


## Accomplishments that we're proud of

We successfully implemented TensorFlow and got it running for our project! We also built a solid foundation for our React application, creating a well-structured skeleton to support future development. Throughout the process, we embraced learning new concepts and worked cohesively as a team, making the experience both productive and rewarding.

## What we learned
Throughout this project, we gained valuable experience with new tools and technologies. We learned how to use Tailwind CSS for efficient styling and worked with TensorFlow, enhancing our understanding of machine learning frameworks. Additionally, we explored programs integrated with AI, expanding our knowledge of cutting-edge technologies and their applications.

## What's next for HIPT

Progress Tracking: Weekly reports, a dashboard for tracking sessions, calories burned, and progress in mobility and endurance. Include a wider variety of poses for different scores to make the experience more dynamic and engaging.

Custom Playlists: Personalized music to energize or relax users during sessions.

Therapist Support: Remote monitoring and guidance from physical therapists.

Voice Guidance: Real-time prompts to motivate and keep users on track.

## Data schema
- Users:
    - Personal information
    - Muscle group focus
    - Target number of workouts
    - Preferred music
- Workouts
    - Classification (ie. tags)
    - Attached song (should a workout be linked to a specific song?)
    - Exercises

## Other notes
- Pose detector demo using TensorFlow accessible via the /pose-detector path
