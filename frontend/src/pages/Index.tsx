import { Navigation } from "@/components/Navigation";
import { WorkoutCard } from "@/components/WorkoutCard";

const featuredWorkouts = [
  {
    id: "1",
    title: "Full Body HIIT",
    description: "High-intensity interval training to boost your metabolism and build strength.",
    duration: "30 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000",
  },
  {
    id: "2",
    title: "Mindful Yoga Flow",
    description: "A calming yoga session focusing on flexibility and mindfulness.",
    duration: "45 min",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000",
  },
  {
    id: "3",
    title: "Core Power",
    description: "Strengthen your core with this targeted ab workout routine.",
    duration: "20 min",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 page-transition">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Your Strength
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Explore our curated collection of workouts designed to help you achieve
            your fitness goals.
          </p>
        </div>
        <div className="card-container">
          {featuredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;