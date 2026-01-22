"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
          {experience.length === 0 && (
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Currently building experience through projects and learning. Open to opportunities.
              </p>
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-8 inline-block"
              >
                <div className="p-8 rounded-2xl border-2 border-dashed border-border bg-card/50">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-sm text-muted-foreground">Ready to start my journey</p>
                </div>
              </motion.div> */}
            </div>
          )}
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <AnimatedSection key={exp.id} delay={index * 0.2}>
                <div className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 ml-4 md:ml-0 md:flex md:items-start md:gap-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                      <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2 md:justify-end">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2 md:justify-end">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-primary mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      {exp.achievements && exp.achievements.length > 0 && (
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>

                {index < experience.length - 1 && (
                  <div className="ml-4 md:ml-0 md:pl-12 mt-6">
                    <Separator className="md:hidden" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

