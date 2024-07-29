import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border", className)}>
      <Container className="flex items-center justify-between py-8"></Container>
    </header>
  );
};
