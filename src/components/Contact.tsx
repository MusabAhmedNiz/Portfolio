"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();

      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-accent/20 rounded-full filter blur-3xl -bottom-48 -right-48"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Contact
            </Badge>
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Get in touch
            </motion.h2>
            <motion.p
              className="text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out.
            </motion.p>
          </div>

          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Let&apos;s work together
                </h3>
                <p className="text-foreground/70 mb-6">
                  I&apos;m currently open to work, whether it&apos;s freelancing or a job
                  opportunity. If you have a project to discuss or need my help
                  with something, feel free to reach out.{" "}
                </p>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Social Media</p>
                      <div className="flex gap-3 mt-1">
                        <a
                          href="https://x.com/MusabAhmedNiz"
                          target="_blank"
                          className="text-foreground/70 hover:text-foreground transition-colors"
                        >
                          Twitter
                        </a>
                        <a
                          href="https://www.linkedin.com/in/musab-nizamani-1167a5261/"
                          target="_blank"
                          className="text-foreground/70 hover:text-foreground transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/MusabAhmedNiz"
                          target="_blank"
                          className="text-foreground/70 hover:text-foreground transition-colors"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {["name", "email", "message"].map((field, index) => (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FormField
                          control={form.control}
                          name={field as "name" | "email" | "message"}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {field.name.charAt(0).toUpperCase() +
                                  field.name.slice(1)}
                              </FormLabel>
                              <FormControl>
                                {field.name === "message" ? (
                                  <Textarea
                                    placeholder={`Your ${field.name}`}
                                    rows={4}
                                    {...field}
                                  />
                                ) : (
                                  <Input
                                    placeholder={`Your ${field.name}`}
                                    {...field}
                                  />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
