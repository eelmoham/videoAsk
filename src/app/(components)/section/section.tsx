// ({ children, ...props })

import Link from "next/link";

const Section = () => {
    return (
        <section>
            <Link href='https://www.tailwindcss-animated.com/' className="animate-fade-up animate-ease-linear">click on me</Link>
        </section>
    );
}
export default Section;