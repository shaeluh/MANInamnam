
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
} from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Our Product', href: '#product' },
    { name: 'Bundle Deals', href: '#promos' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#6c4e3e]/10 bg-[#faead8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 md:px-12">
        {/* Brand */}
        <a href="#home" className="flex items-center">
  <img
    src="/maninamnam-logo.jpg"
    alt="MANInamnam - Crunchy, Savory, Addictive"
    className="h-14 w-14 rounded-full object-contain md:h-16 md:w-16"
  />
</a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base text-[#6c4e3e] transition-colors duration-300 hover:text-[#a47864]"
            >
              {link.name}
            </a>
          ))}

         <a
        href="#contact"
        className="group inline-flex items-center gap-3 rounded-full bg-[#5A4032] px-8 py-4 text-base font-medium shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#A47864] hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
        style={{ color: "#FAEAD8" }}
        >
        <span style={{ color: "#FAEAD8" }}>Message Us</span>
        <ArrowUpRight size={16} style={{ color: "#FAEAD8" }} />
        </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6c4e3e]/20 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      
{/* Mobile menu */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-navigation"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="overflow-hidden border-t border-[#6c4e3e]/10 bg-[#faead8] px-6 py-6 shadow-lg md:hidden"
    >
      <div className="flex flex-col gap-5">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.25,
              delay: index * 0.06,
            }}
            className="text-base text-[#5a4032] transition-colors duration-300 hover:text-[#a47864]"
          >
            {link.name}
          </motion.a>
        ))}

        <motion.a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            delay: navLinks.length * 0.06,
          }}
          className="flex w-fit items-center gap-2 rounded-full bg-[#5a4032] px-6 py-4 text-base font-medium transition-all duration-300 hover:bg-[#a47864] hover:shadow-lg"
          style={{ color: "#faead8" }}
        >
          <span style={{ color: "#faead8" }}>
            Message Us
          </span>

          <ArrowUpRight
            size={18}
            style={{ color: "#faead8" }}
          />
        </motion.a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faead8] pt-28 md:pt-36"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-[500px] w-[500px] rounded-full bg-[#e8bfa2]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#a47864]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-20 md:grid-cols-2 md:px-12 md:pb-28">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[#a47864]" />
            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#8e6b56]">
              CRUNCHY · SAVORY · ADDICTIVE
            </p>
          </div>

          <h1 className="font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.06em] text-[#4b3023]">
            A little
            <br />
            <span className="italic font-medium text-[#a47864]">crunch,</span>
            <br />
            a lot of flavor.
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-[#80624f] md:text-lg">
            Meet your new favorite snack — crunchy peanuts tossed with crispy
            fried garlic and our special seasoning. A delicious little treat
            made for everyday cravings and moments worth sharing.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#product"
              className="group flex items-center gap-3 rounded-full bg-[#5a4032] px-7 py-4 text-base transition-all duration-300 hover:bg-[#a47864] hover:shadow-xl"
              style={{ color: "#faead8" }}
              >
              <span style={{ color: "#faead8" }}>
                Discover our snack
              </span>

              <ArrowUpRight
                size={17}
                style={{ color: "#faead8" }}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#story"
              className="flex items-center gap-2 px-4 py-3 text-base text-[#6c4e3e] transition hover:text-[#a47864]"
            >
              Get to know us
              <ArrowDown size={15} />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faead8] bg-[#e8bfa2] text-lg">
                🥜
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faead8] bg-[#a47864] text-lg">
                🧄
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faead8] bg-[#6c4e3e] text-lg">
                ✨
              </div>
            </div>

            <p className="text-xs tracking-wide text-[#8e6b56]">
              Made for sharing. Made with love.
            </p>
          </div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[600px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[2rem] bg-[#e8bfa2]">
            {/* Decorative circles */}
            <div className="absolute inset-5 rounded-t-[48%] rounded-b-[1.5rem] border border-[#faead8]/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 1, -2] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 flex h-[68%] w-[72%] items-center justify-center md:h-[72%] md:w-[65%]"
            >
              <img
                src="/maninamnam-jar.png"
                alt="MANInamnam crunchy peanuts, 250g jar"
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="mt-2 rounded-full bg-[#faead8]/80 px-5 py-2 backdrop-blur-md">
              <span className="text-xs tracking-[0.2em] text-[#5a4032]">
                THE PERFECT CRUNCH
              </span>
            </div>
            </div>


            {/* Floating note */}
            <div className="absolute left-5 top-8 rotate-[-8deg] rounded-xl bg-[#faead8] px-4 py-3 shadow-lg md:left-8 md:top-12">
              <p className="font-serif text-base italic text-[#5a4032]">
                made with love ♡
              </p>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#6c4e3e]/70">
                  MANInamnam
                </p>
                <p className="font-serif text-2xl text-[#5a4032]">
                  Crunchy goodness.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5a4032] text-[#faead8]">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* Floating decorative peanut */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-5 top-16 text-5xl md:-right-8 md:text-7xl"
          >
            🥜
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#f3e2ce] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] bg-[#d4b295]">
            <div className="absolute inset-6 rounded-[1.5rem] border border-[#faead8]/50" />

            <div className="text-center">
              <span className="text-8xl md:text-[10rem]">🥜</span>
              <p className="mt-4 font-serif text-3xl italic text-[#5a4032]">
                made with love.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 rounded-full bg-[#faead8] px-5 py-3">
              <span className="text-xs tracking-widest text-[#6c4e3e]">
                A LITTLE TASTE OF HAPPINESS
              </span>
            </div>
          </div>

          <div className="absolute -right-5 -top-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#6c4e3e] text-center text-xs tracking-widest text-[#faead8] shadow-xl md:-right-8">
            GOOD
            <br />
            FOOD
            <br />
            GOOD MOOD
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-[#a47864]">
            OUR STORY
          </p>

          <h2 className="font-serif text-5xl leading-tight tracking-tight text-[#4b3023] md:text-7xl">
            Good things
            <br />
            <span className="italic text-[#a47864]">start small.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#80624f]">
            <p>
              Some of the best moments in life happen over something simple:
              good food, great company, and a snack worth sharing.
            </p>

            <p>
              MANInamnam was created with one thing in mind — bringing
              satisfying flavors and a little happiness to every bite.
              We believe that even the simplest snack can make an ordinary
              moment feel special.
            </p>

            <p>
              From the crunch of premium peanuts to the irresistible taste
              of garlic and our special seasoning, every handful is made
              to be enjoyed, shared, and remembered.
            </p>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <span className="h-px w-12 bg-[#a47864]" />
            <p className="font-serif text-xl italic text-[#6c4e3e]">
              Crunchy. Savory. Addictive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


function GoodStuff() {
  const features = [
    {
      number: '01',
      icon: '🥜',
      title: 'Premium Peanuts',
      description:
        'Carefully selected peanuts for that satisfying crunch and delicious quality in every handful.',
    },
    {
      number: '02',
      icon: '🧄',
      title: 'Golden Fried Garlic',
      description:
        'A flavorful mix of crispy fried garlic that brings an irresistible savory goodness.',
    },
    {
      number: '03',
      icon: '✨',
      title: 'Special Seasoning',
      description:
        'Our special blend of flavors makes every bite a little more exciting.',
    },
  ]

  return (
    <section className="bg-[#faead8] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#a47864]">
            WHAT MAKES IT SPECIAL
          </p>

          <h2 className="font-serif text-5xl leading-tight tracking-tight text-[#4b3023] md:text-7xl">
            It's all in
            <span className="italic text-[#a47864]"> the details.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-8 text-[#80624f]">
            Simple ingredients, delicious combinations, and the kind of
            flavor that keeps you reaching for one more.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group rounded-[2rem] border border-[#a47864]/15 bg-[#f5e7d7] p-8 transition-colors duration-300 hover:bg-[#e8bfa2] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#a47864]">
                  {feature.number}
                </span>

                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8bfa2] text-3xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {feature.icon}
                </span>
              </div>

              <h3 className="mt-10 font-serif text-3xl text-[#4b3023]">
                {feature.title}
              </h3>

              <p className="mt-4 text-base leading-7 md:text-lg md:leading-8 text-[#80624f]">
                {feature.description}
              </p>

              <div className="mt-8 h-px w-full bg-[#a47864]/20" />

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#8e6b56]">
                  MANInamnam
                </span>
                <span className="text-[#a47864] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function ProductShowcase() {
  return (
    <section id="product" className="overflow-hidden bg-[#6c4e3e] px-6 py-28 text-[#faead8] md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#e8bfa2]">
            THE CROWD FAVORITE
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Meet your
            <br />
            new favorite
            <br />
            <span className="italic text-[#e8bfa2]">crunch.</span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#faead8]/85">
            Enjoy the irresistible combination of crunchy peanuts, golden
            fried garlic, and our special seasoning. Whether you're enjoying
            a quick snack, sharing with friends, or preparing giveaways,
            MANInamnam brings a little more flavor to every moment.
          </p>

          <div className="mt-8 flex items-center gap-4">
  <div>
    <p className="text-xs tracking-[0.2em] text-[#e8bfa2]">
      YOUR EVERYDAY CRUNCH
    </p>
    <p className="mt-1 font-serif text-4xl text-[#faead8]">
      ₱100
      <span className="ml-2 font-sans text-base text-[#faead8]/70">
        / 250g jar
      </span>
    </p>
  </div>
</div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Crunchy', 'Savory', 'Flavorful'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#faead8]/20 px-4 py-2 text-xs tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
          href="#contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#faead8] px-7 py-4 text-base transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8bfa2] hover:gap-5 hover:shadow-lg"
          style={{ color: "#5a4032" }}
          >
             <span style={{ color: "#5a4032" }}>Get yours today</span>

  <ArrowUpRight
    size={17}
    style={{ color: "#5a4032" }}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] bg-[#a47864]">
            <div className="absolute inset-5 rounded-[2.5rem] border border-[#faead8]/30" />

            <div className="absolute h-[75%] w-[75%] rounded-full bg-[#e8bfa2]/30 blur-2xl" />

            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative text-[clamp(10rem,25vw,18rem)] drop-shadow-2xl"
            >
              🥜
            </motion.div>

            <div className="absolute left-8 top-8 rounded-full bg-[#faead8] px-4 py-3 text-[#5a4032] shadow-lg">
              <p className="text-[10px] tracking-[0.2em]">100% CRUNCH</p>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] text-[#faead8]/70">
                  MANInamnam
                </p>
                <p className="font-serif text-2xl">The original crunch</p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faead8] text-[#5a4032]">
                🧄
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


function BundleDeals() {
  const deals = [
    {
      label: 'SHARING IS CARING',
      title: 'Buy 10, Get 1 FREE',
      description:
        'Get an extra jar when you purchase 10 jars of MANInamnam. More crunch to share!',
      highlight: '11 JARS IN TOTAL',
      icon: '🥜',
    },
    {
      label: 'BULK ORDER SPECIAL',
      title: 'FREE Delivery',
      description:
        'Order 20 jars and enjoy free delivery. Perfect for events, giveaways, and resellers!',
      highlight: 'WHEN YOU BUY 20 JARS',
      icon: '🛵',
    },
  ]

  return (
    <section
      id="promos"
      className="bg-[#faead8] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#a47864]">
            MORE TO LOVE
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#4b3023] md:text-7xl">
            More crunch,
            <br />
            <span className="italic text-[#a47864]">
              more savings.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-8 text-[#80624f]">
            Good things are even better when shared. Enjoy our special
            bundle deals on your next MANInamnam order.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#a47864]/20 bg-[#f3e2ce] p-8 transition-all duration-300 hover:shadow-xl md:p-10"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#a47864]">
                  {deal.label}
                </p>

                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8bfa2] text-2xl">
                  {deal.icon}
                </span>
              </div>

              <h3 className="mt-10 font-serif text-3xl text-[#4b3023] md:text-4xl">
                {deal.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-7 md:text-lg md:leading-8 text-[#80624f]">
                {deal.description}
              </p>

              <div className="mt-8 border-t border-[#a47864]/20 pt-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8e6b56]">
                  {deal.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#8e6b56]">
          Delivery arrangements and availability are subject to location.
        </p>
      </div>
    </section>
  )
}


function Occasions() {
  const occasions = [
  {
    emoji: '☕',
    title: 'Office Breaks',
    text: 'Enjoy a flavorful snack during busy workdays or share a jar with your colleagues.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family & Friends',
    text: 'Bring everyone together with a crunchy and savory treat worth sharing.',
  },
  {
    emoji: '🎁',
    title: 'Gifts & Giveaways',
    text: 'A delicious and affordable giveaway for birthdays, company events, and celebrations.',
  },
  {
    emoji: '📦',
    title: 'Reseller Orders',
    text: 'Stock up on MANInamnam and share its irresistible flavor with more customers.',
  },
]

  return (
    <section className="bg-[#f3e2ce] px-6 py-28 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#a47864]">
              MADE FOR EVERY MOMENT
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#4b3023] md:text-7xl">
              A snack for
              <br />
              <span className="italic text-[#a47864]">every occasion.</span>
            </h2>
          </div>

          <p className="max-w-md leading-8 text-[#80624f]">
            Whether it's a quick office break, a family gathering, or a
            special celebration, MANInamnam makes every moment a little
            more flavorful.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-[1.75rem] bg-[#faead8] p-7"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8bfa2] text-2xl">
                {item.emoji}
              </span>

              <h3 className="mt-7 font-serif text-2xl text-[#5a4032]">
                {item.title}
              </h3>

              <p className="mt-3 text-base leading-7 md:text-lg md:leading-8 text-[#80624f]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="bg-[#faead8] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-12 text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#a47864]">
            A CLOSER LOOK
          </p>

          <h2 className="font-serif text-5xl text-[#4b3023] md:text-7xl">
            See what makes
            <br />
            <span className="italic text-[#a47864]">
              us irresistible.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto aspect-video max-h-[650px] overflow-hidden rounded-[2rem] bg-[#5a4032] shadow-xl">

          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src="/maninamnam-promo.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>

        </div>

        <p className="mt-5 text-center text-xs text-[#8e6b56]">
          A little preview of the goodness waiting for you.
        </p>

      </div>
    </section>
  )
}


function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#e8bfa2] px-6 py-24 md:px-12 md:py-32">
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#faead8]/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6c4e3e] text-3xl">
          🥜
        </div>

        <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#8e6b56]">
          GOOD SNACKS. GOOD COMPANY.
        </p>

        <h2 className="mt-5 font-serif text-5xl leading-tight tracking-tight text-[#4b3023] md:text-8xl">
          Craving a little
          <br />
          <span className="italic">something?</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#6c4e3e]">
          Ready for a little crunch? Send us a message to place your order,
          ask about our bundle promos, or arrange your preferred delivery
          option. We'd love to make your next snack moment delicious!
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">

  {/* Payment Options */}
  <div className="rounded-[1.5rem] border border-[#6c4e3e]/15 bg-[#faead8]/50 p-6">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#faead8] text-xl">
      💳
    </div>

    <h3 className="font-serif text-xl text-[#4b3023]">
      Payment Options
    </h3>

    <ul className="mt-4 space-y-2 text-base text-[#6c4e3e]">
      <li>• GCash</li>
      <li>• Bank Transfer</li>
      <li>• Cash / Personal Payment</li>
    </ul>
  </div>

  {/* Delivery Options */}
  <div className="rounded-[1.5rem] border border-[#6c4e3e]/15 bg-[#faead8]/50 p-6">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#faead8] text-xl">
      🛵
    </div>

    <h3 className="font-serif text-xl text-[#4b3023]">
      Delivery Options
    </h3>

    <ul className="mt-4 space-y-2 text-base leading-6 text-[#6c4e3e]">
      <li>• Same-day delivery for nearby areas, subject to availability</li>
      <li>• Meet-up or pick-up</li>
      <li>• Delivery charge: ₱107, depending on location</li>
    </ul>
  </div>

</div>

<p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-[#8e6b56]">
  Message us on Facebook before ordering to confirm delivery
  fees, schedules, and available locations.
</p>

        <a
        href="https://www.facebook.com/share/1dcFvXoJhr/"
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-[#5a4032] px-8 py-4 text-base transition-all duration-300 hover:bg-[#4b3023] hover:-translate-y-1 hover:shadow-xl"
        style={{ color: "#FAEAD8" }}
        >
          <MessageCircle
          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
          style={{ color: "#FAEAD8" }}
          />

          <span style={{ color: "#FAEAD8" }}>Message Us</span>

          <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{ color: "#FAEAD8" }}
          />
          </a>

        <p className="mt-6 text-xs tracking-wide text-[#8e6b56]">
          We'd love to hear from you. ♡
        </p>
      </motion.div>
    </section>
  )
}


function Footer() {
  return (
    <footer className="bg-[#4b3023] px-6 py-12 text-[#faead8] md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 border-b border-[#faead8]/15 pb-10 md:flex-row md:items-center">
          <div>
            <a href="#home" className="font-serif text-3xl font-semibold">
              MANInamnam<span className="text-[#e8bfa2]">.</span>
            </a>

            <p className="mt-2 text-xs tracking-[0.2em] text-[#faead8]/50">
              CRUNCHY · SAVORY · ADDICTIVE
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-base text-[#faead8]/70">
            <a href="#home" className="transition hover:text-[#e8bfa2]">Home</a>
            <a href="#story" className="transition hover:text-[#e8bfa2]">Our Story</a>
            <a href="#product" className="transition hover:text-[#e8bfa2]">Our Product</a>
            <a href="#contact" className="transition hover:text-[#e8bfa2]">Contact</a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#faead8]/40 md:flex-row">
          <p>© {new Date().getFullYear()} MANInamnam. Made with love. ♡</p>
          <p>Good things are meant to be shared.</p>
        </div>
      </div>
    </footer>
  )
}


function App() {
  return (
    <main className="min-h-screen bg-[#faead8] text-[#5a4032]">
      <Navbar />
      <Hero />
      <OurStory />
      <GoodStuff />
      <ProductShowcase />
      <BundleDeals />
      <Occasions />
      <PromoVideo />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App

