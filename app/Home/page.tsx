import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, GraduationCap, Heart, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-3">
          <p className="text-sm font-medium text-primary">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Fritzgerald Enric T. Imperial</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A passionate developer focused on building clean, modern, and user-friendly web applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/about">
          <Card className="hover:shadow-md transition-shadow h-full">
            <CardContent className="p-5 flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">About</h3>
                <p className="text-sm text-muted-foreground mt-1">Background & skills</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/education">
          <Card className="hover:shadow-md transition-shadow h-full">
            <CardContent className="p-5 flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground mt-1">Academic journey</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/hobbies">
          <Card className="hover:shadow-md transition-shadow h-full">
            <CardContent className="p-5 flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Hobbies</h3>
                <p className="text-sm text-muted-foreground mt-1">Interests & passions</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/contact">
          <Card className="hover:shadow-md transition-shadow h-full">
            <CardContent className="p-5 flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Contact</h3>
                <p className="text-sm text-muted-foreground mt-1">Let's connect</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
