export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Jason Mercer",
    company: "Mercer Hospitality Group",
    role: "Managing Director",
    quote:
      "Fix It Up delivered our cafe fitout on time and exactly to spec. The custom joinery is exceptional quality and our customers comment on the fit-out constantly. The team managed every trade, kept us updated throughout, and handed over a space we're genuinely proud of. We've already engaged them for our second venue.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    company: "Northside Dental & Implant Centre",
    role: "Principal Dentist & Owner",
    quote:
      "We had a tight programme and a lot of compliance requirements for our dental fitout. Fix It Up knew exactly what was needed — from the sterilisation room to the chair bay plumbing and acoustic partitioning between consult rooms. They coordinated every trade seamlessly and we opened on schedule without a single issue.",
    rating: 5,
  },
];

export default testimonials;
