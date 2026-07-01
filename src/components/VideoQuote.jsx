import { CONTENT } from '../content'

/*
 * Giant quote where a running video plays *through* the letters (nickbare-style).
 * Technique: a full-bleed <video> (with an image poster fallback) sits behind a
 * cream SVG overlay. The overlay uses an SVG mask whose text is knocked out, so
 * the cream covers everything EXCEPT the letters — revealing the video through
 * the type. Each line stretches to full width (lengthAdjust) for that bold,
 * justified block look.
 */
export default function VideoQuote() {
  const { lines, video, poster } = CONTENT.quote

  // y-baseline per line inside the 100 x 48 viewBox.
  const lineY = [15, 30, 45]

  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-paper">
      {/* Container ratio matches the viewBox (100/48) so `slice` fits exactly —
          no line gets cropped off the top or bottom. */}
      <div className="relative aspect-[100/48] w-full">
        {/* ---- Media behind the text ---- */}
        {/* Poster image = fallback if the video is missing */}
        <img src={poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        {/* REPLACE: /public/running.mp4 with a real running clip */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* ---- Cream overlay with the quote knocked out ---- */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 48"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <mask id="quoteMask">
              {/* white = keep (stays cream), black = cut (shows video) */}
              <rect width="100" height="48" fill="white" />
              {lines.map((line, i) => (
                <text
                  key={i}
                  x="50"
                  y={lineY[i]}
                  textAnchor="middle"
                  textLength="94"
                  lengthAdjust="spacingAndGlyphs"
                  fontFamily="Anton, sans-serif"
                  fontSize="14"
                  fill="black"
                >
                  {i === 0 ? `“${line}` : i === lines.length - 1 ? `${line}”` : line}
                </text>
              ))}
            </mask>
          </defs>
          <rect width="100" height="48" fill="#F4EFDB" mask="url(#quoteMask)" />
        </svg>

        {/* Accessible text for screen readers (visual comes from the SVG) */}
        <span className="sr-only">{`“${lines.join(' ')}”`}</span>
      </div>
    </section>
  )
}
