import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Metadata } from "next";
import { PDFViewer } from "@/components/ui/PDFViewerDynamic";

export const metadata: Metadata = {
  title: "D Pillar Inner Presentation | Portfolio",
};

export default function Project2Presentation() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FadeIn direction="up">
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Portfolio
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Video & Details */}
            <div className="lg:col-span-8 bg-card border border-border/50 rounded-xl overflow-hidden shadow-xl flex flex-col">
            <div className="aspect-video bg-black relative">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                preload="auto"
              >
                <source src="https://res.cloudinary.com/qje03hi5/video/upload/v1790772731/D_Pillar_Inner_Video_Presentation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-8 md:p-10">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                D Pillar Inner
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Full video presentation showcasing the detailed progression and engineering process for the D Pillar Inner. 
                Highlights include comprehensive formability analysis.
              </p>
            </div>
            </div>

            {/* Right Column: PDF Report */}
            <div className="lg:col-span-4 bg-card border border-border/50 rounded-xl overflow-hidden shadow-xl h-[600px] lg:h-auto min-h-[600px]">
              <PDFViewer url="/Report_D-Pillar%20Lower%20–%20Rear%20Corner.pdf" />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
