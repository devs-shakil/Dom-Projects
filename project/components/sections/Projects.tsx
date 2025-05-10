import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and MongoDB.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one.vercel.app",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with real-time updates and payment integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      github: "https://github.com/yourusername/project-two",
      live: "https://project-two.vercel.app",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Project Three",
      description: "A real-time chat application with WebSocket integration.",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1",
      github: "https://github.com/yourusername/project-three",
      live: "https://project-three.vercel.app",
      tags: ["Socket.io", "Express", "React"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}