import { Navigation } from "@/components/Navigation";
import { WorkoutCard } from "@/components/WorkoutCard";

const categories = {
  strength: [
    {
      id: "4",
      title: "Upper Body Power",
      description: "Build upper body strength with this comprehensive routine.",
      duration: "40 min",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000",
    },
    {
      id: "5",
      title: "Lower Body Focus",
      description: "Strengthen your legs and glutes with targeted exercises.",
      duration: "35 min",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1000",
    },
  ],
  cardio: [
    {
      id: "6",
      title: "Cardio Blast",
      description: "High-energy cardio workout to improve endurance.",
      duration: "25 min",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000",
    },
  ],
};

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 page-transition">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Workout Categories
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Find the perfect workout routine for your fitness journey.
          </p>
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Strength Training</h2>
            <div className="card-container">
              {categories.strength.map((workout) => (
                <WorkoutCard key={workout.id} {...workout} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-6">Cardio</h2>
            <div className="card-container">
              {categories.cardio.map((workout) => (
                <WorkoutCard key={workout.id} {...workout} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Categories;