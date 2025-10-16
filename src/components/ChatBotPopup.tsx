"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              className="rounded-full w-16 h-16 bg-accent text-accent-foreground shadow-2xl hover:bg-accent/90"
              aria-label="Toggle chat"
            >
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-8 h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageSquare className="w-8 h-8" />
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-background rounded-2xl border-2 border-border shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Hello there!</h3>
              <p className="text-foreground/80">How can I help you today?</p>
            </div>
            <div className="p-4 bg-muted/50 space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => handleOptionClick("I'm looking for career opportunities.")}
              >
                <Briefcase className="mr-3" />
                <span>Looking for Opportunities</span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => handleOptionClick("I'm looking for resources for my company.")}
              >
                <Send className="mr-3" />
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
