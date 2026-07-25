"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsappProps {
  phone: string;
  message?: string;
}

function formatWhatsappNumber(phone: string): string {
  let number = phone.replace(/\D/g, "");

  // 08xxxxxxxx -> 628xxxxxxxx
  if (number.startsWith("0")) {
    number = `62${number.slice(1)}`;
  }

  // +62xxxxxxxx -> 62xxxxxxxx
  if (number.startsWith("620")) {
    number = `62${number.slice(3)}`;
  }

  return number;
}

export default function FloatingWhatsapp({
  phone,
  message = "Hello, I got your contact from the Becta Logistics website. I would like to inquire about your marine logistics services.",
}: FloatingWhatsappProps) {
  if (!phone) return null;

  const whatsappNumber = formatWhatsappNumber(phone);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group flex items-center justify-end"
      >
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="pointer-events-none mr-4 hidden rounded-xl bg-white px-4 py-3 shadow-xl lg:block"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#D8A41D]">
            Need Help?
          </p>

          <p className="mt-1 font-semibold text-[#071C3A]">Chat via WhatsApp</p>
        </motion.div>

        <span className="absolute h-16 w-16 animate-ping rounded-full bg-green-500/30" />

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
        >
          <FaWhatsapp size={34} />
        </Link>
      </motion.div>
    </div>
  );
}
