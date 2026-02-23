import type { SVGProps } from "react";

interface CloseaddProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const Closeadd: React.FC<CloseaddProps> = ({ className, ...props }: CloseaddProps) => {
  return (
    <div>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <g clip-path="url(#clip0_5_76)">
        <path d="M0 0H15V15H0V0Z" fill="#CDCCCC"/>
        <path d="M11.75 3.25L3.25 11.75L11.75 3.25Z" fill="black"/>
        <path d="M3.25 3.25L11.75 11.75M11.75 3.25L3.25 11.75" stroke="#00AECD" stroke-width="1.25"/>
        </g>
        <defs>
        <clipPath id="clip0_5_76">
        <rect width="15" height="15" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </div>
  )
}

export default Closeadd