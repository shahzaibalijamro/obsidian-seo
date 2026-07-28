"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ListingCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  linkPrefix: string;
  index?: number;
}

export default function ListingCard({ id, title, category, date, readTime, excerpt, image, linkPrefix, index = 0 }: ListingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`${linkPrefix}${id}`} className="glass-panel rounded-xl overflow-hidden glass-panel-hover transition-all duration-300 flex flex-col group cursor-pointer h-full">
        <div className="relative image-zoom-container bg-surface-container border-b border-line-subtle aspect-video overflow-hidden">
          <img src={image} alt={category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md text-on-surface border border-line rounded-full font-label-md text-[10px] uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-on-surface-variant text-xs mb-3 flex items-center justify-between">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
          <h3 className="font-headline-md text-[18px] font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow line-clamp-3">
            {excerpt}
          </p>
          <p className="mt-auto inline-flex items-center gap-2 text-primary font-label-md text-sm group-hover:gap-3 transition-all duration-300">
            Read More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
