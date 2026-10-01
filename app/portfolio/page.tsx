import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our recent engineering projects, showcasing precision sheet metal stamping simulation and die design.",
};

const PORTFOLIO_VIDEOS = [
  {
    title: "STAY ASSY FR SUSP MBR LH",
    description: "Simulation and formability analysis presentation.",
    src: "https://res.cloudinary.com/qje03hi5/video/upload/v1790773002/STAY_ASSY_FR_SUSP_MBR_LH_Presentation.mp4",
    link: "/portfolio/project-1",
  },
  {
    title: "D Pillar Inner",
    description: "Detailed progression and engineering showcase.",
    src: "https://res.cloudinary.com/qje03hi5/video/upload/v1790772703/D_Pillar_Inner_Presentation.mp4",
    link: "/portfolio/project-2",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative overflow-hidden pt-10 pb-8 lg:pt-12 lg:pb-12 bg-muted/30">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn direction="up">
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Engineering <span className="text-primary">Portfolio</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
              Explore our recent engineering projects, showcasing precision sheet metal stamping simulation, die design, and comprehensive analysis.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Videos Section */}
      <Section className="bg-background py-12 lg:py-16 border-t border-border/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-12 lg:grid-cols-2">
            {PORTFOLIO_VIDEOS.map((video, index) => {
              const CardContent = (
                <div className="group overflow-hidden rounded-sm border border-border/50 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50 cursor-pointer h-full">
                  <div className="aspect-video relative bg-muted/50 overflow-hidden">
                    <video
                      controls={!video.link}
                      autoPlay={!!video.link}
                      loop={!!video.link}
                      muted={!!video.link}
                      className="h-full w-full object-cover"
                      preload="metadata"
                      poster=""
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {video.link && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg">
                          Play Full Video
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className={`text-muted-foreground font-medium text-lg leading-relaxed ${video.link ? 'mb-6 flex-1' : ''}`}>
                      {video.description}
                    </p>
                    {video.link && (
                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-2 text-primary font-bold transition-all group-hover:translate-x-1">
                          View Presentation <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <FadeIn key={index} direction="up" delay={0.1 * index}>
                  {video.link ? (
                    <a href={video.link} className="block h-full">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </Section>
    </div>
  );
}
