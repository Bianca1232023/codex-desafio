import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }: LogoProps) => {

  return (
    <div>
        <svg
            width="38"
            height="23"
            viewBox="0 0 38 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
        <g clip-path="url(#clip0_5_5)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.3706C0 19.4095 3.70817 22.6822 8.28916 22.6822H24.8339V8.72284H15.6251V15.676H11.2515C10.107 15.676 9.17788 14.8567 9.17788 13.8476V7.06756C9.17788 6.06012 9.73978 5.23929 10.8835 5.23929H18.2822L22.4263 0.0346124H8.28916C3.70817 0.0346124 0 3.64402 0 7.68395V15.3706ZM28.5137 22.6822H37.7054V1.82871C37.7054 0.819651 36.7781 0 35.6337 0H26.5719L22.4263 5.225H26.4416C27.5859 5.225 28.5136 6.04414 28.5136 7.05261V22.6822H28.5137Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_5_5">
        <rect width="38" height="22.6822" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </div>
  )
}

export default Logo