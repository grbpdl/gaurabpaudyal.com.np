"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/image-carousel";

const awards = [
  {
    title: "Coding Compettion at IIT Bombay India",
    organization: "IIT Bombay",
    date: "December 2023",
    description:
      "Took Part in CodeDecode Compettion held in India by being selected in regional level in Nepal",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616535/iit1_xag1w4.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616537/iit3_zrxm8v.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616536/iit2_hpfkei.jpg",
    ],
  },
  {
    title: "4 weeks Techonprenaurship Tranning and Pitch",
    organization: "University Grants Commision",
    date: "July 2023",
    description:
      "An Techonprenaurship traning and the idea pitch session of your own startup.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263428/photo_2023-12-09_14-38-48_r66vmj.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263425/photo_2023-12-09_14-38-37_e1eies.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263428/photo_2023-12-09_14-38-51_ylztvq.jpg",
    ],
  },
  {
    title: "Hult Prize at NCIT by UN",
    organization: "United Nations",
    date: "December 2022",
    description:
      "Participated in Hult Prize at Ncit,UN as well as worked in its Organizing Committee.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616538/hult2_aritch.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616534/hult1_gkdydi.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616547/hult3_rgoe2b.jpg",
    ],
  },
  {
    title: "Nepal Open Source Club",
    organization: "NOSK",
    date: "September 2022",
    description:
      "Promoting Open Source Software as well as Software Freedom Day in College through an IT club NOSK.",
    images: [
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1748616545/sfd2_jftqhd.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263439/photo_2023-12-09_14-38-58_myutfe.jpg",
      "https://res.cloudinary.com/dazmdsylh/image/upload/v1718263353/IMG_20220722_163347_1_z1v63d.jpg",
    ],
  },
];

export default function AwardsPage() {
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
