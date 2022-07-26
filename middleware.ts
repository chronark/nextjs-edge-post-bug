// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const res = await fetch("https://edge.requestcatcher.com/test", {
        method: "POST",
        body: "ABC"
    })
    console.log(await res.text())

    return NextResponse.next()
}
