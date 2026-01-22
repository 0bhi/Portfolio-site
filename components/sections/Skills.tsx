"use client";

import { skills } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

export default function Skills() {
  // Get all unique skill names
  const allSkills = skills.map((skill) => skill.name);
  
  // Split skills into two groups for different rows
  const midpoint = Math.ceil(allSkills.length / 2);
  const firstRowSkills = allSkills.slice(0, midpoint);
  const secondRowSkills = allSkills.slice(midpoint);
  
  // Duplicate each group for seamless infinite scroll (need at least 2 copies)
  const duplicatedFirstRow = [...firstRowSkills, ...firstRowSkills];
  const duplicatedSecondRow = [...secondRowSkills, ...secondRowSkills];

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Technologies I Have Used
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-16"></div>
        </AnimatedSection>

        {/* First Row - Moving Right to Left */}
        <div className="mb-8 overflow-hidden relative">
          <div className="flex gap-8 animate-scroll-left w-max">
            {duplicatedFirstRow.map((skill, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-6 py-3 border border-border rounded-md bg-card hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                <span className="text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-scroll-right w-max">
            {duplicatedSecondRow.map((skill, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-6 py-3 border border-border rounded-md bg-card hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                <span className="text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

