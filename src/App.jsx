// import { useEffect, useState } from "react";

// function NavBar() {
//   return (
//     <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="h-40 w-40 rounded-full overflow-hidden">
//             <img
//               src="/logo.png"
//               alt="Logo"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//         <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
//           <a href="#services" className="hover:text-sky-700">
//             Services
//           </a>
//           <a href="#about" className="hover:text-sky-700">
//             About
//           </a>
//           <a href="#contact" className="hover:text-sky-700">
//             Contact
//           </a>
//           <a href="#book" className="btn-brand text-sm">
//             Book Appointment
//           </a>
//         </nav>
//         <button className="md:hidden btn-brand text-xs px-4 py-2">Book</button>
//       </div>
//     </header>
//   );
// }

// function Hero() {
//   return (
//     <section className="bg-brand">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-slate-900">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//               Orthopaedic & Multispeciality Clinic
//             </h1>
//             <p className="mt-4 text-slate-700 text-lg">
//               Comprehensive orthopaedic consultation, physiotherapy,
//               interventional pain management, X‑Ray, PRP injections, lab and
//               pharmacy — all under one roof in Sadashivnagar, Bengaluru.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <a href="#book" className="btn-brand">
//                 Book Appointment
//               </a>
//               <a
//                 href="#services"
//                 className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100"
//               >
//                 View Services
//               </a>
//             </div>
//             <div className="mt-6 text-sm/6 text-slate-700">
//               <p>
//                 Dr. Mohammed Afief Ali — MBBS, MS (Ortho), Consultant
//                 Orthopaedician
//               </p>
//               <p className="mt-1">
//                 For appointments: 080‑23314189 · 96063 02160 · 72042 41439
//               </p>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="absolute -inset-6 -z-10 rounded-3xl bg-sky-200/30 blur-2xl"></div>

//             {/* Simple banner image on the right side */}
//             <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-slate-200 grid place-items-center">
//               <img
//                 src="https://media.istockphoto.com/id/1903424167/photo/medical-team-meeting.jpg?s=612x612&w=0&k=20&c=KjoTL4oBpc5dokGIeMtGFGjyTw-cku5SQnrMAKK9rCM=" // <-- Replace with your actual image path
//                 alt="Hospital banner"
//                 className="w-full h-full object-contain rounded-3xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const SERVICES = [
//   { title: "Orthopaedic Consultation", icon: "🧑‍⚕️" },
//   { title: "X‑RAY", icon: "🖼️" },
//   { title: "Physiotherapy", icon: "🧘" },
//   { title: "PRP Injections", icon: "💉" },
//   { title: "Interventional Pain Management", icon: "💠" },
//   { title: "No‑Surgery Pain Management", icon: "✅" },
//   { title: "LAB", icon: "🧪" },
//   { title: "Pharmacy", icon: "💊" },
// ];

