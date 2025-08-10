import { currentYear } from "../shared/lib/fullYear";

export function Header(): string {
	return `
   <header>
        <div class="info">
          <div class="user">
            <div class="name">
              <h1>abil khairi</h1>
            </div>
            <div class="position">
              <h1>UI/UX Enthusiast</h1>
            </div>
          </div>
          <div class="address">
            <a
              href="https://www.google.com/search?q=aceh%2C+indonesia&sca_esv=3ae0d3a6a0108140&rlz=1C1ONGR_enID1005ID1006&sxsrf=ACQVn08anYVgbPwG06TXR0JZJs36U5x81w%3A1709967181784&ei=TQfsZd2cL4iUseMP2bOf8A0&ved=0ahUKEwid98mTzOaEAxUISmwGHdnZB94Q4dUDCBA&uact=5&oq=aceh%2C+indonesia&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2FjZWgsIGluZG9uZXNpYTIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIQEAAYgAQYgAQYigUYQxiwAzIQEAAYgAQYgAQYigUYQxiwAzIQEAAYgAQYgAQYigUYQxiwAzIQEAAYgAQYgAQYigUYQxiwAzIOEAAY5AIY1gQYsAPYAQEyDhAAGOQCGNYEGLAD2AEBMg4QABjkAhjWBBiwA9gBATIWEC4YgAQYgAQYigUYQxjIAxiwA9gBAjIWEC4YgAQYgAQYigUYQxjIAxiwA9gBAjIWEC4YgAQYgAQYigUYQxjIAxiwA9gBAjIWEC4YgAQYgAQYigUYQxjIAxiwA9gBAkjRCVCVBViVBXABeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgGgAuoBmAMAiAYBkAYTugYGCAEQARgJugYGCAIQARgIkgcDMi0xoAcA&sclient=gws-wiz-serp"
              target="_blank"
              ><h4>(aceh, indonesia)</h4></a
            >
          </div>
        </div>

        <div class="menu">
         <nav>${currentYear}</nav>
          <a href="#about-me" class="scroll-down"><i class="bx bx-right-arrow-alt"></i>scroll down</a>
        </div>
      </header>
  `;
}
