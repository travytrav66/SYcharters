import { useState } from "react"
import { SplitBlock, CenteredBlock, CardGridBlock, StatsBlock, PullQuoteBlock, MediaOverlayBlock, StepsBlock, ImageGridBlock, PillarBlock, CtaBlock } from "../components/blocks"
import NotchedBtn from "../components/shared/NotchedBtn"
import ArrowBtn from "../components/shared/ArrowBtn"
import {
    ClockIcon, VanIcon, RingsIcon, MapIcon,
    ChampagneIcon, StarIcon, ShieldCheckIcon, CalendarIcon,
    GroupIcon, PhoneIcon, HeartIcon, WineGlassIcon,
    RouteIcon, SparkleIcon, DriverIcon,
} from "../components/shared/PillarIcons"

/* ─────────────────────────────────────────────────────────────────
   Variant picker bar — sits above each block section
   ─────────────────────────────────────────────────────────────── */

const BAR = {
    display: "flex",
    alignItems: "center",
    gap: 0,
    padding: "9px 24px",
    background: "#0e0d0b",
    borderBottom: "1px solid rgba(198,168,103,0.18)",
    fontFamily: '"DM Sans", sans-serif',
}

const BLOCK_NAME = {
    color: "rgba(198,168,103,0.75)",
    fontSize: "10px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginRight: "auto",
}

const CONTROLS = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
}

const LABEL = {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "rgba(245,238,228,0.4)",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    cursor: "default",
    userSelect: "none",
}

const SELECT = {
    appearance: "none",
    WebkitAppearance: "none",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(198,168,103,0.22)",
    borderRadius: "3px",
    color: "rgba(245,238,228,0.88)",
    fontSize: "11px",
    padding: "3px 22px 3px 7px",
    cursor: "pointer",
    outline: "none",
    fontFamily: '"DM Sans", sans-serif',
    letterSpacing: "0.03em",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(198,168,103,0.5)'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 6px center",
}

function VariantBar({ name, controls, values, onChange }) {
    return (
        <div style={BAR}>
            <span style={BLOCK_NAME}>{name}</span>
            <div style={CONTROLS}>
                {controls.map((ctrl) => (
                    <label key={ctrl.key} style={LABEL}>
                        {ctrl.label}
                        <select style={SELECT} value={values[ctrl.key]} onChange={(e) => onChange(ctrl.key, e.target.value)}>
                            {ctrl.options.map((opt) => (
                                <option key={opt.value} value={opt.value} style={{ background: "#0e0d0b" }}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </label>
                ))}
            </div>
        </div>
    )
}

/* Merge variant values into a className string.
   Keys prefixed with _ are prop overrides, not CSS classes — skip them. */
function cls(values) {
    return Object.entries(values)
        .filter(([k, v]) => !k.startsWith("_") && v)
        .map(([, v]) => v)
        .join(" ")
}

/* ─────────────────────────────────────────────────────────────────
   Shared option sets
   ─────────────────────────────────────────────────────────────── */

const BG_OPTIONS = [
    { value: "bg-ivory", label: "Ivory" },
    { value: "bg-champagne", label: "Champagne" },
    { value: "bg-gold", label: "Gold" },
    { value: "bg-charcoal", label: "Charcoal" },
]

const PADDING_OPTIONS = [
    { value: "", label: "Default" },
    { value: "block--sm", label: "Small" },
]

const MEDIA_HEIGHT_OPTIONS = [
    { value: "", label: "Default" },
    { value: "block--sm", label: "Small" },
    { value: "block-media--full", label: "Full Height" },
]

const COLS_OPTIONS = [
    { value: "cols-2", label: "2 Columns" },
    { value: "cols-3", label: "3 Columns" },
    { value: "cols-4", label: "4 Columns" },
]

/* ─────────────────────────────────────────────────────────────────
   DESIGN SYSTEM
   ─────────────────────────────────────────────────────────────── */

const DS_SECTION = {
    padding: "56px var(--gutter, 40px)",
    borderBottom: "1px solid rgba(198,168,103,0.1)",
}

const DS_LABEL = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "10px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "rgba(198,168,103,0.55)",
    marginBottom: "32px",
}

const DS_TOKEN = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "10px",
    letterSpacing: "0.06em",
    color: "rgba(250,238,218,0.38)",
    marginTop: "10px",
}

const DS_VALUE = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "11px",
    color: "rgba(250,238,218,0.55)",
    marginTop: "3px",
    letterSpacing: "0.03em",
}

