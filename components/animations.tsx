"use client"

import { motion } from "framer-motion"

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
    {children}
  </motion.div>
)

export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
}: {
  children: React.ReactNode
  direction?: "left" | "right"
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export const HoverCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
)

