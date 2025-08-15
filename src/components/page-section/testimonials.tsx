import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="w-full flex-center">
      <div className="w-[99%] py-12 overflow-hidden px- bg-dg mt-15 rounded-lg  flex-center gap-12 flex-col">
        <section className=" text-white py-16 flex flex-col items-center px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-8">
            What our clients are <span className="text-[#d3ff00]">saying</span>
          </h2>

          {/* Profile Image */}
          <img
            src="https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image
            alt="Client"
            className="w-48 h-48 rounded-2xl object-cover mb-6"
          />

          {/* Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-20 h-20 text-[#d3ff00] mb-4"
          >
            <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V21h8v-8H6.34a3.34 3.34 0 0 1 3.33-3.33V6h-2.5zM18.17 6A5.17 5.17 0 0 0 13 11.17V21h8v-8h-3.66a3.34 3.34 0 0 1 3.33-3.33V6h-2.5z" />
          </svg>

          {/* Testimonial Text */}
          <p className="text-lg md:text-xl max-w-2xl text-center mb-4">
            This platform has completely streamlined how we manage our campaigns
            and processes at Apex Marketing, greatly improving productivity.
          </p>

          {/* Name */}
          <h4 className="font-semibold text-lg">David Martinez</h4>
          <p className="text-white/50 text-sm">
            Head of Marketing at Apex Marketing
          </p>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
