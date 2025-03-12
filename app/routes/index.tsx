import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: HomePage,
})
import { BigLogo } from '~/components/Logo'
import WaveformCard from '~/components/WaveformCard';

function HomePage() {
  return (
    <div className="">
      <div
        className="hero min-h-[calc(100vh-80px)] bg-cover bg-center"
        style={{
          backgroundImage: "url(public/acoustic-guitar-close-up-beautiful-colored-background.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center flex-col px-4 sm:px-6 sm:px-8">
          <div className="max-w-md">
            <div className='flex justify-center'>
              <BigLogo />

            </div>

            <h1 className="mb-5 text-4xl sm:text-5xl font-bold">Guitar Tone Recreator</h1>
            <p className="mb-5"></p>
            <p className="mb-5">
              Recreate any guitar sound using advanced machine learning processing.


            </p>
            <a className="btn btn-neutral" href="#features">Get Started</a>
          </div>
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <img src="public/aire_trans.png" alt="Partner AIRE" className="h-24" />
              <img src="public/taltech_valge.png" alt="Partner TalTech" className="h-24" />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-5xl mx-auto'>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="mb-4">
            We want to help guitar players — both beginners and professionals — unlock the signature tones of their favorite bands.
            By breaking down and rebuilding the guitar sound from popular recordings, our process makes it easier for anyone to explore new creative ideas and accurately recreate those hard-to-match effect chains.
          </p>
        </div>

        <div id="features" className="p-6 scroll-mt-[80px]">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="mb-4">
            Our multi-stage process lets you replicate the distinctive guitar sounds from well-known tracks by:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Extracting Guitar:</strong> Advanced source separation tehniques isolate the guitar from the original song, preserving the natural performance.
            </li>
            <li>
              <strong>Revealing the Guitar Effect Chain:</strong> Machine learning methods strip away existing effects to produce a clean, dry signal as a foundation.
            </li>
            <li>
              <strong>Modeling Iconic Effects:</strong> Using the wet and dry signals, we model the effects to reapply the original effect chain, letting you capture a signature sound with precision.
            </li>
          </ul>
          <ul className="lg:timeline lg:timeline-vertical space-y-4 sm:space-y-0">
            {/* STEP 1 */}
            <li>
              <div className="timeline-start timeline-box space-y-2">
                <h3 className="text-xl font-semibold">Original Song</h3>
                <p className="text-sm">
                  Start with a full, popular recording that showcases the iconic guitar sound. This track contains all the details and nuances that set the stage for a true-to-life guitar sound recreation.
                </p>
                <WaveformCard
                  audioUrl="public/smoke.wav"
                />
              </div>
              <div className="lg:timeline-middle hidden lg:block">
                {/* This is the vertical line + icon in the middle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className='hidden lg:block' />
            </li>

            {/* STEP 2 */}
            <li>
              <hr className='hidden lg:block ' />
              <div className="timeline-end timeline-box space-y-2">
                <h3 className="text-xl font-semibold">Guitar Extracted</h3>
                <p className="text-sm">
                  Using advanced music source separation techniques, we isolate the guitar from the original mix. This “wet” signal keeps the performance intact with all its inherent character, including the original effects that define the song’s sound.
                </p>
                <WaveformCard
                  audioUrl="public/smoke.wav"
                />
              </div>
              <div className="lg:timeline-middle hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className='hidden lg:block' />
            </li>

            {/* STEP 3 */}
            <li>
              <hr className='hidden lg:block' />
              <div className="timeline-start timeline-box space-y-2">
                <h3 className="text-xl font-semibold">Clean Guitar (No FX)</h3>
                <p className="text-sm">
                  Machine learning based methods enable removal of the guitar effects, revealing the true, unprocessed guitar sound. This “dry” signal is your blank canvas — a clear and stable base for reapplying a modeled effect chain.
                </p>
                <WaveformCard
                  audioUrl="public/smoke.wav"
                />
              </div>
              <div className="lg:timeline-middle hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className='hidden lg:block' />
            </li>

            {/* STEP 4 */}
            <li>
              <hr className='hidden lg:block' />
              <div className="timeline-end timeline-box space-y-2">
                <h3 className="text-xl font-semibold">Guitar with New FX</h3>
                <p className="text-sm">
                  We use both the wet and dry signals to train our models, which then reapply a custom effect chain that mirrors the original tone. This step lets you capture the unique sound of a popular song or group, making it easier to recreate that distinctive vibe.
                </p>
                <WaveformCard
                  audioUrl="public/smoke.wav"
                />
              </div>
              <div className="lg:timeline-middle hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>


        <div id="integrations" className="px-6 scroll-mt-[80px]">
          <h2 className="text-3xl font-bold mb-4">Integrations</h2>
          <p className="mb-4">
            We believe in empowering musicians to explore new creative frontiers. Our
            team’s vision is to combine cutting-edge AI with intuitive design, enabling
            guitarists of all levels to effortlessly transform their sound.
          </p>
          <ul className="flex flex-col sm:flex-row justify-between items-start space-y-4">
            {/* STEP 1 */}
            <li className="flex-1">
              <div className="timeline-start timeline-box space-y-2 min-h-50">
                <h2 className="text-xl font-semibold">1. Web Platform</h2>
                <p className="text-sm">
                  An easy-to-use, browser-based solution that guides you through the process. Perfect for beginners who want to experiment with replicating the iconic guitar sounds of popular tracks without needing complex software.
                </p>
              </div>
            </li>

            {/* STEP 2 */}
            <li className="flex-1">
              <div className="timeline-end timeline-box space-y-2 min-h-50">
                <h2 className="text-xl font-semibold">2. DAW Plugin</h2>
                <p className="text-sm">
                  Seamlessly integrate our process into your Digital Audio Workstation. This option is ideal for professionals who require detailed control over effect chains and want to quickly replicate complex guitar sound.
                </p>
              </div>
            </li>

            {/* STEP 3 */}
            <li className="flex-1">
              <div className="timeline-start timeline-box space-y-2 min-h-50">
                <h2 className="text-xl font-semibold">3. Standalone Pedal</h2>
                <p className="text-sm">
                  Take your tone recreation on the road with a dedicated pedal and mobile app. Enjoy real-time processing and onstage experimentation, so you can capture that signature sound anywhere.
                </p>
              </div>
            </li>
          </ul>
        </div>



        <div id="team" className="p-6 scroll-mt-[80px]">
          <h2 className="text-3xl font-bold mb-4">Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Jüri Bogatkin</h3>
                <p>CEO, Guitar Expert</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Uljana Reinsalu</h3>
                <p>Lead Researcher</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Tatsuki Ishikawa</h3>
                <p>Researcher & Developer</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Andrei Gužovski</h3>
                <p>Researcher & Developer</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Rene Pihlak</h3>
                <p>Researcher & Developer</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Even Sekhri</h3>
                <p>Researcher & Developer</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <figure>
                <img
                  src="https://placehold.co/300x300"
                  alt="Team Member"
                  className="w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Andrii Riid</h3>
                <p>Researcher, Guitar Expert</p>
              </div>
            </div>
          </div>
        </div>


        <div id="contact" className="card bg-base-200  p-6 m-6 space-y-6 scroll-mt-[80px]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Be the first to know when we launch!</h2>
            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
              </div>
              <button className="btn btn-neutral join-item">Join</button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Address:</span> Raja 15, Tallinn, Estonia
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span> +372 56617983
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span> info@noisemachine.eu
              </p>
            </div>
          </div>
        </div>



      </div>

    </div >
  );
}

function Arrow() {
  return <div className="text-4xl mx-2 md:mx-4 self-end mb-7">→</div>;
}

