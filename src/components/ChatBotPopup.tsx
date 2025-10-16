"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const RobotIcon = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-accent-foreground"
  >
    <motion.path
      d="M19 9V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      d="M5 14H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      d="M15.5 4.5L18 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ y1: 4.5, y2: 7 }}
      animate={{ y1: [4.5, 3, 4.5], y2: [7, 5.5, 7] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M8.5 4.5L6 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ y1: 4.5, y2: 7 }}
      animate={{ y1: [4.5, 3, 4.5], y2: [7, 5.5, 7] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    {/* Blinking Eyes */}
    <motion.circle
      cx="9.5"
      cy="11.5"
      r="1"
      fill="currentColor"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: [1, 0.1, 1, 1, 1, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle
      cx="14.5"
      cy="11.5"
      r="1"
      fill="currentColor"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: [1, 0.1, 1, 1, 1, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
    />
  </motion.svg>
);


const ChatBotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (message: string) => {
    const whatsappUrl = `https://wa.me/923248406582?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          {/* Chat Bubble Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full w-20 h-20 bg-accent text-accent-foreground shadow-2xl hover:bg-accent/90 relative"
              aria-label="Toggle chat"
            >
              <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px hsl(var(--accent) / 0.4)",
                      "0 0 0 15px hsl(var(--accent) / 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <X className="w-8 h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="robot"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <RobotIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-28 right-6 z-50 w-96 bg-background/80 backdrop-blur-xl rounded-2xl border-2 border-primary/20 shadow-2xl shadow-accent/20 overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Hello there!</h3>
              <p className="text-foreground/80">How can I help you today?</p>
            </div>
            <div className="p-4 bg-muted/50 space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 bg-transparent hover:bg-accent/10 hover:text-accent-foreground border-primary/20"
                onClick={() => handleOptionClick("I'm looking for career opportunities.")}
              >
                <Briefcase className="mr-3 text-accent" />
                <span>Looking for Opportunities</span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 bg-transparent hover:bg-accent/10 hover:text-accent-foreground border-primary/20"
                onClick={() => handleOptionClick("I'm looking for resources for my company.")}
              >
                <Send className="mr-3 text-accent" />
                <span>Looking for Resources</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotPopup;
