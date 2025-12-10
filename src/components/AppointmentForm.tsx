import React, { useState } from "react";

export default function AppointmentForm() {
  const [mobile, setMobile] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-numeric characters
    if (value.length <= 10) {
      setMobile(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate for 10 digits and starting digit 6-9
    const isValid = /^[6-9]\d{9}$/.test(mobile);
    if (!isValid) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const whatsappNumber = "+919263231349";
    const message = `I want to book an appointment for my child. My mobile number is ${mobile}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="appointment" className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-md max-w-sm mx-auto">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
           Book an Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Specialized knowledge and experience in various aspects of child health and development */}
            Request an appointment quickly by dropping us a WhatsApp message.
           </p>
        </div>
      
       

      <form  
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full space-y-4 bg-background"
      >
        <input
          type="tel"
          value={mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          required
          maxLength={10}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all"
        >
          Submit
        </button>
      </form>
    </section>
  );
}


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card } from "@/components/ui/card";
// import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const AppointmentForm = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Here you would typically send the data to your backend
//     toast({
//       title: "Appointment Request Received!",
//       description: "We'll contact you shortly to confirm your appointment.",
//     });

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       date: "",
//       time: "",
//       message: "",
//     });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="appointment" className="py-16 md:py-24 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Book an Appointment
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Schedule a consultation with Dr. Vimal Kumar for expert pediatric care
//           </p>
//         </div>

//         <Card className="max-w-2xl mx-auto p-8 md:p-10">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground flex items-center gap-2">
//                   <User className="h-4 w-4 text-primary" />
//                   Full Name *
//                 </label>
//                 <Input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground flex items-center gap-2">
//                   <Mail className="h-4 w-4 text-primary" />
//                   Email Address *
//                 </label>
//                 <Input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-foreground">
//                 Phone Number *
//               </label>
//               <Input
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+91 9876543210"
//                 required
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground flex items-center gap-2">
//                   <Calendar className="h-4 w-4 text-primary" />
//                   Preferred Date *
//                 </label>
//                 <Input
//                   name="date"
//                   type="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-foreground flex items-center gap-2">
//                   <Clock className="h-4 w-4 text-primary" />
//                   Preferred Time *
//                 </label>
//                 <Input
//                   name="time"
//                   type="time"
//                   value={formData.time}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-foreground flex items-center gap-2">
//                 <MessageSquare className="h-4 w-4 text-primary" />
//                 Message (Optional)
//               </label>
//               <Textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Tell us about your child's condition or any specific concerns..."
//                 rows={4}
//               />
//             </div>

//             <Button type="submit" variant="hero" size="lg" className="w-full">
//               Submit Appointment Request
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default AppointmentForm;
