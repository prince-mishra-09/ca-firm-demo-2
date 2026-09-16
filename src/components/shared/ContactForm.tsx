"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
 name: z.string().min(2, {
 message: "Name must be at least 2 characters.",
 }),
 email: z.string().email({
 message: "Please enter a valid email address.",
 }),
 phone: z.string().min(10, {
 message: "Please enter a valid phone number.",
 }),
 requirementType: z.string().min(1, {
 message: "Please select a requirement type.",
 }),
 message: z.string().min(10, {
 message: "Message must be at least 10 characters.",
 }),
});

export function ContactForm() {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);

 const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
 resolver: zodResolver(formSchema),
 defaultValues: {
 requirementType: "",
 }
 });

 function onSubmit(values: z.infer<typeof formSchema>) {
 setIsSubmitting(true);
 // Simulate API call
 setTimeout(() => {
 console.log(values);
 setIsSubmitting(false);
 setIsSuccess(true);
 reset();
 
 // Reset success message after 5 seconds
 setTimeout(() => setIsSuccess(false), 5000);
 }, 1000);
 }

 return (
 <div className="bg-background border border-border p-8 md:p-10 rounded-sm ">
 <h3 className="text-2xl font-heading font-bold text-primary mb-2">Secure Inquiry</h3>
 <p className="text-muted-foreground mb-8 text-sm">All information submitted is strictly confidential.</p>
 
 {isSuccess && (
 <div className="mb-8 p-5 bg-accent/10 text-primary rounded-lg border border-accent/20 flex items-start">
 <div className="h-5 w-5 rounded-full bg-accent text-white flex items-center justify-center mr-3 shrink-0 mt-0.5">
 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
 </div>
 <span className="font-medium text-sm">Thank you. Your inquiry has been securely submitted. A partner will contact you shortly.</span>
 </div>
 )}

 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name <span className="text-destructive">*</span></label>
 <Input placeholder="John Doe" className="h-12 bg-secondary/30 text-base" {...register("name")} />
 {errors.name && <p className="text-[0.8rem] text-destructive font-medium">{errors.name.message}</p>}
 </div>
 <div className="space-y-2">
 <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone Number <span className="text-destructive">*</span></label>
 <Input placeholder="+91 98765 43210" className="h-12 bg-secondary/30 text-base" {...register("phone")} />
 {errors.phone && <p className="text-[0.8rem] text-destructive font-medium">{errors.phone.message}</p>}
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address <span className="text-destructive">*</span></label>
 <Input type="email" placeholder="john@company.com" className="h-12 bg-secondary/30 text-base" {...register("email")} />
 {errors.email && <p className="text-[0.8rem] text-destructive font-medium">{errors.email.message}</p>}
 </div>
 <div className="space-y-2">
 <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Requirement Type <span className="text-destructive">*</span></label>
 <select 
 className="flex h-12 w-full rounded-md border border-input bg-secondary/30 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
 {...register("requirementType")}
 >
 <option value="" disabled>Select an area of practice...</option>
 <option value="Taxation">Taxation</option>
 <option value="GST">GST & Indirect Tax</option>
 <option value="Audit">Audit & Assurance</option>
 <option value="Accounting">Accounting & Finance</option>
 <option value="Corporate Compliance">Corporate Compliance</option>
 <option value="Business Advisory">Business Advisory</option>
 <option value="Other">Other</option>
 </select>
 {errors.requirementType && <p className="text-[0.8rem] text-destructive font-medium">{errors.requirementType.message}</p>}
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message <span className="text-destructive">*</span></label>
 <Textarea 
 placeholder="Please provide a brief overview of your requirements..." 
 className="min-h-[120px] bg-secondary/30 resize-y text-base"
 {...register("message")}
 />
 {errors.message && <p className="text-[0.8rem] text-destructive font-medium">{errors.message.message}</p>}
 </div>

 <Button type="submit" className="w-full h-14 text-base tracking-wide" disabled={isSubmitting}>
 {isSubmitting ? "Transmitting securely..." : "Submit Inquiry"}
 </Button>
 
 </form>
 </div>
 );
}
