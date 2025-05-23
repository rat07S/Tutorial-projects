'use client';
import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";


export default function Home() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#achievements", label: "Achievements" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const testimonials = [
    { name: "Anjali", quote: "मेरी हिंदी में 95% आ गए!" },
    { name: "Rohit", quote: "ऑनलाइन classes बहुत interactive थीं।" },
    { name: "Sara", quote: "I cleared the Madhyama exam in one go!" },
    { name: "Karthik", quote: "Speaking confidence level 📈" },
    { name: "Divya", quote: "Best tutor I’ve ever had." },
  ];
  const formRef = useRef(null);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formRef.current) return;

  const data = {
    name: formRef.current.name.value,
    email: formRef.current.email.value,
    message: formRef.current.message.value,
  };

  try {
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.message);
    formRef.current.reset();
  } catch (err) {
    console.error(err);
    alert("Something went wrong—please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <Link href="#home" className="text-2xl font-bold">
            Hindi Tutorial
          </Link>
          <nav className="space-x-6 hidden md:block">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="hover:text-blue-600 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* BODY */}
      <main className="pt-20">
       {/* HOME */}
<section
  id="home"
  className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-indigo-50 via-blue-100 to-white px-6 py-20"
>
  {/* blurred blobs for depth */}
  <span className="absolute -top-28 -left-24 w-72 h-72 bg-indigo-400/30 blur-3xl rounded-full" />
  <span className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/20 blur-3xl rounded-full" />

  {/* headline */}
  <Fade cascade damping={0.08}>
    <h1 className="text-5xl lg:text-6xl font-extrabold text-center tracking-tight drop-shadow-sm">
      Hindi Tuition&nbsp;&amp;&nbsp;Exam&nbsp;Coaching
    </h1>
    <p className="mt-6 max-w-4xl mx-auto text-center text-lg md:text-xl text-gray-700 leading-relaxed">
      From <b>Parichaya</b> to <b>Pragya Visharad</b>, we turn goals into
      results &nbsp;— personalized study maps, live interactive sessions,
      printable worksheets, and timed mock tests powered by our in-house
      analytics platform.
    </p>
  </Fade>

  {/* card grid */}
  <div className="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl w-full z-10">
    {[
      {
        title: "Parichaya (Elementary)",
        desc: "Beginner-friendly: alphabets, basic grammar, simple talk.",
        emoji: "🔡",
      },
      {
        title: "Prathamik (Basic)",
        desc: "Vocabulary boost & sentence craft — ready for short stories.",
        emoji: "📖",
      },
      {
        title: "Madyama (Intermediate)",
        desc: "Essay writing + lit analysis; grammar mastery (B2).",
        emoji: "📝",
      },
      {
        title: "Rashtrabhasha",
        desc: "National-level cert emphasizing culture & history.",
        emoji: "🏛️",
      },
      {
        title: "Pragya (CHD · Basic)",
        desc: "Day-to-day Hindi for work & travel; official CHD exam.",
        emoji: "💼",
      },
      {
        title: "Praveen (CHD · Advanced)",
        desc: "Fluent composition, creative writing, literature critique.",
        emoji: "🚀",
      },
      {
        title: "Pragya Visharad",
        desc: "Top-tier proficiency, complete literary scholarship.",
        emoji: "🌟",
      },
      {
        title: "School Hindi Tuition",
        desc: "CBSE / ICSE classes 4-12: drills, projects, exam prep.",
        emoji: "🏫",
      },
      {
        title: "Online Workshops & Bootcamps",
        desc: "Intensive spoken-Hindi and crash-course exam strategy.",
        emoji: "💻",
      },
    ].map(({ title, desc, emoji }) => (
      <motion.div
        key={title}
        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative p-8 rounded-[2rem] backdrop-blur-sm bg-white/60 border border-white/40 shadow-lg flex flex-col justify-between overflow-hidden"
      >
        {/* corner flare */}
        <span className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-500 opacity-20 blur-2xl" />

        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
      </motion.div>
    ))}
  </div>

  {/* floating CTA */}
  <a
    href="#contact"
    className="mt-20 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition z-10"
  >
    <span className="text-2xl">📞</span> Book a Free Trial Session
  </a>
</section>


        {/* ABOUT */}
<section id="about" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    {/* photo */}
    <Slide direction="left">
      <Image
        src="/assets/Rama.png"
        alt="Rama J — Hindi tutor"
        width={500}
        height={500}
        className="rounded-2xl shadow-lg"
      />
    </Slide>

    {/* bio */}
    <Slide direction="right">
      <div>
        <h2 className="text-3xl font-bold mb-4">Meet&nbsp;Your&nbsp;Teacher</h2>

        <p className="mb-4 leading-relaxed">
          नमस्ते! I’m <b>Rama J</b>, an M.A.-qualified Hindi educator with 5 +
          years of experience. I blend traditional pedagogy with modern tech
          tools, transforming even the most hesitant learners into confident
          Hindi speakers and high-scoring exam takers.
        </p>

        {/* contact + address */}
        <div className="mb-6 text-sm text-gray-600">
          <p>No. 9, Pattamal Street, Nemilicherry, Chrompet, Chennai 600044</p>
          <p>
            <a href="mailto:pmjjegan@gmail.com" className="underline">
              pmjjegan@gmail.com
            </a>{" "}
            · <a href="tel:+919841263789">98412 63789</a>
          </p>
        </div>

        {/* quick facts lists */}
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {/* skills */}
          <div>
            <h3 className="font-semibold mb-1 text-indigo-700">Core Skills</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Learning techniques</li>
              <li>Study-plan development</li>
              <li>Educational feedback</li>
              <li>Group tutoring</li>
            </ul>
          </div>

          {/* languages */}
          <div>
            <h3 className="font-semibold mb-1 text-indigo-700">Languages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hindi — C1 Advanced</li>
              <li>Tamil — C1 Advanced</li>
              <li>Kannada — B1 Intermediate</li>
              <li>English — A2 Elementary</li>
            </ul>
          </div>
        </div>

        {/* experience */}
        <div className="mt-6">
          <h3 className="font-semibold text-indigo-700 mb-1">
            Professional Experience
          </h3>
          <p className="text-sm">
            <b>Tutor, Home-Based Tutoring Services · Chennai (May 2021 – Present)</b>
            <br />
            • Coach students in homework &nbsp;• Build custom study plans &nbsp;•
            Boost confidence through engaging, feedback-rich sessions
          </p>
        </div>

        {/* education & certs */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-indigo-700 mb-1">Education</h3>
            <p>
              M.A. Hindi, Oct 2024
              <br />
              Pt. Jawaharlal Nehru Memorial School, Bengaluru
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700 mb-1">Certifications</h3>
            <p>
              Madhyama · Rashtrabhasha · Praveshika · Visharadh (Poorvardh &
              Uttarardh)
            </p>
          </div>
        </div>
      </div>
    </Slide>
  </div>
</section>


        {/* ACHIEVEMENTS */}
<section id="achievements" className="py-28 bg-gradient-to-b from-blue-100 via-blue-50 to-white">
  <Fade cascade damping={0.08}>
    <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">
      Achievements
    </h2>

    {/* grid */}
    <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-4">
      {/* combine awards + credentials in one array */}
      {[
        {
          icon: "🎓",
          title: "University Gold Medalist",
          subtitle: "M.A. Hindi Literature · 2024",
          details: "Rank #1 in graduating class with 9.8 CGPA.",
        },
        {
          icon: "📈",
          title: "100 + Top-Scoring Students",
          subtitle: "CBSE / ICSE · 2022-24",
          details: "Guided learners to 90 % + in board exams three years running.",
        },
        {
          icon: "🏅",
          title: "Rashtrabhasha Certified Trainer",
          subtitle: "Prachar Sabha · 2023",
          details: "Officially accredited to deliver National-language programs.",
        },
        {
          icon: "🔤",
          title: "Prathamik",
          subtitle: "Basic Level",
          details: "Mastery of foundational grammar, reading & vocabulary.",
        },
        {
          icon: "📚",
          title: "Madyama",
          subtitle: "Intermediate Level",
          details: "Advanced literature analysis; grammar equal to CEFR B2.",
        },
        {
          icon: "🏛️",
          title: "Rashtrabhasha",
          subtitle: "National Language Certificate",
          details: "Cultural-linguistic depth expected of native speakers.",
        },
        {
          icon: "💡",
          title: "Pragya",
          subtitle: "CHD · Basic",
          details: "Practical Hindi communication for daily & professional use.",
        },
        {
          icon: "🚀",
          title: "Praveen",
          subtitle: "CHD · Advanced",
          details: "Fluent composition, creative writing & literary critique.",
        },
        {
          icon: "🌟",
          title: "Pragya Visharad",
          subtitle: "CHD · Proficiency",
          details: "Highest credential—comprehensive language scholarship.",
        },
      ].map(({ icon, title, subtitle, details }) => (
        <motion.div
          key={title}
          whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
          className="relative p-6 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm border border-white/40 bg-white/60"
        >
          {/* gradient corner */}
          <span className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-500 opacity-20 blur-2xl" />

          {/* icon */}
          <div className="text-4xl mb-4">{icon}</div>

          {/* text */}
          <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <p className="text-gray-700 leading-relaxed text-sm">{details}</p>
        </motion.div>
      ))}
    </div>

    {/* action buttons */}
    <div className="flex flex-wrap gap-6 justify-center mt-16">
      <a
        href="/assets/certificates.pdf"
        download
        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition"
      >
        <span className="text-lg">📄</span> Certificates
      </a>
      <a
        href="/assets/resume.jpg"
        download
        className="inline-flex items-center gap-2 border-2 border-teal-500 text-teal-600 px-7 py-3 rounded-full hover:bg-teal-50 transition"
      >
        <span className="text-lg">📑</span> Résumé
      </a>
    </div>
  </Fade>
</section>


        {/* TESTIMONIALS */}
<section id="testimonials" className="py-28 bg-gradient-to-b from-white via-blue-50/40 to-white">
  <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
    What Learners&nbsp;Say
  </h2>

  <Swiper
    spaceBetween={40}
    slidesPerView={1}
    loop
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    grabCursor
    className="max-w-4xl"
  >
    {[
      {
        name: "Aarav Deshmukh",
        quote:
          "From 68 % to 93 % in just one term! Rama-ma'am’s mock tests and feedback changed my game.",
      },
      {
        name: "Meera Nair",
        quote:
          "Her online bootcamp made spoken Hindi feel natural. I now host our office stand-ups in Hindi!",
      },
      {
        name: "Kabir Shah",
        quote:
          "Cleared Madyama on my first try. The study-plan tracker kept me accountable every single week.",
      },
      {
        name: "Sahana Iyer",
        quote:
          "Interactive stories and vocab flashcards kept my 6-year-old hooked. Best tuition experience so far.",
      },
      {
        name: "Rohit Menon",
        quote:
          "The analytics dashboard showed my weak spots in real time—scored 96 % in CBSE board exam.",
      },
    ].map(({ name, quote }) => (
      <SwiperSlide key={name}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 backdrop-blur-md bg-white/60 border border-white/40 rounded-[2.5rem] shadow-xl"
        >
          {/* decorative flare */}
          <span className="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br from-indigo-400 to-blue-500 opacity-20 blur-2xl" />

          {/* avatar */}
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-indigo-500/80 text-white flex items-center justify-center text-2xl font-semibold shadow-md">
              {name.split(" ")[0][0]}
            </div>
          </div>

          {/* quote */}
          <p className="italic text-lg leading-relaxed mb-6">
            “{quote}”
          </p>

          {/* name */}
          <span className="font-semibold text-indigo-700">{`— ${name}`}</span>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


        <section id="contact" className="py-24 bg-blue-50">
  <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* CONTACT FORM */}
    <form
      ref={formRef}
  onSubmit={handleSubmit}
      className="relative w-full p-10 md:p-12 backdrop-blur-md bg-white/60 border border-white/40 rounded-[2.5rem] shadow-2xl space-y-8"
    >
      {/* decorative gradient flare */}
      <span className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 opacity-20 blur-2xl" />

      {/* NAME field */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          placeholder=" "
          required
          className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 outline-none py-3 px-1 text-gray-900 placeholder-transparent"
        />
        <label
          htmlFor="name"
          className=" absolute left-1 top-3 transition-all
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
    peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-indigo-600
    text-gray-700 text-sm"
        >
          Name
        </label>
      </div>

      {/* EMAIL field */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          required
          className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 outline-none py-3 px-1 text-gray-900 placeholder-transparent"
        />
        <label
          htmlFor="email"
          className=" absolute left-1 top-3 transition-all
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
    peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-indigo-600
    text-gray-700 text-sm"
        >
          Email
        </label>
      </div>

      {/* MESSAGE field */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          placeholder=" "
          rows={5}
          className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 outline-none py-3 px-1 text-gray-900 placeholder-transparent resize-none"
        ></textarea>
        <label
          htmlFor="message"
          className=" absolute left-1 top-3 transition-all
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
    peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-indigo-600
    text-gray-700 text-sm"
        >
          Message
        </label>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold shadow-lg hover:shadow-xl transition duration-200"
      >
        <span>{loading ? "Sending…" : "Send Message"}</span>
        {/* simple spinner – hide by default, show via JS when submitting */}
        <svg
          className="h-5 w-5 animate-spin hidden"
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
            d="M4 12a8 8 0 018-8v4l3.536-3.536A8 8 0 114 12z"
          ></path>
        </svg>
      </button>
    </form>
    

    {/* Map */}
    <div className="w-full rounded-2xl overflow-hidden shadow-xl h-[320px] md:h-[400px]">
      <iframe
        title="Chromepet Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.9015597575764!2d80.1272!3d12.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f645db2d83ed%3A0x3bf5d4e4bf6dd6ec!2sChromepet%2C%20Chennai!5e0!3m2!1sen!2sin!4v1715999999999"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      </main>

      <footer className="bg-gray-900 text-gray-300 py-16 px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
    {/* About Section */}
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Hindi Tutorial</h3>
      <p className="mb-4 max-w-sm">
        Hindi Tutorial is your go-to platform for learning Hindi with ease and clarity. 
        Based in Chromepet, Chennai, we offer comprehensive lessons for all levels.
      </p>
      <address className="not-italic mb-4">
        12 GST Road, Chromepet, <br /> Chennai - 600044, Tamil Nadu, India
      </address>
      <p>Phone: <a href="tel:+919876543210" className="text-indigo-400 hover:underline">+91-98765-43210</a></p>
      <p>Email: <a href="mailto:contact@hinditutorial.com" className="text-indigo-400 hover:underline">contact@hinditutorial.com</a></p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
        <li><a href="#courses" className="hover:text-indigo-400 transition">Courses</a></li>
        <li><a href="#testimonials" className="hover:text-indigo-400 transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-indigo-400 transition">Contact Us</a></li>
        <li><a href="#about" className="hover:text-indigo-400 transition">About Us</a></li>
      </ul>
    </div>

    {/* Follow Us */}
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
      <ul className="flex space-x-6">
        <li>
          <a href="https://facebook.com/hinditutorial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-indigo-400 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.92v-7.03H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v7.03C18.34 21.25 22 17.09 22 12.07z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hinditutorial" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-indigo-400 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14.85A4.48 4.48 0 0022.4.4a9.14 9.14 0 01-2.89 1.1A4.52 4.52 0 0016.88 0c-2.5 0-4.51 2-4.51 4.47 0 .35.04.7.1 1.03A12.79 12.79 0 013 2.2a4.41 4.41 0 001.4 5.97 4.45 4.45 0 01-2.05-.57v.06c0 2.16 1.5 4 3.48 4.4a4.47 4.47 0 01-2.04.08 4.5 4.5 0 004.21 3.12A9 9 0 012 19.16a12.76 12.76 0 006.9 2.03c8.28 0 12.81-6.88 12.81-12.84 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/hinditutorial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-indigo-400 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    {/* Newsletter / Address Map */}
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Our Location</h3>
      <p className="mb-4 max-w-xs">
        Visit us or send your queries at our office located in Chromepet, Chennai.
      </p>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Chromepet Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.9015597575764!2d80.1272!3d12.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f645db2d83ed%3A0x3bf5d4e4bf6dd6ec!2sChromepet%2C%20Chennai!5e0!3m2!1sen!2sin!4v1715999999999"
          className="w-full h-48 md:h-60 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>

  <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
    &copy; {new Date().getFullYear()} Hindi Tutorial. All rights reserved.
  </div>
</footer>

    </>
  );
  
}
