import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 774"><defs><style>.cls-1{fill:#948cff;}.cls-2{fill:#33177c;stroke:#231f20;stroke-miterlimit:10;}.cls-3{fill:#01c8ff;}.cls-4{fill:#07aaff;}.cls-4,.cls-5{fill-rule:evenodd;}.cls-5{fill:#1751ff;}.cls-6{fill:#baa7ff;}.cls-7{font-size:12px;font-family:MyriadPro-Regular, Myriad Pro;}</style></defs><rect x="0.5" y="0.5" width="773" height="773"/>
                <path d="M773,1V773H1V1H773m1-1H0V774H774V0Z"/><path class="cls-1" d="M561.55,302.52H401.36c57.38,92.66,132.1,203.05,199.76,270.82,12.74-34.81,23.12-87.33,29-165.23C605.74,372.51,582.5,336.34,561.55,302.52Z"/><path class="cls-2" d="M235,302.52c.27.44.53.87.81,1.31,94.35,152.21,235,351.33,314.42,331.28,17.89-4.51,36-21,50.93-61.77-67.66-67.77-142.38-178.16-199.76-270.82Z"/><polygon class="cls-3" points="465.76 138.01 633.64 137.49 634.84 302.52 561.55 302.52 465.76 138.01"/><polygon class="cls-4" points="401.36 302.52 561.55 302.52 465.76 138.01 305.56 138.01 401.36 302.52"/><polygon class="cls-5" points="305.56 138.01 401.36 302.52 234.96 302.52 139.16 138.01 305.56 138.01"/><path class="cls-6" d="M630.11,408.11c2.34-31,4-66.05,4.73-105.59H561.55C582.5,336.34,605.74,372.51,630.11,408.11Z"/><text class="cls-7" transform="translate(72.13 607.33)">it </text>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
