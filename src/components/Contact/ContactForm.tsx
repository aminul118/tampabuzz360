"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import googleAnalyticsTrackEvent from "@/lib/analytics/googleAnalyticsTrackEvent";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form Submitted:", data);

    // ✅ Track event in GA
    googleAnalyticsTrackEvent({
      action: "form_submit",
      category: "contact",
      label: "contact_form",
    });

    // Clear form (optional)
    reset();
  };

  return (
    <div className="w-full h-full bg-slate-50 dark:bg-slate-950 p-8 flex flex-col justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Input
            {...register("message", { required: "Message is required" })}
            className="h-48"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full">
          <Send className="mr-2" /> Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
