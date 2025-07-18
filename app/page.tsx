"use client"
import Image from "next/image";
import styles from "./rootPage.module.css"
import grad from "../public/artistic-blurry-colorful-wallpaper-background.jpg"
import { ArrowUp, CircleCheck, LoaderCircle, Sun } from "lucide-react";
import auranetLogo from "../public/signatureLogoSimple.jpg"
import Link from "next/link";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import glasspanebg from "../public/blurglasspane.jpg"
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

import dashboardImg from "../public/dashboardImg.png"
import addEndpointImg from "../public/addEndpointImg.png"
import apiEditImg from "../public/apiEditImg.png"

export default function Home() {
  const { data: session } = useSession();
  const [signinLoader, setSinginLoader] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.tabMain}>
        <div className={styles.tabDiv}>
          <Link href="/">
            <Image src={auranetLogo} className="h-[45] w-[45] object-cover object-center rounded-[5px]" alt="" />
          </Link>

          <div className="flex items-center gap-[10px]">
            <Popover>
              <PopoverTrigger asChild>
                <div className={styles.themeSwitchBtn}>
                  <Sun size={18} />
                </div>
              </PopoverTrigger>
              <PopoverContent className="py-[5px] px-[10px]">
                <p>App works so good, I didn' make a darkmode.</p>
                <p>Just add the APIs and forget.</p>
              </PopoverContent>
            </Popover>

            {session &&
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            }
            {!session &&
              <Button loading={signinLoader} onClick={() => {
                setSinginLoader(true);
                signIn("google", { callbackUrl: '/dashboard' })
              }}>Sign in</Button>}
          </div>
        </div>
      </div>
      <Image className={styles.gradientBg} src={grad} alt="" />
      <Image className="absolute top-0 left-0 w-[100%] h-[100vh] object-cover opacity-[0.1]" src={glasspanebg} alt="" unoptimized />
      <div className={styles.heroDiv}>
        <h1 className="text-[40px] font-[600] text-center leading-[1.2em]">
          Doesn't let your free tiers sleep
        </h1>
        <p className="opacity-[0.9]">Pretend here is a sick landing page</p>
        {session &&
          <Link href="/dashboard">
            <Button>
              Dashboard
              <ArrowUp />
            </Button>
          </Link>
        }
        {signinLoader &&
          <div className={styles.loadingBtn}>
            <LoaderCircle className="animate-spin" />
          </div>
        }
        {!session && !signinLoader &&
          <Button onClick={() => {
            setSinginLoader(true);
            signIn("google", { callbackUrl: '/dashboard' })
          }}>
            Activate
            <ArrowUp />
          </Button>
        }
      </div>


      <div className="mt-[30px] flex flex-col gap-[50px]">
        <div className={styles.howToUseDiv}>
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-[35px] font-[Inter] text-center">How to use?</h1>
            <p className="mx-[10px]">Create an account and go to your dashboard.
              Sign up, boom you're in the dashboard. <br />From there? Add up to 10 projects like a boss. Give 'em cool names, drop in some spicy descriptions or don't, who's stopping you? Each project shows up with a shiny default thumbnail so you always know what's what.<br /> And get this once we hit 100 users, custom thumbnails go live. No fees, no nonsense, no begging for premium. Just good ol' feature drops, served hot.
            </p>
          </div>
          <div className="flex-1">
            <Image className="rounded-[6px] w-[100%] object-contain min-w-[300px]" src={dashboardImg} alt="" unoptimized />
          </div>
        </div>

        <div className={styles.addApiDiv}>
          <div className="flex-1">
            <Image className="rounded-[6px] w-[100%] h-[450px] object-contain min-w-[300px]" src={addEndpointImg} alt="" unoptimized />
          </div>

          <div className="flex-1 min-w-[300px] my-auto">
            <h1 className="text-[35px] font-[Inter] text-center">Add your endpoints</h1>
            <p className="mx-[10px]">Add 5 endpoints to your project , and we'll ping one of 'em every 10 minutes. Just one, picked at random.
              <br />
              Why? Because hammering all five like a bot every 10 minutes is a one-way ticket to rate-limiting hell. But random? Random is beautiful. Random flies under the radar.
              <br />
              It's smart, it's sneaky, and it keeps your project looking alive without triggering every firewall from here to Silicon Valley.
              <br />
              You want clean uptime and no suspicion? This is how the game's played. Something not working? Ping me on Twitter, I'll know before the logs do.
            </p>
          </div>
        </div>

        <div className={styles.editApiDiv}>
          <div className="flex-1 min-w-[300px] my-[auto]">
            <h1 className="text-[35px] font-[Inter] text-center">Point to note</h1>
            <p className="mx-[10px]">I made LazyPing for students without credit cards to showcase their potential using free-tier hosting.<br />
              So only activate the API endpoints you're currently showcasing and want to maintain with a good reputation — since cold starts can take up to 1 minute. You don't want to attach a project link to your resume where the recruiter has to stare at a blank screen for a full minute.<br />
              So if you try to circumvent the project and API limits using multiple accounts... well, spamming someone with public URLs of your projects isn't exactly the smartest move.
            </p>
          </div>
          <div className="flex-1">
            <Image className="rounded-[6px] w-[100%] object-contain min-w-[300px]" src={apiEditImg} alt="" unoptimized />
          </div>
        </div>


      </div>



      <div className={styles.subsCardsDiv}>
        <h1 className="text-[35px] font-[Inter] mx-auto">Plans & Pricing</h1>

        <div className="flex gap-[10px] mx-auto">

        </div>
        <div className="flex flex-wrap gap-[10px] px-[10px] justify-center">

          <div className={styles.card1}>
            <div className={styles.r1}>
              <Image src={auranetLogo} className="absolute bg-[white] p-[4px] h-[26px] w-[26px] top-[10px] left-[10px] rounded-[50%]" alt="" />
              <p>Premium</p>
              <h1>Free</h1>
              {session &&
                <Link href="/dashboard">
                  <Button>
                    Choose this plan
                  </Button>
                </Link>
              }
              {!session &&
                <Button onClick={() => { signIn() }}>
                  Choose this plan
                </Button>
              }
            </div>
            <div className="opacity-[0.8]">
              <h2 className="text-[17px]">Premium plan include</h2>
              <div className="text-[15px] mt-[2px]">
                <p className="flex items-center gap-[7px]"><CircleCheck size={15} color="white" fill="#6229f3" /> 10 projects per account</p>
                <p className="flex items-center gap-[7px]"><CircleCheck size={15} color="white" fill="#6229f3" /> 5 APIs per project</p>
                <p className="flex items-center gap-[7px]"><CircleCheck size={15} color="white" fill="#6229f3" /> Monthly statements</p>
              </div>
            </div>
          </div>


          <div className={styles.card2}>
            <div className={styles.r1}>
              <Image src={auranetLogo} className="absolute bg-[white] p-[4px] h-[26px] w-[26px] top-[10px] left-[10px] rounded-[50%]" alt="" />
              <p>Turbo premium</p>
              <h1>Also Free</h1>
              <Link href="https://x.com/abhraneeldhar" className="w-[100%]" target="_blank">
                <Button>
                  Choose this plan
                </Button>
              </Link>
            </div>
            <div className="opacity-[0.8]">
              <h2 className="text-[17px]">Premium plan include</h2>
              <div className="text-[15px] mt-[2px]">
                <p className="flex items-center gap-[7px]"><CircleCheck size={15} color="white" fill="#6229f3" /> Yeah that's pretty much it</p>
                <p className="flex items-center gap-[7px]"><CircleCheck size={15} color="white" fill="#6229f3" /> It would be very based</p>
                <p className="flex items-center gap-[7px]"><CircleCheck size={15} color="white" fill="#6229f3" /> If you follow my twitter tho</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="mt-[50px]">
        <Footer />
      </div>

    </div>
  );
}
