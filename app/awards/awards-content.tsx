"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/image-carousel";

const awards = [
  {
    title: "AWS Certification for Cloud Computing Foundations",
    organization: "Amazon Web Services",
    date: "2024",
    description:
      "Certified in AWS Cloud Computing Foundations, demonstrating expertise in cloud infrastructure, deployment, and management. This certification validates my knowledge of scalable cloud solutions and DevOps practices.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616535/iit1_xag1w4.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616537/iit3_zrxm8v.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616536/iit2_hpfkei.jpg",
    ],
  },
  {
    title: "CodeCode Regional Competition Selection",
    organization: "IIT Bombay",
    date: "December 2023",
    description:
      "Selected for CodeCode Regional Competition in Nepal and sent to participate at IIT Bombay, India. This recognition highlights my technical problem-solving skills and competitive programming capabilities.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616535/iit1_xag1w4.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616537/iit3_zrxm8v.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616536/iit2_hpfkei.jpg",
    ],
  },
  {
    title: "40+ Hours Technopreneurship Training",
    organization: "NCIT Incubator",
    date: "2023",
    description:
      "Completed comprehensive 40+ hours technopreneurship training at NCIT Incubator. Gained practical knowledge on startup ideation, business model development, pitching, and entrepreneurial mindset development.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263428/photo_2023-12-09_14-38-48_r66vmj.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263425/photo_2023-12-09_14-38-37_e1eies.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263428/photo_2023-12-09_14-38-51_ylztvq.jpg",
    ],
  },
  {
    title: "Hult Prize Finalist and PR Team Member",
    organization: "United Nations / Hult Prize Foundation",
    date: "December 2022",
    description:
      "Finalist at Hult Prize competition at NCIT and served as PR team member in the organizing committee. Demonstrated leadership, social impact thinking, and organizational skills in this prestigious global competition.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616538/hult2_aritch.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616534/hult1_gkdydi.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616547/hult3_rgoe2b.jpg",
    ],
  },
];

export function AwardsContent() {
  return (
    <div className="flex flex-col gap-12 pb-16 pt-24 sm:pt-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Awards & Achievements
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px]">
            Recognition and milestones that mark my journey in technology and
            innovation.
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageCarousel images={award.images} />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="text-sm text-primary font-medium">
                        {award.date}
                      </div>
                      <h2 className="text-2xl font-bold">{award.title}</h2>
                      <p className="text-muted-foreground font-medium">
                        {award.organization}
                      </p>
                      <p className="text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
