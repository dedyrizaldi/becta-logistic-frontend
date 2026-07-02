"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ArticleContentProps {
  content: string;
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.article
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:text-[#071C3A]
            prose-headings:font-black

            prose-p:text-slate-700
            prose-p:leading-8

            prose-a:text-[#D8A41D]

            prose-strong:text-[#071C3A]

            prose-li:text-slate-700

            prose-blockquote:border-l-4
            prose-blockquote:border-[#D8A41D]
            prose-blockquote:bg-[#FFF9EA]
            prose-blockquote:py-3
            prose-blockquote:px-6
            prose-blockquote:not-italic
            prose-blockquote:text-[#071C3A]

            prose-img:rounded-2xl
            prose-img:shadow-xl
          "
        >
          {/* Laravel nanti cukup kirim HTML */}

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </motion.article>

        {/* Highlight Image */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="my-16"
        >
          <div className="relative h-[520px] overflow-hidden rounded-[20px]">
            <Image
              src="/images/news/news-detail.jpg"
              alt="News"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Additional Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
          }}
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:text-[#071C3A]
            prose-headings:font-black

            prose-p:text-slate-700
            prose-p:leading-8

            prose-a:text-[#D8A41D]

            prose-strong:text-[#071C3A]

            prose-li:text-slate-700

            prose-blockquote:border-l-4
            prose-blockquote:border-[#D8A41D]
            prose-blockquote:bg-[#FFF9EA]
            prose-blockquote:px-6
            prose-blockquote:py-3
            prose-blockquote:not-italic
            prose-blockquote:text-[#071C3A]
          "
        >
          <h2>Reliable Marine Transportation</h2>

          <p>
            PT Becta Logistics continues to strengthen its position as a trusted
            provider of marine logistics services by delivering efficient,
            reliable, and safe transportation solutions throughout Indonesia.
          </p>

          <p>
            Our experienced team ensures that every project is handled with
            professional planning, strict safety standards, and operational
            excellence to meet customer expectations.
          </p>

          <blockquote>
            Safety, reliability, and customer satisfaction remain the foundation
            of every marine logistics operation carried out by PT Becta
            Logistics.
          </blockquote>

          <h3>Operational Advantages</h3>

          <ul>
            <li>Experienced marine operation team.</li>

            <li>Modern Landing Craft Tank (LCT) fleet.</li>

            <li>Nationwide logistics coverage.</li>

            <li>Competitive charter solutions.</li>

            <li>Commitment to safety and environmental standards.</li>
          </ul>

          <p>
            Through continuous improvement and investment in operational
            capabilities, PT Becta Logistics is committed to supporting
            industrial development and marine transportation across Indonesia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleContent;
