// import { Github } from 'lucide-react'
// import Link from "next/link"

// export function Footer() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
//         <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
//           <p className="text-center text-sm leading-loose md:text-left">
//             Built by{" "}
//             <a
//               href="#"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               AI Service
//             </a>
//             . The source code is available on{" "}
//             <a
//               href="#"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               GitHub
//             </a>
//             .
//           </p>
//         </div>
//         <div className="flex items-center gap-4">
//           <Link
//             href="/privacy"
//             className="text-sm font-medium underline underline-offset-4"
//           >
//             Privacy
//           </Link>
//           <Link
//             href="/terms"
//             className="text-sm font-medium underline underline-offset-4"
//           >
//             Terms
//           </Link>
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-2"
//           >
//             <Github className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   )
// }

import { Github } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              TorchBits
            </a>
            . The source code is available on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium underline underline-offset-4"
          >
            Terms
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
