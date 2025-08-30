import Image from "next/image"
import styles from "./root.module.css"
import { ChevronRight } from "lucide-react"


export default function LandingPage() {
    return (<div className="min-h-[100vh] h-[100%] bg-[#F0F8FF] w-[100%] overflow-hidden">

        {/* <div className={styles.sideBar}>
            <h1 className={styles.sidebarOption}>Activate <ChevronRight size={20}/></h1>
            <h1 className={styles.sidebarOption}>Guides <ChevronRight size={20}/></h1>
            <h1 className={styles.sidebarOption}>About <ChevronRight size={20}/></h1>
            <h1 className={styles.sidebarOption}>Best Practices <ChevronRight size={20}/></h1>
        </div> */}


        <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center">

            <h1 className="font-[ClashGrotesk] text-[60px] font-[500] leading-[1.2em] text-[center]">NEVER LET</h1>
            <h1 className="font-[ClashGrotesk] text-[50px] font-[500] leading-[1.2em] text-[center]">YOUR SERVERS</h1>

            <div className="relative h-[fit-content] w-[100%] max-w-[500px] mx-[15px] overflow-x-[hidden] flex flex-col">
                <Image src="/hero/smolpad.png" height={200} width={200} alt="" unoptimized className="h-[100%] w-[100%] object-contain rotate-[-21deg]" />

                <Image src="/hero/screen1.png" height={200} width={200} className={styles.heroScreen1} alt="" unoptimized />

                <Image src="/hero/screen2.png" height={200} width={200} className={styles.heroScreen2} alt="" unoptimized />

                <Image src="/hero/screen3.png" height={200} width={200} className={styles.heroScreen3} alt="" unoptimized />

                <Image src="/hero/screen4.png" height={200} width={200} className={styles.heroScreen4} alt="" unoptimized />
            </div>
            <div className="relative translate-y-[-40%]  w-[100%] max-w-[500px] mx-[15px]">
                <div className="w-[100%] h-[7px] absolute top-[50%] translate-y-[-50%] z-[1] bg-[linear-gradient(90deg,transparent_0%,rgba(255,37,37,1)_10%,rgba(255,37,37,1)_90%,transparent_100%)]"></div>
                <h1 className="font-[Poppins] text-[70px] text-center font-[500] opacity-[0.8]">SLEEP</h1>
            </div>



        </div>
    </div>)
}