"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "Web Development",
  "Mobile",
  "UI/UX Design",
  "E-commerce",
  "Dashboard"
]

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  return (
    <div className="mb-8 overflow-auto pb-2">
      <div className="flex flex-wrap gap-2 md:justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}