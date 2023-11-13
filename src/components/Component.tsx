import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./atoms/Card";
import { Badge } from "./atoms/Badge";
import { cn } from "../lib/utils";

export default function Component({ character }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{character.name}</CardTitle>
        <CardDescription>
          <Badge
            className={cn({
              "bg-green-500": character.status === "Alive",
              "bg-red-500": character.status === "Dead",
            })}
          >
            {character.status}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src={character.image} />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
