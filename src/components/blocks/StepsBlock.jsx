import useReveal from "../../hooks/useReveal"

/**
 * StepsBlock — numbered steps section.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-gold | bg-charcoal | bg-dark
 *   steps--vertical  — stacked list with vertical connector (default: horizontal 3-col)
 *   block--sm | block--lg
 *
 * @param {string}  className  modifier classes
 * @param {string}  eyebrow    small caps label
 * @param {node}    headline   section heading
 * @param {array}   steps      [{ title, body }] — numbers auto-generated
 */
export default function StepsBlock({ className = "bg-ivory", eyebrow, headline, steps = [] }) {
    const [ref, vis] = useReveal()

    return (
        <section className={`block block-steps ${className}`}>
            <div className="container">
                <div ref={ref}>
                    {(eyebrow || headline) && (
                        <div className={`block-hd block-hd--center reveal${vis ? " is-visible" : ""}`}>
                            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
                            {headline && <h2 className="block-hd__headline">{headline}</h2>}
                        </div>
                    )}

                    <div className="steps-grid" style={{ "--steps-n": steps.length }}>
                        <div className="steps-grid__connector" />
                        {steps.map((s, i) => (
                            <div key={i} className={`step-item reveal reveal--quick${vis ? " is-visible" : ""}`} style={{ "--delay": `${i * 0.18}s` }}>
                                <div className="step-item__circle">{String(i + 1).padStart(2, "0")}</div>
                                <div className="step-item__body">
                                    <h3 className="step-item__title">{s.title}</h3>
                                    <p className="step-item__text body-md">{s.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
