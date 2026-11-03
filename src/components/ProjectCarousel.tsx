import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description:
      "A desktop-based attendance management system featuring facial recognition for automated identity verification and attendance recording.",
    image: "/projects/face-recognition.png",
    tags: ["Web Development", "Tourism Platform", "UI/UX"],
    liveUrl: undefined,
    githubUrl:
      "https://github.com/XiaDRaion/Face-Recognition-Attendance-System",
  },
  {
    id: 2,
    title: "Desa Kunjir Tourism Website",
    description: "Tourism Website to introduce the beauty of the village",
    image: "/projects/kunjir.png",
    tags: ["Laravel", "Blade", "Landing Page"],
    liveUrl: "https://wisatakunjir.com/",
    githubUrl: "https://github.com/XiaDRaion/Website_Wisata_Desa_Kunjir",
  },
  {
    id: 3,
    title: "QDT Consulting — Fullstack Web Developer",
    description:
      "Developed and maintained fullstack web applications using React, TypeScript, and Supabase. Worked on authentication, database management, real-time features, Xendit payment integration, and content management through Sanity CMS. Also contributed to AI-powered document processing, automated content workflows, and third-party service integrations.",
    image: "/projects/qdt.png",
    tags: [
      "Fullstack Web Dev",
      "Node.js",
      "Company",
      "Supabase",
      "AI Integration",
    ],
    liveUrl: "https://qdtconsultingid.com",
    githubUrl: undefined,
  },
  {
    id: 4,
    title: "Okediil Service Company - Fullstack Web Dev",
    description:
      "Developed fullstack application features using Laravel and React, focusing on backend development, RESTful API implementation, database management, and business logic. Integrated Laravel backend services with a React frontend, implementing application functionality, authentication, and data communication between frontend and backend systems.",
    image: "/projects/okediil.png",
    tags: ["Company", "Laravel", "React", "Management System", "Accounting"],
    liveUrl: "https://service-okediil.com/",
    githubUrl: undefined,
  },
  {
    id: 5,
    title: "ChemVision: AR Chemistry",
    description:
      "ChemVision is an educational mobile application powered by Augmented Reality (AR) to help students visualize chemical elements in 3D. It bridges the gap between abstract chemical concepts and tangible learning by displaying stunning 3D models of real-world elements using marker-based AR technology.",
    image: "/projects/chemvision.png",
    tags: ["Android", "C#", "Unity", "Fuvoria"],
    liveUrl: "https://github.com/XiaDRaion/ChemVision-AR/releases",
    githubUrl: "https://github.com/XiaDRaion/ChemVision-AR",
  },
  {
    id: 6,
    title: "LearnLoop - Backend Development",
    description:
      "Developed LearnLoop, a Laravel-based RESTful API assessment system integrating OpenAI and DeepSeek for automated question generation and answer key creation. Implemented authentication, role-based access control, examination management, anti-cheating mechanisms, automated grading, and psychometric analytics, with React frontend integration.",
    image:
      "/projects/thesis.png",
    tags: ["Laravel", "Assesment System", "React.js", "MySQL"],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 7,
    title: "QR Code Generator",
    description:
      "Generate customizable QR with pastel design. This tool include generate and decoding QR.",
    image: "/projects/qr.png",
    tags: ["HTML", "CSS", "QR"],
    liveUrl: undefined,
    githubUrl: "https://github.com/XiaDRaion/QR-Code-Generator-and-Decoder",
  },
  {
    id: 8,
    title: "Mandarin Learning Center",
    description: "Learning center for mandaring private lesson",
    image: "/projects/mandarin.png",
    tags: ["UI/UX", "React", "Learning Website"],
    liveUrl: undefined,
    githubUrl: "https://github.com/XiaDRaion/Mandarin-Learning-Center",
  },
];

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="projects" className="section-vanilla">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            My{" "}
            <span className="bg-gradient-mint bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of delightful projects crafted with love, creativity,
            and a sprinkle of magic ✨
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-float">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-none bg-white/60 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-96 md:h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Project Info */}
                      <CardContent className="p-8 flex flex-col justify-center">
                        <CardHeader className="p-0 mb-6">
                          <CardTitle className="text-3xl font-bold text-foreground mb-3">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-muted-foreground">
                            {project.description}
                          </CardDescription>
                        </CardHeader>

                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-ice-cream-mint rounded-full text-sm font-medium text-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {(project.liveUrl || project.githubUrl) && (
                          <div className="flex gap-4">
                            {project.liveUrl && (
                              <Button asChild className="btn-mint">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button
                                asChild
                                variant="outline"
                                className="border-2 border-foreground/20 hover:border-primary"
                              >
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-soft hover:bg-white/90"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-soft hover:bg-white/90"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <span className="text-sm text-muted-foreground font-medium">
              {currentProject + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>

      {/* Ice Cream Melt Effect */}
      {/* <div className="melt-overlay"></div>
      <div className="melt-drops">
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
      </div> */}

      {/* Floating Melt Elements */}
      {/* <div className="floating-melt" style={{ top: '20%', right: '10%', animationDelay: '1s' }}></div>
      <div className="floating-melt" style={{ bottom: '40%', left: '15%', animationDelay: '3s' }}></div> */}
    </section>
  );
};

export default ProjectCarousel;
