import { Card, CardContent } from "@/components/ui/card";
import { Code2, Laptop, Server } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using modern web technologies.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs.",
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "End-to-end development of web applications.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground text-center">
            I'm a passionate Full Stack Developer with experience in building web applications.
            I love creating elegant solutions to complex problems and am dedicated to writing clean,
            maintainable code.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}