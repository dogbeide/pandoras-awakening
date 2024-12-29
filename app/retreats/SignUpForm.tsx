import BtnCTA from "../components/buttons/btn-cta";

export default function SignUpForm() {

  return (
    <div id="mc_embed_shell">
  <link
    href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
    rel="stylesheet"
    type="text/css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n        #mc_embed_signup{ false;clear:left; font:14px Helvetica,Arial,sans-serif; max-width: 300px;}\n        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
    }}
  />
  <div id="mc_embed_signup">
    <form
      action="https://pandorasawakening.us20.list-manage.com/subscribe/post?u=981d79e2f219fc2bc4626c9b0&id=dfe3589069&f_id=004223e7f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
    >
      <div id="mc_embed_signup_scroll">
        {/* <div className="indicates-required">
          <span className="asterisk">*</span> indicates required
        </div> */}
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required
            defaultValue=""
          />
        </div>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-5000px" }}
        >
          {/* real people should not fill this in and expect good things - do not
          remove this or risk form bot signups */}
          <input
            type="text"
            name="b_981d79e2f219fc2bc4626c9b0_dfe3589069"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="optionalParent">
          <div className="grid grid-cols-4">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button py-2 bg-pandoras-orange col-span-3"
              defaultValue="Subscribe"
            />
            <p style={{ margin: "0px auto" }} className="col-span-1">
              <a
                href="http://eepurl.com/i6UJU-"
                title="Mailchimp - email marketing made easy and fun"
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "transparent",
                    borderRadius: 4
                  }}
                >
                  <img
                    className="refferal_badge"
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    style={{
                      width: 61.69,
                      height: 40,
                      display: "flex",
                      padding: "2px 0px",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}