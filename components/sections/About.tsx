"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, MapPin, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, achievements, certifications } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            About
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-16"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <motion.div
                className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {personalInfo.avatar ? (
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 256px, 256px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                    {personalInfo.name.charAt(0)}
                  </div>
                )}
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-lg sm:text-xl text-foreground leading-relaxed font-medium">
                  {personalInfo.bio}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Focused on clean code, user experience, and solving real problems. Always learning, always building.
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <MapPin className="h-5 w-5" />
                <span>{personalInfo.location}</span>
              </motion.div>

              {personalInfo.resume && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={personalInfo.resume}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      className="group border-2 hover:border-accentBlue hover:text-accentBlue transition-all w-full"
                    >
                      <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                      View Resume
                    </Button>
                  </a>
                </motion.div>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Achievements & Certifications */}
        {(achievements.length > 0 || certifications.length > 0) && (
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {achievements.length > 0 && (
              <AnimatedSection delay={0.2}>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Achievements
                  </h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg border bg-card hover:border-accentBlue/50 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-medium mb-1 group-hover:text-accentBlue transition-colors">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                          {achievement.url && (
                            <motion.a
                              href={achievement.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-accentBlue transition-colors"
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {certifications.length > 0 && (
              <AnimatedSection delay={0.4}>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg border bg-card hover:border-accentPurple/50 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                      >
                        <h4 className="font-medium mb-1 group-hover:text-accentPurple transition-colors">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

