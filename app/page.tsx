
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 py-20">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm Mary Ann Constantino
          </h1>
          <p className="text-xl text-muted-foreground">
            Aspiring Web Developer | Student | Creative Thinker
          </p>
        </div>

        <p className="max-w-xl text-muted-foreground">
          Welcome to my personal portfolio! I enjoy creating websites,
          learning new technologies, and developing creative solutions.
        </p>

        
<div className="flex gap-4">
  <Button render={<a href="#projects" />}>
    View My Work
  </Button>

  <Button
    variant="outline"
    render={<a href="#contact" />}
  >
    Contact Me
  </Button>
</div>

      </section>

      {/* About Section */}
      <section id="about" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            I am a passionate student interested in web development and
            technology. I am continuously improving my skills and exploring
            new ways to build useful and creative applications.
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "MySQL"].map((skill) => (
            <Card key={skill}>
              <CardContent className="p-4 text-center font-medium">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Portfolio</CardTitle>
              <CardDescription>API Testing: Postman</CardDescription>
            </CardHeader>
            <CardContent>
              Tested RESTful API endpoints using Postman.



Performed GET, POST, PUT, and DELETE requests.



Tested API responses and status codes.



Verified backend functionality and database operations.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Online Food Ordering System</CardTitle>
              <CardDescription>Web Application</CardDescription>
            </CardHeader>
            <CardContent>
              A food ordering application designed to make ordering food
              easier and more convenient.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-6 text-center pb-12">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-muted-foreground">
          Interested in working together? Feel free to reach out!
        </p>
        <Button render={<a href="mailto:your-email@example.com" />}>Send Me an Email</Button>
      </section>

    </div>
  );
}
