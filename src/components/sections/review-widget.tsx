import Script from "next/script";

/* LeadConnector Reputation Hub embed (same HighLevel account as the chat
   widget) — reviews stay live-synced with Google. The companion script
   listens to the iframe via postMessage and auto-resizes its height;
   without it the frame renders clipped. Default widgetId is the compact
   embed used in every Testimonials section; /reviews passes its own
   larger "section" widget id. */
export function ReviewWidget({
  widgetId = "6a177b92190e7ebd3050283c",
}: {
  widgetId?: string;
}) {
  return (
    <>
      <Script
        src="https://reputationhub.site/reputation/assets/review-widget.js"
        strategy="afterInteractive"
      />
      <iframe
        className="lc_reviews_widget"
        src={`https://reputationhub.site/reputation/widgets/review_widget/bWI1Kx8fA1z3T2d3IapU?widgetId=${widgetId}`}
        title="APX Mobile Detailing Google reviews"
        frameBorder="0"
        scrolling="no"
        style={{ minWidth: "100%", width: "100%" }}
      />
    </>
  );
}
