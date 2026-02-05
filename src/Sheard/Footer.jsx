import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const animation = gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#002d1f] text-gray-300">
      {/* Main Footer */}
      <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <aside>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
              <span className="text-[#006a4e] font-black text-[10px] text-center leading-none">
                AUB<br />LOGO
              </span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tighter">
              ASIAN UNIVERSITY
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            এশিয়ান ইউনিভার্সিটি অফ বাংলাদেশ ১৯৯৬ সাল থেকে মানসম্মত উচ্চশিক্ষা
            প্রদান করে আসছে। আমরা শিক্ষার্থীদের আধুনিক জ্ঞান ও নৈতিকতায় সমৃদ্ধ
            করতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </aside>

        {/* Quick Links */}
        <nav>
          <header className="footer-title text-yellow-400 opacity-100">
            প্রয়োজনীয় লিঙ্ক
          </header>
          <Link to="/about" className="link link-hover">আমাদের সম্পর্কে</Link>
          <Link to="/admission" className="link link-hover">ভর্তি তথ্য</Link>
          <Link to="/departments" className="link link-hover">বিভাগসমূহ</Link>
          <Link to="/notices" className="link link-hover">নোটিশ বোর্ড</Link>
        </nav>

        {/* Student Corner */}
        <nav>
          <header className="footer-title text-yellow-400 opacity-100">
            স্টুডেন্ট কর্নার
          </header>
          <Link to="/library" className="link link-hover">লাইব্রেরি</Link>
          <Link to="/student-portal" className="link link-hover">স্টুডেন্ট পোর্টাল</Link>
          <Link to="/scholarship" className="link link-hover">বৃত্তি তথ্য</Link>
          <Link to="/alumni" className="link link-hover">প্রাক্তন শিক্ষার্থী</Link>
        </nav>

        {/* Contact */}
        <div>
          <header className="footer-title text-yellow-400 opacity-100">
            যোগাযোগ
          </header>

          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              📍 <span>উত্তরা, ঢাকা, বাংলাদেশ</span>
            </p>
            <p>📞 +880 1234 567 890</p>
            <p>📧 info@aub-ac.com</p>

            {/* Map */}
            <div className="mt-4 rounded-lg overflow-hidden h-24 w-full border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4376472282!2d90.39525411502476!3d23.87405218452794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43714659f7b%3A0x633190f84518774e!2sAsian%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1670000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 bg-[#001f15] py-6 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} Asian University of Bangladesh. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
