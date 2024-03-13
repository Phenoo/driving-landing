import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AiFillCheckCircle } from "react-icons/ai";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function HeroCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "w-[380px] text-white bg-neutral-800 border-none space-y-4",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-center">
          Why you need a car training
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <div>
                <AiFillCheckCircle className="text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-white text-black w-full h-16">
          Start at $120 only
        </Button>
      </CardFooter>
    </Card>
  );
}
