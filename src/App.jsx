import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import { MediaOverlayBlock, PillarBlock, CardGridBlock, SplitBlock, StepsBlock, ImageGridBlock, PullQuoteBlock, CtaBlock } from "./components/blocks"
import { ClockIcon, VanIcon, RingsIcon, MapIcon } from "./components/shared/PillarIcons"

export default function App() {
    return (
        <>
            <Nav />

            {/* ── Hero ──────────────────────────────────────────────────── */}
            <MediaOverlayBlock
                className="block-media--full narrow"
                imageSrc={`${import.meta.env.BASE_URL}images/hero.jpg`}
                imageAlt="Luxury transit van at a Santa Ynez Valley vineyard estate"
                headline={
                    <>
                        Transportation for <em>Unforgettable</em> Celebrations
                    </>
                }
                body="Premium transit van service connecting your guests to every moment of your celebration — with grace, punctuality, and unmatched local expertise."
                cta={[
                    { label: "Request a Quote", href: "#contact" },
                    { label: "View Services", href: "#services" },
                ]}
            />

            {/* ── Trust Pillars ─────────────────────────────────────────── */}
            <PillarBlock
                className="bg-charcoal cols-4"
                pillars={[
                    {
                        icon: <ClockIcon />,
                        title: "Punctual & Reliable",
                        body: "Every departure precisely on schedule. Your guests arrive when they should, without the stress of coordinating rides.",
                    },
                    {
                        icon: <VanIcon />,
                        title: "Luxury Transit Vans",
                        body: "Immaculate, climate-controlled vehicles appointed for comfort and elegance — befitting your celebration.",
                    },
                    {
                        icon: <RingsIcon />,
                        title: "Wedding Specialists",
                        body: "Years of dedicated wedding experience mean we anticipate your needs before you think to ask them.",
                    },
                    {
                        icon: <MapIcon />,
                        title: "Local Expertise",
                        body: "Deep knowledge of Santa Ynez Valley's estates, wineries, and scenic routes — no GPS required.",
                    },
                ]}
            />

            {/* ── Services ──────────────────────────────────────────────── */}
            <div id="services">
                <CardGridBlock
                    className="bg-ivory cols-3"
                    eyebrow="Our Services"
                    headline={
                        <>
                            Transportation for
                            <br />
                            <em>every occasion</em>
                        </>
                    }
                    cta={{ label: "Request a Quote", href: "#contact" }}
                    cards={[
                        {
                            image: "wedding guests boarding premium transit van — dressed guests, golden light",
                            imageSrc: `${import.meta.env.BASE_URL}images/hero.jpg`,
                            title: "Wedding Guest Transportation",
                            body: "Seamless, elegant point-to-point service for your guests across every estate, hotel, and vineyard on your itinerary. We handle the logistics — you focus on the moments.",
                        },
                        {
                            image: "scenic vineyard road — Santa Ynez Valley, dusk, warm tones",
                            imageSrc: `${import.meta.env.BASE_URL}images/hero.jpg`,
                            title: "Shuttle Between Venues",
                            body: "Ceremony to cocktail hour to reception — we keep your entire celebration connected with perfectly timed shuttles that move with the flow of your day.",
                        },
                        {
                            image: "vineyard estate arrival — luxury van pulling up to grand entrance, afternoon light",
                            imageSrc: `${import.meta.env.BASE_URL}images/hero.jpg`,
                            title: "Winery & Estate Transport",
                            body: "Curated transportation for wine country events, tasting tours, and private estate gatherings throughout the Santa Ynez Valley.",
                        },
                    ]}
                    hover={true}
                />
            </div>

            {/* ── The Experience ────────────────────────────────────────── */}
            <SplitBlock
                className="bg-champagne"
                eyebrow="The Experience"
                headline={
                    <>
                        Your guests deserve
                        <br />
                        to arrive <em>at ease</em>
                    </>
                }
                image="guests arriving at vineyard estate — premium van, warm afternoon light"
                imageSrc={`${import.meta.env.BASE_URL}images/hero.jpg`}
                cta={{ label: "Learn More", href: "#contact" }}
                points={[
                    {
                        title: "Stress-free coordination",
                        body: "We manage every shuttle detail in advance — timing, routes, and contingencies — so nothing falls through on your day.",
                    },
                    {
                        title: "Seamless logistics",
                        body: "Real-time communication between our drivers ensures the whole party moves as one, however complex your itinerary.",
                    },
                    {
                        title: "Elevated comfort",
                        body: "Premium interiors, thoughtful service, and vehicles that make the ride itself a part of the experience.",
                    },
                ]}
            />

            {/* ── How It Works ──────────────────────────────────────────── */}
            <StepsBlock
                className="bg-ivory"
                eyebrow="How It Works"
                headline={
                    <>
                        Three <em>effortless</em> steps
                    </>
                }
                steps={[
                    {
                        title: "Plan Your Routes",
                        body: "Share your venues, timeline, and guest list. We'll map every pickup, dropoff, and transfer to fit your day perfectly.",
                    },
                    {
                        title: "Customize Your Schedule",
                        body: "Refine departure times, adjust headcounts, add special requests. We build a bespoke transportation plan around you.",
                    },
                    {
                        title: "Enjoy the Ride",
                        body: "On your wedding day, we take care of everything. Your guests are guided, greeted, and delivered — beautifully.",
                    },
                ]}
            />

            {/* ── Gallery ───────────────────────────────────────────────── */}
            <div id="gallery">
                <ImageGridBlock
                    className="bg-champagne"
                    eyebrow="Visual Gallery"
                    headline={
                        <>
                            Beautiful journeys,
                            <br />
                            <em>beautifully captured</em>
                        </>
                    }
                    layout="mosaic"
                    images={[
                        "vineyard ceremony — golden hour, guests seated outdoors",
                        "luxury transit van — gleaming exterior, vineyard backdrop",
                        "bridal party at winery estate — champagne toast",
                        "guests boarding premium van — dressed guests, evening light",
                        "Santa Ynez scenic road — warm afternoon tones",
                    ]}
                    srcs={Array(5).fill(`${import.meta.env.BASE_URL}images/hero.jpg`)}
                />
            </div>

            {/* ── Testimonials ──────────────────────────────────────────── */}
            <div id="testimonials">
                <PullQuoteBlock
                    className="bg-charcoal"
                    quotes={[
                        {
                            quote: "From the first consultation to the last shuttle of the night, SY Private Charters made us feel like royalty. Our guests couldn't stop talking about how smooth everything was.",
                            attribution: "Emma & James Whitfield",
                            detail: "Sunstone Winery Wedding, October 2024",
                        },
                        {
                            quote: "We had 120 guests moving between three venues in the Santa Ynez hills. I was terrified about logistics. SY handled every single detail flawlessly — and the vans were gorgeous.",
                            attribution: "Sofia & Marcus Chen",
                            detail: "Gainey Vineyard Estate, June 2024",
                        },
                        {
                            quote: "The team was professional, prompt, and incredibly kind. Our elderly guests felt so cared for. If you're planning a wine country wedding, this service is non-negotiable.",
                            attribution: "Natalie & Patrick Moore",
                            detail: "Skyview Ranch, September 2024",
                        },
                    ]}
                />
            </div>

            {/* ── CTA / Contact ─────────────────────────────────────────── */}
            <CtaBlock
                image="private estate driveway — evening light, luxury van arriving"
                imageSrc={`${import.meta.env.BASE_URL}images/hero.jpg`}
                eyebrow="Let's Begin"
                headline={<>Transportation,<br /><em>Perfectly Handled</em></>}
                body="Ready to elevate your wedding day experience? Share your vision with us and receive a custom quote tailored to your celebration."
            />

            <Footer />
        </>
    )
}
