import type { SVGProps } from "react"

interface PlayerIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const PlayerIcon: React.FC<PlayerIconProps> = ({ className, ...props }: PlayerIconProps) => {
  return (
    <div>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M11.6667 7.29175V27.7084L27.7084 17.5001L11.6667 7.29175Z" fill="#C4170C"/>
        </svg>
    </div>
  )
}

export default PlayerIcon