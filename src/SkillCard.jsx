import clsx from "clsx"

function SkillCard({icon: Icon, label, color}){
    return(
        <li className="group inline-flex h-[80px] w-[80px] bg-[#481FB8] justify-center items-center flex flex-col rounded hover:bg-black transition-colors ease-in-out md:h-[110px] md:w-[110px]">
        <Icon className={clsx(`group-hover:text-${color}`, 
                              'text-4xl md:text-5xl')}/>
        {label}
        </li>
    )
}

export default SkillCard