import Link from "next/link";


const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center lg:px-[140px] px-4 py-4 lg:pt-20 pt-12">
            <div className="bg-clip-text colorshadow tracking-tight font-denton lg:text-5xl text-2xl text-transparent bg-[linear-gradient(-145deg,_#FBCB50_0%,_#D87297_43%,_#E36658_100%)] ">
                ByteBrush
            </div>
            <Link href="/insight" className="capitalize border border-[#333] bg-[#212121] hover:bg-[#313131] transition ease-in-out duration-300 tracking-tight lg:text-xl text-sm font-semibold lg:px-6 lg:py-3 px-4 py-2">
                <Link href="/insight">
                    see insights
                </Link>
            </Link>
        </div>
    )
}

export default Navbar;
