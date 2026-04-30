import { useEffect, useRef, useState } from "react"
import ArrowBtn from "../shared/ArrowBtn"
import NotchedBtn from "../shared/NotchedBtn"

const LINKS = ["Services", "Gallery", "Testimonials", "FAQs", "Contact"]

const CONTACT_INFO = [
    { label: "hello@syprivatecharters.com", href: "mailto:hello@syprivatecharters.com" },
    { label: "(805) 555-0182", href: "tel:8055550182" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
]

function useIsMobile(breakpoint = 1000) {
    const [mobile, setMobile] = useState(() => window.innerWidth <= breakpoint)
    useEffect(() => {
        const fn = () => setMobile(window.innerWidth <= breakpoint)
        window.addEventListener("resize", fn)
        return () => window.removeEventListener("resize", fn)
    }, [breakpoint])
    return mobile
}

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [drawerOpen, setDrawer] = useState(false)
    const isMobile = useIsMobile()
    const lastScrollY = useRef(0)

    useEffect(() => {
        function onScroll() {
            const scrollY = window.scrollY
            const delta = scrollY - lastScrollY.current
            if (scrollY > 60) {
                setScrolled(true)
                if (delta > 6) setHidden(true)
                else if (delta < -6) setHidden(false)
            } else {
                setScrolled(false)
                setHidden(false)
            }
            lastScrollY.current = scrollY
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [drawerOpen])

    useEffect(() => {
        if (!isMobile) setDrawer(false)
    }, [isMobile])

    const closeDrawer = () => setDrawer(false)

    const navClass = ["nav", scrolled ? "scrolled" : "", hidden ? "hidden" : "", drawerOpen ? "drawer-open" : ""].filter(Boolean).join(" ")

    return (
        <>
            {/* ── Bar ────────────────────────────────────────────── */}
            <nav className={navClass}>
                <div className="nav__inner">
                    {/* Logo */}
                    <a href="#" className="nav__logo" onClick={drawerOpen ? closeDrawer : undefined}>
                        <div className="nav__logo-name">
                            SY Private
                            <br />
                            <span className="nav__logo-tagline">Charters</span>
                        </div>
                    </a>

                    {/* Desktop links */}
                    {!isMobile && (
                        <div className="nav__links">
                            {LINKS.map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
                                    {link}
                                </a>
                            ))}
                            <NotchedBtn href="#contact" variant="filled-ivory">
                                Request a Quote
                            </NotchedBtn>
                        </div>
                    )}

                    {/* Mobile hamburger */}
                    {isMobile && (
                        <button className={`hamburger${drawerOpen ? " open" : ""}`} onClick={() => setDrawer((o) => !o)} aria-label={drawerOpen ? "Close menu" : "Open menu"}>
                            <span className="hamburger__bar" />
                            <span className="hamburger__bar" />
                            <span className="hamburger__bar" />
                        </button>
                    )}
                </div>
            </nav>

            {/* ── Mobile drawer ────────────────────────────────────── */}
            {isMobile && (
                <div className={`drawer${drawerOpen ? " open" : ""}`}>
                    <div className="drawer__accent-line" />

                    <nav>
                        <div className="drawer__section-label">Navigation</div>

                        {LINKS.map((link, i) => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="drawer-link" style={{ "--delay": `${0.1 + i * 0.06}s` }} onClick={closeDrawer}>
                                {link}
                            </a>
                        ))}

                        <div className="drawer__cta" style={{ "--delay": `${0.1 + LINKS.length * 0.06}s` }}>
                            <NotchedBtn href="#contact" variant="filled-ivory" onClick={closeDrawer}>
                                Request a Quote
                            </NotchedBtn>
                        </div>
                    </nav>

                    <div className="drawer__divider" />

                    <div>
                        <div className="drawer__contact-label">Get in Touch</div>
                        {CONTACT_INFO.map(({ label, href }) => (
                            <a key={label} href={href} className="drawer-contact-link" onClick={closeDrawer}>
                                {label}
                            </a>
                        ))}
                        <div className="drawer__location">Santa Ynez Valley, California</div>
                    </div>
                </div>
            )}
        </>
    )
}