const COLORS = [
    { token: "--ivory", hex: "#FAF8F4", name: "Ivory", dark: false },
    { token: "--champagne", hex: "#F0E9D8", name: "Champagne", dark: false },
    { token: "--gold", hex: "#B5934A", name: "Gold", dark: false },
    { token: "--gold-light", hex: "#D4B878", name: "Gold Light", dark: false },
    { token: "--warm-light", hex: "#A89F94", name: "Warm Light", dark: false },
    { token: "--warm-mid", hex: "#7A7168", name: "Warm Mid", dark: true },
    { token: "--charcoal", hex: "#221E18", name: "Charcoal", dark: true },
]

const SERIF_SCALE = [
    { cls: "hl-hero", label: "Hero", size: "clamp(52–92px)", sample: "The valley,\nat golden hour" },
    { cls: "hl-xl", label: "XL", size: "clamp(40–80px)", sample: "Graceful arrivals,\nevery time" },
    { cls: "hl-lg", label: "Large", size: "clamp(40–72px)", sample: "Premium transportation" },
    { cls: "hl-md", label: "Medium", size: "clamp(36–62px)", sample: "Every detail, executed" },
    { cls: "hl-sm", label: "Small", size: "clamp(32–52px)", sample: "Born in the valley" },
]

const SANS_SCALE = [
    { cls: "body-lg", label: "Large", size: "17px · 300 · 1.8", sample: "Luxury transit van service connecting your guests seamlessly across every estate, vineyard, and venue on your itinerary." },
    { cls: "body-md", label: "Medium", size: "16px · 300 · 1.8", sample: "Luxury transit van service connecting your guests seamlessly across every estate, vineyard, and venue on your itinerary." },
    { cls: "body-sm", label: "Small", size: "14px · 300 · 1.75", sample: "Luxury transit van service connecting your guests seamlessly across every estate, vineyard, and venue on your itinerary." },
]

