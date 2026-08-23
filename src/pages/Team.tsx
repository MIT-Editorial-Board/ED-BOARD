import { motion, useReducedMotion } from "framer-motion";
import { teamMembersData } from "@/data/teamData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type TeamMember = {
  name: string;
  position: string;
  quote: string;
  image: string;
};

const teamDepartments = Object.entries(teamMembersData) as [
  string,
  TeamMember[],
][];

export default function Team() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#030507] pt-[5.5rem] text-[#F5F7FA]">
        {/* Background grid */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
          aria-hidden="true"
        />

        {/* Background glows */}
        <div
          className="pointer-events-none fixed -left-60 top-1/4 h-[38rem] w-[38rem] rounded-full opacity-20 blur-[170px]"
          style={{
            background:
              "radial-gradient(circle, rgba(20,123,255,0.3), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none fixed -right-60 bottom-0 h-[36rem] w-[36rem] rounded-full opacity-15 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(53,200,255,0.25), transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Team hero */}
        <section className="relative z-10 mx-auto max-w-[96rem] px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:px-12">
          {/* Metadata */}
          <motion.div
            className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4 sm:mb-12"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#147BFF]" />

              <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[#35C8FF] sm:text-[0.68rem]">
                The People Behind the Pages
              </span>
            </div>

            <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
              Team / 2026
            </span>
          </motion.div>

          {/* Page heading */}
          <motion.h1
            className="mb-10 font-display text-[clamp(4.5rem,15vw,10rem)] font-normal uppercase leading-[0.8] tracking-[-0.015em] text-[#F5F7FA] sm:mb-14"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Meet Our
            <span className="block text-[#4D7CF3]">Team</span>
          </motion.h1>

          {/* Team photograph */}
          <motion.div
            className="relative"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            <div className="group relative overflow-hidden border border-[#147BFF]/25 bg-[#05070A]">
              <img
                src="/Board26.jpeg"
                alt="MIT Editorial Board team"
                className="h-[330px] w-full object-cover object-center brightness-[0.72] saturate-[0.82] transition duration-1000 group-hover:scale-[1.02] group-hover:brightness-[0.8] sm:h-[500px] lg:h-[620px]"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020304] via-transparent to-black/25"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(20,123,255,0.16), transparent 42%)",
                }}
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-[#35C8FF]">
                  MIT Editorial Board
                </span>

                <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-[#D1D7DF] sm:text-base sm:leading-8">
                  The passionate individuals who bring creativity to life at
                  MIT Editorial Board.
                </p>
              </div>

              <span className="pointer-events-none absolute left-5 top-5 h-9 w-9 border-l border-t border-[#35C8FF]/65" />

              <span className="pointer-events-none absolute right-5 top-5 h-9 w-9 border-r border-t border-[#35C8FF]/65" />
            </div>

            <span className="pointer-events-none absolute -bottom-3 -left-3 h-10 w-10 border-b border-l border-[#147BFF]/45" />

            <span className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 border-r border-t border-[#147BFF]/45" />
          </motion.div>

          {/* Existing team quote */}
          <motion.blockquote
            className="mx-auto max-w-5xl py-20 text-center sm:py-28"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-15% 0px",
            }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-[5rem] leading-none text-[#147BFF] sm:text-[7rem]">
              “
            </span>

            <p className="-mt-7 font-sans text-xl leading-9 text-[#D1D7DF] sm:text-3xl sm:leading-[1.5]">
              A team is not just a group of people, but a family brought
              together by shared dreams.
            </p>

            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-[#147BFF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#35C8FF] shadow-[0_0_8px_#35C8FF]" />
              <span className="h-px w-14 bg-[#147BFF]" />
            </div>
          </motion.blockquote>

          {/* Departments */}
          <section>
            {teamDepartments.map(
              ([department, members], departmentIndex) => (
                <motion.div
                  key={department}
                  className="mb-24 last:mb-0 sm:mb-32"
                  initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-10% 0px",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: reduceMotion
                      ? 0
                      : Math.min(departmentIndex * 0.05, 0.2),
                  }}
                >
                  {/* Department heading */}
                  <div className="mb-8 flex items-end justify-between border-b border-white/[0.08] pb-5 sm:mb-12">
                    <div>
                      <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-[#35C8FF]">
                        Department
                      </span>

                      <h2 className="mt-3 font-display text-[clamp(3rem,8vw,6rem)] font-normal uppercase leading-[0.85] tracking-[0.01em] text-[#F5F7FA]">
                        {department}
                      </h2>
                    </div>

                    <span className="font-mono text-[0.65rem] tracking-[0.25em] text-[#147BFF]">
                      {String(departmentIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Members */}
                  <div className="grid gap-5 lg:grid-cols-2">
                    {members.map((member, memberIndex) => (
                      <motion.article
                        key={`${department}-${member.name}`}
                        className="group relative overflow-hidden border border-white/[0.09] bg-[#070A0F]/75 transition-colors duration-500 hover:border-[#147BFF]/65 hover:bg-[#0A101A]"
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 25,
                              }
                        }
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          margin: "-8% 0px",
                        }}
                        transition={{
                          duration: 0.65,
                          delay: reduceMotion
                            ? 0
                            : Math.min(memberIndex * 0.06, 0.25),
                        }}
                      >
                        <div className="grid sm:grid-cols-[190px_1fr]">
                          {/* Member image */}
                          <div className="relative h-[300px] overflow-hidden bg-[#030507] sm:h-full sm:min-h-[285px]">
                            <img
                              src={member.image}
                              alt={member.name}
                              loading="lazy"
                              className="h-full w-full object-cover object-center brightness-[0.78] saturate-[0.82] transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[0.88]"
                            />

                            <div
                              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020304]/65 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#070A0F]/30"
                              aria-hidden="true"
                            />

                            <div className="absolute left-4 top-4 border border-white/[0.12] bg-[#030507]/70 px-2.5 py-1.5 backdrop-blur-md">
                              <span className="font-mono text-[0.55rem] tracking-[0.2em] text-[#35C8FF]">
                                {String(memberIndex + 1).padStart(2, "0")}
                              </span>
                            </div>
                          </div>

                          {/* Existing member data */}
                          <div className="relative flex flex-col justify-center p-6 sm:p-7">
                            <span className="font-mono text-[0.56rem] uppercase tracking-[0.27em] text-[#35C8FF]">
                              {member.position}
                            </span>

                            <h3 className="mt-3 font-display text-[2.4rem] font-normal uppercase leading-[0.9] tracking-[0.01em] text-[#F5F7FA] transition-colors group-hover:text-[#4D7CF3] sm:text-[2.8rem]">
                              {member.name}
                            </h3>

                            <div className="my-5 h-px w-12 bg-[#147BFF]" />

                            <p className="font-sans text-sm italic leading-7 text-[#A4AFBC]">
                              “{member.quote}”
                            </p>

                            <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#147BFF]/35 transition-colors group-hover:border-[#35C8FF]/75" />
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}