import { useState } from "react"
import useReveal from "../../hooks/useReveal"

/**
 * PullQuoteBlock — centered pull quote with optional dot-navigation slider.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-charcoal | bg-dark
 *   block--sm
 *
 * @param {string}   className    modifier classes
 * @param {array}    quotes       [{ quote, attribution, detail }] — multiple enables slider
 */
export default function PullQuoteBlock({ className = "bg-charcoal", quotes = [] }) {
    const [ref, vis] = useReveal()
    const [active, setActive] = useState(0)

    if (!quotes.length) return null

    const current = quotes[active]
    const multi = quotes.length > 1

    return (
        <section className={`block block-quote ${className}`}>
            <div className="container">
                <div ref={ref} className={`quote__inner reveal${vis ? " is-visible" : ""}`}>
                    <div className="quote__mark">”</div>

                    {quotes.map((q, i) => (
                        <div key={i} className={`quote__slide${i === active ? " active" : ""}`}>
                            <p className="quote__text">{q.quote}</p>
                            <div className="quote__rule" />
                            {q.attribution && <div className="quote__attribution">{q.attribution}</div>}
                            {q.detail && <div className="quote__detail">{q.detail}</div>}
                        </div>
                    ))}

                    {multi && (
                        <div className="quote-dots">
                            {quotes.map((_, i) => (
                                <button key={i} className={`quote-dot${i === active ? " active" : ""}`} onClick={() => setActive(i)} aria-label={`Quote ${i + 1}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
