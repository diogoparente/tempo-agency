import React from "react";
import { useTranslation } from "@/lib/i18n";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const formSchema = (t: (key: string) => string) => {
  return z.object({
    name: z.string().min(2, { message: t("contact.errors.nameLength") }),
    email: z.string().email({ message: t("contact.errors.invalidEmail") }),
    message: z.string().min(10, { message: t("contact.errors.messageLength") }),
  });
};

type ContactFormValues = z.infer<ReturnType<typeof formSchema>>;

interface ContactProps {
  onSubmit?: (data: ContactFormValues) => void;
  isSubmitting?: boolean;
}

const Contact = ({
  onSubmit = (data) => console.log("Form submitted:", data),
  isSubmitting = false,
}: ContactProps) => {
  const { t } = useTranslation();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <section id="#contact" className="w-full py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl text-primary font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.nameLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.namePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.emailLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("contact.form.emailPlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.messageLabel")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.form.messagePlaceholder")}
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
