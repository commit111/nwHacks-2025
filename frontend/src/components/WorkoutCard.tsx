import { Link } from "react-router-dom";

interface WorkoutCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

export const WorkoutCard = ({
  id,
  title,
  description,
  duration,
  level,
  image,
}: WorkoutCardProps) => {
  return (
    <Link to={`/workout/${id}`} className="workout-card group">
      <div className="aspect-video mb-4 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {duration}
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {level}
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};