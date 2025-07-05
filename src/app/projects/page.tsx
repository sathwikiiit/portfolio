'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { projects, mechanicalProjects } from "@/lib/data";
import { Section, SectionTitle } from "@/components/section";

export default function ProjectsPage() {
    return (
        <>
            <Section id="software-projects" className="pt-24 md:pt-32">
                <SectionTitle>Software Projects</SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardHeader className="p-0">
                                <div className="relative aspect-video">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <h3 className="text-xl font-bold font-headline mb-2">{project.name}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild variant="outline" className="w-full">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        View on GitHub <ArrowRight className="ml-2" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>
            <Section id="mechanical-projects" className="bg-muted">
                <SectionTitle>Mechanical Engineering Projects</SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mechanicalProjects.map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardHeader className="p-0">
                                <div className="relative aspect-video">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <h3 className="text-xl font-bold font-headline mb-2">{project.name}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                {(!project.link || project.link === '#') ? (
                                    <Button variant="outline" className="w-full" disabled>
                                        View Details <ArrowRight className="ml-2" />
                                    </Button>
                                ) : (
                                    <Button asChild variant="outline" className="w-full">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Details <ArrowRight className="ml-2" />
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}
