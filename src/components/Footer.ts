import { currentYear } from "../shared/lib/fullYear";

export function Footer(): string {
	return `
  <footer>
        <div class="copyright">&copy ${currentYear}. all rights reserved</div>
        <div class="creator">
          <span>Build with <i class="bx bxs-heart bx-tada-hover"></i>by</span><b>Abil Khairi</b>
        </div>
      </footer>
  `;
}
