
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationList = [
  {
    degree: "First Year College",
    institution: "University of Nueva Caceres",
    period: "2025 - 2026",
    description:
      "Currently pursuing a college degree with consistent academic excellence and dedication to learning.",
    achievements: [
      "Dean's Lister - All Semesters",
    ],
  },
  {
    degree: "Senior High School - ICT Strand",
    institution: "University of Nueva Caceres",
    period: "2025 - 2026 (Grade 12)",
    description:
      "Completed the Information and Communications Technology (ICT) strand, developing foundational knowledge and skills in technology and programming.",
    achievements: [
      "With Honors - Grade 12",
      "Successfully Completed: Introduction to Modern AI - Cisco Networking Academy",
      "Successfully Completed: JavaScript Essentials 1 - Cisco Networking Academy",
      "Successfully Completed: Fundamentals in Figma",
    ],
  },
  {
    degree: "Senior High School - ICT Strand",
    institution: "University of Nueva Caceres",
    period: "2024 - 2025 (Grade 11)",
    description:
      "Studied under the Information and Communications Technology (ICT) strand, building foundational knowledge in information technology.",
    achievements: [
      "With Honors - Grade 11",
    ],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Education
        </h1>
        <p className="text-muted-foreground mt-1">
          My academic journey, achievements, and professional training.
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      {item.degree}
                    </CardTitle>
                    <CardDescription>
                      {item.institution}
                    </CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground text-right shrink-0">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {item.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-primary" />
                  Key Achievements & Certifications
                </h4>

                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
