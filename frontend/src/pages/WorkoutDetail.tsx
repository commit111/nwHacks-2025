import { Navigation } from "@/components/Navigation";
import { useParams } from "react-router-dom";

const workouts = {
  "1": {
    title: "Full Body HIIT",
    description: "High-intensity interval training to boost your metabolism and build strength.",
    duration: "30 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000",
    instructions: [
      "Warm up with light cardio (5 minutes)",
      "Circuit 1: Burpees, Mountain Climbers, Jump Squats",
      "Rest 1 minute",
      "Circuit 2: Push-ups, Lunges, Plank Holds",
      "Cool down and stretch (5 minutes)",
    ],
  },
  // Add other workout details as needed
};

const WorkoutDetail = () => {
  const { id } = useParams();
  const workout = workouts[id as keyof typeof workouts];

  if (!workout) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto pt-24 page-transition">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Workout not found</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 page-transition">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src={workout.image}
              alt={workout.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {workout.duration}
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {workout.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {workout.title}
            </h1>
            <p className="text-lg text-muted-foreground">{workout.description}</p>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Instructions</h2>
              <ol className="space-y-2 list-decimal list-inside">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="text-muted-foreground">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkoutDetail;