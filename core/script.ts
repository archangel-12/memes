// the goal actually to compile the typescript code instead using html
// don't know the exact time to revise the whole thing

// const app = document.getElementById("app");
// document.addEventListener("DOMContentLoaded", () => {
//   const slidesContainer = document.createElement("div");
//   slidesContainer.classList.add("reveal");
//   slidesContainer.innerHTML = `
//        <div class="reveal">
//          <div class="slides">
//            <section>
//              <section
//                data-background-image="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjVoaHR0ZHhjaHBua2MzbmdwY3piOGRvY29qdTR4bTExOGRzMGR2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/804TNmnYLfNao/giphy.gif"
//                data-background-size="10rem"
//                data-background-repeat="repeat"
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: black">
//                  My take on memes...
//                </h1>
//                <p>
//                  <span
//                    class="animate__animated animate__fadeIn fragment"
//                    style="font-size: 2rem; text-transform: none; color: black"
//                    >unprofessional presentation</span
//                  >
//                  <span
//                    class="animate__animated animate__fadeIn fragment"
//                    style="font-size: 2rem; text-transform: none; color: black"
//                    >by:</span
//                  >
//                </p>
//              </section>
//              <section
//                data-background-image="https://i.pinimg.com/736x/81/37/81/813781eea9444801a9703965613782e7.jpg"
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: black">
//                  <a href="https://www.instagram.com/r3yanson/" target="_blank"
//                    >archangel</a
//                  >
//                </h1>
//              </section>
//            </section>
//            <section>
//              <section
//                data-background-image="https://www.icegif.com/wp-content/uploads/2022/09/icegif-386.gif"
//                data-background-repeat
//              >
//                <h1
//                  style="
//                    font-size: 4rem;
//                    text-transform: capitalize;
//                    color: black;
//                  "
//                >
//                  01
//                </h1>
//                <h2 style="font-size: 3rem; text-transform: none; color: white">
//                  explanation
//                </h2>
//              </section>
//              <section
//                data-background-image="https://preview.redd.it/wzi7if9jmmo81.gif?width=480&auto=webp&s=a5f9288354d430249bc89381c7e0b3a59b260c0b"
//                data-background-repeat
//              >
//                <p style="font-size: 2rem; text-transform: none; color: black">
//                  according from
//                  <a
//                    href="https://www.britannica.com/place/United-Kingdom"
//                    target="_blank"
//                    >British</a
//                  >
//                  philosopher
//                  <a
//                    href="https://en.wikipedia.org/wiki/Richard_Dawkins"
//                    target="_blank"
//                    >Richard Dawkins</a
//                  >, the idea of meme itself is a:
//                </p>
//                <blockquote
//                  style="font-size: 2rem; text-transform: none; color: black"
//                >
//                  cultural parallel to biological genes and considered them, in a
//                  manner similar to “selfish” genes, as being in control of their
//                  own reproduction and thus serving their own ends.
//                </blockquote>
//              </section>
//              <section
//                data-background-image="https://media1.tenor.com/m/I3JzANPyLaYAAAAd/ryan-gosling-confused.gif"
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: black">
//                  which by means:
//                </h1>
//              </section>
//              <section
//                data-background-image="https://gifdb.com/images/high/chaos-fire-rainn-wilson-super-bowl-commercial-5pso7ugzjwzi5b2p.gif"
//                data-background-repeat
//              >
//                <q
//                  style="font-size: 3rem; text-transform: none; color: burlywood"
//                >
//                  an idea, behavior, style, or cultural practice that spreads
//                  within a culture and is transmitted from one individual to
//                  another through imitation
//                </q>
//              </section>
//              <section
//                data-background-image="https://www.icegif.com/wp-content/uploads/icegif-1614.gif"
//                data-background-repeat
//              >
//                <p
//                  style="font-size: 2rem; text-transform: none; color: whitesmoke"
//                >
//                  In essence, memes are units of
//                  <a
//                    href="https://www.britannica.com/topic/cultural-evolution"
//                    target="_blank"
//                    >cultural evolution</a
//                  >, & they can take various forms, including words, phrases,
//                  fashion trends, rituals, technologies, and more. Dawkins
//                  proposed that, just like genes in biology, memes undergo a
//                  process of natural selection and can replicate, mutate, and
//                  evolve over time
//                </p>
//              </section>
//              <section
//                data-background-image="https://i.imgur.com/Zy4bqCh.gif"
//                data-background-size="90rem"
//                data-background-repeat
//              ></section>
//            </section>
//            <section>
//              <section
//                data-background-image="https://media.tenor.com/R-XzzvSvn8wAAAAM/cat-spin.gif"
//                data-background-repeat
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: white">
//                  characteristics
//                </h1>
//              </section>
//              <section
//                data-background-image="https://pbs.twimg.com/media/F_AJutEWoAAB1bb?format=jpg&name=4096x4096"
//                data-background-size="cover"
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: white">
//                  Replicability & Remixability
//                </h1>
//                <q
//                  class="fragment fade-up"
//                  style="font-size: 2rem; text-transform: none; color: white"
//                >
//                  Memes are designed to be easily copied, modified, and shared.
//                  They often use recognizable formats and templates, making it
//                  simple for users to create their own versions. This remixability
//                  fuels their evolution and spread
//                </q>
//              </section>
//              <section
//                data-background-image="https://imageio.forbes.com/specials-images/imageserve/64e8c95bf02f344e0cd8ae1f/0x0.jpg?format=jpg&crop=1500,1120,x0,y185,safe&height=600&width=1200&fit=bounds"
//                data-background-size="60rem"
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: black">
//                  Intertextuality & Referentiality
//                </h1>
//                <q
//                  class="fragment fade-up"
//                  style="font-size: 2rem; text-transform: none; color: black"
//                >
//                  Memes often draw on existing cultural references, pop-culture
//                  moments, and shared experiences. They rely on intertextuality,
//                  where meaning and humor arise from the interplay between the
//                  meme itself and the external context it evokes.
//                </q>
//              </section>
//              <section
//                data-background-image="https://i.pinimg.com/originals/27/29/7f/27297f77c1a8d22df4c2043a775b191e.gif"
//                data-background-size="cover"
//                data-background-repeat
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: black">
//                  Virality
//                </h1>
//                <q
//                  class="fragment fade-up"
//                  style="font-size: 2rem; text-transform: none; color: white"
//                >
//                  Memes spread rapidly through online platforms due to their
//                  shareable and relatable nature. They often go viral, reaching a
//                  wide audience in a short period
//                </q>
//              </section>
//            </section>
//            <section>
//              <section
//                data-background-image="https://media.tenor.com/jk65vxhLr40AAAAC/evolution.gif"
//                data-background-repeat
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: black">
//                  Evolution & Propagation
//                </h1>
//              </section>
//              <section
//                data-background-image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFocWIweWo1MXRzaWhoaHI5bDMzeWlrbDJqeW9rdzhidXd0ZXE1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HUkOv6BNWc1HO/giphy.gif"
//                data-background-repeat
//              >
//                <p
//                  style="font-size: 2rem; text-transform: none; color: whitesmoke"
//                >
//                  Internet memes may stay the same or evolve over time. They can
//                  <q>mutate</q> in their meaning but maintain their structure, or
//                  vice versa, such
//                  <a
//                    href="https://revistas.ces.edu.co/index.php/psicologia/article/view/2642"
//                    target="_blank"
//                    >mutate</a
//                  >
//                  occurring by chance or by deliberate means such as parody.
//                </p>
//              </section>
//              <section
//                data-background-image="https://i.makeagif.com/media/5-27-2016/jPbKQk.gif"
//                data-background-size="100rem"
//                data-background-repeat
//              >
//                <p
//                  style="font-size: 2rem; text-transform: none; color: burlywood"
//                >
//                  Memes propagate in a viral pattern, <q>infecting</q> individuals
//                  in a pattern reminiscent of the
//                  <a
//                    href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology"
//                    target="_blank"
//                    >SIR</a
//                  >
//                  model for spread of disease.
//                </p>
//              </section>
//              <section
//                data-background-image="https://i.makeagif.com/media/3-27-2016/c_P4cz.gif"
//                data-background-size="100rem"
//                data-background-repeat
//              >
//                <p style="font-size: 2rem; text-transform: none; color: black">
//                  Once a meme has been
//                  <a
//                    href="https://www.wired.com/2008/02/ted-blackmore/?currentPage=all"
//                    target="_blank"
//                    >propagated</a
//                  >
//                  to enough people, continued spread is inevitable. While Internet
//                  memes compete for viewer attention, resulting in shorter
//                  lifespan, they can also collaborate with each other to achieve
//                  greater survival. Also, paradoxically, a meme that experiences a
//                  popularity peak significantly higher than average is not
//                  expected to survive unless it is unique, whereas a meme with
//                  <a href="https://arxiv.org/abs/1304.1712" target="_blank"
//                    >no such peak</a
//                  >
//                  continues to be used with other memes and thus has greater
//                  survivability
//                </p>
//              </section>
//              <section
//                data-background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Graph_SIR_model_without_vital_dynamics.svg/800px-Graph_SIR_model_without_vital_dynamics.svg.png"
//                data-background-size="700px"
//              >
//                <div
//                  style="
//                    position: absolute;
//                    width: 40%;
//                    right: 0;
//                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5),
//                      0 5px 25px rgba(0, 0, 0, 0.2);
//                    background-color: rgba(0, 0, 0, 0.9);
//                    color: #fff;
//                    padding: 20px;
//                    font-size: 20px;
//                    text-align: left;
//                  "
//                >
//                  <h2>
//                    <a
//                      href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology"
//                      target="_blank"
//                      >SIR</a
//                    >
//                    Pattern
//                  </h2>
//                  <p>
//                    Internet memes propagate in a similar pattern to infectious
//                    disease. The pattern, as depicted in red, shows an initial
//                    spike in popularity followed by a gradual taper to obscurity
//                  </p>
//                </div>
//              </section>
//            </section>
//            <section>
//              <section
//                data-background-image="https://media1.tenor.com/m/FFYqOVVbrJAAAAAC/markiplier-punch.gif"
//                data-background-size="cover"
//                data-background-repeat
//              >
//                <h1 style="font-size: 3rem; text-transform: none; color: white">
//                  Copyright
//                </h1>
//              </section>
//              <section
//                data-background-image="https://media.tenor.com/pKGEPosjAZ8AAAAM/patrick-bateman.gif"
//                data-background-size="cover"
//                data-background-repeat
//              >
//                <p style="font-size: 2rem; text-transform: none; color: white">
//                  Since many memes are derived from pre-existing works, it has
//                  been contended that memes violate the copyright of the original
//                  authors...
//                </p>
//              </section>
//              <section
//                data-background-image="https://media.tenor.com/77lgKkAhF9AAAAAM/muta-mutahar.gif"
//                data-background-size="cover"
//                data-background-repeat
//              >
//                <p style="font-size: 2rem; text-transform: none; color: white">
//                  However, some view memes as falling under the ambit of fair use
//                  in the United States in which It is
//                  <q>still</q> disputed whether the use of memes constitutes
//                  copyright infringement
//                </p>
//              </section>
//              <section
//                data-background-image="https://i.pinimg.com/736x/dd/d7/a1/ddd7a1c4a863f38813d4927e0d16f59b.jpg"
//              >
//                <h2 style="font-size: 3rem; text-transform: none; color: black">
//                  Non-fungible tokens (NFT)
//                </h2>
//              </section>
//              <section
//                data-background-image="https://pbs.twimg.com/media/CGWBaAwW0AA0V7_?format=png&name=large"
//                data-background-size="100rem"
//              >
//                <p
//                  style="font-size: 2rem; text-transform: none; color: burlywood"
//                >
//                  Some individuals who are subjects of memes (and thus the
//                  copyright holders) have made money through sale of non-fungible
//                  tokens in auctions.
//                </p>
//              </section>
//              <section
//                data-background-image="https://i.gadgets360cdn.com/large/disaster_girl_nyt_1619763942851.jpg"
//                data-background-size="100rem"
//              >
//                <p
//                  style="font-size: 2rem; text-transform: none; color: burlywood"
//                >
//                  One example is
//                  <q
//                    ><a
//                      href="https://www.newsobserver.com/news/local/article250944639.html"
//                      target="_blank"
//                      >Disaster Girl</a
//                    ></q
//                  >, based on a photo of Zoe Roth at age 4 taken in Mebane, North
//                  Carolina, in January 2005. After this photo became famous and
//                  was used hundreds of times without permission, Roth decided to
//                  sell the original copy as an NFT for US$539,973 (equivalent to
//                  $583,142 two years ago) with agreement for a further 10 percent
//                  share of any future sales
//                </p>
//              </section>
//            </section>
//            <section
//              data-background-image="https://cdn.dribbble.com/users/1133416/screenshots/6058767/mother_languagee.gif"
//              data-background-size="cover"
//              data-background-repeat
//            ></section>
//            <section
//              data-background-image="https://e0.pxfuel.com/wallpapers/42/492/desktop-wallpaper-madeon-takes-fans-on-adventure-ahead-of-amf-release-madeon-good-faith.jpg"
//              class="text-left"
//            >
//              <h1 style="font-size: 2rem; text-transform: none; color: black">
//                sources:
//              </h1>
//              <p style="font-size: 2rem; text-transform: none; color: black">
//                - mostly from
//                <a href="https://en.wikipedia.org/wiki/Meme">wikipedia</a> <br />
//                - <a href="https://www.britannica.com/topic/meme">britannica</a>
//              </p>
//            </section>
//          </div>
//        </div>
//        `;
//   document.body.appendChild(slidesContainer);
//   if (window.Reveal) {
//     Reveal.initialize();
//   } else {
//     console.error("Reveal.js not loaded");
//   }
// });