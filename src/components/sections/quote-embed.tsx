import Script from "next/script";

/* Live GoHighLevel (LeadConnector) quote form embed — same HighLevel account
   as the chat + review widgets. The companion form_embed.js listens to the
   iframe via postMessage and auto-resizes its height; without it the frame
   renders at a fixed height. Submissions land in the "APX Website Quote Form"
   in the dashboard. Replaced the old mock form (submit just flipped useState;
   nothing was sent) — see git history pre-2026-06-08 if it's ever needed. */
export function QuoteEmbed() {
  return (
    <>
      <iframe
        src="https://links.apxcarsolutions.com/widget/form/Jg8U2kKRdfSkiy7ZQP2f"
        id="inline-Jg8U2kKRdfSkiy7ZQP2f"
        title="APX Website Quote Form"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="APX Website Quote Form"
        data-height="undefined"
        data-layout-iframe-id="inline-Jg8U2kKRdfSkiy7ZQP2f"
        data-form-id="Jg8U2kKRdfSkiy7ZQP2f"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
      />
      <Script src="https://links.apxcarsolutions.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