function DesignSystem() {
    return (
        <div style={{ background: "#0c0b09" }}>
            {/* ── Header ── */}
            <div style={{ padding: "28px var(--gutter, 40px)", borderBottom: "1px solid rgba(198,168,103,0.18)", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ ...DS_LABEL, margin: 0, color: "rgba(198,168,103,0.75)", fontSize: "11px" }}>Design System</span>
                <div style={{ flex: 1, height: "1px", background: "rgba(198,168,103,0.12)" }} />
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.25)", letterSpacing: "0.08em" }}>SY Private Charters</span>
            </div>

            {/* ══════════════════════════════════════════════════════════
          COLOUR PALETTE
          ══════════════════════════════════════════════════════════ */}
            <div style={{ ...DS_SECTION }}>
                <div style={DS_LABEL}>Colour Palette</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "12px" }}>
                    {COLORS.map(({ token, hex, name, dark }) => (
                        <div key={token}>
                            <div
                                style={{
                                    height: "80px",
                                    background: hex,
                                    borderRadius: "2px",
                                    border: dark ? "none" : "1px solid rgba(255,255,255,0.06)",
                                }}
                            />
                            <div style={{ ...DS_TOKEN, color: "rgba(198,168,103,0.55)" }}>{token}</div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "12px", color: "rgba(250,238,218,0.8)", marginTop: "2px", letterSpacing: "0.02em" }}>{name}</div>
                            <div style={DS_VALUE}>{hex}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
          BACKGROUNDS
          ══════════════════════════════════════════════════════════ */}
            <div style={{ ...DS_SECTION }}>
                <div style={DS_LABEL}>Section Backgrounds</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px" }}>
                    {["bg-ivory", "bg-champagne", "bg-gold", "bg-charcoal"].map((cls) => (
                        <div key={cls}>
                            <div className={cls} style={{ height: "56px", borderRadius: "2px", border: cls === "bg-ivory" || cls === "bg-champagne" ? "1px solid rgba(0,0,0,0.07)" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: cls === "bg-charcoal" ? "rgba(250,248,244,0.4)" : "rgba(34,30,24,0.4)" }}>Aa</span>
                            </div>
                            <div style={{ ...DS_TOKEN, color: "rgba(198,168,103,0.55)" }}>.{cls}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
          TYPOGRAPHY — SERIF
          ══════════════════════════════════════════════════════════ */}
            <div style={{ ...DS_SECTION }}>
                <div style={DS_LABEL}>
                    Typography — Serif <span style={{ color: "rgba(250,238,218,0.25)", fontWeight: 400 }}>/ Ws Paradose · 300</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                    {SERIF_SCALE.map(({ cls, label, size, sample }) => (
                        <div key={cls} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", alignItems: "start" }}>
                            <div style={{ paddingTop: "6px" }}>
                                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(198,168,103,0.6)" }}>.{cls}</div>
                                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.3)", marginTop: "5px", letterSpacing: "0.03em" }}>{size}</div>
                                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.25)", marginTop: "3px", letterSpacing: "0.03em" }}>line-height varies</div>
                            </div>
                            <div className={cls} style={{ color: "rgba(250,238,218,0.9)", whiteSpace: "pre-line" }}>
                                {sample}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
          TYPOGRAPHY — SANS
          ══════════════════════════════════════════════════════════ */}
            <div style={{ ...DS_SECTION }}>
                <div style={DS_LABEL}>
                    Typography — Sans <span style={{ color: "rgba(250,238,218,0.25)", fontWeight: 400 }}>/ DM Sans</span>
                </div>

                {/* Eyebrow */}
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", alignItems: "center", marginBottom: "40px" }}>
                    <div>
                        <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(198,168,103,0.6)" }}>.eyebrow</div>
                        <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.3)", marginTop: "5px", letterSpacing: "0.03em" }}>11px · 400 · 0.22em</div>
                    </div>
                    <div className="eyebrow" style={{ margin: 0 }}>
                        Santa Ynez Valley
                    </div>
                </div>

                {/* Body scale */}
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    {SANS_SCALE.map(({ cls, label, size, sample }) => (
                        <div key={cls} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", alignItems: "start" }}>
                            <div style={{ paddingTop: "4px" }}>
                                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(198,168,103,0.6)" }}>.{cls}</div>
                                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.3)", marginTop: "5px", letterSpacing: "0.03em" }}>{size}</div>
                            </div>
                            <p className={cls} style={{ color: "rgba(250,238,218,0.65)", maxWidth: "600px", margin: 0 }}>
                                {sample}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
          BUTTONS
          ══════════════════════════════════════════════════════════ */}
            <div style={{ ...DS_SECTION }}>
                <div style={DS_LABEL}>Buttons</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    {/* ArrowBtn */}
                    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", alignItems: "center" }}>
                        <div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(198,168,103,0.6)" }}>ArrowBtn</div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.3)", marginTop: "5px", letterSpacing: "0.03em" }}>text + arrow</div>
                        </div>
                        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "center" }}>
                            <div>
                                <ArrowBtn href="#" variant="gold">
                                    Request a Quote
                                </ArrowBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>gold</div>
                            </div>
                            <div>
                                <ArrowBtn href="#" variant="ivory">
                                    Request a Quote
                                </ArrowBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>ivory</div>
                            </div>
                            <div style={{ background: "var(--ivory)", padding: "10px 16px", borderRadius: "2px", display: "inline-block" }}>
                                <ArrowBtn href="#" variant="dark">
                                    Request a Quote
                                </ArrowBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px", color: "rgba(34,30,24,0.45)" }}>dark</div>
                            </div>
                        </div>
                    </div>

                    {/* NotchedBtn */}
                    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", alignItems: "center" }}>
                        <div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(198,168,103,0.6)" }}>NotchedBtn</div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", color: "rgba(250,238,218,0.3)", marginTop: "5px", letterSpacing: "0.03em" }}>chamfered corners</div>
                        </div>
                        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
                            <div>
                                <NotchedBtn href="#" variant="filled-gold">
                                    Request a Quote
                                </NotchedBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>filled-gold</div>
                            </div>
                            <div>
                                <NotchedBtn href="#" variant="filled-dark">
                                    Request a Quote
                                </NotchedBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>filled-dark</div>
                            </div>
                            <div style={{ "--bg": "#0c0b09" }}>
                                <NotchedBtn href="#" variant="filled-ivory">
                                    Request a Quote
                                </NotchedBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>filled-ivory</div>
                            </div>
                            <div style={{ "--bg": "#0c0b09" }}>
                                <NotchedBtn href="#" variant="outline-gold">
                                    Request a Quote
                                </NotchedBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>outline-gold</div>
                            </div>
                            <div style={{ background: "var(--ivory)", padding: "10px 16px", borderRadius: "2px", display: "inline-block", "--bg": "var(--ivory)" }}>
                                <NotchedBtn href="#" variant="outline-dark">
                                    Request a Quote
                                </NotchedBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px", color: "rgba(34,30,24,0.45)" }}>outline-dark</div>
                            </div>
                            <div style={{ "--bg": "#0c0b09" }}>
                                <NotchedBtn href="#" variant="outline-ivory">
                                    Request a Quote
                                </NotchedBtn>
                                <div style={{ ...DS_TOKEN, marginTop: "8px" }}>outline-ivory</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
          SPACING & LAYOUT
          ══════════════════════════════════════════════════════════ */}
            <div style={{ ...DS_SECTION, borderBottom: "none" }}>
                <div style={DS_LABEL}>Spacing &amp; Layout</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "32px" }}>
                    {[
                        { label: "--container", value: "1200px (→ 1340px @ 1400px)", desc: "Max content width" },
                        { label: "--container-sm", value: "860px", desc: "Narrow content width" },
                        { label: "--section-v", value: "clamp(5rem, 10vw, 9rem)", desc: "Vertical section padding" },
                        { label: "--gutter", value: "clamp(1.5rem, 5vw, 3rem)", desc: "Horizontal page margin" },
                        { label: "--notch", value: "10px", desc: "Button corner cut size" },
                    ].map(({ label, value, desc }) => (
                        <div key={label} style={{ borderLeft: "1px solid rgba(198,168,103,0.2)", paddingLeft: "16px" }}>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "11px", color: "rgba(198,168,103,0.75)", letterSpacing: "0.06em" }}>{label}</div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "13px", color: "rgba(250,238,218,0.8)", marginTop: "6px", letterSpacing: "0.02em" }}>{value}</div>
                            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "11px", color: "rgba(250,238,218,0.3)", marginTop: "4px" }}>{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────────────────────────────
   SY PRIVATE CHARTERS — LAYOUTS REFERENCE PAGE
   One instance per block type; variant pickers update className.
   ─────────────────────────────────────────────────────────────── */

export default function LayoutsPage() {
    const [media, setMedia] = useState({ align: "", width: "", padding: "" })
    const [centered, setCentered] = useState({ bg: "bg-ivory", width: "", padding: "" })
    const [split, setSplit] = useState({ bg: "bg-champagne", layout: "", padding: "", _mosaic: "" })
    const [cards, setCards] = useState({ bg: "bg-ivory", cols: "cols-3", _align: "" })
    const [stats, setStats] = useState({ bg: "bg-charcoal", cols: "cols-4" })
    const [quote, setQuote] = useState({ bg: "bg-charcoal" })
    const [steps, setSteps] = useState({ bg: "bg-ivory", layout: "", _count: "3" })
    const [imgGrid, setImgGrid] = useState({ bg: "bg-ivory", _layout: "mosaic", _align: "" })
    const [pillars, setPillars] = useState({ bg: "bg-charcoal", cols: "cols-4", _align: "left" })
    const [cta, setCta] = useState({ padding: "" })

    function updater(setter) {
        return (key, value) => setter((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <main>
            {/* ════════════════════════════════════════════════════════
          MEDIA OVERLAY BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="MediaOverlayBlock"
                controls={[
                    {
                        key: "align",
                        label: "Alignment",
                        options: [
                            { value: "", label: "Left (default)" },
                            { value: "align-center", label: "Center" },
                        ],
                    },
                    {
                        key: "width",
                        label: "Width",
                        options: [
                            { value: "", label: "Default" },
                            { value: "narrow", label: "Narrow" },
                        ],
                    },
                    { key: "padding", label: "Height", options: MEDIA_HEIGHT_OPTIONS },
                ]}
                values={media}
                onChange={updater(setMedia)}
            />
            <MediaOverlayBlock
                className={cls(media)}
                image="aerial vineyard — Santa Ynez Valley, golden hour, rolling hills"
                eyebrow="Santa Ynez Valley"
                headline={
                    <>
                        Premium Transportation
                        <br />
                        <em>for Every Celebration</em>
                    </>
                }
                body="Luxury transit van service connecting your guests seamlessly across every estate, vineyard, and venue on your itinerary."
                cta={{ label: "Request a Quote", href: "#" }}
            />

            {/* ════════════════════════════════════════════════════════
          CENTERED BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="CenteredBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    {
                        key: "width",
                        label: "Width",
                        options: [
                            { value: "", label: "Default" },
                            { value: "narrow", label: "Narrow" },
                            { value: "wide", label: "Wide" },
                        ],
                    },
                    { key: "padding", label: "Padding", options: PADDING_OPTIONS },
                ]}
                values={centered}
                onChange={updater(setCentered)}
            />
            <CenteredBlock
                className={cls(centered)}
                eyebrow="About Us"
                headline={
                    <>
                        An experience,
                        <br />
                        <em>not just a ride</em>
                    </>
                }
                body="SY Private Charters has spent years perfecting the art of wedding transportation in the Santa Ynez Valley. We know every estate, every road, and every venue — so your guests always arrive exactly as they should."
                cta={{ label: "Read Our Story", href: "#" }}
                divider={true}
            />

            {/* ════════════════════════════════════════════════════════
          SPLIT BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="SplitBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    {
                        key: "layout",
                        label: "Layout",
                        options: [
                            { value: "", label: "Image Left (default)" },
                            { value: "flip", label: "Image Right" },
                        ],
                    },
                    { key: "padding", label: "Padding", options: PADDING_OPTIONS },
                    {
                        key: "_mosaic",
                        label: "Media",
                        options: [
                            { value: "",               label: "Single Image — Tall (default)" },
                            { value: "single-short",   label: "Single Image — Short" },
                            { value: "feature-right",  label: "Feature Right — 2 stacked + 1 tall" },
                            { value: "feature-left",   label: "Feature Left — 1 tall + 2 stacked" },
                            { value: "2x2",            label: "2×2 Grid" },
                            { value: "top-row",        label: "Top Row — wide + 2 below" },
                        ],
                    },
                ]}
                values={split}
                onChange={updater(setSplit)}
            />
            <SplitBlock
                className={cls(split)}
                eyebrow="The Fleet"
                headline={
                    <>
                        Vehicles worthy of
                        <br />
                        <em>your celebration</em>
                    </>
                }
                body="Our immaculate transit vans are maintained to the highest standards — climate controlled, impeccably clean, and appointed with the quiet luxury that sets the right tone from the very first pickup."
                cta={{ label: "View the Fleet", href: "#" }}
                image="luxury transit van exterior — gleaming finish, vineyard backdrop"
                mosaic={split._mosaic || undefined}
                images={[
                    "transit van — polished exterior, vineyard backdrop",
                    "interior cabin — leather seats, ambient lighting",
                    "door detail — chrome handle, embossed logo",
                    "fleet row — four vans aligned at sunset",
                    "driver in uniform — presenting open door",
                ]}
                points={[
                    { title: "Custom routing", body: "We map every pickup and drop-off with precision — accounting for ceremony timing, cocktail hour gaps, and venue distances." },
                    { title: "Driver briefings", body: "Each driver receives a full event brief: names, locations, timing, and any special guest needs." },
                    { title: "Day-of coordination", body: "We stay in contact with your planner throughout the day to adapt in real time if anything shifts." },
                ]}
            />

            {/* ════════════════════════════════════════════════════════
          CARD GRID BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="CardGridBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    { key: "cols", label: "Columns", options: COLS_OPTIONS },
                    {
                        key: "_align",
                        label: "Alignment",
                        options: [
                            { value: "", label: "Left (default)" },
                            { value: "center", label: "Center" },
                        ],
                    },
                ]}
                values={cards}
                onChange={updater(setCards)}
            />
            <CardGridBlock
                className={cls(cards)}
                align={cards._align}
                eyebrow="What We Offer"
                headline={
                    <>
                        Everything your
                        <br />
                        <em>wedding day needs</em>
                    </>
                }
                cta={{ label: 'View All Services', href: '#services' }}
                cards={[
                    { image: "wedding guests boarding premium transit van — dressed guests, golden hour", title: "Guest Shuttles", body: "Seamless transfers between hotels, ceremony, cocktail hour, and reception — nobody drives, everybody celebrates." },
                    { image: "scenic vineyard road — Santa Ynez Valley, dusk, warm tones", title: "Venue Connectors", body: "Multi-stop routes across your celebration day, timed precisely to your event schedule." },
                    { image: "vineyard estate arrival — luxury van, grand entrance, afternoon light", title: "Winery Tours", body: "Curated transportation for wine country tastings, estate visits, and pre-wedding excursions." },
                    { image: "luxury transit van interior — leather seating, ambient lighting", title: "Wedding-Only Focus", body: "We focus exclusively on weddings and private events — no airport runs, no corporate contracts." },
                ]}
                hover={true}
            />

            {/* ════════════════════════════════════════════════════════
          STATS BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="StatsBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    { key: "cols", label: "Columns", options: COLS_OPTIONS },
                ]}
                values={stats}
                onChange={updater(setStats)}
            />
            <StatsBlock
                className={cls(stats)}
                eyebrow="By the Numbers"
                headline={
                    <>
                        A track record you
                        <br />
                        <em>can rely on</em>
                    </>
                }
                stats={[
                    { value: "500+", label: "Events Served", detail: "Since 2018" },
                    { value: "12k", label: "Guests Transported" },
                    { value: "98%", label: "On-Time Rate", detail: "Across all bookings" },
                    { value: "4.9★", label: "Average Rating", detail: "Based on 300+ reviews" },
                ]}
            />

            {/* ════════════════════════════════════════════════════════
          PULL QUOTE BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar name="PullQuoteBlock" controls={[{ key: "bg", label: "Background", options: BG_OPTIONS }]} values={quote} onChange={updater(setQuote)} />
            <PullQuoteBlock
                className={cls(quote)}
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

            {/* ════════════════════════════════════════════════════════
          STEPS BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="StepsBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    {
                        key: "layout",
                        label: "Layout",
                        options: [
                            { value: "", label: "Horizontal (default)" },
                            { value: "steps--vertical", label: "Vertical" },
                        ],
                    },
                    {
                        key: "_count",
                        label: "Steps",
                        options: [
                            { value: "3", label: "3 Steps" },
                            { value: "4", label: "4 Steps" },
                            { value: "5", label: "5 Steps" },
                        ],
                    },
                    { key: "padding", label: "Padding", options: PADDING_OPTIONS },
                ]}
                values={steps}
                onChange={updater(setSteps)}
            />
            <StepsBlock
                className={cls(steps)}
                eyebrow="How It Works"
                headline={<>Simple <em>from the start</em></>}
                steps={[
                    { title: "Share Your Vision", body: "Tell us about your wedding day — venues, timeline, guest count, and any special needs. The more we know, the better we plan." },
                    { title: "Plan Your Routes", body: "We map every pickup, drop-off, and transfer with precision to fit your day perfectly and keep everyone on schedule." },
                    { title: "Refine & Confirm", body: "Adjust departure times, headcounts, or special requests. We build a bespoke transportation plan around you." },
                    { title: "Meet Your Team", body: "Your dedicated driver team receives a full event brief — names, locations, timing, and any special guest considerations." },
                    { title: "Enjoy the Ride", body: "On your wedding day we handle everything. Your guests are guided, greeted, and delivered — beautifully." },
                ].slice(0, parseInt(steps._count, 10))}
            />

            {/* ════════════════════════════════════════════════════════
          IMAGE GRID BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="ImageGridBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    {
                        key: "_layout",
                        label: "Layout",
                        options: [
                            { value: "mosaic",        label: "Mosaic (5 imgs)" },
                            { value: "top-row",       label: "Top + Row (3 imgs)" },
                            { value: "equal-3",       label: "Equal 3 (3 imgs)" },
                            { value: "feature-left",  label: "Feature Left (3 imgs)" },
                            { value: "feature-right", label: "Feature Right (3 imgs)" },
                            { value: "2x2",           label: "2×2 Grid (4 imgs)" },
                            { value: "panoramic",     label: "Panoramic (4 imgs)" },
                        ],
                    },
                    {
                        key: "_align",
                        label: "Alignment",
                        options: [
                            { value: "", label: "Left (default)" },
                            { value: "center", label: "Center" },
                        ],
                    },
                    { key: "padding", label: "Padding", options: PADDING_OPTIONS },
                ]}
                values={imgGrid}
                onChange={updater(setImgGrid)}
            />
            <ImageGridBlock
                className={cls(imgGrid)}
                eyebrow="Visual Gallery"
                headline={<>Beautiful journeys,<br /><em>beautifully captured</em></>}
                align={imgGrid._align}
                cta={{ label: "View Full Gallery", href: "#gallery" }}
                layout={imgGrid._layout}
                images={[
                    "vineyard ceremony — golden hour, guests seated outdoors",
                    "luxury transit van — gleaming exterior, vineyard backdrop",
                    "bridal party at winery estate — champagne toast",
                    "guests boarding premium van — dressed guests, evening light",
                    "Santa Ynez scenic road — warm afternoon tones",
                ]}
            />

            {/* ════════════════════════════════════════════════════════
          PILLAR BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="PillarBlock"
                controls={[
                    { key: "bg", label: "Background", options: BG_OPTIONS },
                    { key: "cols", label: "Columns", options: COLS_OPTIONS },
                    {
                        key: "_align",
                        label: "Alignment",
                        options: [
                            { value: "left", label: "Left" },
                            { value: "center", label: "Center" },
                        ],
                    },
                    { key: "padding", label: "Padding", options: PADDING_OPTIONS },
                ]}
                values={pillars}
                onChange={updater(setPillars)}
            />
            {/* Icon reference grid */}
            <div style={{ background: "#0e0d0b", borderBottom: "1px solid rgba(198,168,103,0.1)", padding: "28px 24px" }}>
                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(198,168,103,0.45)", marginBottom: "20px" }}>
                    Available Icons
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))", gap: "4px" }}>
                    {[
                        { icon: <ClockIcon />,       label: "ClockIcon",       desc: "Punctual" },
                        { icon: <VanIcon />,         label: "VanIcon",         desc: "Fleet" },
                        { icon: <RingsIcon />,       label: "RingsIcon",       desc: "Wedding" },
                        { icon: <MapIcon />,         label: "MapIcon",         desc: "Local" },
                        { icon: <ChampagneIcon />,   label: "ChampagneIcon",   desc: "Celebration" },
                        { icon: <StarIcon />,        label: "StarIcon",        desc: "Excellence" },
                        { icon: <ShieldCheckIcon />, label: "ShieldCheckIcon", desc: "Trust" },
                        { icon: <CalendarIcon />,    label: "CalendarIcon",    desc: "Booking" },
                        { icon: <GroupIcon />,       label: "GroupIcon",       desc: "Guests" },
                        { icon: <PhoneIcon />,       label: "PhoneIcon",       desc: "Support" },
                        { icon: <HeartIcon />,       label: "HeartIcon",       desc: "Personal" },
                        { icon: <WineGlassIcon />,   label: "WineGlassIcon",   desc: "Winery" },
                        { icon: <RouteIcon />,       label: "RouteIcon",       desc: "Routing" },
                        { icon: <SparkleIcon />,     label: "SparkleIcon",     desc: "Luxury" },
                        { icon: <DriverIcon />,      label: "DriverIcon",      desc: "Chauffeur" },
                    ].map(({ icon, label, desc }) => (
                        <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "18px 8px 14px", background: "rgba(255,255,255,0.03)", borderRadius: "2px" }}>
                            <div style={{ color: "rgba(181,147,74,0.9)", width: 28, height: 28 }}>
                                {icon}
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontFamily: '"DM Sans", monospace', fontSize: "9px", color: "rgba(198,168,103,0.6)", letterSpacing: "0.04em", lineHeight: 1.4 }}>{label}</div>
                                <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "9px", color: "rgba(250,238,218,0.25)", letterSpacing: "0.04em", marginTop: "2px" }}>{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <PillarBlock
                className={cls(pillars)}
                align={pillars._align}
                pillars={[
                    { icon: <ClockIcon />, title: "Punctual & Reliable", body: "Every departure precisely on schedule. Your guests arrive when they should, without the stress of coordinating rides." },
                    { icon: <VanIcon />,   title: "Luxury Transit Vans", body: "Immaculate, climate-controlled vehicles appointed for comfort and elegance — befitting your celebration." },
                    { icon: <RingsIcon />, title: "Wedding Specialists",  body: "Years of dedicated wedding experience mean we anticipate your needs before you think to ask them." },
                    { icon: <MapIcon />,   title: "Local Expertise",      body: "Deep knowledge of Santa Ynez Valley's estates, wineries, and scenic routes — no GPS required." },
                ]}
            />

            {/* ════════════════════════════════════════════════════════
          CTA BLOCK
          ════════════════════════════════════════════════════════ */}
            <VariantBar
                name="CtaBlock"
                controls={[{ key: "padding", label: "Padding", options: PADDING_OPTIONS }]}
                values={cta}
                onChange={updater(setCta)}
            />
            <CtaBlock
                className={cls(cta)}
                image="private estate driveway — evening light, luxury van arriving"
                eyebrow="Let's Begin"
                headline={<>Transportation,<br /><em>Perfectly Handled</em></>}
                body="Ready to elevate your wedding day experience? Share your vision with us and receive a custom quote tailored to your celebration."
            />

            {/* ════════════════════════════════════════════════════════
          DESIGN SYSTEM
          ════════════════════════════════════════════════════════ */}

            <DesignSystem />
        </main>
    )
}