// function Services() {
//   return (
//     <section id="services" className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
//           Our Services
//         </h2>
//         <p className="mt-2 text-slate-600 max-w-2xl">
//           Evidence‑based treatment options tailored to your condition and
//           lifestyle.
//         </p>
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {SERVICES.map((s) => (
//             <div
//               key={s.title}
//               className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition"
//             >
//               <div className="h-11 w-11 rounded-xl bg-sky-50 text-sky-700 grid place-items-center text-xl mb-4">
//                 <span aria-hidden>{s.icon}</span>
//               </div>
//               <p className="font-semibold text-slate-900">{s.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Carousel({ images = [] }) {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((i) => (i + 1) % images.length);
//   const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const id = setInterval(next, 3500);
//     return () => clearInterval(id);
//   }, [images.length]);

//   if (images.length === 0) return null;

//   return (
//     <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
//       <div
//         className="flex transition-transform duration-700 ease-out"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {images.map((src, i) => (
//           <div
//             key={i}
//             className="w-full shrink-0 flex items-center justify-center bg-slate-900"
//           >
//             <img
//               src={src}
//               alt={`About gallery ${i + 1}`}
//               className="w-full max-h-[500px] object-contain sm:aspect-[16/9] rounded-xl"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         aria-label="Previous image"
//         onClick={prev}
//         className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center backdrop-blur ring-1 ring-white/20"
//       >
//         ‹
//       </button>
//       <button
//         aria-label="Next image"
//         onClick={next}
//         className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center backdrop-blur ring-1 ring-white/20"
//       >
//         ›
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
//         {images.map((_, i) => (
//           <span
//             key={i}
//             className={`h-1.5 w-1.5 rounded-full ${
//               i === index ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function About() {
//   return (
//     <section id="about" className="bg-slate-950 text-slate-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
//         <div className="max-w-4xl">
//           <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
//             About us
//           </h2>
//           <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-slate-300">
//             Ortho Wellness is a trusted orthopaedic and multispeciality centre,
//             proudly continuing the legacy of Dr. Mohammed Nazir’s clinic (Palace
//             Guttahalli), which has been delivering quality healthcare since
//             1972.
//           </p>
//         </div>

//         {/* Carousel Section */}
//         <div className="mt-12">
//           <Carousel
//             images={[
//               "https://media.istockphoto.com/id/2015414448/photo/pharmaceutical-sales-representative-presenting-new-medication-to-doctors-in-medical-building.jpg?s=612x612&w=0&k=20&c=oJ6LASPPNYb2FHi_fTEqdivyoqQ_MfceC_cvZ4whM7k=",
//               "https://www.allalliedhealthschools.com/wp-content/uploads/2021/07/healthcare-management-team-meeting-1200x628-1.jpg",
//               "https://www.herzing.edu/sites/default/files/styles/fp_900_700/public/images/blog/istock-499546924_1.jpg.webp?itok=ha1EdNIm",
//             ]}
//           />
//         </div>

//         <div className="mt-12 grid gap-10">
//           <div className="max-w-4xl text-slate-200 text-lg/8">
//             <p>
//               At <strong>Ortho Wellness</strong>, we are dedicated to helping
//               you move freely, live pain-free, and regain your active lifestyle.
//               Our clinic specializes in comprehensive orthopaedic care,
//               combining advanced medical expertise with compassionate,
//               patient-centered treatment. Led by{" "}
//               <strong>Dr. Afief Ali, MBBS, MS (Ortho)</strong> — an experienced
//               orthopaedic specialist with extensive expertise in{" "}
//               <strong>pain management</strong> — our team is committed to
//               delivering exceptional, individualized care.
//             </p>
//             <p className="mt-4">
//               Whether you’re recovering from an injury, managing a chronic
//               condition, or seeking preventive solutions, we provide
//               personalized treatment plans designed around your unique needs. At
//               Ortho Wellness, we believe true healing goes beyond treatment — it
//               means restoring your strength, mobility, and confidence so you can
//               live life to the fullest.
//             </p>
//           </div>

//           {/* Key Highlights */}
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6">
//               <p className="text-lg font-semibold">Expert Orthopaedic Care</p>
//               <p className="mt-2 text-slate-300 text-sm/6">
//                 Evidence-based treatments delivered by experienced specialists
//                 focused on long-term recovery.
//               </p>
//             </div>
//             <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6">
//               <p className="text-lg font-semibold">Patient-Centered Approach</p>
//               <p className="mt-2 text-slate-300 text-sm/6">
//                 Personalized plans designed around your goals, lifestyle, and
//                 unique needs.
//               </p>
//             </div>
//             <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6">
//               <p className="text-lg font-semibold">Advanced Technology</p>
//               <p className="mt-2 text-slate-300 text-sm/6">
//                 Modern diagnostics and minimally invasive procedures to speed up
//                 healing and relieve pain.
//               </p>
//             </div>
//           </div>

//           <hr className="border-slate-800" />

//           <div className="max-w-4xl">
//             <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
//             <p className="mt-4 text-slate-200 text-lg/8">
//               At <strong>Ortho Wellness</strong>, our mission is to provide
//               exceptional orthopaedic care that empowers every patient to live a
//               pain-free, active, and fulfilling life. We are committed to
//               combining advanced medical expertise, innovative treatments, and
//               compassionate care to deliver personalized solutions for every
//               individual. Guided by integrity, excellence, and empathy, we
//               strive to restore mobility, relieve pain, and enhance overall
//               wellbeing — one patient at a time.
//             </p>
//           </div>

//           <hr className="border-slate-800" />

//           <div className="max-w-4xl">
//             <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
//             <p className="mt-4 text-slate-200 text-lg/8">
//               Our vision is to be a leading centre of excellence in orthopaedic
//               and pain management care, recognized for our commitment to
//               innovation, precision, and patient satisfaction. We aspire to set
//               new standards in musculoskeletal health by integrating
//               cutting-edge technology with a holistic, patient-focused approach.
//               At <strong>Ortho Wellness</strong>, we envision a future where
//               every individual can enjoy the freedom of movement and embrace{" "}
//               <em>their path to pain-free living</em>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Appointment() {
//   return (
//     <section id="book" className="relative overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50" />
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
//         <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl ring-1 ring-slate-200/70 grid md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             <h3 className="text-2xl font-extrabold text-slate-900">
//               Book an Appointment
//             </h3>
//             <p className="mt-2 text-slate-600">
//               Call us or send your details. Our team will reach out shortly.
//             </p>
//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               <a href="tel:+919880037365" className="btn-brand w-full">
//                 Call +91 9880037365
//               </a>
//               <a
//                 href="mailto:mdafiefali@gmail.com"
//                 className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
//               >
//                 Email Us
//               </a>
//             </div>
//             <p className="mt-4 text-sm text-slate-600">
//               Clinic timings: Monday – Saturday, 10:00am to 7:00pm
//             </p>
//           </div>
//           <div className="bg-gradient-to-br from-sky-500/10 to-lime-500/10 rounded-2xl p-6 border border-slate-200">
//             <p className="font-semibold text-slate-900">Address</p>
//             <p className="text-sm text-slate-700 mt-2">
//               #73/16, 1st Main, Behind Bashyam Circle Petrol Bunk,
//               Sadashivnagar, Bengaluru.
//             </p>
//             <div className="mt-4 text-sm text-slate-700 space-y-1">
//               <p>Phone: 080‑23314189 · 96063 02160 · 72042 41439</p>
//               <p>Website: www.orthowellness.in</p>
//               <p>Email: mdafiefali@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-slate-900 text-slate-300">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           <div>
//             <p className="text-brand text-xl font-extrabold">ORTHO WELLNESS</p>
//             <p className="text-sm text-slate-400">
//               Orthopaedic and Multispeciality Clinic
//             </p>
//           </div>
//           <p className="text-sm">© Ortho Wellness, Bengaluru</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-dvh flex flex-col bg-white">
//       <NavBar />
//       <main className="flex-1">
//         <Hero />
//         <Services />
//         <About />
//         <Appointment />
//       </main>
//       <Footer />
//     </div>
//   );
// }





import { useEffect, useState } from "react";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* ---------- LOGO ---------- */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div
            className="
          h-40 w-40           /* 📱 Larger size on mobile */
          sm:h-32 sm:w-32     /* 💻 Slightly larger on small screens */
          md:h-36 md:w-36     /* 🖥️ Balanced on desktop */
          rounded-full overflow-hidden transition-all duration-300
        "
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ---------- NAV LINKS (hidden on mobile) ---------- */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-sky-700">
            Services
          </a>
          <a href="#about" className="hover:text-sky-700">
            About
          </a>
          <a href="#contact" className="hover:text-sky-700">
            Contact
          </a>
          <a href="#book" className="btn-brand text-sm">
            Book Appointment
          </a>
        </nav>

        {/* ---------- MOBILE BUTTON ---------- */}
        <div className="absolute right-4 md:hidden">
          <button className="btn-brand text-xs px-4 py-2">Book</button>
        </div>
      </div>
    </header>

  );
}

function Hero() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-slate-900">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Orthopaedic & Multispeciality Clinic
            </h1>
            <ul className="mt-4 text-slate-700 text-lg list-disc list-inside space-y-1">
              <li>Comprehensive orthopaedic consultation</li>
              <li>Physiotherapy</li>
              <li>Interventional pain management</li>
              <li>X-Ray</li>
              <li>PRP injections</li>
              <li>Lab facilities</li>
              <li>Pharmacy</li>
              <li>All services available under one roof in Sadashivnagar, Bengaluru</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="btn-brand">
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100"
              >
                View Services
              </a>
            </div>
            <div className="mt-6 text-sm/6 text-slate-700">
              <p>
              Meet Dr. Afief Ali
              Dr. Afief Ali, MBBS, MS (Ortho), is a highly qualified orthopaedic specialist with a distinguished background in pain management and musculoskeletal care. With years of dedicated clinical experience, Dr. Ali combines advanced medical techniques with a compassionate, patient-focused approach to deliver lasting results. His commitment to excellence and innovation forms the cornerstone of Ortho Wellness’s philosophy — helping every patient find their path to pain-free living.
              </p>
              <p className="mt-1">
                For appointments: 080-23314189 · 96063 02160 · 72042 41439
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-sky-200/30 blur-2xl"></div>
            <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-slate-200 grid place-items-center">
              <img
                src="https://media.istockphoto.com/id/1903424167/photo/medical-team-meeting.jpg?s=612x612&w=0&k=20&c=KjoTL4oBpc5dokGIeMtGFGjyTw-cku5SQnrMAKK9rCM="
                alt="Hospital banner"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { title: "Orthopaedic Consultation", icon: "🧑‍⚕️" },
  { title: "X-RAY", icon: "🖼️" },
  { title: "Physiotherapy", icon: "🧘" },
  { title: "PRP Injections", icon: "💉" },
  { title: "Interventional Pain Management", icon: "💠" },
  { title: "No-Surgery Pain Management", icon: "✅" },
  { title: "LAB", icon: "🧪" },
  { title: "Pharmacy", icon: "💊" },
];

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Our Services
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Evidence-based treatment options tailored to your condition and
          lifestyle.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-11 w-11 rounded-xl bg-sky-50 text-sky-700 grid place-items-center text-xl mb-4">
                <span aria-hidden>{s.icon}</span>
              </div>
              <p className="font-semibold text-slate-900">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full shrink-0 flex items-center justify-center bg-slate-900"
          >
            <img
              src={src}
              alt={`About gallery ${i + 1}`}
              className="w-full max-h-[500px] object-contain sm:aspect-[16/9] rounded-xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button
        aria-label="Previous image"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center backdrop-blur ring-1 ring-white/20"
      >
        ‹
      </button>
      <button
        aria-label="Next image"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center backdrop-blur ring-1 ring-white/20"
      >
        ›
      </button>

      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About us
          </h2>
          <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-slate-300">
            Ortho Wellness is a trusted orthopaedic and multispeciality centre,
            proudly continuing the legacy of Dr. Mohammed Nazir’s clinic (Palace
            Guttahalli), which has been delivering quality healthcare since
            1972.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            images={[
              "https://media.istockphoto.com/id/2015414448/photo/pharmaceutical-sales-representative-presenting-new-medication-to-doctors-in-medical-building.jpg?s=612x612&w=0&k=20&c=oJ6LASPPNYb2FHi_fTEqdivyoqQ_MfceC_cvZ4whM7k=",
              "https://www.allalliedhealthschools.com/wp-content/uploads/2021/07/healthcare-management-team-meeting-1200x628-1.jpg",
              "https://www.herzing.edu/sites/default/files/styles/fp_900_700/public/images/blog/istock-499546924_1.jpg.webp?itok=ha1EdNIm",
            ]}
          />
        </div>

        <div className="mt-12 grid gap-10">
          <div className="max-w-4xl text-slate-200 text-lg/8">
            <p>
              At <strong>Ortho Wellness</strong>, we are dedicated to helping
              you move freely, live pain-free, and regain your active lifestyle.
              Our clinic specializes in comprehensive orthopaedic care,
              combining advanced medical expertise with compassionate,
              patient-centered treatment. Led by{" "}
              <strong>Dr. Afief Ali, MBBS, MS (Ortho)</strong> — an experienced
              orthopaedic specialist with extensive expertise in{" "}
              <strong>pain management</strong> — our team is committed to
              delivering exceptional, individualized care.
            </p>
            <p className="mt-4">
              Whether you’re recovering from an injury, managing a chronic
              condition, or seeking preventive solutions, we provide
              personalized treatment plans designed around your unique needs. At
              Ortho Wellness, we believe true healing goes beyond treatment — it
              means restoring your strength, mobility, and confidence so you can
              live life to the fullest.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6">
              <p className="text-lg font-semibold">Expert Orthopaedic Care</p>
              <p className="mt-2 text-slate-300 text-sm/6">
                Evidence-based treatments delivered by experienced specialists
                focused on long-term recovery.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6">
              <p className="text-lg font-semibold">Patient-Centered Approach</p>
              <p className="mt-2 text-slate-300 text-sm/6">
                Personalized plans designed around your goals, lifestyle, and
                unique needs.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6">
              <p className="text-lg font-semibold">Advanced Technology</p>
              <p className="mt-2 text-slate-300 text-sm/6">
                Modern diagnostics and minimally invasive procedures to speed up
                healing and relieve pain.
              </p>
            </div>
          </div>

          <hr className="border-slate-800" />

          <div className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
            <p className="mt-4 text-slate-200 text-lg/8">
              At <strong>Ortho Wellness</strong>, our mission is to provide
              exceptional orthopaedic care that empowers every patient to live a
              pain-free, active, and fulfilling life. We are committed to
              combining advanced medical expertise, innovative treatments, and
              compassionate care to deliver personalized solutions for every
              individual. Guided by integrity, excellence, and empathy, we
              strive to restore mobility, relieve pain, and enhance overall
              wellbeing — one patient at a time.
            </p>
          </div>

          <hr className="border-slate-800" />

          <div className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-slate-200 text-lg/8">
              Our vision is to be a leading centre of excellence in orthopaedic
              and pain management care, recognized for our commitment to
              innovation, precision, and patient satisfaction. We aspire to set
              new standards in musculoskeletal health by integrating
              cutting-edge technology with a holistic, patient-focused approach.
              At <strong>Ortho Wellness</strong>, we envision a future where
              every individual can enjoy the freedom of movement and embrace{" "}
              <em>their path to pain-free living</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  return (
    <section id="book" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-sky-50 to-lime-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl ring-1 ring-slate-200/70 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Book an Appointment
            </h3>
            <p className="mt-2 text-slate-600">
              Call us or send your details. Our team will reach out shortly.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <a href="tel:080-23314189" className="btn-brand w-full">
                Call 080-23314189
              </a>
              <a
                href="mailto:mdafiefali@gmail.com"
                className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Email Us
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Clinic timings: Monday – Saturday, 10:00am to 7:00pm
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-500/10 to-lime-500/10 rounded-2xl p-6 border border-slate-200">
            <p className="font-semibold text-slate-900">Address</p>
            <p className="text-sm text-slate-700 mt-2">
              #73/16, 1st Main, Behind Bashyam Circle Petrol Bunk, Sadashivnagar,
              Bengaluru.
            </p>
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <p>Phone: 080-23314189 · 96063 02160 · 72042 41439</p>
              <p>Website: www.orthowellness.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-brand text-xl font-extrabold">ORTHO WELLNESS</p>
            <p className="text-sm text-slate-400">
              Orthopaedic and Multispeciality Clinic
            </p>
          </div>
          <p className="text-sm">© Ortho Wellness, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
